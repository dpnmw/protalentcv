import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/integrations/orpc/client";

const STORAGE_KEY = "cvp_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { data: planConfig } = useQuery(orpc.flags.getConfig.queryOptions());

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const deny = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-5 left-5 z-[9999] w-[calc(100vw-40px)] max-w-[340px]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="rounded-2xl px-5 py-5 shadow-2xl"
        style={{
          background: "var(--cvp-bg-card)",
          border: "1px solid var(--cvp-border-mid)",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Icon + heading */}
        <div className="mb-3 flex items-center gap-2.5">
          <span
            className="material-symbols-outlined shrink-0"
            style={{ fontSize: "22px", color: "var(--cvp-accent)" }}
          >
            cookie
          </span>
          <span className="text-[15px] font-semibold" style={{ color: "var(--cvp-ink)" }}>
            We use cookies
          </span>
        </div>

        {/* Body */}
        <p className="mb-4 text-[13px] leading-[1.65]" style={{ color: "var(--cvp-ink-muted)" }}>
          We use cookies to improve your experience on our site. By accepting, you agree to our use
          of cookies.{" "}
          {planConfig?.privacyUrl && (
            <a
              href={planConfig.privacyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "var(--cvp-accent)" }}
            >
              Learn more
            </a>
          )}
        </p>

        {/* Actions */}
        <div className="flex gap-2.5">
          <button
            onClick={accept}
            className="flex-1 rounded-full py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#047857" }}
          >
            Accept
          </button>
          <button
            onClick={deny}
            className="flex-1 rounded-full py-2.5 text-[13px] font-medium transition-opacity hover:opacity-80"
            style={{
              background: "var(--cvp-bg-sub)",
              border: "1px solid var(--cvp-border-mid)",
              color: "var(--cvp-ink-muted)",
            }}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
