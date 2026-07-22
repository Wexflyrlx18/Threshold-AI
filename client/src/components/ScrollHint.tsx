import { useEffect, useState } from "react";

/**
 * ScrollHint: a fixed "Scroll ↓" indicator that fades out when the user starts scrolling.
 */
export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-[26px] left-1/2 z-40 text-[11px] tracking-[0.24em] uppercase bob-anim pointer-events-none"
      style={{ color: "#3e3e46", transform: "translateX(-50%)" }}
    >
      Scroll ↓
    </div>
  );
}
