import { useEffect, useRef, useState } from "react";

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);
  const currentRef = useRef(0);

  useEffect(() => {
    const resources = [
      ...document.querySelectorAll<HTMLImageElement | HTMLLinkElement>(
        'img, link[rel="stylesheet"]',
      ),
    ];
    const total = Math.max(resources.length, 1);
    let loaded = 0;

    function updatePct(target: number) {
      if (target <= currentRef.current) return;
      const step = () => {
        if (currentRef.current < target) {
          currentRef.current++;
          setPercent(currentRef.current);
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }

    resources.forEach((r) => {
      if (
        (r as HTMLImageElement).complete ||
        (r as HTMLLinkElement).sheet
      ) {
        loaded++;
      } else {
        r.addEventListener("load", () => {
          loaded++;
          updatePct(Math.round((loaded / total) * 100));
        });
        r.addEventListener("error", () => {
          loaded++;
          updatePct(Math.round((loaded / total) * 100));
        });
      }
    });

    updatePct(Math.round((loaded / total) * 100));

    const finish = () => {
      updatePct(100);
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setDone(true), 400);
      }, 200);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
    };
  }, []);

  if (done) return null;

  return (
    <div className={`cvp-preloader${fading ? " done" : ""}`}>
      <img src="/logo/light.svg" alt="ProTalent CV" className="h-8 w-auto dark:hidden" />
      <img src="/logo/dark.svg" alt="ProTalent CV" className="hidden h-8 w-auto dark:block" />

      <div className="cvp-preloader-bar">
        <div className="cvp-preloader-bar-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="cvp-preloader-percent">{percent}%</div>
    </div>
  );
}
