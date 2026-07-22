import { useEffect, useRef } from "react";

/**
 * Custom cursor: a dot that follows the mouse instantly and a ring
 * that follows with easing. The ring expands on hover over interactive elements.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };

    const addHot = () => ring.classList.add("hot");
    const removeHot = () => ring.classList.remove("hot");

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(loop);

    const hotTargets = document.querySelectorAll(
      "a, button, [data-hot], .tilt-card, .chip, .metric-card, .product-card, input, .magnetic-btn"
    );
    hotTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHot);
      el.addEventListener("mouseleave", removeHot);
    });

    // Re-scan periodically for dynamically added elements
    const scanInterval = setInterval(() => {
      const newTargets = document.querySelectorAll(
        "a, button, [data-hot], .tilt-card, .chip, .metric-card, .product-card, input, .magnetic-btn"
      );
      newTargets.forEach((el) => {
        if (!(el as any).__cursorBound) {
          el.addEventListener("mouseenter", addHot);
          el.addEventListener("mouseleave", removeHot);
          (el as any).__cursorBound = true;
        }
      });
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      clearInterval(scanInterval);
      hotTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHot);
        el.removeEventListener("mouseleave", removeHot);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cur-ring" aria-hidden="true" />
      <div ref={dotRef} className="cur-dot" aria-hidden="true" />
    </>
  );
}
