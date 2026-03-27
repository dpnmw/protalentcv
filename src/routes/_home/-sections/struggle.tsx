import { motion } from "motion/react";

export function Struggle() {
  return (
    <section
      id="struggle"
      className="px-5 py-14 md:px-12 md:py-20 lg:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg-sub)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[400px_1fr]">
          <div className="relative aspect-[4/5] h-[480px] w-full overflow-hidden rounded-[24px]">
            <img
              src="/photos/student.png"
              alt="From frustration to readiness"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ boxShadow: "0 10px 40px -15px rgba(0,0,0,0.2)" }}
            />
          </div>

          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
              style={{ color: "var(--cvp-accent)" }}
            >
              <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
              Authentic Connection
            </div>

            <h2
              className="mb-3 leading-[1.15] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.8vw, 44px)",
                color: "var(--cvp-ink)",
              }}
            >
              The struggle ends here.
              <br />
              Your story begins.
            </h2>

            <p
              className="max-w-[500px] text-[17px] font-light leading-[1.75]"
              style={{ color: "var(--cvp-ink-mid)" }}
            >
              Job searching is hard. The uncertainty, the late nights, the fear of an empty page —
              we get it. ProTalent CV was built to take the layout stress away, so you can focus on
              what matters: your next opportunity.
            </p>

            {/* 2026 Micro-UI: The Growth Path (4 Items) */}
            <div className="mt-12 max-w-[600px] space-y-10">
              <div className="relative flex items-center justify-between px-2">
                {/* Background Connecting Line */}
                <div className="absolute left-6 right-6 top-[18px] h-[2px] bg-ink/5" />
                {/* Animated Glowing Path */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "circInOut", delay: 0.2 }}
                  className="absolute left-6 top-[18px] h-[2px] origin-left bg-gradient-to-r from-[#10B981] via-[#F59E0B] via-[#EF4444] to-[#8B5CF6]"
                />
 
                {[
                  { label: "Graduation", color: "#10B981" },
                  { label: "First Project", color: "#F59E0B" },
                  { label: "Internship", color: "#8B5CF6" },
                  { label: "First Award", color: "#EF4444" },
                ].map((item, i) => (
                  <div key={item.label} className="relative z-10 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.4 + 0.5, type: "spring" }}
                      className="flex size-9 items-center justify-center rounded-full shadow-lg"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="size-2 rounded-full bg-white" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.4 + 0.7 }}
                      className="mt-3 text-[9px] font-bold uppercase tracking-widest text-ink/40"
                    >
                      {item.label}
                    </motion.span>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink/30">
                  Build your career foundation:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { s: "Education", c: "#10B981", bg: "rgba(16, 185, 129, 0.08)" },
                    { s: "Core Skills", c: "#F59E0B", bg: "rgba(245, 158, 11, 0.08)" },
                    { s: "Side Projects", c: "#EF4444", bg: "rgba(239, 68, 68, 0.08)" },
                    { s: "Awards & Honors", c: "#8B5CF6", bg: "rgba(139, 92, 246, 0.08)" },
                  ].map((item, i) => (
                    <motion.span
                      key={item.s}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
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
        </div>
      </div>
    </section>
  );
}
