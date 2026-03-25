import { useEffect, useRef, useState } from "react";

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);
  const percentRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Increment by small steps — slows down as it approaches 90, then jumps to 100 on load
    const tick = () => {
      percentRef.current = Math.min(
        percentRef.current + (90 - percentRef.current) * 0.035,
        89,
      );
      setPercent(Math.round(percentRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const finish = () => {
      cancelAnimationFrame(rafRef.current);
      setPercent(100);
      setTimeout(() => setDone(true), 400);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (done) return null;

  return (
    <div className="cvp-preloader" style={{ animationDelay: `${2}s` }}>
      <div
        className="text-[22px] tracking-tight"
        style={{ fontFamily: "var(--font-serif)", color: "var(--cvp-ink)" }}
      >
        ProTalent<span style={{ color: "var(--cvp-accent)" }}> CV</span>
      </div>

      <div className="cvp-preloader-bar">
        <div className="cvp-preloader-bar-fill" />
      </div>

      <div className="cvp-preloader-percent">{percent}%</div>
    </div>
  );
}
