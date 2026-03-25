import { Trans } from "@lingui/react/macro";
import { useQuery } from "@tanstack/react-query";

import { orpc } from "@/integrations/orpc/client";

export function Footer() {
  const { data: planConfig } = useQuery(orpc.flags.getConfig.queryOptions());

  return (
    <footer
      className="px-5 py-[34px] md:px-12"
      style={{
        fontFamily: "var(--font-body)",
        background: "var(--cvp-footer-bg)",
        borderTop: "1px solid rgba(255,255,255,.07)",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-y-2 md:flex-row md:justify-between">
        <p className="text-[13px]" style={{ color: "var(--cvp-footer-fg)" }}>
          © DPN MEDIA WORKS 2026
        </p>

        {(planConfig?.termsUrl || planConfig?.privacyUrl) && (
          <div className="flex items-center gap-x-4 text-[13px]" style={{ color: "var(--cvp-footer-fg)" }}>
            {planConfig.termsUrl && (
              <a
                href={planConfig.termsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <Trans>Terms of Service</Trans>
              </a>
            )}
            {planConfig.privacyUrl && (
              <a
                href={planConfig.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <Trans>Privacy Policy</Trans>
              </a>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
