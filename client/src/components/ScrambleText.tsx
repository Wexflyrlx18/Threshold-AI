import { useEffect, useRef } from "react";

/**
 * ScrambleText: text that scrambles through random characters before settling
 * on the final text when scrolled into view.
 */
export default function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const G = "ABCDEFGHJKLMNPQRSTUVWXYZ#%&*<>/\\01";
    let frame = 0;
    const total = text.length * 3;
    let intervalId: ReturnType<typeof setInterval>;

    const scramble = () => {
      let out = "";
      for (let i = 0; i < text.length; i++) {
        out += i < frame / 3 ? text[i] : text[i] === " " ? " " : G[Math.floor(Math.random() * G.length)];
      }
      el.textContent = out;
      frame++;
      if (frame > total) {
        clearInterval(intervalId);
        el.textContent = text;
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            intervalId = setInterval(scramble, 26);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
