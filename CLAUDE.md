# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm tsc --noEmit # TypeScript type check
```

## Architecture

**Globalia** is a cinematic pitch presentation built as a single-page scroll-driven experience using Next.js 16 App Router with GSAP ScrollTrigger animations.

### Tech Stack
- Next.js 16 (Turbopack) + React 19
- GSAP + ScrollTrigger for scroll-controlled animations with pinning
- Lenis for smooth scrolling (synced with GSAP via `SmoothScroll.tsx`)
- Framer Motion for component animations (Loader, CustomCursor)
- Tailwind CSS 4

### Component Structure

The presentation is organized into 5 sequential "Actos" (Acts), each a full-screen pinned section:

```
page.tsx                    # Main orchestrator with Loader state
├── Loader.tsx              # Cinematographic intro animation
├── CustomCursor.tsx        # 3-layer custom cursor (dot + ring + glow)
├── ProgressNav.tsx         # 5-dot navigation with click-to-section
└── <main>
    ├── ActoUno.tsx         # Manifesto: CINE → TURISMO → MARCA + Particles
    ├── ActoDos.tsx         # ISR → ART. 34 transition with blur
    ├── ActoTres.tsx        # System diagram with 5 nodes + SVG connections
    ├── ActoCuatro.tsx      # Horizontal scroll portfolio (5 panels)
    └── ActoCinco.tsx       # Emotional close + CTA
```

### Scroll Animation Pattern

All Actos follow this GSAP ScrollTrigger pattern:
```tsx
gsap.timeline({
  scrollTrigger: {
    trigger: container.current,
    start: "top top",
    end: "+=2800",        // Scroll distance in pixels
    scrub: 0.8,           // Smooth scrubbing
    pin: true,            // Pin section during animation
    anticipatePin: 1,     // Smoother pin transitions
  },
});
```

### Lenis + GSAP Sync

`SmoothScroll.tsx` wraps the app and syncs Lenis smooth scrolling with GSAP:
```tsx
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

### Visual Effects
- Film grain overlay via inline SVG noise filter on all sections
- `will-change: transform` for GPU acceleration on pinned sections
- `prefers-reduced-motion` support in globals.css
- Canvas-based particle system in `Particles.tsx`
- Custom cursor hidden on mobile (<768px)

### Path Alias
Use `@/*` for imports from `src/`:
```tsx
import Component from "@/app/components/Component";
```
