import { useEffect, useState } from "react";
import ParticleSphere from "@/components/ParticleSphere";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollHint from "@/components/ScrollHint";
import Navigation from "@/components/Navigation";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Gauge from "@/components/Gauge";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import ScrambleText from "@/components/ScrambleText";
import Marquee from "@/components/Marquee";
import LineMask from "@/components/LineMask";
import AnimatedBars from "@/components/AnimatedBars";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      // Trigger hero reveals
      const heroElements = document.querySelectorAll("#hero .reveal-up, #hero .line-mask");
      heroElements.forEach((el) => el.classList.add("in"));
    }
  }, [loaded]);

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f2f2f4] overflow-x-hidden">
      <Preloader onComplete={() => setLoaded(true)} />
      <ParticleSphere />
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <ScrollProgress />
      <ScrollHint />
      <Navigation />

      <main className="relative z-[3]">
        {/* ===== 1. HERO SECTION ===== */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-[120px] relative"
        >
          {/* Hero background image */}
          <div className="absolute inset-0 z-0 opacity-80">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
              alt=""
              className="w-full h-full object-cover object-right"
              style={{ filter: "saturate(1.4) brightness(1.1)" }}
              aria-hidden="true"
            />
          </div>
          {/* Left gradient so text stays readable */}
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(to right, #070709 40%, #070709cc 60%, transparent 80%)" }} />

          <div className="max-w-[1180px] mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <div
                  className="text-[11px] tracking-[0.34em] uppercase text-[#7a7a82] font-medium mb-[30px]"
                >
                  <ScrambleText text="AUTONOMOUS AI RED TEAMMING LAB" />
                </div>
                <h1
                  className="font-display font-bold leading-[0.86] tracking-[-0.06em] glow-text"
                  style={{ fontSize: "clamp(36px, 7vw, 88px)" }}
                >
                  <LineMask>Автономная</LineMask>
                  <LineMask>лаборатория</LineMask>
                  <LineMask>стресс-тестирования</LineMask>
                  <LineMask>
                    <span className="text-[#e8ff52]">ИИ-агентов</span>
                  </LineMask>
                </h1>
                <Reveal delay={0.3} className="mt-[36px]">
                  <p
                    className="text-[clamp(18px,2.2vw,26px)] leading-[1.28] tracking-[-0.02em] max-w-[32ch]"
                  >
                    Эволюционный Red Teaming на вашем localhost с аппаратной Kill Button и официальной сертификацией для GRC-аудиторов.
                  </p>
                </Reveal>
                <Reveal delay={0.45} className="mt-[22px]">
                  <p className="text-[#7a7a82] text-[clamp(15px,1.5vw,18px)] max-w-[54ch]">
                    Без риска утечки данных. Air-gapped изоляция. Миллионы мутирующих эксплойтов.
                  </p>
                </Reveal>
                <Reveal delay={0.54} className="mt-[46px] flex flex-wrap gap-4">
                  <MagneticButton href="#contact">
                    Запросить пилотный доступ ↗
                  </MagneticButton>
                  <a
                    href="#products"
                    data-hot
                    className="inline-flex items-center gap-[10px] px-[38px] py-[18px] rounded-sm font-semibold text-[16px] border border-white/[0.12] text-[#f2f2f4] transition-all duration-300 hover:border-[#e8ff52] hover:text-[#e8ff52]"
                  >
                    Заказать демонстрацию SkyNet
                  </a>
                </Reveal>
              </div>

            </div>
          </div>
          <div className="step-num">01 / 06</div>
        </section>

        {/* ===== 2. PROBLEM / PAIN ===== */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-[120px] relative">
          <div className="max-w-[1180px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[20px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff52] pulse-dot" style={{ boxShadow: "0 0 10px #e8ff52" }} />
              [ THREAT LOG · LIVE ]
            </div>
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
                Проблема / Боль
              </div>
            </Reveal>
            <div className="mt-[18px]">
              <SplitText className="font-display font-semibold leading-[0.98] tracking-[-0.04em]" style={{ fontSize: "clamp(30px, 5vw, 72px)" }}>
                ИИ-агенты внедряются быстрее, чем их успевают проверять.
              </SplitText>
            </div>

            <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
              <Reveal delay={0.1}>
                <TiltCard className="border border-white/[0.08] rounded p-[34px] bg-white/[0.012] hover:border-white/30 transition-colors">
                  <h3 className="text-[12px] tracking-[0.16em] uppercase text-[#3e3e46] mb-[18px]">
                    Скорость внедрения
                  </h3>
                  <p className="text-[#7a7a82] text-[17px] tracking-[-0.01em]">
                    ИИ-агенты запускаются в продакшен раньше, чем завершается security review. Окно уязвимости растёт с каждым днём.
                  </p>
                </TiltCard>
              </Reveal>
              <Reveal delay={0.2}>
                <TiltCard className="border border-white/[0.08] rounded p-[34px] bg-white/[0.012] hover:border-white/30 transition-colors">
                  <h3 className="text-[12px] tracking-[0.16em] uppercase text-[#3e3e46] mb-[18px]">
                    Слепота классики
                  </h3>
                  <p className="text-[#7a7a82] text-[17px] tracking-[-0.01em]">
                    Классические сканеры и WAF «слепы» к промпт-инъекциям и джейлбрейкам. Традиционные инструменты не видят AI-атак.
                  </p>
                </TiltCard>
              </Reveal>
              <Reveal delay={0.3}>
                <TiltCard className="border border-white/[0.08] rounded p-[34px] bg-white/[0.012] hover:border-white/30 transition-colors">
                  <h3 className="text-[12px] tracking-[0.16em] uppercase text-[#3e3e46] mb-[18px]">
                    Облачный запрет
                  </h3>
                  <p className="text-[#7a7a82] text-[17px] tracking-[-0.01em]">
                    Облачные решения запрещены из-за угрозы утечки корпоративных данных. Данные не должны покидать контур компании.
                  </p>
                </TiltCard>
              </Reveal>
            </div>

            <Reveal delay={0.4} className="mt-[40px]">
              <div className="flex flex-wrap gap-[10px]">
                {["prompt injection", "jailbreak", "agent misuse", "data leakage", "compliance failure"].map((tag) => (
                  <span
                    key={tag}
                    className="chip border border-white/[0.08] rounded-sm px-5 py-[11px] text-[14px] text-[#7a7a82] transition-all duration-300 hover:text-white hover:border-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="step-num">02 / 06</div>
        </section>

        {/* ===== 3. SOLUTION & PRODUCTS ===== */}
        <section id="products" className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-[120px] relative">
          <div className="max-w-[1180px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[20px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff52] pulse-dot" style={{ boxShadow: "0 0 10px #e8ff52" }} />
              [ PRODUCT MATRIX ]
            </div>
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
                Решение и продукт
              </div>
            </Reveal>
            <div className="mt-[18px]">
              <SplitText className="font-display font-semibold leading-[0.98] tracking-[-0.04em] max-w-[20ch]" style={{ fontSize: "clamp(30px, 5vw, 72px)" }}>
                Kill Lab — изолированная среда на вашем localhost.
              </SplitText>
            </div>
            <Reveal delay={0.2} className="mt-[30px]">
              <p className="text-[#7a7a82] text-[clamp(15px,1.5vw,18px)] max-w-[54ch]">
                Среда работает строго через localhost с физической Kill Button. Никакого интернета, данные не покидают контур компании. Три уровня защиты — от малого бизнеса до энтерпрайза.
              </p>
            </Reveal>

            {/* Kill Lab visual */}
            <Reveal delay={0.3} className="mt-[40px]">
              <div className="relative rounded overflow-hidden border border-white/[0.08] h-[200px] md:h-[280px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/kill-lab.png`}
                  alt="Kill Lab — изолированная среда тестирования"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#e8ff52] pulse-dot" style={{ boxShadow: "0 0 14px #e8ff52" }} />
                  <span className="font-mono text-[13px] tracking-[0.1em] text-[#e8ff52] uppercase">Kill Lab · Active</span>
                </div>
                <div className="absolute top-6 right-6 font-mono text-[11px] text-[#3e3e46] tracking-[0.2em] uppercase">
                  localhost:8080 · air-gapped
                </div>
              </div>
            </Reveal>

            {/* Product Cards */}
            <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
              {/* Tenet */}
              <Reveal delay={0.1}>
                <TiltCard className="product-card border border-white/[0.08] rounded bg-white/[0.012] hover:border-white/30 transition-colors h-full flex flex-col overflow-hidden">
                  <div className="h-[140px] overflow-hidden relative">
                    <img src={`${import.meta.env.BASE_URL}images/product-tenet.png`} alt="Tenet" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] to-transparent" />
                  </div>
                  <div className="p-[30px] flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-[20px]">
                      <span className="font-mono text-[13px] text-[#3e3e46] tracking-[0.1em]">01</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a7a82] border border-white/[0.08] px-3 py-1 rounded-sm">SMB</span>
                    </div>
                    <h3 className="font-display font-bold text-[28px] tracking-[-0.03em] mb-[14px]">Tenet</h3>
                    <p className="text-[#7a7a82] text-[15px] leading-[1.5] flex-1">
                      Для малого бизнеса. Базовый набор стресс-тестов для ИИ-агентов. Простой запуск, автоматические отчёты, минимальная конфигурация.
                    </p>
                    <div className="mt-[24px] flex flex-wrap gap-2">
                      <span className="text-[11px] text-[#3e3e46] font-mono">localhost</span>
                      <span className="text-[11px] text-[#3e3e46]">·</span>
                      <span className="text-[11px] text-[#3e3e46] font-mono">basic tests</span>
                      <span className="text-[11px] text-[#3e3e46]">·</span>
                      <span className="text-[11px] text-[#3e3e46] font-mono">auto-reports</span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* Zentorno */}
              <Reveal delay={0.2}>
                <TiltCard className="product-card border border-white/[0.08] rounded bg-white/[0.012] hover:border-white/30 transition-colors h-full flex flex-col overflow-hidden">
                  <div className="h-[140px] overflow-hidden relative bg-[#0d0d10] flex items-center justify-center">
                    <div className="font-mono text-[11px] text-[#3e3e46] tracking-[0.2em] uppercase">[ CI/CD PIPELINE ]</div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7a7a82] pulse-dot" />
                      <span className="font-mono text-[10px] text-[#3e3e46] tracking-[0.15em]">streaming</span>
                    </div>
                  </div>
                  <div className="p-[30px] flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-[20px]">
                      <span className="font-mono text-[13px] text-[#3e3e46] tracking-[0.1em]">02</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#7a7a82] border border-white/[0.08] px-3 py-1 rounded-sm">GROWTH</span>
                    </div>
                    <h3 className="font-display font-bold text-[28px] tracking-[-0.03em] mb-[14px]">Zentorno</h3>
                    <p className="text-[#7a7a82] text-[15px] leading-[1.5] flex-1">
                      Для растущих компаний. Расширенная линейка тестов, мутация эксплойтов, интеграция с CI/CD, приоритизация фиксов.
                    </p>
                    <div className="mt-[24px] flex flex-wrap gap-2">
                      <span className="text-[11px] text-[#3e3e46] font-mono">CI/CD</span>
                      <span className="text-[11px] text-[#3e3e46]">·</span>
                      <span className="text-[11px] text-[#3e3e46] font-mono">mutations</span>
                      <span className="text-[11px] text-[#3e3e46]">·</span>
                      <span className="text-[11px] text-[#3e3e46] font-mono">priority</span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              {/* SkyNet - Flagship */}
              <Reveal delay={0.3}>
                <TiltCard className="product-card border border-[#e8ff52]/32 rounded bg-[#e8ff52]/[0.02] hover:border-[#e8ff52]/60 transition-colors h-full flex flex-col overflow-hidden">
                  <div className="h-[140px] overflow-hidden relative">
                    <img src={`${import.meta.env.BASE_URL}images/product-skynet.png`} alt="SkyNet" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] to-transparent" />
                  </div>
                  <div className="p-[30px] flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-[20px]">
                      <span className="font-mono text-[13px] text-[#e8ff52] tracking-[0.1em]">03</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#e8ff52] border border-[#e8ff52]/32 px-3 py-1 rounded-sm">FLAGSHIP</span>
                    </div>
                    <h3 className="font-display font-bold text-[28px] tracking-[-0.03em] mb-[14px] text-[#e8ff52]">
                      SkyNet
                    </h3>
                    <p className="text-[#f2f2f4]/80 text-[15px] leading-[1.5] flex-1">
                      Для энтерпрайза и банков. Симбиоз ИИ и инженеров. Миллионы мутирующих эксплойтов, полный GRC-аудит, сертификация ISO/IEC 27001.
                    </p>
                    <div className="mt-[24px] flex flex-wrap gap-2">
                      <span className="text-[11px] text-[#e8ff52]/60 font-mono">symbiosis</span>
                      <span className="text-[11px] text-[#e8ff52]/30">·</span>
                      <span className="text-[11px] text-[#e8ff52]/60 font-mono">GRC audit</span>
                      <span className="text-[11px] text-[#e8ff52]/30">·</span>
                      <span className="text-[11px] text-[#e8ff52]/60 font-mono">ISO 27001</span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            </div>
          </div>
          <div className="step-num">03 / 06</div>
        </section>

        {/* Marquee */}
        <Marquee
          items={[
            { text: "air-gapped", bold: true },
            { text: "kill button", bold: true },
            { text: "localhost only", bold: true },
            { text: "миллионы эксплойтов", bold: true },
            { text: "ISO/IEC 27001", bold: true },
            { text: "OWASP", bold: true },
            { text: "NIST", bold: true },
          ]}
        />

        {/* ===== 4. SECURITY ARCHITECTURE ===== */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-[120px] relative">
          <div className="max-w-[1180px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[20px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff52] pulse-dot" style={{ boxShadow: "0 0 10px #e8ff52" }} />
              [ SECURITY ARCHITECTURE ]
            </div>
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
                Архитектура безопасности
              </div>
            </Reveal>
            <div className="mt-[18px]">
              <SplitText className="font-display font-semibold leading-[0.98] tracking-[-0.04em] max-w-[22ch]" style={{ fontSize: "clamp(30px, 5vw, 72px)" }}>
                Снимаем все барьеры службы безопасности.
              </SplitText>
            </div>

            <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-[18px]">
              <Reveal delay={0.1}>
                <div className="border border-white/[0.08] rounded p-[34px] bg-white/[0.012] hover:border-white/30 transition-colors h-full">
                  <div className="mb-[20px]">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#e8ff52]">
                      <rect x="6" y="14" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M11 14V10a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="16" cy="22" r="2" fill="currentColor" />
                      <line x1="16" y1="24" x2="16" y2="27" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[8px]">[ AIR-GAP ]</div>
                  <h3 className="font-display font-bold text-[20px] tracking-[-0.02em] mb-[14px]">
                    Air-gapped изоляция
                  </h3>
                  <p className="text-[#7a7a82] text-[15px] leading-[1.5]">
                    Никакого интернета. Данные не покидают контур компании. Среда работает строго через localhost с физической Kill Button.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="border border-white/[0.08] rounded p-[34px] bg-white/[0.012] hover:border-white/30 transition-colors h-full">
                  <div className="mb-[20px]">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#e8ff52]">
                      <path d="M16 4C10 4 6 8 6 14c0 4 2 6 4 8M16 4c6 0 10 4 10 10 0 4-2 6-4 8M16 4v24M10 12h12M10 18h12M12 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="16" cy="10" r="1.5" fill="currentColor" />
                      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
                      <circle cx="16" cy="22" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[8px]">[ MUTATE ]</div>
                  <h3 className="font-display font-bold text-[20px] tracking-[-0.02em] mb-[14px]">
                    Геномодифицирующий ИИ
                  </h3>
                  <p className="text-[#7a7a82] text-[15px] leading-[1.5]">
                    Миллионы мутирующих эксплойтов для глубокого тестирования. Эволюционный подход: каждый прогон создаёт новые векторы атак.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="border border-white/[0.08] rounded p-[34px] bg-white/[0.012] hover:border-white/30 transition-colors h-full">
                  <div className="mb-[20px]">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#e8ff52]">
                      <rect x="5" y="6" width="22" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="9" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="9" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="9" y1="20" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="24" cy="22" r="3" fill="#070709" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M24 20.5v1.5l1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[8px]">[ AUDIT ]</div>
                  <h3 className="font-display font-bold text-[20px] tracking-[-0.02em] mb-[14px]">
                    Комплаенс-шлюз
                  </h3>
                  <p className="text-[#7a7a82] text-[15px] leading-[1.5]">
                    Автоматическая генерация отчётов по стандартам ISO/IEC 27001, OWASP и NIST. Готовые документы для GRC-аудиторов.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* How it works */}
            <Reveal delay={0.4} className="mt-[60px]">
              <div className="flex flex-col max-w-[760px]">
                <div className="flex items-baseline gap-5 py-[22px] border-t border-white/[0.08] text-[clamp(18px,2vw,28px)] tracking-[-0.02em] transition-all duration-400 hover:pl-[18px] hover:text-white">
                  <span className="text-[12px] text-[#3e3e46] w-7 flex-none font-mono tracking-[0.1em]">→</span>
                  Изолированная среда через localhost
                </div>
                <div className="flex items-baseline gap-5 py-[22px] border-t border-white/[0.08] text-[clamp(18px,2vw,28px)] tracking-[-0.02em] transition-all duration-400 hover:pl-[18px] hover:text-white">
                  <span className="text-[12px] text-[#3e3e46] w-7 flex-none font-mono tracking-[0.1em]">→</span>
                  Аппаратная Kill Button
                </div>
                <div className="flex items-baseline gap-5 py-[22px] border-t border-b border-white/[0.08] text-[clamp(18px,2vw,28px)] tracking-[-0.02em] transition-all duration-400 hover:pl-[18px] hover:text-white">
                  <span className="text-[12px] text-[#3e3e46] w-7 flex-none font-mono tracking-[0.1em]">→</span>
                  Автоматическая сертификация для GRC
                </div>
              </div>
            </Reveal>
          </div>
          <div className="step-num">04 / 06</div>
        </section>

        {/* ===== 5. TRUST SIGNALS ===== */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-[120px] relative">
          <div className="max-w-[1180px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[20px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff52] pulse-dot" style={{ boxShadow: "0 0 10px #e8ff52" }} />
              [ PROOF OF EXECUTION ]
            </div>
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
                Доверие и метрики
              </div>
            </Reveal>
            <div className="mt-[18px]">
              <SplitText className="font-display font-semibold leading-[0.98] tracking-[-0.04em] max-w-[20ch]" style={{ fontSize: "clamp(30px, 5vw, 72px)" }}>
                Доказательства, а не обещания.
              </SplitText>
            </div>

            {/* Metrics */}
            <div className="mt-[46px] grid grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] rounded overflow-hidden">
              <Reveal delay={0.1} className="metric-card bg-[#070709] p-9 transition-colors hover:bg-[#0d0d10]">
                <div className="font-display font-bold text-[#e8ff52] tracking-[-0.04em]" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
                  +<CountUp target={300} suffix="%" />
                </div>
                <div className="text-[#7a7a82] text-[14.5px] mt-[10px]">
                  больше скрытых уязвимостей, чем ручной аудит
                </div>
              </Reveal>
              <Reveal delay={0.2} className="metric-card bg-[#070709] p-9 transition-colors hover:bg-[#0d0d10]">
                <div className="font-display font-bold tracking-[-0.04em]" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
                  <CountUp target={80} prefix="−" suffix="%" />
                </div>
                <div className="text-[#7a7a82] text-[14.5px] mt-[10px]">
                  ручных усилий по безопасности
                </div>
              </Reveal>
              <Reveal delay={0.3} className="metric-card bg-[#070709] p-9 transition-colors hover:bg-[#0d0d10]">
                <div className="font-display font-bold tracking-[-0.04em]" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
                  <CountUp target={100} suffix="K" />–$<CountUp target={5} suffix="M" />
                </div>
                <div className="text-[#7a7a82] text-[14.5px] mt-[10px]">
                  предотвращение одного AI-инцидента
                </div>
              </Reveal>
              <Reveal delay={0.4} className="metric-card bg-[#070709] p-9 transition-colors hover:bg-[#0d0d10]">
                <div className="font-display font-bold tracking-[-0.04em]" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
                  минуты
                </div>
                <div className="text-[#7a7a82] text-[14.5px] mt-[10px]">
                  вместо недель на security review
                </div>
              </Reveal>
            </div>

            {/* Standards */}
            <Reveal delay={0.3} className="mt-[50px]">
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium mb-[24px]">
                Стандарты безопасности
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {["ISO/IEC 27001", "OWASP", "NIST", "SOC 2", "GDPR", "EU AI Act"].map((std) => (
                  <span
                    key={std}
                    className="chip border border-white/[0.08] rounded-sm px-5 py-[11px] text-[14px] transition-all duration-300 hover:border-[#e8ff52] hover:text-[#e8ff52]"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Gauge + Results */}
            <Reveal delay={0.2} className="mt-[60px]">
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium mb-[24px]">
                Результат — один экран
              </div>
              <div className="flex items-center gap-[54px] flex-wrap">
                <Gauge target={84} />
                <AnimatedBars
                  items={[
                    { label: "найденные уязвимости", width: 130 },
                    { label: "приоритет фиксов", width: 84 },
                    { label: "сценарии эксплуатации", width: 160 },
                  ]}
                />
              </div>
            </Reveal>
          </div>
          <div className="step-num">05 / 06</div>
        </section>

        {/* ===== 6. FINAL CTA / CONTACT ===== */}
        <section id="contact" className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-[120px] relative">
          <div className="max-w-[1180px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#3e3e46] mb-[20px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8ff52] pulse-dot" style={{ boxShadow: "0 0 10px #e8ff52" }} />
              [ SECURE CHANNEL · OPEN ]
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
              <div>
                <Reveal>
                  <div className="text-[11px] tracking-[0.34em] uppercase text-[#7a7a82] font-medium mb-[30px]">
                    <ScrambleText text="REAL-TIME AI RISK INTELLIGENCE" />
                  </div>
                </Reveal>
                <h2
                  className="font-display font-bold leading-[0.86] tracking-[-0.06em] glow-text"
                  style={{ fontSize: "clamp(40px, 7vw, 90px)" }}
                >
                  <LineMask>Обсудить</LineMask>
                  <br />
                  <LineMask>
                    <span className="text-[#e8ff52]">безопасность</span>
                  </LineMask>
                  <br />
                  <LineMask>вашего ИИ</LineMask>
                </h2>
                <Reveal delay={0.3} className="mt-[38px]">
                  <div className="flex flex-col gap-2 text-[clamp(20px,2.4vw,30px)] text-[#7a7a82] tracking-[-0.01em]">
                    <span>Один <b className="text-white">экран</b>.</span>
                    <span>Один <b className="text-white">риск-скор</b>.</span>
                    <span>Полный <b className="text-white">контроль</b>.</span>
                  </div>
                </Reveal>
                <Reveal delay={0.4} className="mt-[46px]">
                  <MagneticButton href="#hero">
                    Вернуться к началу ↑
                  </MagneticButton>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium mb-[30px]">
                  Запросить пилотный доступ
                </div>
                <ContactForm />
              </Reveal>
            </div>
          </div>

          {/* Footer */}
          <footer className="max-w-[1180px] mx-auto w-full mt-[80px] pt-[64px] border-t border-white/[0.08] text-[#3e3e46] text-[13px] flex justify-between flex-wrap gap-4 tracking-[0.02em]">
            <div className="flex items-center gap-[11px] font-display font-bold text-[15px] text-[#f2f2f4] tracking-[-0.02em]">
              <img src={`${import.meta.env.BASE_URL}images/logo-icon.png`} alt="Threshold AI" className="w-6 h-6" />
              Threshold AI
            </div>
            <span>Continuous AI Security Testing · Defensive use only</span>
            <span>© 2026 Threshold AI</span>
          </footer>
          <div className="step-num">06 / 06</div>
        </section>
      </main>
    </div>
  );
}
