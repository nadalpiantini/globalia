export default function Chapter({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-6 py-28"
    >
      <div className="relative z-10 w-full max-w-6xl">
        <div className="collage-paper p-8 md:p-12">
          <div className="flex items-center gap-3">
            <span className="stamp jitter">{kicker}</span>
            <div className="hrline" />
          </div>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          <div className="mt-8 text-white/85 text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
