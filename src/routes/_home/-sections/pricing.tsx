import { useQuery } from "@tanstack/react-query";

import { orpc } from "@/integrations/orpc/client";

const freeFeatures = [
  "Up to {limit} resumes",
  "13 professional templates",
  "PDF, DOCX & JSON export",
  "Mobile support",
  "Tablet support",
  "Public sharing link ({days}-day expiry)",
];

const paidFeatures = [
  "Up to 10 resumes",
  "All templates",
  "PDF, DOCX & JSON export",
  "Mobile support",
  "Tablet support",
  "Permanent public sharing link",
];

export function Pricing() {
  const { data: planConfig } = useQuery(orpc.flags.getConfig.queryOptions());

  const freeLimit = planConfig?.freeResumeLimit ?? 3;
  const sharingDays = planConfig?.freeSharingDays ?? 30;
  const showPaid = planConfig?.enablePaidPlan ?? false;
  const upgradeUrl = planConfig?.upgradeUrl;

  return (
    <section
      id="pricing"
      className="px-5 py-24 md:px-12"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
          style={{ color: "var(--cvp-accent)" }}
        >
          <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
          What's the cost?
        </div>

        <h2
          className="mb-3 leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            color: "var(--cvp-ink)",
          }}
        >
          {showPaid ? (
            <>
              Start free.
              <br />
              Upgrade when you're ready.
            </>
          ) : (
            <>
              Completely free.
              <br />
              No card required.
            </>
          )}
        </h2>

        <p
          className="max-w-[500px] text-[17px] font-light leading-[1.75]"
          style={{ color: "var(--cvp-ink-mid)" }}
        >
          {showPaid
            ? "Everything you need to build a great CV is free. Unlock more when your needs grow."
            : "ProTalent CV is free to use. Build, customise, and share your resume without spending a cent."}
        </p>

        <div className={`mt-[52px] grid grid-cols-1 gap-[18px] ${showPaid ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
          {/* Free tier */}
          <div
            className="rounded-[18px] px-[26px] py-[30px]"
            style={{
              background: "var(--cvp-bg-card)",
              border: "1px solid var(--cvp-border)",
            }}
          >
            <div
              className="mb-6 text-[28px] font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--cvp-ink)" }}
            >
              Always free
            </div>

            <ul className="space-y-2.5">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-x-2.5 text-sm" style={{ color: "var(--cvp-ink-mid)" }}>
                  <span className="material-symbols-outlined mt-px shrink-0" style={{ fontSize: "16px", color: "var(--cvp-accent)" }}>
                    check_circle
                  </span>
                  {f
                    .replace("{limit}", String(freeLimit))
                    .replace("{days}", String(sharingDays))}
                </li>
              ))}
            </ul>
          </div>

          {/* Paid tier — only shown when enabled */}
          {showPaid && (
            <div
              className="rounded-[18px] px-[26px] py-[30px]"
              style={{
                background: "var(--cvp-bg-card)",
                border: "2px solid var(--cvp-accent)",
              }}
            >
              <div className="mb-1 text-xs font-medium uppercase tracking-[0.1em]" style={{ color: "var(--cvp-accent)" }}>
                Pro
              </div>
              <div
                className="mb-1 text-[36px] font-bold leading-none tracking-tight"
                style={{ fontFamily: "var(--font-serif)", color: "var(--cvp-ink)" }}
              >
                $5.99
              </div>
              <div className="mb-6 text-sm" style={{ color: "var(--cvp-ink-muted)" }}>
                per month
              </div>

              <ul className="mb-8 space-y-2.5">
                {paidFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-x-2.5 text-sm" style={{ color: "var(--cvp-ink-mid)" }}>
                    <span className="material-symbols-outlined mt-px shrink-0" style={{ fontSize: "16px", color: "var(--cvp-accent)" }}>
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {upgradeUrl && (
                <a
                  href={upgradeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-medium transition-[background,transform] duration-200 hover:-translate-y-px"
                  style={{ background: "var(--cvp-accent)", color: "var(--cvp-btn-fg)" }}
                >
                  Upgrade to Pro
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
