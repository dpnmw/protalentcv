export function CTA() {
  return (
    <section
      className="relative overflow-hidden px-5 py-14 md:px-12 md:py-20 lg:py-28"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-footer-bg)" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-300px] size-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "rgba(37,99,235,.1)", filter: "blur(80px)" }}
      />

      <div className="relative z-[1] mx-auto max-w-[700px] text-center">
        <h2
          className="mb-4 leading-[1.1] tracking-[-0.01em] text-white"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 5vw, 54px)",
          }}
        >
          Your next opportunity
          <br />
          <em style={{ fontStyle: "italic", color: "var(--cvp-b300)" }}>
            starts with a great CV.
          </em>
        </h2>

        <p className="mb-10 text-[17px] font-light leading-[1.75] text-white/[0.48]">
          It takes less than five minutes to build something you're genuinely proud to send.
          <br />
          No debit card, no commitment.
        </p>

        <a
          href="mailto:dpnmediaworks@gmail.com"
          className="inline-flex items-center gap-2 rounded-full border-none px-9 py-4 text-[15px] font-medium transition-[transform,background,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
          style={{
            fontFamily: "var(--font-body)",
            background: "#fff",
            color: "var(--cvp-b950)",
            boxShadow: "0 4px 24px rgba(0,0,0,.22)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f4ff")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>mail</span>
          Get in touch
        </a>

      </div>
    </section>
  );
}
