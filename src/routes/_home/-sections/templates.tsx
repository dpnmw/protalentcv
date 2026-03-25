const templateCards = [
  { name: "Azurill", tag: "Modern", bg: "#DBEAFE", line: "#BFDBFE", acc: "#93C5FD" },
  { name: "Bronzor", tag: "Minimal", bg: "#F0F9FF", line: "#E0F2FE", acc: "#7DD3FC" },
  { name: "Chikorita", tag: "Clean", bg: "#F0FDF4", line: "#DCFCE7", acc: "#86EFAC" },
  { name: "Ditgar", tag: "Classic", bg: "#FFFBEB", line: "#FEF3C7", acc: "#FCD34D" },
  { name: "Ditto", tag: "Bold", bg: "#EDE9FE", line: "#DDD6FE", acc: "#A78BFA" },
  { name: "Gengar", tag: "Creative", bg: "#FDF2F8", line: "#FCE7F3", acc: "#F9A8D4" },
  { name: "Glalie", tag: "Structured", bg: "#EFF6FF", line: "#DBEAFE", acc: "#60A5FA" },
  { name: "Kakuna", tag: "Compact", bg: "#F0F4FF", line: "#E0E7FF", acc: "#A5B4FC" },
  { name: "Lapras", tag: "Elegant", bg: "#F0FDFA", line: "#CCFBF1", acc: "#5EEAD4" },
  { name: "Leafish", tag: "Professional", bg: "#EFF6FF", line: "#DBEAFE", acc: "#3B82F6" },
  { name: "Onyx", tag: "Dark", bg: "#1F2937", line: "#374151", acc: "#6B7280" },
  { name: "Pikachu", tag: "Friendly", bg: "#FFFBEB", line: "#FEF3C7", acc: "#FBBF24" },
  { name: "Rhyhorn", tag: "Executive", bg: "#F8FAFC", line: "#E2E8F0", acc: "#94A3B8" },
];

function TemplateCard({ t }: { t: (typeof templateCards)[number] }) {
  return (
    <div
      className="w-[188px] shrink-0 cursor-pointer overflow-hidden rounded-[14px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:shadow-lg"
      style={{
        border: "1px solid var(--cvp-border-mid)",
        background: "var(--cvp-bg-card)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--cvp-accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--cvp-border-mid)")}
    >
      <div
        className="flex h-[245px] flex-col gap-[7px] p-[17px]"
        style={{ background: t.bg }}
      >
        <div className="h-2 rounded" style={{ background: t.acc, width: "55%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "42%" }} />
        <div className="my-[3px] h-px" style={{ background: t.line }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "82%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "67%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "90%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "52%" }} />
        <div className="my-[3px] h-px" style={{ background: t.line }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "75%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "48%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "86%" }} />
        <div className="h-1.5 rounded" style={{ background: t.line, width: "60%" }} />
      </div>
      <div
        className="flex items-center justify-between px-3.5 py-2.5"
        style={{ borderTop: "1px solid var(--cvp-border)" }}
      >
        <span className="text-xs font-medium" style={{ color: "var(--cvp-ink)" }}>
          {t.name}
        </span>
        <span
          className="rounded-full px-[7px] py-[3px] text-[10px] font-medium uppercase tracking-[0.05em]"
          style={{
            background: "var(--cvp-tag-bg)",
            color: "var(--cvp-tag-fg)",
            border: "1px solid var(--cvp-tag-border)",
          }}
        >
          {t.tag}
        </span>
      </div>
    </div>
  );
}

// Duplicate the array for seamless infinite scroll
const marqueeItems = [...templateCards, ...templateCards];

export function Templates() {
  return (
    <section
      id="templates"
      className="overflow-hidden px-5 py-24 md:px-12"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg)" }}
    >
      <div className="mx-auto mb-[52px] max-w-[1100px]">
        <div
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
          style={{ color: "var(--cvp-accent)" }}
        >
          <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
          Template gallery
        </div>

        <h2
          className="mb-3 leading-[1.15] tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3.8vw, 44px)",
            color: "var(--cvp-ink)",
          }}
        >
          13 templates. All free.
        </h2>

        <p
          className="mt-2.5 max-w-[500px] text-[17px] font-light leading-[1.75]"
          style={{ color: "var(--cvp-ink-mid)" }}
        >
          Every template is fully customizable. Start with one and make it entirely your own.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden"
        style={{
          margin: "0 -48px",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-[18px] px-12 py-2 hover:[animation-play-state:paused]"
          style={{ animation: "cvp-marquee 34s linear infinite" }}
        >
          {marqueeItems.map((t, i) => (
            <TemplateCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
