import { useEffect, useState } from "react";

/**
 * Preloader: counts 0→100 with a progress bar, then slides up to reveal the page.
 */
export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 9 + 3;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          onComplete();
        }, 420);
      }
      setValue(Math.floor(v));
    }, 90);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-[#070709] flex flex-col items-center justify-center transition-transform duration-[1100ms] ${
        done ? "-translate-y-full" : ""
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div
        className="font-display font-bold leading-none tracking-[-0.06em] tabular-nums"
        style={{ fontSize: "clamp(70px, 16vw, 200px)" }}
      >
        {value}
      </div>
      <div
        className="mt-[18px] text-[11px] tracking-[0.4em] uppercase"
        style={{ color: "#7a7a82" }}
      >
        Threshold AI · loading
      </div>
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-200"
        style={{ background: "#e8ff52", width: `${value}%` }}
      />
    </div>
  );
}
