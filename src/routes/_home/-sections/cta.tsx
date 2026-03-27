const contacts = [
  {
    href: "mailto:dpnmediaworks@gmail.com",
    icon: "mail",
    label: "Email us",
    detail: "dpnmediaworks@gmail.com",
    action: "Send a message",
    color: "#dc2626",
    bg: "rgba(220,38,38,.18)",
    border: "rgba(220,38,38,.3)",
    iconBg: "rgba(220,38,38,.35)",
    iconColor: "#fca5a5",
    actionColor: "#f87171",
    target: undefined as string | undefined,
  },
  {
    href: "https://facebook.com/dpnmediaworks",
    icon: "thumb_up",
    label: "Facebook",
    detail: "@dpnmediaworks",
    action: "Follow us",
    color: "#2563eb",
    bg: "rgba(37,99,235,.18)",
    border: "rgba(37,99,235,.3)",
    iconBg: "rgba(37,99,235,.35)",
    iconColor: "#93c5fd",
    actionColor: "#60a5fa",
    target: "_blank",
  },
  {
    href: "https://wa.me/17672453041",
    icon: "chat",
    label: "WhatsApp",
    detail: "+1 767 245 3041",
    action: "Start a chat",
    color: "#16a34a",
    bg: "rgba(22,163,74,.18)",
    border: "rgba(22,163,74,.3)",
    iconBg: "rgba(22,163,74,.35)",
    iconColor: "#86efac",
    actionColor: "#4ade80",
    target: "_blank",
  },
  {
    href: "/dashboard",
    icon: "rocket_launch",
    label: "Start building",
    detail: "No account needed to begin",
    action: "Get started",
    color: "#ea580c",
    bg: "rgba(234,88,12,.18)",
    border: "rgba(234,88,12,.3)",
    iconBg: "rgba(234,88,12,.35)",
    iconColor: "#fdba74",
    actionColor: "#fb923c",
    target: undefined as string | undefined,
  },
];

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-footer-bg)" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-300px] size-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "rgba(37,99,235,.08)", filter: "blur(80px)" }}
      />

      <div className="relative z-[1] mx-auto max-w-[860px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
            style={{ color: "var(--cvp-b300)" }}
          >
            <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-b300)" }} />
            Get in touch
          </div>
          <h2
            className="mb-3 leading-[1.1] tracking-[-0.01em] text-white"
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 4vw, 42px)" }}
          >
            We'd love to hear from you.
          </h2>
          <p className="text-[16px] font-light text-white/50">
            Have a question, feedback, or just want to say hi?
          </p>
        </div>

        {/* Cards — stacked rows on mobile, 2-col on md, 4-col on lg */}
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.target}
              rel={c.target ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 md:flex-col md:items-start md:gap-3 md:rounded-[20px] md:px-6 md:py-6 lg:gap-4"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              {/* Icon */}
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: c.iconBg }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px", color: c.iconColor }}
                >
                  {c.icon}
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 md:flex-none">
                <div className="text-[14px] font-semibold text-white">{c.label}</div>
                <div className="truncate text-[12px] text-white/50">{c.detail}</div>
              </div>

              {/* Arrow — always visible on mobile (right side), below text on desktop */}
              <div
                className="ml-auto flex shrink-0 items-center gap-1 text-[12px] font-medium md:ml-0 md:mt-auto"
                style={{ color: c.actionColor }}
              >
                <span className="hidden md:inline">{c.action}</span>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                  arrow_forward
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-[13px] text-white/30">
          We typically respond within 24 hours · ProTalent CV by DPN Media Works
        </p>
      </div>
    </section>
  );
}
