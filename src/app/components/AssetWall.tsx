import { ASSET_BUCKETS } from "./data";
import {
  Newspaper,
  Clapperboard,
  Video,
  FileText,
  FolderOpen,
  Grid3X3,
} from "lucide-react";

const BUCKET_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Prensa internacional": Newspaper,
  "Behind the scenes": Clapperboard,
  "Trailers / teasers": Video,
  "Créditos fiscales / casos": FileText,
};

export default function AssetWall() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2">
          <FolderOpen className="w-4 h-4" />
          Tu folder de assets
        </div>
        <p className="mt-4 text-white/80">
          Aquí es donde &quot;esparcimos&quot; (curado) tus pruebas: créditos
          fiscales, prensa, trailers, BTS, premios, locaciones. Este módulo está
          diseñado para convertirse en una <b>pared de evidencia</b>.
        </p>
        <p className="mt-4 text-white/70 flex items-start gap-2">
          <Grid3X3 className="w-4 h-4 mt-1 flex-shrink-0" />
          <span>
            Próximo upgrade: grid + filtros + lightbox + captions generados por
            IA.
          </span>
        </p>
      </div>

      <div className="collage-paper p-6">
        <div className="stamp flex items-center gap-2">
          <Clapperboard className="w-4 h-4" />
          Buckets recomendados
        </div>
        <ul className="mt-4 space-y-3 text-white/80">
          {ASSET_BUCKETS.map((b) => {
            const Icon = BUCKET_ICONS[b.title] || FileText;
            return (
              <li
                key={b.title}
                className="border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-white/20 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5">
                  <Icon className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-xs text-white/60 mt-1">{b.globHint}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
