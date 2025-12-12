import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="cierre" className="py-40 text-center px-6">
      <FadeIn>
        <p className="text-4xl font-semibold leading-relaxed mb-10">
          &ldquo;Javier, no es cine. Es una linea de negocio nacida de un impuesto que ya pagas.&rdquo;
        </p>

        <a
          href="mailto:alan@sujeto10.com"
          className="px-12 py-4 bg-black text-white rounded-full text-xl hover:bg-neutral-800 transition"
        >
          Contactar
        </a>
      </FadeIn>
    </section>
  );
}
