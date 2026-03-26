import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <div
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 md:px-12"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-200px] size-[900px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--cvp-glow)", filter: "blur(80px)" }}
      />

      <div className="relative z-[1] mx-auto grid w-full max-w-[1100px] items-center gap-10 md:grid-cols-[1fr_320px] md:gap-8 lg:grid-cols-[1fr_420px] lg:gap-20">
        {/* Left column — text */}
        <div>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-[0.06em]"
            style={{
              background: "var(--cvp-tag-bg)",
              border: "1px solid var(--cvp-tag-border)",
              color: "var(--cvp-tag-fg)",
            }}
          >
            <span
              className="size-1.5 rounded-full"
              style={{
                background: "var(--cvp-accent)",
                animation: "cvp-blink 2s ease-in-out infinite",
              }}
            />
            100% Free · No payment required to start
          </div>

          <h1
            className="mb-5 leading-[1.08] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 5.5vw, 68px)",
              color: "var(--cvp-ink)",
            }}
          >
            Your CV,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--cvp-accent)" }}>ready in</em>
            <br />
            minutes.
          </h1>

          <p
            className="mb-10 max-w-[480px] text-lg font-light leading-[1.75]"
            style={{ color: "var(--cvp-ink-mid)" }}
          >
            Build a polished, professional CV or résumé completely free. No design skills, no
            technical knowledge needed — just you and your story.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-[background,transform] duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-body)",
                background: "var(--cvp-accent)",
                color: "var(--cvp-btn-fg)",
                boxShadow: "0 4px 20px rgba(37,99,235,.28)",
              }}
            >
              Start building for free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div
            className="mt-7 grid grid-cols-3 gap-6 border-t pt-7"
            style={{ borderColor: "var(--cvp-border)" }}
          >
            {[
              { value: 13, suffix: "+", label: "Templates", icon: "style" },
              { value: 5, suffix: " min", label: "To build", icon: "timer" },
              { value: 50, suffix: "+", label: "Languages", icon: "translate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span
                  className="material-symbols-outlined mb-1.5 inline-block"
                  style={{ fontSize: "20px", color: "var(--cvp-accent)", opacity: 0.7 }}
                >
                  {stat.icon}
                </span>
                <div
                  className="text-2xl font-semibold tracking-tight md:text-3xl"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--cvp-accent)" }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ color: "var(--cvp-ink-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — CV card */}
        <div className="relative mx-auto max-w-[360px] md:mx-0 md:max-w-none">
          {/* Floating chip: PDF downloaded */}
          <div
            className="absolute right-[-16px] top-7 z-[3] flex items-center gap-2 rounded-xl px-3.5 py-2.5"
            style={{
              background: "var(--cvp-bg-card)",
              border: "1px solid var(--cvp-border-mid)",
              boxShadow: "var(--cvp-chip-shadow)",
              animation: "cvp-float 4s ease-in-out infinite",
            }}
          >
            <div className="flex size-[26px] shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[13px]">
              ✓
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: "var(--cvp-ink)" }}>
                PDF downloaded
              </div>
              <div className="mt-px text-[11px]" style={{ color: "var(--cvp-ink-muted)" }}>
                Just now
              </div>
            </div>
          </div>

          {/* Floating chip: Share link */}
          <div
            className="absolute bottom-11 left-[-18px] z-[3] flex items-center gap-2 rounded-xl px-3.5 py-2.5"
            style={{
              background: "var(--cvp-bg-card)",
              border: "1px solid var(--cvp-border-mid)",
              boxShadow: "var(--cvp-chip-shadow)",
              animation: "cvp-float 4s ease-in-out infinite 1.8s",
            }}
          >
            <div
              className="flex size-[26px] shrink-0 items-center justify-center rounded-lg text-[13px]"
              style={{ background: "var(--cvp-b100)" }}
            >
              🔗
            </div>
            <div>
              <div className="text-xs font-medium" style={{ color: "var(--cvp-ink)" }}>
                Share link copied
              </div>
              <div className="mt-px text-[11px]" style={{ color: "var(--cvp-ink-muted)" }}>
                protalent.cv/r/…
              </div>
            </div>
          </div>

          {/* CV Card */}
          <div
            className="relative z-[2] overflow-hidden rounded-[20px] transition-[background,border-color,box-shadow] duration-300"
            style={{
              background: "var(--cvp-bg-card)",
              border: "1px solid var(--cvp-border-mid)",
              boxShadow: "var(--cvp-card-shadow)",
            }}
          >
            {/* Card header */}
            <div
              className="relative overflow-hidden px-[26px] pb-[22px] pt-7"
              style={{
                background: "linear-gradient(135deg, var(--cvp-b950) 0%, var(--cvp-b700) 100%)",
              }}
            >
              <div className="pointer-events-none absolute right-[-50px] top-[-50px] size-[180px] rounded-full bg-white/5" />
              <div
                className="mb-3 flex size-11 items-center justify-center rounded-full text-[17px] text-white"
                style={{
                  fontFamily: "var(--font-serif)",
                  border: "2px solid rgba(255,255,255,.35)",
                  background: "rgba(255,255,255,.15)",
                }}
              >
                P
              </div>
              <div className="mb-1 text-lg text-white" style={{ fontFamily: "var(--font-serif)" }}>
                Phillip Dennis
              </div>
              <div className="text-xs font-light text-white/65">
                Director of Communications · Roseau, Dominica
              </div>
            </div>

            {/* Card body */}
            <div className="space-y-[18px] px-[26px] py-[22px]">
              {/* Skills */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Skills
                </div>
                {[
                  { name: "Public Relations", width: "90%" },
                  { name: "Media Strategy", width: "76%" },
                  { name: "Crisis Comms", width: "63%" },
                ].map((skill) => (
                  <div key={skill.name} className="mb-1.5 flex items-center gap-2.5">
                    <span
                      className="w-[90px] shrink-0 whitespace-nowrap text-[11px]"
                      style={{ color: "var(--cvp-ink-mid)" }}
                    >
                      {skill.name}
                    </span>
                    <div
                      className="h-1 flex-1 overflow-hidden rounded-full"
                      style={{ background: "var(--cvp-surface)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: skill.width,
                          background: "linear-gradient(90deg, var(--cvp-b500), var(--cvp-b400))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience placeholder lines */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Experience
                </div>
                {["72%", "90%", "55%"].map((w, i) => (
                  <div
                    key={i}
                    className="mb-1.5 h-[7px] rounded"
                    style={{ width: w, background: "var(--cvp-bg-sub)" }}
                  />
                ))}
              </div>

              {/* Education placeholder lines */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Education
                </div>
                {["80%", "58%"].map((w, i) => (
                  <div
                    key={i}
                    className="mb-1.5 h-[7px] rounded"
                    style={{ width: w, background: "var(--cvp-bg-sub)" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
