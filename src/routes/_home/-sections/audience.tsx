const audiences = [
  {
    emoji: "🎓",
    title: "Students & fresh graduates",
    description:
      "Landing your first job is hard enough. ProTalent CV makes sure your application looks just as polished as anyone else's — even if your experience is just getting started.",
  },
  {
    emoji: "💻",
    title: "Remote workers & freelancers",
    description:
      "Whether you're pitching clients or applying to roles worldwide, a sharp CV builds trust before you even speak. Update it anytime, share it instantly.",
  },
  {
    emoji: "🌴",
    title: "Caribbean job seekers",
    description:
      "Local talent, global opportunities. ProTalent CV gives Caribbean professionals the same tools as anyone anywhere — because your work deserves to be seen.",
  },
  {
    emoji: "🔄",
    title: "Career changers",
    description:
      "Switching industries or roles? Present your experience with a fresh, modern CV that shows who you're becoming — not just where you've been.",
  },
];

export function Audience() {
  return (
    <section
      id="audience"
      className="px-5 py-24 md:px-12"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg-sub)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
          style={{ color: "var(--cvp-accent)" }}
        >
          <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
          Who's it for?
        </div>

        <h2
          className="mb-3 leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            color: "var(--cvp-ink)",
          }}
        >
          Built for every
          <br />
          career stage.
        </h2>

        <p
          className="max-w-[500px] text-[17px] font-light leading-[1.75]"
          style={{ color: "var(--cvp-ink-mid)" }}
        >
          Wherever you are in your journey, ProTalent CV helps you put your best foot forward.
        </p>

        <div className="mt-[52px] grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-[18px] px-[26px] py-[30px] transition-[border-color,transform,box-shadow,background] duration-200 hover:-translate-y-[3px]"
              style={{
                background: "var(--cvp-bg-card)",
                border: "1px solid var(--cvp-border)",
              }}
            >
              <span className="mb-3.5 block text-[30px]">{a.emoji}</span>
              <div className="mb-2 text-base font-semibold" style={{ color: "var(--cvp-ink)" }}>
                {a.title}
              </div>
              <div
                className="text-sm font-light leading-[1.7]"
                style={{ color: "var(--cvp-ink-muted)" }}
              >
                {a.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
