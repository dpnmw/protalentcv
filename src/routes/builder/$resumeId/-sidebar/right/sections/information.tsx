import { Trans } from "@lingui/react/macro";

import { Button } from "@/components/ui/button";

import { SectionBase } from "../shared/section-base";

export function InformationSectionBuilder() {
  return (
    <SectionBase type="information" className="space-y-4">
      <div className="space-y-2 rounded-md border bg-sky-600 p-5 text-white dark:bg-sky-700">
        <h4 className="font-medium tracking-tight">
          <Trans>About ProTalent CV</Trans>
        </h4>

        <div className="space-y-2 text-xs leading-normal">
          <p>
            <Trans>
              ProTalent CV is a free CV and resume builder by DPN Media Works. Build, customize, and
              share polished resumes in minutes.
            </Trans>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-0.5">
        <Button
          size="sm"
          variant="link"
          className="text-xs"
          nativeButton={false}
          render={
            <a href="https://dpnmw.com" target="_blank" rel="noopener">
              <Trans>DPN Media Works</Trans>
            </a>
          }
        />

      </div>
    </SectionBase>
  );
}
