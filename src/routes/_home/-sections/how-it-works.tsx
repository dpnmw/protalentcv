import { motion } from "motion/react";

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
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_400px]">
          <div>
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
              No complicated software. No design experience needed. Just fill in your details and
              go.
            </p>

            {/* Dynamic Micro-UI */}
            <div className="mt-10 space-y-8">
              <div className="flex flex-wrap gap-8">
                {[
                  { label: "English", level: 5 },
                  { label: "French", level: 3 },
                ].map((l, i) => (
                  <div key={l.label} className="flex flex-col gap-2">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#F59E0B]">
                      {l.label}
                    </div>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <motion.div
                          key={dot}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: i * 0.2 + dot * 0.1, type: "spring" }}
                          className={`size-2.5 rounded-full ${
                            dot <= l.level ? "bg-[#F59E0B]" : "bg-ink/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink/30">
                  Ready to drag-and-drop:
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Experience", "Summary", "Certifications", "Volunteer Work"].map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-lg border border-ink/10 bg-warning-sub px-3.5 py-2 text-xs font-medium transition-colors hover:border-[#F59E0B] hover:bg-white"
                      style={{ color: "var(--cvp-ink)" }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] h-[480px] w-full overflow-hidden rounded-[24px]">
            <img
              src="/photos/mom.png"
              alt="Successful remote work search"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ boxShadow: "0 10px 40px -15px rgba(0,0,0,0.2)" }}
            />
          </div>
        </div>

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
