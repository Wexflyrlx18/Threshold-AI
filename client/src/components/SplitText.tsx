import { useEffect, useRef, ReactNode } from "react";

/**
 * Splits text into individual characters that animate in with staggered delays
 * when the element enters the viewport.
 */
export default function SplitText({
  children,
  className = "",
  as: Tag = "h2",
  style,
}: {
  children: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Process text nodes into character spans
    const walk = (node: Node, out: HTMLElement) => {
      node.childNodes.forEach((n) => {
        if (n.nodeType === Node.TEXT_NODE) {
          const text = n.textContent || "";
          text.split(/(\s+)/).forEach((w) => {
            if (w.trim() === "") {
              out.appendChild(document.createTextNode(w));
              return;
            }
            const word = document.createElement("span");
            word.className = "inline-block whitespace-nowrap";
            Array.from(w).forEach((c) => {
              const s = document.createElement("span");
              s.className = "split-char";
              s.textContent = c;
              word.appendChild(s);
            });
            out.appendChild(word);
          });
        } else if (n.nodeType === Node.ELEMENT_NODE) {
          const cl = (n as HTMLElement).cloneNode(false) as HTMLElement;
          out.appendChild(cl);
          walk(n, cl);
        }
      });
    };

    const frag = document.createElement("span");
    walk(el, frag);
    el.innerHTML = "";
    el.appendChild(frag);

    const chars = el.querySelectorAll(".split-char");
    chars.forEach((c, i) => {
      (c as HTMLElement).style.transitionDelay = `${i * 0.016}s`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            chars.forEach((c) => c.classList.add("in"));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
