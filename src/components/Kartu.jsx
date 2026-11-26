export default function Kartu({ judul, children, className = "" }) {
  return (
    <section className={`rounded-xl bg-card p-6 shadow ${className}`}>
      <h2 className="text-xl font-bold text-primary">{judul}</h2>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}