import { motion } from "motion/react";
import {
  AppWindow,
  Briefcase,
  Certificate,
  Desktop,
  Devices,
  FilePdf,
  Globe,
  Layout,
  MagicWand,
  Palette,
  ShareNetwork,
  Translate,
} from "@phosphor-icons/react";

const features = [
  {
    icon: <MagicWand size={32} />,
    title: "AI Writing Assistant",
    description:
      "Stuck on your summary or bullet points? Our AI helper suggest professional phrases tailored to your role.",
  },
  {
    icon: <Layout size={32} />,
    title: "Real-time Preview",
    description:
      "See your changes instantly. No more downloading a PDF 50 times to see if your margins are right.",
  },
  {
    icon: <Palette size={32} />,
    title: "Deep Customization",
    description:
      "Control every font, color, and spacing detail. Create a resume that truly represents your personal brand.",
  },
  {
    icon: <Devices size={32} />,
    title: "Build Anywhere",
    description:
      "Works perfectly on your phone, tablet, or desktop. Update your resume while on the train or at a cafe.",
  },
  {
    icon: <ShareNetwork size={32} />,
    title: "Public Link Sharing",
    description:
      "Get a unique URL for your resume. Send it to recruiters or add it to your LinkedIn profile in seconds.",
  },
  {
    icon: <AppWindow size={32} />,
    title: "Modern Dashboard",
    description:
      "Manage multiple resumes for different roles. Track your progress and keep everything organized in one place.",
  },
];

export function WhyCVPro() {
  return (
    <section
      id="why"
      className="px-5 py-14 md:px-12 md:py-20 lg:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg-sub)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[400px_1fr]">
          <div className="relative aspect-[4/5] h-[480px] w-full overflow-hidden rounded-[24px]">
            <img
              src="/photos/couch-man.png"
              alt="Successful career transfer"
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
              Everything you need
            </div>

            <h2
              className="mb-3 leading-[1.15] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.8vw, 44px)",
                color: "var(--cvp-ink)",
              }}
            >
              The power to create
              <br />
              without the headache.
            </h2>

            <p
              className="max-w-[500px] text-[17px] font-light leading-[1.75]"
              style={{ color: "var(--cvp-ink-mid)" }}
            >
              Built by developers who were tired of sub-par tools. ProTalent CV is fast, flexible,
              and completely focused on getting you hired.
            </p>

            {/* Dynamic Micro-UI */}
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                {[
                  { label: "LinkedIn", color: "#EF4444" },
                  { label: "GitHub", color: "#8B5CF6" },
                  { label: "Portfolio", color: "#F59E0B" },
                ].map((p, i) => (
                  <motion.div
                    key={p.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      scale: { delay: i * 0.1 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="flex size-12 items-center justify-center rounded-2xl shadow-lg"
                      style={{ backgroundColor: p.color, color: "white" }}
                    >
                      <Globe size={24} weight="bold" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink/40">
                      {p.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink/30">
                  Infinite customization:
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Profile Links", "Languages", "Interests", "Custom Sections"].map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-lg border border-ink/10 bg-error-sub px-3.5 py-2 text-xs font-medium transition-colors hover:border-[#EF4444] hover:bg-white"
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
