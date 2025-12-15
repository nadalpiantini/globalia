"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Particles from "./components/Particles";
import ProgressNav from "./components/ProgressNav";
import TopNav from "./components/TopNav";
import HeroCinematic from "./components/HeroCinematic";
import ClientOnly from "./components/ClientOnly";
import ActoMarcoLegal from "./components/ActoMarcoLegal";
import ActoSistema from "./components/ActoSistema";
import Chapter from "./components/Chapter";
import Collage from "./components/Collage";
import MapFlight from "./components/MapFlight";
import Art34Simulator from "./components/Art34Simulator";
import Art39Marketplace from "./components/Art39Marketplace";
import AssetWall from "./components/AssetWall";
import DecisionChecklist from "./components/DecisionChecklist";
import BoardroomDashboard from "./components/BoardroomDashboard";
import { useModeStore } from "./store/modeStore";
import {
  Scale,
  Landmark,
  Receipt,
  MapPin,
  Hotel,
  Palmtree,
  Clapperboard,
  Building2,
  Plane,
  Users,
  Briefcase,
  Target,
  MessageCircle,
} from "lucide-react";

export default function Page() {
  return (
    <ClientOnly
      fallback={
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <div className="text-white/50 text-sm">Loading...</div>
        </div>
      }
    >
      <PageContent />
    </ClientOnly>
  );
}

function PageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { mode } = useModeStore();

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Custom cursor - only on desktop */}
      <CustomCursor />

      {/* Floating particles background */}
      <Particles count={70} />

      {/* Progress navigation */}
      {!isLoading && <ProgressNav />}

      <main
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <SmoothScroll>
          <TopNav />

          {/* HERO CINEMATOGRÁFICO - Word cascade with scroll-pinning */}
          <HeroCinematic />

          {/* BOARDROOM MODE: Executive Dashboard */}
          {mode === "boardroom" && (
            <section className="relative min-h-screen px-6 py-20 max-w-6xl mx-auto">
              <BoardroomDashboard />
            </section>
          )}

          {/* ACTO: ISR → ART.34 Visual Transition (only in Experience mode) */}
          {mode === "experience" && <ActoMarcoLegal />}

          {/* CAP 1 - Marco Legal */}
          <Chapter
            id="cap-1"
            kicker="Capítulo 1"
            title="Marco legal: dos rutas distintas (no se mezclan)"
            pinned={mode === "experience"}
            scrollDistance={2000}
            filmGrain
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Collage>
                <div className="stamp flex items-center gap-2">
                  <Landmark className="w-4 h-4" />
                  Ruta A · Artículo 34
                </div>
                <p className="mt-4 flex items-start gap-3">
                  <Scale className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
                  <span>
                    Ruta para <b>ISR local (RD)</b>. Se estructura inversión en
                    proyectos dominicanos aprobados. Objetivo: convertir parte
                    del ISR en producción dominicana con governance y reporting.
                  </span>
                </p>
              </Collage>

              <Collage>
                <div className="stamp flex items-center gap-2">
                  <Receipt className="w-4 h-4" />
                  Ruta B · Artículo 39
                </div>
                <p className="mt-4 flex items-start gap-3">
                  <Scale className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
                  <span>
                    Ruta para <b>crédito fiscal transferible</b> basado en{" "}
                    <b>gasto local en RD</b>. Objetivo: certificar, endosar y{" "}
                    <b>colocar el crédito en el mercado local</b>.
                  </span>
                </p>
              </Collage>
            </div>

            <div className="mt-8 text-white/70 text-sm flex items-center gap-2">
              <Target className="w-4 h-4" />
              Diseño intencional: verás ambas rutas siempre separadas
              visualmente para evitar confusión legal/financiera.
            </div>
          </Chapter>

          {/* CAP 2 - Art.34 Simulator */}
          <Chapter
            id="cap-2"
            kicker="Capítulo 2"
            title="Ruta A: Artículo 34 (ISR local → inversión dominicana)"
            pinned={mode === "experience"}
            scrollDistance={2200}
          >
            <Art34Simulator />
          </Chapter>

          {/* CAP 3 - Art.39 Marketplace */}
          <Chapter
            id="cap-3"
            kicker="Capítulo 3"
            title="Ruta B: Artículo 39 (gasto local → crédito transferible → mercado)"
            pinned={mode === "experience"}
            scrollDistance={2200}
          >
            <Art39Marketplace />
          </Chapter>

          {/* CAP 4 - RD Ejecución */}
          <Chapter
            id="cap-4"
            kicker="Capítulo 4"
            title="República Dominicana: ejecución (producción real + infraestructura)"
            pinned={mode === "experience"}
            scrollDistance={1800}
            filmGrain
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Collage>
                <div className="stamp flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Qué ocurre en RD
                </div>
                <ul className="mt-4 space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <Users className="w-4 h-4 opacity-60" />
                    Producción, crew, logística y servicios.
                  </li>
                  <li className="flex items-center gap-3">
                    <Hotel className="w-4 h-4 opacity-60" />
                    Hoteles como base operativa (ocupación y experiencia).
                  </li>
                  <li className="flex items-center gap-3">
                    <Palmtree className="w-4 h-4 opacity-60" />
                    Locaciones: playas, ciudad, montaña, interior.
                  </li>
                  <li className="flex items-center gap-3">
                    <Receipt className="w-4 h-4 opacity-60" />
                    Cumplimiento y documentación de gasto local (Ruta B).
                  </li>
                </ul>
              </Collage>

              <Collage>
                <div className="stamp flex items-center gap-2">
                  <Clapperboard className="w-4 h-4" />
                  Tu infraestructura
                </div>
                <p className="mt-4 text-white/80 flex items-start gap-3">
                  <Building2 className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
                  <span>
                    <b>La Casita</b> (base operativa) + <b>Kovermann</b>{" "}
                    (producción) + <b>Vlockster</b> (salida). Aquí insertamos
                    BTS, fotos de sets, catálogos de locaciones, premios y
                    prensa.
                  </span>
                </p>
              </Collage>
            </div>
          </Chapter>

          {/* CAP 5 - Madrid Hub (Map with flight) */}
          <MapFlight />

          {/* ACTO: Sistema Visual (only in Experience mode) */}
          {mode === "experience" && <ActoSistema />}

          {/* CAP 6 - Sistema Completo */}
          <Chapter
            id="cap-6"
            kicker="Capítulo 6"
            title="Sistema completo: Madrid atrae · RD ejecuta · Globalia capitaliza"
            pinned={mode === "experience"}
            scrollDistance={2000}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Collage>
                <div className="stamp flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Madrid
                </div>
                <p className="mt-4 text-white/80 flex items-start gap-3">
                  <Plane className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
                  <span>
                    Atracción, empaquetado, coproducción, garantías. Pipeline
                    constante.
                  </span>
                </p>
              </Collage>
              <Collage>
                <div className="stamp flex items-center gap-2">
                  <Palmtree className="w-4 h-4" />
                  RD
                </div>
                <p className="mt-4 text-white/80 flex items-start gap-3">
                  <Clapperboard className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
                  <span>
                    Ejecución: producción, gasto local, cumplimiento, hoteles,
                    locaciones.
                  </span>
                </p>
              </Collage>
              <Collage>
                <div className="stamp flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Globalia
                </div>
                <p className="mt-4 text-white/80 flex items-start gap-3">
                  <Hotel className="w-5 h-5 mt-1 opacity-60 flex-shrink-0" />
                  <span>
                    Ocupación hotelera + movilidad aérea + asociación a
                    contenido original + reputación.
                  </span>
                </p>
              </Collage>
            </div>
          </Chapter>

          {/* CAP 7 - Asset Wall */}
          <Chapter
            id="cap-7"
            kicker="Capítulo 7"
            title="Evidencia: prensa, premios, créditos fiscales, trailers y BTS (tu folder)"
          >
            <AssetWall />
          </Chapter>

          {/* CAP 8 - Propuesta */}
          <Chapter
            id="cap-8"
            kicker="Capítulo 8"
            title="Propuesta formal a Globalia (explicativa, ejecutable)"
            pinned={mode === "experience"}
            scrollDistance={1600}
            filmGrain
          >
            <Collage className="p-8">
              <div className="stamp flex items-center gap-2">
                <Target className="w-4 h-4" />
                Propuesta
              </div>
              <p className="mt-4 text-white/85 flex items-start gap-3">
                <Building2 className="w-6 h-6 mt-1 opacity-60 flex-shrink-0" />
                <span>
                  Montar una <b>oficina/hub en Madrid</b> liderada por Alan
                  Nadal Piantini para atraer proyectos internacionales que
                  quieran filmar en el Caribe, estructurando coproducciones
                  España–RD y garantizando ejecución en RD con La Casita de
                  Producciones y Kovermann Pictures.
                </span>
              </p>
              <div className="mt-6 hrline" />
              <div className="mt-6 space-y-3 text-white/75">
                <p className="flex items-center gap-3">
                  <Landmark className="w-4 h-4 opacity-60" />
                  <span>
                    <b>Ruta A (Art.34)</b>: uso del ISR local de RD para
                    inversión dominicana aprobada.
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Receipt className="w-4 h-4 opacity-60" />
                  <span>
                    <b>Ruta B (Art.39)</b>: generación y colocación en mercado
                    local de crédito fiscal transferible por gasto local.
                  </span>
                </p>
                <p className="flex items-center gap-3 text-sm text-white/60">
                  <Scale className="w-4 h-4 opacity-60" />
                  <span>
                    Ambas rutas se operan con governance, compliance, reporting
                    y evidencia documental.
                  </span>
                </p>
              </div>
            </Collage>
          </Chapter>

          {/* CAP 9 - Decisiones */}
          <Chapter
            id="cap-9"
            kicker="Capítulo 9"
            title='Decisiones para decir "sí" (sin humo)'
            pinned={mode === "experience"}
            scrollDistance={2000}
          >
            <DecisionChecklist />
            <div className="mt-10 text-center">
              <a
                href="mailto:alan@sujeto10.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/20"
                data-cursor-hover
              >
                <MessageCircle className="w-5 h-5" />
                Hablemos (reunión de 30 min)
              </a>
              <div className="mt-4 text-xs text-white/55">
                Toggle arriba: Experience ↔ Boardroom | Próximo: export PDF +
                lightbox de evidencia.
              </div>
            </div>
          </Chapter>
        </SmoothScroll>
      </main>
    </>
  );
}
