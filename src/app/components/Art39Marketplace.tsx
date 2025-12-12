"use client";

import { create } from "zustand";
import {
  Receipt,
  Banknote,
  ArrowRightLeft,
  TrendingDown,
  BadgeDollarSign,
  Store,
} from "lucide-react";

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
        <div className="stamp flex items-center gap-2">
          <Receipt className="w-4 h-4" />
          Ruta B · Artículo 39
        </div>

        <div className="mt-4 flex items-start gap-3 text-white/80">
          <ArrowRightLeft className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
          <p>
            Esta ruta genera un <b>crédito fiscal transferible</b> basado en{" "}
            <b>gasto local ejecutado en RD</b>. La lógica:{" "}
            <b>certifica → endosa → transfiere/vende</b>.
          </p>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm text-white/70 flex items-center gap-2">
              <Banknote className="w-4 h-4" />
              Gasto local ejecutado en RD
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
            <label className="text-sm text-white/70 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
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
        <div className="stamp flex items-center gap-2">
          <Store className="w-4 h-4" />
          Crédito y salida
        </div>

        <div className="mt-5">
          <div className="text-sm text-white/70 flex items-center gap-2">
            <BadgeDollarSign className="w-4 h-4" />
            Crédito fiscal (25% del gasto local)
          </div>
          <div className="text-4xl md:text-5xl font-semibold mt-2">
            RD$ {fmt(credit)}
          </div>
          <div className="text-white/70 mt-3">
            Instrumento transferible para colocar en el mercado local.
          </div>
        </div>

        <div className="mt-8 space-y-3 text-white/75">
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <Banknote className="w-4 h-4 opacity-50" />
              Gasto local
            </span>
            <span>RD$ {fmt(localSpend)}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <BadgeDollarSign className="w-4 h-4 opacity-50" />
              Crédito (25%)
            </span>
            <span>RD$ {fmt(credit)}</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <Store className="w-4 h-4 opacity-50" />
              Reventa (-{resalePct}%)
            </span>
            <span>RD$ {fmt(resale)}</span>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/60">
          Nota: Precio real depende de demanda, plazos y compliance.
        </div>
      </div>
    </div>
  );
}
