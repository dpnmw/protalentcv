const steps = [
  {
    number: "1",
    title: "Pick a template",
    description:
      "Choose from 13 professionally designed templates — clean, modern, and built to make a great first impression.",
  },
  {
    number: "2",
    title: "Fill in your details",
    description:
      "Add your experience, skills, and education. Our editor is simple and guides you through every section step by step.",
  },
  {
    number: "3",
    title: "Download or share",
    description:
      "Export as PDF, DOCX, or JSON in one click, or get a shareable link to send directly to employers or clients.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="px-5 py-14 md:px-12 md:py-20 lg:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
          style={{ color: "var(--cvp-accent)" }}
        >
          <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
          How it works
        </div>

        <h2
          className="mb-3 leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            color: "var(--cvp-ink)",
          }}
        >
          Three steps to a CV
          <br />
          you're proud to send.
        </h2>

        <p
          className="max-w-[500px] text-[17px] font-light leading-[1.75]"
          style={{ color: "var(--cvp-ink-mid)" }}
        >
          No complicated software. No design experience needed. Just fill in your details and go.
        </p>

        <div className="relative mt-[60px] grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-10">
          {/* Connecting line (desktop only) */}
          <div
            className="pointer-events-none absolute top-[27px] hidden h-px md:block"
            style={{
              left: "calc(16.666% + 18px)",
              right: "calc(16.666% + 18px)",
              background: "var(--cvp-border-mid)",
            }}
          />

          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className="relative z-[1] mx-auto mb-[18px] flex size-[54px] items-center justify-center rounded-2xl text-[22px] transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-serif)",
                  background: "var(--cvp-step-bg)",
                  color: "var(--cvp-step-fg)",
                }}
              >
                {step.number}
              </div>
              <h3 className="mb-2 text-base font-semibold" style={{ color: "var(--cvp-ink)" }}>
                {step.title}
              </h3>
              <p
                className="text-sm font-light leading-[1.7]"
                style={{ color: "var(--cvp-ink-muted)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
