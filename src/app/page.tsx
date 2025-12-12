"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import LenisProvider from "./components/LenisProvider";
import TopNav from "./components/TopNav";
import Chapter from "./components/Chapter";
import Collage from "./components/Collage";
import MapFlight from "./components/MapFlight";
import Art34Simulator from "./components/Art34Simulator";
import Art39Marketplace from "./components/Art39Marketplace";
import AssetWall from "./components/AssetWall";
import DecisionChecklist from "./components/DecisionChecklist";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <main
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <LenisProvider>
          <TopNav />

          {/* CAP 1 - Marco Legal */}
          <Chapter
            id="cap-1"
            kicker="Capítulo 1"
            title="Marco legal: dos rutas distintas (no se mezclan)"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Collage>
                <div className="stamp">Ruta A · Artículo 34</div>
                <p className="mt-4">
                  Ruta para <b>ISR local (RD)</b>. Se estructura inversión en
                  proyectos dominicanos aprobados. Objetivo: convertir parte del
                  ISR en producción dominicana con governance y reporting.
                </p>
              </Collage>

              <Collage>
                <div className="stamp">Ruta B · Artículo 39</div>
                <p className="mt-4">
                  Ruta para <b>crédito fiscal transferible</b> basado en{" "}
                  <b>gasto local en RD</b>. Objetivo: certificar, endosar y{" "}
                  <b>colocar el crédito en el mercado local</b>.
                </p>
              </Collage>
            </div>

            <div className="mt-8 text-white/70 text-sm">
              Diseño intencional: verás ambas rutas siempre separadas
              visualmente para evitar confusión legal/financiera.
            </div>
          </Chapter>

          {/* CAP 2 - Art.34 Simulator */}
          <Chapter
            id="cap-2"
            kicker="Capítulo 2"
            title="Ruta A: Artículo 34 (ISR local → inversión dominicana)"
          >
            <Art34Simulator />
          </Chapter>

          {/* CAP 3 - Art.39 Marketplace */}
          <Chapter
            id="cap-3"
            kicker="Capítulo 3"
            title="Ruta B: Artículo 39 (gasto local → crédito transferible → mercado)"
          >
            <Art39Marketplace />
          </Chapter>

          {/* CAP 4 - RD Ejecución */}
          <Chapter
            id="cap-4"
            kicker="Capítulo 4"
            title="República Dominicana: ejecución (producción real + infraestructura)"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Collage>
                <div className="stamp">Qué ocurre en RD</div>
                <ul className="mt-4 space-y-2 text-white/80">
                  <li>• Producción, crew, logística y servicios.</li>
                  <li>
                    • Hoteles como base operativa (ocupación y experiencia).
                  </li>
                  <li>• Locaciones: playas, ciudad, montaña, interior.</li>
                  <li>
                    • Cumplimiento y documentación de gasto local (para Ruta B).
                  </li>
                </ul>
              </Collage>

              <Collage>
                <div className="stamp">Tu infraestructura</div>
                <p className="mt-4 text-white/80">
                  <b>La Casita</b> (base operativa) + <b>Kovermann</b>{" "}
                  (producción) + <b>Vlockster</b> (salida). Aquí insertamos BTS,
                  fotos de sets, catálogos de locaciones, premios y prensa.
                </p>
              </Collage>
            </div>
          </Chapter>

          {/* CAP 5 - Madrid Hub (Map with flight) */}
          <MapFlight />

          {/* CAP 6 - Sistema Completo */}
          <Chapter
            id="cap-6"
            kicker="Capítulo 6"
            title="Sistema completo: Madrid atrae · RD ejecuta · Globalia capitaliza"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Collage>
                <div className="stamp">Madrid</div>
                <p className="mt-4 text-white/80">
                  Atracción, empaquetado, coproducción, garantías. Pipeline
                  constante.
                </p>
              </Collage>
              <Collage>
                <div className="stamp">RD</div>
                <p className="mt-4 text-white/80">
                  Ejecución: producción, gasto local, cumplimiento, hoteles,
                  locaciones.
                </p>
              </Collage>
              <Collage>
                <div className="stamp">Globalia</div>
                <p className="mt-4 text-white/80">
                  Ocupación hotelera + movilidad aérea + asociación a contenido
                  original + reputación.
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
          >
            <Collage className="p-8">
              <div className="stamp">Propuesta</div>
              <p className="mt-4 text-white/85">
                Montar una <b>oficina/hub en Madrid</b> liderada por Alan Nadal
                Piantini para atraer proyectos internacionales que quieran
                filmar en el Caribe, estructurando coproducciones España–RD y
                garantizando ejecución en RD con La Casita de Producciones y
                Kovermann Pictures.
              </p>
              <div className="mt-6 hrline" />
              <p className="mt-6 text-white/75">
                <b>Ruta A (Art.34)</b>: uso del ISR local de RD para inversión
                dominicana aprobada. <br />
                <b>Ruta B (Art.39)</b>: generación y colocación en mercado local
                de crédito fiscal transferible por gasto local. <br />
                Ambas rutas se operan con governance, compliance, reporting y
                evidencia documental.
              </p>
            </Collage>
          </Chapter>

          {/* CAP 9 - Decisiones */}
          <Chapter
            id="cap-9"
            kicker="Capítulo 9"
            title='Decisiones para decir "sí" (sin humo)'
          >
            <DecisionChecklist />
            <div className="mt-10 text-center">
              <a
                href="mailto:alan@sujeto10.com"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition"
              >
                Hablemos (reunión de 30 min)
              </a>
              <div className="mt-4 text-xs text-white/55">
                Próximo upgrade: &quot;Boardroom Mode&quot; + export de 1-pager
                PDF + lightbox de evidencia.
              </div>
            </div>
          </Chapter>
        </LenisProvider>
      </main>
    </>
  );
}
