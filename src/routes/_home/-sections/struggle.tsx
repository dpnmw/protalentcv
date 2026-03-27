import React from "react";

export function Struggle() {
  return (
    <section
      id="struggle"
      className="px-5 py-14 md:px-12 md:py-20 lg:py-24"
      style={{ fontFamily: "var(--font-body)", background: "var(--cvp-bg-sub)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_400px]">
          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em]"
              style={{ color: "var(--cvp-accent)" }}
            >
              <span className="block h-[1.5px] w-5" style={{ background: "var(--cvp-accent)" }} />
              Authentic Connection
            </div>

            <h2
              className="mb-3 leading-[1.15] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.8vw, 44px)",
                color: "var(--cvp-ink)",
              }}
            >
              The struggle ends here.
              <br />
              Your story begins.
            </h2>

            <p
              className="max-w-[500px] text-[17px] font-light leading-[1.75]"
              style={{ color: "var(--cvp-ink-mid)" }}
            >
              Job searching is hard. The uncertainty, the late nights, the fear of an empty page — 
              we get it. ProTalent CV was built to take the layout stress away, so you can focus 
              on what matters: your next opportunity.
            </p>
          </div>

          <div className="relative aspect-[4/5] h-[480px] w-full overflow-hidden rounded-[24px]">
            <img
              src="/photos/student.png"
              alt="From frustration to readiness"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ boxShadow: "0 10px 40px -15px rgba(0,0,0,0.2)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
