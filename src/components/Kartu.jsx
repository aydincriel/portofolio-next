export default function Kartu({ judul, children, className = "" }) {
  return (
    <section className={`rounded-xl bg-white dark:bg-gray-800 p-6 shadow ${className}`}>
      <h2 className="text-xl font-bold text-utama dark:text-sky-200">{judul}</h2>
      <div className="mt-3 text-gray-700 dark:text-gray-300">{children}</div>
    </section>
  );
}