import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/integrations/orpc/client";

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

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    return u.searchParams.get("v");
  } catch {
    return null;
  }
}

function VideoLightbox({ url, onClose }: { url: string; onClose: () => void }) {
  const videoId = getYouTubeId(url);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close video"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <video src={url} autoPlay controls className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { data: planConfig } = useQuery(orpc.flags.getConfig.queryOptions());
  const demoVideoUrl = planConfig?.demoVideoUrl ?? null;

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

          <div className="mb-5 flex items-center gap-5">
            <h1
              className="leading-[1.08] tracking-[-0.02em]"
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

            {demoVideoUrl && (
              <button
                onClick={() => setVideoOpen(true)}
                className="cvp-play-btn flex shrink-0 size-[80px] items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ background: "#dc2626", color: "#ffffff" }}
                aria-label="Watch demo video"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 6l10 6-10 6V6z" />
                </svg>
              </button>
            )}
          </div>

          <p
            className="mb-8 max-w-[420px] text-lg font-light leading-[1.75]"
            style={{ color: "var(--cvp-ink-mid)" }}
          >
            Build a polished, professional CV completely free. No design skills or technical
            knowledge needed — just you and your story.
          </p>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:!bg-[#dc2626] active:!bg-[#b91c1c]"
              style={{
                fontFamily: "var(--font-body)",
                background: "#047857",
                color: "#ffffff",
              }}
            >
              Get started
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              onClick={() => {
                document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium transition-[background,border-color,transform] duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-body)",
                background: "transparent",
                border: "1.5px solid var(--cvp-border-mid)",
                color: "var(--cvp-ink-mid)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="14" y="3" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="14" y="12" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="3" y="16" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              Preview CV
            </button>
          </div>

          <div
            className="mt-5 grid grid-cols-3 gap-6 border-t pt-5"
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

        {videoOpen && demoVideoUrl && (
          <VideoLightbox url={demoVideoUrl} onClose={() => setVideoOpen(false)} />
        )}

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
            <div className="flex size-[26px] shrink-0 items-center justify-center rounded-lg" style={{ background: "#dc2626" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="5" y="19" fontSize="7" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">PDF</text>
              </svg>
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
              className="flex size-[26px] shrink-0 items-center justify-center rounded-lg"
              style={{ background: "#7c3aed" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
                background: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
              }}
            >
              <div className="pointer-events-none absolute right-[-50px] top-[-50px] size-[180px] rounded-full bg-white/5" />
              <div className="flex items-center gap-3">
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-full text-[22px] text-white"
                  style={{
                    fontFamily: "var(--font-serif)",
                    border: "2px solid rgba(255,255,255,.4)",
                    background: "rgba(255,255,255,.18)",
                  }}
                >
                  M
                </div>
                <div>
                  <div className="text-lg text-white" style={{ fontFamily: "var(--font-serif)" }}>
                    Marie Andrew
                  </div>
                  <div className="text-xs font-light text-white/65">
                    Marketing Manager · Roseau, Dominica
                  </div>
                </div>
              </div>
            </div>

            {/* Contact info strip */}
            <div
              className="flex items-center gap-3 border-b px-[26px] py-3"
              style={{ borderColor: "var(--cvp-border)" }}
            >
              {[
                { icon: "mail", width: "52px" },
                { icon: "smartphone", width: "44px" },
                { icon: "location_on", width: "48px" },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined shrink-0"
                    style={{ fontSize: "11px", color: "var(--cvp-ink-muted)" }}
                  >
                    {item.icon}
                  </span>
                  <div className="cvp-shimmer h-[6px] rounded" style={{ width: item.width }} />
                </div>
              ))}
              {/* LinkedIn — pushed to far right */}
              <div className="ml-auto flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2"/>
                  <path d="M7 10v7M7 7v.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M11 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M11 10v7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div className="cvp-shimmer h-[6px] rounded" style={{ width: "40px" }} />
              </div>
            </div>

            {/* Card body */}
            <div className="space-y-[18px] px-[26px] py-[22px]">
              {/* Summary */}
              <div>
                <div
                  className="mb-2 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Summary
                </div>
                <p className="text-[10.5px] leading-[1.65]" style={{ color: "var(--cvp-ink-mid)" }}>
                  Results-driven Marketing Manager with 8+ years delivering brand growth, digital campaigns, and cross-functional team leadership.
                </p>
              </div>

              {/* Skills */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Skills
                </div>
                {[
                  { name: "Brand Strategy", width: "90%", color: "#f59e0b" },
                  { name: "Digital Marketing", width: "82%", color: "#8b5cf6" },
                  { name: "Team Leadership", width: "68%", color: "#f97316" },
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
                        style={{ width: skill.width, background: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Education
                </div>
                {[
                  { school: "Dominica State College", degree: "BSc Business Administration", year: "2016", accent: "#0ea5e9" },
                  { school: "Monroe College, St Lucia", degree: "BSc Marketing Management", year: "2019", accent: "#8b5cf6" },
                ].map((item, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold" style={{ color: "var(--cvp-ink)" }}>{item.degree}</span>
                      <span className="text-[9px]" style={{ color: "var(--cvp-ink-muted)" }}>{item.year}</span>
                    </div>
                    <div className="text-[9px]" style={{ color: "var(--cvp-ink-muted)" }}>{item.school}</div>
                  </div>
                ))}
              </div>

              {/* Qualifications */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Qualifications
                </div>
                {[
                  { label: "Google Digital Marketing Certificate", accent: "#0ea5e9", icon: "verified" },
                  { label: "HubSpot Marketing Certification", accent: "#8b5cf6", icon: "verified" },
                  { label: "Meta Blueprint Certification", accent: "#10b981", icon: "verified" },
                ].map((item, i) => (
                  <div key={i} className="mb-1.5 flex items-center gap-2">
                    <span
                      className="material-symbols-outlined shrink-0"
                      style={{ fontSize: "12px", color: item.accent }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-[10px]" style={{ color: "var(--cvp-ink-mid)" }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div>
                <div
                  className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--cvp-accent)" }}
                >
                  Languages
                </div>
                <div className="flex gap-1.5">
                  {[
                    { label: "English", color: "#10b981", bg: "rgba(16,185,129,.12)" },
                    { label: "French", color: "#6366f1", bg: "rgba(99,102,241,.12)" },
                    { label: "Spanish", color: "#f59e0b", bg: "rgba(245,158,11,.12)" },
                  ].map((tag) => (
                    <span
                      key={tag.label}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                      style={{ color: tag.color, background: tag.bg }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
