const features = [
  [
    {
      icon: "🆓",
      title: "Always free",
      description:
        'No subscriptions, no hidden charges, no "premium" lock-ins. Every feature, every template — free for everyone.',
    },
    {
      icon: "📄",
      title: "Download as PDF",
      description:
        "One click and your CV is ready to send. Perfectly formatted, print-ready, and looking exactly as you built it.",
    },
  ],
  [
    {
      icon: "🎨",
      title: "Make it yours",
      description:
        "Change colors, fonts, and layouts to match your style. Your CV should look like you — not a generic template.",
    },
    {
      icon: "🔗",
      title: "Share with a link",
      description:
        "Get a public link to your CV you can share anywhere — via email, WhatsApp, LinkedIn, or a job application form.",
    },
  ],
];

export function WhyCVPro() {
  return (
    <section
      id="why"
      className="px-5 py-14 md:px-12 md:py-20 lg:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg-sub)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
          style={{ color: "var(--cvp-accent)" }}
        >
          <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
          Why ProTalent CV
        </div>

        <h2
          className="mb-3 leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            color: "var(--cvp-ink)",
          }}
        >
          Everything you need.
          <br />
          Nothing in the way.
        </h2>

        <p
          className="max-w-[500px] text-[17px] font-light leading-[1.75]"
          style={{ color: "var(--cvp-ink-mid)" }}
        >
          Designed for real people — not designers or tech experts. Just you and your next
          opportunity.
        </p>

        <div
          className="mt-[52px] grid grid-cols-1 gap-[2px] overflow-hidden rounded-[20px] md:grid-cols-2"
          style={{ border: "1px solid var(--cvp-border-mid)" }}
        >
          {features.flat().map((feature) => (
            <div
              key={feature.title}
              className="px-[30px] py-[34px] transition-colors duration-200"
              style={{
                background: "var(--cvp-bg-card)",
              }}
            >
              <span className="mb-3.5 block text-[28px] leading-none">{feature.icon}</span>
              <div className="mb-2 text-base font-semibold" style={{ color: "var(--cvp-ink)" }}>
                {feature.title}
              </div>
              <div
                className="text-sm font-light leading-[1.7]"
                style={{ color: "var(--cvp-ink-muted)" }}
              >
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
