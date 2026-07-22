import { useEffect, useRef, ReactNode } from "react";

/**
 * MagneticButton: a button/link that is attracted to the cursor on hover.
 */
export default function MagneticButton({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
    };
    const onMouseLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      data-hot
      className={`magnetic-btn inline-flex items-center gap-[10px] px-[38px] py-[18px] rounded-sm font-semibold text-[16px] text-black bg-[#e8ff52] transition-transform duration-200 glow-box ${className}`}
    >
      {children}
    </a>
  );
}
