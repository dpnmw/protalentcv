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
        <div className="mb-12 text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
            style={{ color: "var(--cvp-b300)" }}
          >
            <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-b300)" }} />
            Get in touch
          </div>
          <h2
            className="mb-3 leading-[1.1] tracking-[-0.01em] text-white"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 4vw, 42px)",
            }}
          >
            We'd love to hear from you.
          </h2>
          <p className="text-[16px] font-light text-white/50">
            Have a question, feedback, or just want to say hi?
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Email — red */}
          <a
            href="mailto:dpnmediaworks@gmail.com"
            className="group flex flex-col gap-4 rounded-[20px] px-6 py-7 transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(220,38,38,.15)",
              border: "1px solid rgba(220,38,38,.3)",
            }}
          >
            <div
              className="flex size-11 items-center justify-center rounded-xl"
              style={{ background: "rgba(220,38,38,.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#fca5a5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="#fca5a5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-white">Email us</div>
              <div className="text-xs leading-relaxed text-white/50">dpnmediaworks@gmail.com</div>
            </div>
            <div className="mt-auto flex items-center gap-1 text-xs font-medium text-red-400">
              Send a message
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* Facebook — blue */}
          <a
            href="https://facebook.com/dpnmediaworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-[20px] px-6 py-7 transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(37,99,235,.15)",
              border: "1px solid rgba(37,99,235,.3)",
            }}
          >
            <div
              className="flex size-11 items-center justify-center rounded-xl"
              style={{ background: "rgba(37,99,235,.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#93c5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-white">Facebook</div>
              <div className="text-xs leading-relaxed text-white/50">@dpnmediaworks</div>
            </div>
            <div className="mt-auto flex items-center gap-1 text-xs font-medium text-blue-400">
              Follow us
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* WhatsApp — green */}
          <a
            href="https://wa.me/17672453041"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-[20px] px-6 py-7 transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(22,163,74,.15)",
              border: "1px solid rgba(22,163,74,.3)",
            }}
          >
            <div
              className="flex size-11 items-center justify-center rounded-xl"
              style={{ background: "rgba(22,163,74,.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#86efac" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-white">WhatsApp</div>
              <div className="text-xs leading-relaxed text-white/50">+1 767 245 3041</div>
            </div>
            <div className="mt-auto flex items-center gap-1 text-xs font-medium text-green-400">
              Start a chat
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>

          {/* Start building — orange */}
          <a
            href="/dashboard"
            className="group flex flex-col gap-4 rounded-[20px] px-6 py-7 transition-transform duration-200 hover:-translate-y-1"
            style={{
              background: "rgba(234,88,12,.15)",
              border: "1px solid rgba(234,88,12,.3)",
            }}
          >
            <div
              className="flex size-11 items-center justify-center rounded-xl"
              style={{ background: "rgba(234,88,12,.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="#fdba74" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="mb-1 text-[15px] font-semibold text-white">Start building</div>
              <div className="text-xs leading-relaxed text-white/50">No account needed to begin.</div>
            </div>
            <div className="mt-auto flex items-center gap-1 text-xs font-medium text-orange-400">
              Get started
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
