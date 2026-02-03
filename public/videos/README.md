# Video Assets para Globalia

## Cómo añadir videos

### 1. Slide de Intro (Slide01)
- **Video**: `intro-hero.mp4`
- **Poster**: `intro-hero-poster.jpg` (imagen fallback)
- **Recomendación**: Video cinematográfico de apertura, trailers, tomas aéreas
- **Duración ideal**: 10-30 segundos en loop

### 2. Slide de Cierre (Slide16)
- **Video**: `close-cinematic.mp4`
- **Poster**: `close-cinematic-poster.jpg` (imagen fallback)
- **Recomendación**: Video emocional, behind the scenes, equipo trabajando
- **Duración ideal**: 10-30 segundos en loop

## Especificaciones técnicas

| Propiedad | Valor recomendado |
|-----------|-------------------|
| Formato | MP4 (H.264) |
| Resolución | 1920x1080 (Full HD) |
| Tamaño máximo | 10MB por video |
| Framerate | 24-30 fps |
| Bitrate | 2-5 Mbps |

## Activar videos

Después de copiar tus videos aquí, edita los archivos de slides:

1. Abre `src/app/components/slides/Slide01Intro.tsx`
2. Cambia `hasVideo: false` a `hasVideo: true`
3. Repite para `Slide16Close.tsx`

## Optimización con ffmpeg

```bash
# Comprimir video manteniendo calidad
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k intro-hero.mp4

# Crear poster desde video
ffmpeg -i intro-hero.mp4 -ss 00:00:02 -vframes 1 intro-hero-poster.jpg

# Crear loop perfecto (cortar)
ffmpeg -i input.mp4 -t 15 -c copy intro-hero.mp4
```

## Videos adicionales

Puedes añadir videos a otros slides editando cada `Slide*.tsx`:

1. Importar `VideoBackground` component
2. Añadir config MEDIA con paths
3. Insertar `<VideoBackground />` dentro del Slide
