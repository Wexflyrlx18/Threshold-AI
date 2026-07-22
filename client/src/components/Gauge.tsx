import { useEffect, useRef, useState } from "react";

/**
 * Gauge: an SVG circular progress that fills to `target` (0-100) when scrolled into view.
 */
export default function Gauge({ target = 84 }: { target?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const CIRC = 653;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const duration = 1600;
            const animate = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="relative w-[240px] h-[240px] flex-none"
      style={{ filter: "drop-shadow(0 0 30px rgba(232,255,82,0.2))" }}
    >
      <svg width="240" height="240" viewBox="0 0 240 240" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="120" cy="120" r="104" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="13" />
        <circle
          cx="120"
          cy="120"
          r="104"
          fill="none"
          stroke="#e8ff52"
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC - (CIRC * value) / 100}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display font-bold text-[78px] tracking-[-0.05em] tabular-nums">
          {value}
        </span>
        <span className="text-[11px] tracking-[0.26em] uppercase mt-1" style={{ color: "#3e3e46" }}>
          Risk score
        </span>
      </div>
    </div>
  );
}
