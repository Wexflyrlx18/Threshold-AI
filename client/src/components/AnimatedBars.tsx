import { useEffect, useRef, useState } from "react";

/**
 * AnimatedBars: horizontal bars that scale in from 0 to their target width
 * when scrolled into view.
 */
export default function AnimatedBars({
  items,
}: {
  items: { label: string; width: number }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-[18px]">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4 text-[clamp(17px,2vw,23px)] tracking-[-0.01em]">
          <div
            className="h-[6px] rounded-sm flex-none bg-[#f2f2f4] origin-left transition-transform duration-900"
            style={{
              width: `${item.width}px`,
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${i * 0.15}s`,
            }}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
}
