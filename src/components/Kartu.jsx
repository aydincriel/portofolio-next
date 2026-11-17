export default function Kartu({ judul, children, className = "" }) {
  return (
    <section className={`rounded-xl bg-white p-6 shadow ${className}`}>
      <h2 className="text-xl font-bold text-utama">{judul}</h2>
      <div className="mt-3 text-gray-700">{children}</div>
    </section>
  );
}