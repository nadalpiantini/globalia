export default function Collage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`collage-paper p-6 md:p-8 ${className}`}>{children}</div>
  );
}
