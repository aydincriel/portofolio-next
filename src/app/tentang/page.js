import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Aydin Akmal Daffa.",
};

const hobi = ["Bermain basket", "Berenang", "Bermain game"];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const jadwal = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

const judulKartu = "text-xl font-bold text-primary";

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Tentang Saya</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className={judulKartu}>Perkenalan</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Saya tinggal di Pasuruan dan senang mencoba hal baru di dunia teknologi.
              Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM
              di sekitar rumah.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={judulKartu}>Hobi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={judulKartu}>Cita-cita</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang saya
              rencanakan:
            </p>
            <ol className="mt-2 list-decimal pl-5">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className={judulKartu}>Jadwal Belajar</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left text-sm">
              <thead className="bg-utama text-white">
                <tr>
                  <th className="px-3 py-2">Hari</th>
                  <th className="px-3 py-2">Waktu</th>
                  <th className="px-3 py-2">Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {jadwal.map((item) => (
                  <tr key={item.hari} className="border-b border-border">
                    <td className="px-3 py-2">{item.hari}</td>
                    <td className="px-3 py-2">{item.waktu}</td>
                    <td className="px-3 py-2">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}