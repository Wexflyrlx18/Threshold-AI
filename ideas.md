# Threshold AI — Landing Page Design Brainstorm

## Three Stylistic Approaches

### 1. "Cyber Lab" — Industrial Security Aesthetic
**Theme Name:** Cyber Lab
**Very Brief Intro:** A dark, industrial interface inspired by security operations centers and hardware labs. Feels like you're looking at a real air-gapped machine.
**Probability:** 0.07

### 2. "Neural Flow" — Organic Tech
**Theme Name:** Neural Flow
**Very Brief Intro:** A futuristic, flowing design with neural network visualizations and organic motion. Feels alive, like AI itself is breathing through the page.
**Probability:** 0.04

### 3. "Terminal Noir" — Editorial Security
**Theme Name:** Terminal Noir
**Very Brief Intro:** A bold, editorial-style dark page with monospace accents, large typography, and minimal but powerful motion. Feels like a premium security manifesto.
**Probability:** 0.08

---

## Chosen Approach: "Terminal Noir" — Editorial Security

### Design Movement
Swiss editorial design meets cyberpunk terminal aesthetics. Think: a high-end security firm's manifesto rendered as a cinematic scroll experience.

### Core Principles
1. **Bold Typographic Hierarchy** — Massive headlines that command attention, paired with precise small-caps labels for structure
2. **Dark-First Palette** — Near-black backgrounds with a single neon accent (#e8ff52) for emphasis and CTAs
3. **Scroll as Narrative** — Each section reveals like a chapter, with staggered text animations and parallax depth
4. **Functional Motion** — Every animation serves comprehension: split-text reveals, count-up metrics, gauge animations, magnetic buttons

### Color Philosophy
The palette is intentionally restrained: deep black (#070709) as the canvas, off-white (#f2f2f4) for primary text, muted gray (#7a7a82) for secondary, and a single electric chartreuse (#e8ff52) as the signature accent. This monochrome-plus-one approach creates a premium, focused feel — the neon draws the eye exactly where action is needed, while the dark background conveys security and seriousness.

### Layout Paradigm
Asymmetric editorial layout. Content is left-aligned with generous whitespace on the right for visual elements (3D particle sphere, gauge, cards). Sections alternate between full-width statements and two-column comparisons. No centered hero — instead, a left-anchored headline with the 3D visualization occupying the right space.

### Signature Elements
1. **3D Particle Sphere** — A rotating constellation of points that responds to mouse movement, representing the AI attack surface
2. **Animated Risk Gauge** — A circular SVG gauge that fills on scroll, showing the risk score concept
3. **Marquee Strip** — A scrolling text band with key value propositions
4. **Custom Cursor** — A dot + ring system with magnetic hover states on interactive elements
5. **Grain Overlay** — Subtle film grain texture for depth and analog feel

### Interaction Philosophy
Interactions should feel precise and responsive — like using a professional security tool. Hover states expand and shift, buttons have magnetic pull, cards tilt in 3D space. Nothing bouncy or playful; everything is sharp, deliberate, and confident.

### Animation Guidelines
- **Entrance:** Split-text character reveals with staggered delays (16ms per character)
- **Scroll reveals:** Elements fade up 22px with 0.9s cubic-bezier easing
- **Counters:** Cubic ease-out from 0 to target value over 1.3s
- **Gauge:** Arc fills with cubic ease-out over 1.6s
- **Magnetic buttons:** Translate toward cursor by 30% of offset distance
- **Tilt cards:** 9deg max rotation based on cursor position within card
- **Marquee:** 28s linear infinite scroll
- **Preloader:** Percentage count 0→100 with bar fill, then slide up reveal

### Typography System
- **Display/Headlines:** Space Grotesk 700 — geometric, technical, confident
- **Body/UI:** Inter 400/500/600 — clean, readable, professional
- **Labels:** Inter 500 with 0.28-0.34em letter-spacing, uppercase — technical metadata
- **Monospace accents:** For code-like elements (product names, technical terms)

### Brand Essence
**Positioning:** Threshold AI is the autonomous security lab for AI agents — built for CISOs who need proof, not promises.
**Personality adjectives:** Precise, formidable, uncompromising

### Brand Voice
Headlines are declarative statements. CTAs are direct commands. Microcopy is technical but accessible.

Example headlines:
- "Автономная лаборатория стресс-тестирования ИИ-агентов без риска утечки данных"
- "Эволюционный Red Teaming на вашем localhost"

Example CTAs:
- "Запросить пилотный доступ"
- "Обсудить безопасность вашего ИИ"

### Wordmark & Logo
"Threshold AI" in Space Grotesk 700 with a pulsing neon dot before the name — representing the kill switch, the threshold between safe and unsafe AI.

### Signature Brand Color
**#e8ff52** — Electric chartreuse. Unmistakably Threshold AI. Used for accents, CTAs, active states, and the brand dot.
