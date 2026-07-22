/**
 * Marquee: an infinite scrolling text strip with alternating bold and muted segments.
 */
export default function Marquee({
  items,
}: {
  items: { text: string; bold?: boolean }[];
}) {
  const content = (
    <div className="marquee-track inline-block whitespace-nowrap font-display font-bold tracking-[-0.04em]" style={{ fontSize: "clamp(28px, 4vw, 58px)" }}>
      {items.map((item, i) => (
        <span key={i} className={item.bold ? "text-[#f2f2f4]" : "text-[#3e3e46]"}>
          {item.text}
          {i < items.length - 1 && <span className="text-[#3e3e46]"> · </span>}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden border-t border-b border-white/[0.08] py-7 relative z-[3] bg-[#070709]"
      aria-hidden="true"
    >
      <div className="inline-block whitespace-nowrap">
        {content}
        {content}
      </div>
    </div>
  );
}
