/**
 * Fixed top navigation bar with brand and CTA.
 */
export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-[22px] backdrop-blur-md bg-[#070709]/50 border-b border-white/[0.08]">
      <div className="flex items-center gap-[11px] font-display font-bold text-[15px] tracking-[-0.02em]">
        <img src="/images/logo-icon.png" alt="Threshold AI" className="w-7 h-7" />
        Threshold&nbsp;AI
      </div>
      <a
        href="#contact"
        data-hot
        className="text-[12px] tracking-[0.06em] border border-white/[0.08] px-[18px] py-[10px] rounded-sm transition-all duration-300 hover:bg-[#f2f2f4] hover:text-black"
      >
        Запросить пилотный доступ
      </a>
    </nav>
  );
}
