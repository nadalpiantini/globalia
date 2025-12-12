export default function DecisionChecklist() {
  const items = [
    {
      t: "Autorizar Hub Madrid (liderado por Alan Nadal Piantini)",
      d: "Mandato: atracción, empaquetado y estructuración de proyectos España↔Caribe, con garantías de ejecución en RD.",
    },
    {
      t: "Definir política Ruta A (Art.34)",
      d: "Techo anual (hasta 25% ISR RD), tipo de proyectos dominicanos, governance, compliance y reporting.",
    },
    {
      t: "Definir política Ruta B (Art.39)",
      d: "Qué proyectos ejecutan gasto local, estrategia de certificación y colocación del crédito en mercado local.",
    },
    {
      t: "Aprobar piloto (90 días)",
      d: "1 proyecto dominicano (Art.34) + 1 producción con gasto local (Art.39) como pruebas independientes.",
    },
  ];

  return (
    <div className="collage-paper p-6 md:p-8">
      <div className="stamp">Decisiones requeridas</div>
      <div className="mt-6 space-y-4">
        {items.map((i) => (
          <div key={i.t} className="border border-white/10 rounded-2xl p-5">
            <div className="text-lg font-semibold">{i.t}</div>
            <div className="mt-2 text-white/70">{i.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
