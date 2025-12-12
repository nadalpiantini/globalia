# Design System: Globalia

## Visual Identity

### Philosophy
Cinematográfico, minimalista, premium. La experiencia debe sentirse como los títulos de apertura de una película de alto presupuesto.

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#000000` | Fondo principal |
| `--text-primary` | `#FFFFFF` | Texto principal |
| `--text-secondary` | `rgba(255,255,255,0.5)` | Subtítulos |
| `--text-muted` | `rgba(255,255,255,0.3)` | Hints, años |
| `--accent-glow` | `rgba(255,255,255,0.2)` | Glows, highlights |

### Gradients (por Acto)

```css
/* ActoCuatro - Portfolio panels */
--gradient-peliculas:    from-amber-950/20 via-black to-black
--gradient-documentales: from-black via-emerald-950/20 to-black
--gradient-series:       from-black via-blue-950/20 to-black
--gradient-reality:      from-rose-950/20 via-black to-black
--gradient-branded:      from-black via-violet-950/20 to-black
```

## Typography

### Font Stack
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
```

### Scale

| Element | Mobile | Desktop | Weight |
|---------|--------|---------|--------|
| Hero words | 18vw | 12vw | 900 (Black) |
| Section titles | 16vw | 14vw | 900 |
| Body large | 3xl | 5xl | 300-600 |
| Body | 2xl | 3xl | 300-400 |
| Captions | sm | base | 300 |
| Mono (numbers) | sm | base | 400 |

### Tracking
- Hero: `-0.05em` (tracking-tighter)
- Body: `0.05em` (tracking-wide)
- Captions: `0.1em` (tracking-widest)

## Effects

### Film Grain
```css
background-image: url("data:image/svg+xml,...feTurbulence...");
opacity: 0.02-0.03;
mix-blend-mode: normal;
```

### Vignette
```css
background: radial-gradient(
  ellipse at center,
  transparent 0%,
  rgba(0,0,0,0.4-0.5) 100%
);
```

### Glow Effects

| Type | Blur | Opacity | Usage |
|------|------|---------|-------|
| Ambient | 3xl (48px) | 5% | Behind logos |
| Soft | 2xl (24px) | 10-20% | CTA outer |
| Medium | md (12px) | 30-40% | CTA inner |
| Text | 30px | - | Hover states |

## Motion

### Easing Functions

| Name | GSAP | Usage |
|------|------|-------|
| Smooth out | `power2.out` | Entrances |
| Smooth in | `power2.in` | Exits |
| Dramatic | `power3.out` | Text reveals |
| Bounce | `back.out(1.2-1.5)` | Scale animations |

### Durations

| Type | Duration | Usage |
|------|----------|-------|
| Micro | 0.3s | Hovers, toggles |
| Short | 0.5-0.8s | Transitions |
| Medium | 1-1.2s | Text reveals |
| Long | 1.5s | Hero animations |

### Scroll Scrub
- Standard sections: `0.8`
- Horizontal scroll: `1.2`

## Components

### Custom Cursor (Desktop only)

```
Layer 1: Dot (8px, white, mix-blend-difference)
Layer 2: Ring (40px, border white/30, spring animation)
Layer 3: Ambient (256px, radial gradient white/3%)
```

### Progress Navigation

```
○ ○ ○ ○ ○   (5 dots, 12px cada uno)
│
Línea de progreso (2px, white/20 → white)
│
Labels on hover: "Manifesto", "Oportunidad", etc.
```

### Loader Sequence

```
T+0ms:    GLOBALIA fade in + scale
T+500ms:  Line scale X
T+1500ms: Tagline fade in
T+3000ms: Exit fade
T+3800ms: Complete callback
```

### CTA Button

```css
/* Structure */
.cta {
  padding: 1rem 3.5rem;
  border-radius: 9999px;
  font-weight: 600;
}

/* Layers */
- Outer glow: -inset-4, blur-2xl, white/10 → white/20
- Inner glow: -inset-1, blur-md, white/30 → white/40
- Button: bg-white, text-black
```

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Larger vw fonts, reduced spacing |
| Tablet (sm) | 640px | Intermediate sizing |
| Desktop (md) | 768px | Full experience, custom cursor |
| Large (lg) | 1024px | Maximum font sizes |

## Accessibility

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States
- Default browser outline preserved
- High contrast on interactive elements

### Color Contrast
- Text/background: > 4.5:1 ratio
- Large text: > 3:1 ratio
