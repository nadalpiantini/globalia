import FadeIn from "./FadeIn";

interface QuoteBlockProps {
  id: string;
  text: string;
}

export default function QuoteBlock({ id, text }: QuoteBlockProps) {
  return (
    <section id={id} className="py-32 text-center px-6">
      <FadeIn>
        <p className="text-5xl font-semibold leading-tight tracking-tight max-w-4xl mx-auto">
          {text}
        </p>
      </FadeIn>
    </section>
  );
}
