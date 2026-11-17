export const metadata = {
  title: "Kontak",
  description: "Hubungi Aydin Akmal Daffa melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="rounded-xl bg-white p-6 shadow md:col-span-2">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold">
                Nama lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Contoh: Budi Santoso"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contoh@email.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label htmlFor="hp" className="block font-semibold">
                Nomor HP
              </label>
              <input
                type="tel"
                id="hp"
                name="hp"
                placeholder="081234567890"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <div>
              <label htmlFor="keperluan" className="block font-semibold">
                Keperluan
              </label>
              <select
                id="keperluan"
                name="keperluan"
                required
                defaultValue=""
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              >
                <option value="" disabled>-- Pilih keperluan --</option>
                <option value="tanya">Bertanya tentang proyek</option>
                <option value="kerja-sama">Ajakan kerja sama</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block font-semibold">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                placeholder="Tulis pesanmu di sini"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-utama px-5 py-2 font-semibold text-white hover:opacity-90"
            >
              Kirim
            </button>

            <p className="text-sm text-gray-600">
              Catatan: form ini belum mengirim pesan. Pengiriman pesan baru
              dibuat di Minggu 15.
            </p>
          </form>
        </section>

        <section className="h-fit rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-utama">Temukan Saya di</h2>
          <ul className="mt-3 space-y-2">
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/username-kamu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-utama underline"
              >
                github.com/aydincriel
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:emailkamu@gmail.com"
                className="font-semibold text-utama underline"
              >
                aydinakmal@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}