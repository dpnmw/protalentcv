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

            {/* 2026 Micro-UI: Radial Analytics Rings (2x2 Grid) */}
            <div className="mt-12 space-y-10">
              <div className="grid max-w-[340px] grid-cols-2 gap-8">
                {[
                  { label: "Design", level: 100, color: "#10B981" },
                  { label: "Content", level: 85, color: "#EF4444" },
                  { label: "Optimization", level: 75, color: "#F59E0B" },
                  { label: "Formatting", level: 90, color: "#8B5CF6" },
                ].map((ring, i) => (
                  <div key={ring.label} className="flex flex-col items-center gap-3">
                    <div className="relative size-16">
                      <svg className="size-full" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-ink/5"
                          strokeWidth="3"
                        />
                        <motion.circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          stroke={ring.color}
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                          initial={{ strokeDashoffset: 100 }}
                          whileInView={{ strokeDashoffset: 100 - ring.level }}
                          transition={{ duration: 1.5, delay: i * 0.3, ease: "circOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
                        {ring.level}%
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                      {ring.label}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink/30">
                  Professional Journey blocks:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { s: "Experience", c: "#FCD34D", bg: "rgba(252, 211, 77, 0.08)" },
                    { s: "Summary", c: "#FB923C", bg: "rgba(251, 146, 60, 0.08)" },
                    { s: "Certifications", c: "#F43F5E", bg: "rgba(244, 63, 94, 0.08)" },
                    { s: "Volunteer Work", c: "#22C55E", bg: "rgba(34, 197, 94, 0.08)" },
                  ].map((item, i) => (
                    <motion.span
                      key={item.s}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 1.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-transparent px-4 py-2.5 text-xs font-semibold transition-all hover:border-current shadow-sm"
                      style={{ color: item.c, backgroundColor: item.bg }}
                    >
                      {item.s}
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
