import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-32 px-6 max-w-5xl mx-auto">
      {title && <h2 className="text-4xl font-semibold mb-8">{title}</h2>}
      {children}
    </section>
  );
}
