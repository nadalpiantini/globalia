"use client";

import { create } from "zustand";

type Art39State = {
  localSpend: number;
  resalePct: number;
  setLocalSpend: (v: number) => void;
  setResalePct: (v: number) => void;
};

const useArt39Store = create<Art39State>((set) => ({
  localSpend: 30000000,
  resalePct: 10,
  setLocalSpend: (v) => set({ localSpend: v }),
  setResalePct: (v) => set({ resalePct: v }),
}));

const fmt = (n: number) =>
  new Intl.NumberFormat("es-DO").format(Math.round(n));

export default function Art39Marketplace() {
  const { localSpend, resalePct, setLocalSpend, setResalePct } =
    useArt39Store();
  const credit = localSpend * 0.25;
  const resale = credit * (1 - resalePct / 100);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="collage-paper p-6">
        <div className="stamp">Ruta B · Artículo 39</div>
        <p className="mt-4 text-white/80">
          Esta ruta genera un <b>crédito fiscal transferible</b> basado en{" "}
          <b>gasto local ejecutado en RD</b>. La lógica aquí es:{" "}
          <b>se certifica</b> → <b>se endosa</b> → <b>se transfiere / se vende</b>.
          No se mezcla con Art.34.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm text-white/70">
              Gasto local ejecutado en RD (estimado)
            </label>
            <input
              type="range"
              min={2000000}
              max={400000000}
              step={500000}
              value={localSpend}
              onChange={(e) => setLocalSpend(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="mt-2 text-2xl font-semibold">
              RD$ {fmt(localSpend)}
            </div>
          </div>

          <div>
            <label className="text-sm text-white/70">
              Descuento de reventa (mercado)
            </label>
            <input
              type="range"
              min={0}
              max={30}
              step={1}
              value={resalePct}
              onChange={(e) => setResalePct(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="mt-2 text-2xl font-semibold">{resalePct}%</div>
          </div>
        </div>
      </div>

      <div className="collage-paper p-6">
        <div className="stamp">Crédito y salida</div>

        <div className="mt-5">
          <div className="text-sm text-white/70">
            Crédito fiscal (25% del gasto local)
          </div>
          <div className="text-4xl md:text-5xl font-semibold mt-2">
            RD$ {fmt(credit)}
          </div>
          <div className="text-white/70 mt-3">
            Este crédito se estructura como instrumento transferible y se coloca
            en el mercado local según las reglas aplicables del programa.
          </div>
        </div>

        <div className="mt-8 space-y-3 text-white/75">
          <div className="flex justify-between">
            <span>Gasto local</span>
            <span>RD$ {fmt(localSpend)}</span>
          </div>
          <div className="flex justify-between">
            <span>Crédito (25%)</span>
            <span>RD$ {fmt(credit)}</span>
          </div>
          <div className="flex justify-between">
            <span>Reventa (desc {resalePct}%)</span>
            <span>RD$ {fmt(resale)}</span>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/60">
          Nota: El mercado real (precio/discount) depende de demanda, plazos,
          compliance y apetito local.
        </div>
      </div>
    </div>
  );
}
