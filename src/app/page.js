import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const hobi = ["Bermain Basket", "Berenang", "Bermain Game"];

const rencana = [
  "Menuntaskan Kelas Industri UBIG sampai Semester 4",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  { hari: "Senin", waktu: "13.00 - 15.00", kegiatan: "HTML dan CSS" },
  { hari: "Rabu", waktu: "13.00 - 15.00", kegiatan: "JavaScript dasar" },
  { hari: "Jumat", waktu: "13.00 - 15.00", kegiatan: "Git dan GitHub" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Aydin Akmal Daffa"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <div className="mt-10 space-y-6">
        <Kartu judul="Tentang Saya">
          <p>
            Saya tinggal di Pasuruan dan senang mencoba hal baru di dunia
            teknologi. Saya ingin bisa membuat website yang bermanfaat untuk
            sekolah dan UMKM di sekitar rumah.
          </p>
        </Kartu>

        <div className="grid gap-6 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc pl-5">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="mb-2">
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang
              saya rencanakan:
            </p>
            <ol className="list-decimal pl-5">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

        <Kartu judul="Keahlian">
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </Kartu>

        <Kartu judul="Jadwal Belajar">
  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm">
      <thead className="bg-utama text-white">
        <tr>
          <th className="px-3 py-2 font-semibold">Hari</th>
          <th className="px-3 py-2 font-semibold">Waktu</th>
          <th className="px-3 py-2 font-semibold">Kegiatan</th>
        </tr>
      </thead>
      <tbody>
        {jadwal.map((j) => (
          <tr key={j.hari} className="border-b border-gray-200 bg-white">
            <td className="px-3 py-2">{j.hari}</td>
            <td className="px-3 py-2">{j.waktu}</td>
            <td className="px-3 py-2">{j.kegiatan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Kartu>
      </div>
    </main>
  );
}