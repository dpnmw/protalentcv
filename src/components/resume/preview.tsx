import type z from "zod";

import { Trans } from "@lingui/react/macro";
import { IconContext, type IconProps, WarningIcon } from "@phosphor-icons/react";
import { type RefObject, useMemo, useRef, useState } from "react";
import { match } from "ts-pattern";
import { useResizeObserver } from "usehooks-ts";

import type { pageLayoutSchema } from "@/schema/resume/data";
import type { Template } from "@/schema/templates";

import { pageDimensionsAsPixels } from "@/schema/page";
import { sanitizeCss } from "@/utils/sanitize";
import { cn } from "@/utils/style";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useCSSVariables } from "./hooks/use-css-variables";
import { useWebfonts } from "./hooks/use-webfonts";
import styles from "./preview.module.css";
import { useResumeStore } from "./store/resume";
import { MonetTemplate } from "./templates/monet";
import { RenoirTemplate } from "./templates/renoir";
import { DegasTemplate } from "./templates/degas";
import { PissarroTemplate } from "./templates/pissarro";
import { SisleyTemplate } from "./templates/sisley";
import { CassattTemplate } from "./templates/cassatt";
import { MorisotTemplate } from "./templates/morisot";
import { CezanneTemplate } from "./templates/cezanne";
import { SeuratTemplate } from "./templates/seurat";
import { GuillauminTemplate } from "./templates/guillaumin";
import { BazilleTemplate } from "./templates/bazille";
import { FantinTemplate } from "./templates/fantin";
import { SignacTemplate } from "./templates/signac";

export type ExtendedIconProps = IconProps & {
  hidden?: boolean;
};

const CSS_RULE_SPLIT_PATTERN = /\n(?=\s*[.#a-zA-Z])/;
const CSS_SELECTOR_PATTERN = /^([^{]+)(\{)/;

function getTemplateComponent(template: Template) {
  return match(template)
    .with("monet", () => MonetTemplate)
    .with("renoir", () => RenoirTemplate)
    .with("degas", () => DegasTemplate)
    .with("pissarro", () => PissarroTemplate)
    .with("sisley", () => SisleyTemplate)
    .with("cassatt", () => CassattTemplate)
    .with("morisot", () => MorisotTemplate)
    .with("cezanne", () => CezanneTemplate)
    .with("seurat", () => SeuratTemplate)
    .with("guillaumin", () => GuillauminTemplate)
    .with("bazille", () => BazilleTemplate)
    .with("fantin", () => FantinTemplate)
    .with("signac", () => SignacTemplate)
    .exhaustive();
}

type Props = React.ComponentProps<"div"> & {
  pageClassName?: string;
  showPageNumbers?: boolean;
};

export const ResumePreview = ({ showPageNumbers = false, pageClassName, className, ...props }: Props) => {
  const picture = useResumeStore((state) => state.resume.data.picture);
  const metadata = useResumeStore((state) => state.resume.data.metadata);

  useWebfonts(metadata.typography);
  const style = useCSSVariables({ picture, metadata });

  const iconProps = useMemo<ExtendedIconProps>(() => {
    return {
      weight: "regular",
      hidden: metadata.page.hideIcons,
      color: "var(--page-primary-color)",
      size: metadata.typography.body.fontSize * 1.5,
    } satisfies ExtendedIconProps;
  }, [metadata.typography.body.fontSize, metadata.page.hideIcons]);

  const scopedCSS = useMemo(() => {
    if (!metadata.css.enabled || !metadata.css.value.trim()) return null;

    const sanitizedCss = sanitizeCss(metadata.css.value);

    const scoped = sanitizedCss
      .split(CSS_RULE_SPLIT_PATTERN)
      .map((rule) => {
        const trimmed = rule.trim();
        if (!trimmed || trimmed.startsWith("@")) return trimmed;

        return trimmed.replace(CSS_SELECTOR_PATTERN, (_match, selectors, brace) => {
          const prefixed = selectors
            .split(",")
            .map((selector: string) => `.resume-preview-container ${selector.trim()} `)
            .join(", ");
          return `${prefixed}${brace}`;
        });
      })
      .join("\n");

    return scoped;
  }, [metadata.css.enabled, metadata.css.value]);

  return (
    <IconContext.Provider value={iconProps}>
      {scopedCSS && <style dangerouslySetInnerHTML={{ __html: scopedCSS }} />}

      <div style={style} className={cn("resume-preview-container", className)} {...props}>
        {metadata.layout.pages.map((pageLayout, pageIndex) => (
          <PageContainer
            key={pageIndex}
            pageIndex={pageIndex}
            pageLayout={pageLayout}
            pageClassName={pageClassName}
            showPageNumbers={showPageNumbers}
          />
        ))}
      </div>
    </IconContext.Provider>
  );
};

type PageContainerProps = {
  pageIndex: number;
  pageLayout: z.infer<typeof pageLayoutSchema>;
  pageClassName?: string;
  showPageNumbers?: boolean;
};

function PageContainer({ pageIndex, pageLayout, pageClassName, showPageNumbers = false }: PageContainerProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState<number>(0);

  const metadata = useResumeStore((state) => state.resume.data.metadata);

  const pageNumber = useMemo(() => pageIndex + 1, [pageIndex]);
  const maxPageHeight = useMemo(() => pageDimensionsAsPixels[metadata.page.format].height, [metadata.page.format]);
  const totalNumberOfPages = useMemo(() => metadata.layout.pages.length, [metadata.layout.pages]);
  const TemplateComponent = useMemo(() => getTemplateComponent(metadata.template), [metadata.template]);

  useResizeObserver({
    ref: pageRef as RefObject<HTMLDivElement>,
    onResize: (size) => {
      if (!size.height) return;
      setPageHeight(size.height);
    },
  });

  return (
    <div data-page-index={pageIndex} className="relative">
      {showPageNumbers && totalNumberOfPages > 1 && (
        <div className="absolute inset-s-0 -top-6 print:hidden">
          <span className="text-xs font-medium text-foreground">
            <Trans>
              Page {pageNumber} of {totalNumberOfPages}
            </Trans>
          </span>
        </div>
      )}

      <div ref={pageRef} className={cn(`page page-${pageIndex}`, styles.page, pageClassName)}>
        <TemplateComponent pageIndex={pageIndex} pageLayout={pageLayout} />
      </div>

      {metadata.page.format !== "free-form" && pageHeight > maxPageHeight && (
        <div className="absolute inset-s-0 top-full mt-4 print:hidden">
          <Alert className="max-w-sm text-yellow-600">
            <WarningIcon color="currentColor" />
            <AlertTitle>
              <Trans>
                The content is too tall for this page, this may cause undesirable results when exporting to PDF.
              </Trans>
            </AlertTitle>
            <AlertDescription className="text-xs">
              <Trans>Try reducing content, adjusting font size, or switching to a more compact template.</Trans>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
