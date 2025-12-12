import FadeIn from "./FadeIn";

const items = [
  "Peliculas Premium",
  "Documentales Globales",
  "Series de Lifestyle",
  "Reality Shows",
  "Branded Content Premium",
];

export default function ShowcaseGrid() {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="p-8 border rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{item}</h3>
            <p className="text-black/60">Contenido narrativo de alto impacto.</p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
