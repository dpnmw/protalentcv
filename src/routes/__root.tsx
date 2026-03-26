import "@fontsource-variable/ibm-plex-sans";
import "@fontsource/dm-serif-display";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "@phosphor-icons/web/regular/style.css";
import type { QueryClient } from "@tanstack/react-query";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { IconContext } from "@phosphor-icons/react";
import { createRootRouteWithContext, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";

import type { AuthSession } from "@/integrations/auth/types";
import type { FeatureFlags, PlanConfig } from "@/integrations/orpc/services/flags";

import { CommandPalette } from "@/components/command-palette";
import { BreakpointIndicator } from "@/components/layout/breakpoint-indicator";
import { ThemeProvider } from "@/components/theme/provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DialogManager } from "@/dialogs/manager";
import { ConfirmDialogProvider } from "@/hooks/use-confirm";
import { PromptDialogProvider } from "@/hooks/use-prompt";
import { getSession } from "@/integrations/auth/functions";
import { client, type orpc } from "@/integrations/orpc/client";
import { getLocale, isRTL, type Locale, loadLocale } from "@/utils/locale";
import { getTheme, type Theme } from "@/utils/theme";

import appCss from "../styles/globals.css?url";

type RouterContext = {
  theme: Theme;
  locale: Locale;
  orpc: typeof orpc;
  queryClient: QueryClient;
  session: AuthSession | null;
  flags: FeatureFlags;
  planConfig: PlanConfig;
};

import { BrandIcon } from "@/components/ui/brand-icon";
import { branding } from "@/config/branding";

const appName = branding.appName;
const tagline = branding.tagline;
const title = `${appName} — ${tagline}`;
const description = branding.description;

await loadLocale(await getLocale());

export const Route = createRootRouteWithContext<RouterContext>()({
  shellComponent: RootDocument,
  errorComponent: RootErrorScreen,
  head: () => {
    const appUrl = branding.appUrl;

    return {
      links: [
        { rel: "stylesheet", href: appCss },
        // Google Material Symbols
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" },
        // Icons
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "128x128" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml", sizes: "256x256 any" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon-180x180.png", type: "image/png", sizes: "180x180 any" },
        // Manifest
        { rel: "manifest", href: "/manifest.webmanifest", crossOrigin: "use-credentials" },
      ],
      meta: [
        { title },
        { charSet: "UTF-8" },
        { name: "description", content: description },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // Twitter Tags
        { property: "twitter:image", content: `${appUrl}/opengraph/banner.jpg` },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: title },
        { property: "twitter:description", content: description },
        // OpenGraph Tags
        { property: "og:image", content: `${appUrl}/opengraph/banner.jpg` },
        { property: "og:site_name", content: appName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: appUrl },
      ],
      // Register service worker via script tag
      scripts: [
        {
          children: `
						if('serviceWorker' in navigator) {
							window.addEventListener('load', () => {
								navigator.serviceWorker.register('/sw.js', { scope: '/' })
							})
						}
					`,
        },
      ],
    };
  },
  beforeLoad: async () => {
    const [theme, locale, session, flags, planConfig] = await Promise.all([
      getTheme(),
      getLocale(),
      getSession(),
      client.flags.get(),
      client.flags.getConfig(),
    ]);

    return { theme, locale, session, flags, planConfig };
  },
});

function RootErrorScreen() {
  const router = useRouter();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background px-4">
      <BrandIcon className="h-10 w-auto" />
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-base font-medium text-foreground">An error occurred while loading the page.</p>
        <p className="text-sm text-muted-foreground">This may be a temporary issue. Please try again.</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => router.history.back()}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Go Back
        </button>
        <button
          onClick={() => router.invalidate()}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};

function RootDocument({ children }: Props) {
  const { theme, locale } = Route.useRouteContext();
  const dir = isRTL(locale) ? "rtl" : "ltr";

  return (
    <html suppressHydrationWarning dir={dir} lang={locale} className={theme}>
      <head>
        <HeadContent />
      </head>

      <body>
        <MotionConfig reducedMotion="user">
          <I18nProvider i18n={i18n}>
            <IconContext.Provider value={{ size: 16, weight: "regular" }}>
              <ThemeProvider theme={theme}>
                <TooltipProvider>
                  <ConfirmDialogProvider>
                    <PromptDialogProvider>
                      {children}

                      <DialogManager />
                      <CommandPalette />
                      <Toaster richColors position="bottom-right" />

                      {import.meta.env.DEV && <BreakpointIndicator />}
                    </PromptDialogProvider>
                  </ConfirmDialogProvider>
                </TooltipProvider>
              </ThemeProvider>
            </IconContext.Provider>
          </I18nProvider>
        </MotionConfig>

        <Scripts />
      </body>
    </html>
  );
}
