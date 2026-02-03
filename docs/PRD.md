# PRD: Globalia - Cinematic Pitch Experience

## Product Overview

**Globalia** es una experiencia de pitch inmersiva diseñada para presentar una propuesta de negocio sobre infraestructura de cine, turismo y marca entre España y República Dominicana, aprovechando el Artículo 34 de incentivos fiscales.

## Objetivos

1. **Impacto Visual**: Crear una experiencia nivel Awwwards/Cannes Digital
2. **Narrativa Cinematográfica**: Contar la historia en 5 actos como una película
3. **Conversión**: Generar interés y contacto directo vía CTA final

## Target Audience

- Inversores y stakeholders del sector audiovisual
- Autoridades de turismo (España/RD)
- Marcas interesadas en branded content
- Productoras buscando coproducciones

## User Journey

```
Loader (3.8s) → ActoUno → ActoDos → ActoTres → ActoCuatro → ActoCinco → CTA
```

### Acto 1: Manifesto
- **Objetivo**: Establecer los 3 pilares (CINE, TURISMO, MARCA)
- **Mensaje**: "No como contenido. Como infraestructura."

### Acto 2: El Problema/Oportunidad
- **Objetivo**: Mostrar la transformación ISR → ART. 34
- **Mensaje**: "Un impuesto puede evaporarse. O puede quedarse."

### Acto 3: El Sistema
- **Objetivo**: Visualizar la red de conexiones España-RD
- **Mensaje**: "No es una productora. Es un sistema operativo."

### Acto 4: Portfolio de Formatos
- **Objetivo**: Mostrar capacidades (Películas, Docs, Series, Reality, Branded)
- **Interacción**: Scroll horizontal por categorías

### Acto 5: Cierre Emocional
- **Objetivo**: Generar acción
- **Mensaje**: "Y yo sé cómo ejecutarla."
- **CTA**: "Hablemos" → mailto:alan@sujeto10.com

## Requirements

### Funcionales
- [x] Scroll-driven animations con GSAP ScrollTrigger
- [x] Pinning de secciones durante animaciones
- [x] Navegación por dots clickeables
- [x] Loader cinematográfico inicial
- [x] Cursor personalizado en desktop
- [x] Responsive mobile/tablet/desktop
- [x] Audio ambient (oleaje) con controles play/mute
- [x] Video backgrounds (componente listo, assets pendientes)

### No Funcionales
- [x] Performance: 60fps en animaciones
- [x] Accesibilidad: prefers-reduced-motion support
- [x] SEO: Meta tags configurados
- [x] Build time: < 3s

## Success Metrics

| Métrica | Target |
|---------|--------|
| Tiempo en página | > 2 min |
| Scroll completion | > 80% |
| CTA clicks | > 5% |
| Bounce rate | < 30% |

## Timeline

- **Sprint 1**: Estructura base + 5 Actos ✅
- **Sprint 2**: Polish visual + Performance ✅
- **Sprint 3**: Deploy Vercel + Dominio custom ✅
- **Sprint 4**: Audio/Video backgrounds ✅

## Deployment

- **Vercel**: https://globalia.vercel.app
- **Custom Domain**: https://globalia.lacasitafilms.com
- **DNS**: Cloudflare (CNAME → cname.vercel-dns.com)

## Out of Scope

- Multi-idioma
- Analytics integration
- A/B testing

## Sprint 4 - Componentes Añadidos

### AudioManager (`src/app/components/AudioManager.tsx`)
- Control de reproducción de audio ambiente
- Fade-in suave al primer click
- Botones play/pause y mute/unmute
- Soporte prefers-reduced-motion
- Audio: `/public/audio/ambient-cinematic.mp3`

### VideoBackground (`src/app/components/VideoBackground.tsx`)
- Lazy loading con IntersectionObserver
- Fallback a poster image
- Autoplay muted loop
- Overlays configurables (none, light, dark, gradient)
- Film grain effect integrado

### Instrucciones para videos
Ver `public/videos/README.md` para añadir videos cinematográficos.
