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
              we get it. ProTalent CV was built to take the layout stress away, so you can focus
              on what matters: your next opportunity.
            </p>

            {/* Dynamic Micro-UI */}
            <div className="mt-10 space-y-8">
              <div className="space-y-4">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#10B981]">
                  Self-Taught Mastery
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { label: "Modern Design", level: 92, color: "#10B981" },
                    { label: "Technical Logic", level: 78, color: "#F59E0B" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="mb-1.5 flex items-center justify-between text-[11px] font-medium"
                        style={{ color: "var(--cvp-ink-muted)" }}
                      >
                        <span>{s.label}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          transition={{ duration: 1.2, ease: "circOut" }}
                          className="h-full"
                          style={{ backgroundColor: s.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink/30">
                  Drag-and-drop into your Story:
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Education", "Side Projects", "Achievements", "Languages"].map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-lg border border-ink/10 bg-info-sub px-3.5 py-2 text-xs font-medium transition-colors hover:border-[#10B981] hover:bg-white"
                      style={{ color: "var(--cvp-ink)" }}
                    >
                      {item}
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
