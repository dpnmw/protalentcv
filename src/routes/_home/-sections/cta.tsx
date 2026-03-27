export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-16 md:px-12 md:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-footer-bg)" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-300px] size-[700px] -translate-x-1/2 rounded-full"
        style={{ background: "rgba(37,99,235,.1)", filter: "blur(80px)" }}
      />

      <div className="relative z-[1] mx-auto max-w-[900px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <div
            className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
            style={{ color: "var(--cvp-b300)" }}
          >
            <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-b300)" }} />
            Get in touch
          </div>
          <p className="text-[17px] font-light leading-[1.75] text-white/50">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:dpnmediaworks@gmail.com"
            className="group flex flex-col items-center gap-3 rounded-[20px] px-6 py-8 text-center transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <div
              className="flex size-12 items-center justify-center rounded-full"
              style={{ background: "rgba(37,99,235,.25)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold text-white">Email us</div>
              <div className="text-xs text-white/50">dpnmediaworks@gmail.com</div>
            </div>
          </a>

          {/* Instagram / Social */}
          <a
            href="https://instagram.com/dpnmediaworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-[20px] px-6 py-8 text-center transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <div
              className="flex size-12 items-center justify-center rounded-full"
              style={{ background: "rgba(236,72,153,.2)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#f9a8d4" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4" stroke="#f9a8d4" strokeWidth="1.8"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#f9a8d4"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold text-white">Instagram</div>
              <div className="text-xs text-white/50">@dpnmediaworks</div>
            </div>
          </a>

          {/* Start building CTA */}
          <a
            href="/dashboard"
            className="group flex flex-col items-center gap-3 rounded-[20px] px-6 py-8 text-center transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(37,99,235,.15)",
              border: "1px solid rgba(37,99,235,.3)",
            }}
          >
            <div
              className="flex size-12 items-center justify-center rounded-full"
              style={{ background: "rgba(37,99,235,.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold text-white">Start building</div>
              <div className="text-xs text-white/50">Free, no card required</div>
            </div>
          </a>
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-[13px] text-white/30">
          We typically respond within 24 hours · ProTalent CV by DPN Media Works
        </p>
      </div>
    </section>
  );
}
