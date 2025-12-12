# Architecture: Globalia

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Lenis     │──│    GSAP     │──│   React 19          │  │
│  │  (Scroll)   │  │ ScrollTrig. │  │   Components        │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                    Next.js 16 App Router                     │
├─────────────────────────────────────────────────────────────┤
│                    Tailwind CSS 4                            │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
RootLayout (layout.tsx)
└── SmoothScroll           # Lenis wrapper + GSAP sync
    └── Page (page.tsx)
        ├── Loader         # Framer Motion (condicional)
        ├── CustomCursor   # Framer Motion (condicional)
        ├── ProgressNav    # React state + scrollTo
        └── <main>
            ├── ActoUno    # GSAP ScrollTrigger + Canvas (Particles)
            ├── ActoDos    # GSAP ScrollTrigger
            ├── ActoTres   # GSAP ScrollTrigger + SVG
            ├── ActoCuatro # GSAP ScrollTrigger (horizontal)
            └── ActoCinco  # GSAP ScrollTrigger
```

## Data Flow

```
User Scroll
    │
    ▼
Lenis (smooth interpolation)
    │
    ├──► ScrollTrigger.update()
    │         │
    │         ▼
    │    GSAP Timelines (scrub)
    │         │
    │         ▼
    │    DOM Mutations (transform, opacity)
    │
    └──► ProgressNav (scroll %)
              │
              ▼
         Active dot update
```

## Animation System

### ScrollTrigger Configuration

| Acto | Scroll Distance | Scrub | Features |
|------|-----------------|-------|----------|
| Uno | 2800px | 0.8 | Pin, Particles |
| Dos | 2600px | 0.8 | Pin, Blur effect |
| Tres | 3200px | 0.8 | Pin, SVG lines |
| Cuatro | 85% × 5vw | 1.2 | Pin, Horizontal |
| Cinco | 2200px | 0.8 | Pin, CTA glow |

### Animation Libraries

| Library | Purpose | Components |
|---------|---------|------------|
| GSAP | Scroll animations | Actos 1-5, ProgressNav |
| Framer Motion | Component animations | Loader, CustomCursor |
| Lenis | Smooth scrolling | SmoothScroll wrapper |

## Performance Optimizations

### GPU Acceleration
```css
section {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
```

### ScrollTrigger
```tsx
{
  anticipatePin: 1,    // Smoother pin start
  scrub: 0.8,          // Balanced smoothness
  fastScrollEnd: true, // Quick release
}
```

### Canvas (Particles)
- requestAnimationFrame loop
- Particle pooling (40 particles)
- Screen-wrap instead of destroy/create

## File Structure

```
src/app/
├── page.tsx              # Main entry, state management
├── layout.tsx            # Root layout, fonts, metadata
├── globals.css           # Global styles, animations
└── components/
    ├── SmoothScroll.tsx  # Lenis + GSAP integration
    ├── Loader.tsx        # Entry animation
    ├── CustomCursor.tsx  # 3-layer cursor
    ├── ProgressNav.tsx   # Navigation dots
    ├── Particles.tsx     # Canvas particle system
    ├── ActoUno.tsx       # Opening manifesto
    ├── ActoDos.tsx       # ISR → ART.34
    ├── ActoTres.tsx      # System diagram
    ├── ActoCuatro.tsx    # Horizontal portfolio
    └── ActoCinco.tsx     # Closing + CTA
```

## Build Configuration

### Next.js (next.config.ts)
- Turbopack enabled (default in 16)
- Static export ready
- Image optimization

### TypeScript
- Strict mode
- Path aliases: `@/*` → `src/*`

### Tailwind CSS 4
- PostCSS integration
- Custom colors via CSS variables
