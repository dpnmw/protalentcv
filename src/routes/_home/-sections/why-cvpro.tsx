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

            {/* 2026 Micro-UI: Magnetic Glass Grid (2 per row on Desktop) */}
            <div className="mt-12 space-y-12">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:max-w-[500px]">
                {[
                  { label: "Basics", color: "#8B5CF6" },
                  { label: "Summary", color: "#F97316" },
                  { label: "Profile Links", color: "#10B981" },
                  { label: "Interests", color: "#F59E0B" },
                ].map((layer, i) => (
                  <div
                    key={layer.label}
                    className="flex h-[60px] cursor-default items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:bg-white/25"
                    style={{ borderLeft: `3px solid ${layer.color}` }}
                  >
                    <div className="size-2 rounded-full" style={{ backgroundColor: layer.color }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink">
                      {layer.label}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-4 text-[11px] font-bold uppercase tracking-widest text-ink/30">
                  Personal Branding Blocks:
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { s: "Profile Links", c: "#8B5CF6", bg: "rgba(139, 92, 246, 0.08)" },
                    { s: "Languages", c: "#10B981", bg: "rgba(16, 185, 129, 0.08)" },
                    { s: "Interests", c: "#F59E0B", bg: "rgba(245, 158, 11, 0.08)" },
                    { s: "Custom Field", c: "#EF4444", bg: "rgba(239, 68, 68, 0.08)" },
                  ].map((item, i) => (
                    <motion.span
                      key={item.s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.8 }}
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
              <div className="mb-2 flex items-center gap-3">
                <span className="shrink-0 text-[28px] leading-none">{feature.icon}</span>
                <div className="text-base font-semibold" style={{ color: "var(--cvp-ink)" }}>
                  {feature.title}
                </div>
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
