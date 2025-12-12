# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Globalia is an immersive cinematic pitch experience built as a scroll-driven interactive presentation. It uses GSAP ScrollTrigger for scroll-controlled animations to create an Awwwards-level narrative experience.

## Commands

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Build for production
pnpm lint     # Run ESLint
pnpm start    # Start production server
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router (Turbopack)
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **GSAP + ScrollTrigger** for scroll-controlled animations
- **Framer Motion** (available but currently using GSAP)

### Structure

```
src/app/
├── page.tsx           # Main orchestrator - renders 5 Acts in sequence
├── globals.css        # Global styles (black bg, white text, no scroll-x)
├── layout.tsx         # Root layout
└── components/
    ├── ActoUno.tsx    # Opening manifesto: CINE → TURISMO → MARCA
    ├── ActoDos.tsx    # Problem visualization: ISR disappears, ART. 34 stays
    ├── ActoTres.tsx   # System diagram: nodes connect into operating system
    ├── ActoCuatro.tsx # Horizontal scroll portfolio: 5 content categories
    └── ActoCinco.tsx  # Emotional close: "Y yo sé cómo ejecutarla" + CTA
```

### Animation Pattern

Each Act component follows this GSAP pattern:
```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=3000",      // Scroll distance for this act
        scrub: 0.5,         // Smooth scrubbing
        pin: true,          // Pin section during scroll
      },
    });
    // Timeline animations...
  }, container);
  return () => ctx.revert();
}, []);
```

### Visual Consistency

All Acts include:
- Film grain overlay (SVG noise filter at 2-3% opacity)
- Black background with subtle gradients
- Vignette effect on key scenes
- GSAP easing (`power2`, `power3`, `back.out`)

### Path Alias

Use `@/*` for imports from `src/`:
```tsx
import { Component } from "@/app/components/Component";
```
