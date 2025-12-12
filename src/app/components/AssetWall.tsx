import { ASSET_BUCKETS } from "./data";

export default function AssetWall() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="collage-paper p-6">
        <div className="stamp">Tu folder de assets</div>
        <p className="mt-4 text-white/80">
          Aquí es donde &quot;esparcimos&quot; (curado) tus pruebas: créditos
          fiscales, prensa, trailers, BTS, premios, locaciones. Este módulo está
          diseñado para convertirse en una <b>pared de evidencia</b>.
        </p>
        <p className="mt-4 text-white/70">
          Por ahora es guía. Cuando subas el folder, lo convertimos en: grid +
          filtros + lightbox + captions generados por IA.
        </p>
      </div>

      <div className="collage-paper p-6">
        <div className="stamp">Buckets recomendados</div>
        <ul className="mt-4 space-y-3 text-white/80">
          {ASSET_BUCKETS.map((b) => (
            <li key={b.title} className="border border-white/10 rounded-2xl p-4">
              <div className="font-semibold">{b.title}</div>
              <div className="text-xs text-white/60 mt-1">{b.globHint}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
