export function QuoteStrip() {
  return (
    <div
      className="relative overflow-hidden px-5 py-16 md:px-12 md:py-20"
      style={{ background: "var(--cvp-bg-sub)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--cvp-accent)", opacity: 0.06, filter: "blur(90px)" }}
      />

      <div className="relative mx-auto flex max-w-[780px] flex-col items-center gap-6 text-center">
        {/* Large decorative quote mark */}
        <svg
          width="52"
          height="40"
          viewBox="0 0 52 40"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 40V24C0 17.333 1.733 11.867 5.2 7.6 8.667 3.2 13.867.667 20.8 0v7c-3.467 0-6.067 1.133-7.8 3.4-1.733 2.267-2.6 5.267-2.6 9H20.8V40H0Zm31.2 0V24c0-6.667 1.733-12.133 5.2-16.4C39.867 3.2 45.067.667 52 0v7c-3.467 0-6.067 1.133-7.8 3.4-1.733 2.267-2.6 5.267-2.6 9H52V40H31.2Z"
            style={{ fill: "var(--cvp-accent)", opacity: 0.7 }}
          />
        </svg>

        {/* Quote text */}
        <p
          className="text-[20px] font-light leading-[1.75] md:text-[24px] lg:text-[26px]"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            color: "var(--cvp-ink)",
            letterSpacing: "-0.01em",
          }}
        >
          A great CV doesn't just list what you've done —{" "}
          <span style={{ color: "var(--cvp-accent)", fontStyle: "italic" }}>
            it tells the story of who you are
          </span>{" "}
          and where you're going.
        </p>

        {/* Divider + attribution */}
        <div className="flex items-center gap-4">
          <span
            className="block h-[1px] w-10"
            style={{ background: "var(--cvp-border-mid)" }}
          />
          <span
            className="text-[12px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "var(--cvp-ink-muted)" }}
          >
            ProTalent CV
          </span>
          <span
            className="block h-[1px] w-10"
            style={{ background: "var(--cvp-border-mid)" }}
          />
        </div>
      </div>
    </div>
  );
}
