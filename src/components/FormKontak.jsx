"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const kelasInput =
  "mt-1 w-full rounded-lg border border-input bg-card p-2";

const kelasError = "mt-1 text-sm text-aksen";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }
    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      <div>
        <label htmlFor="nama" className="block font-semibold">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          placeholder="Contoh: Budi Santoso"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className={kelasInput}
        />
        {error.nama && <p className={kelasError}>{error.nama}</p>}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={kelasInput}
        />
        {error.email && <p className={kelasError}>{error.email}</p>}
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
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className={kelasInput}
        />
        {error.hp && <p className={kelasError}>{error.hp}</p>}
      </div>

      <div>
        <label htmlFor="keperluan" className="block font-semibold">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {error.keperluan && <p className={kelasError}>{error.keperluan}</p>}
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
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          className={kelasInput}
        />
        {error.pesan && <p className={kelasError}>{error.pesan}</p>}
      </div>

      <Button type="submit" size="lg">
        Kirim Pesan
      </Button>

      <p className="text-sm text-muted-foreground">
        Catatan: form ini belum mengirim pesan. Pengiriman pesan baru dibuat di
        Minggu 15.
      </p>

      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}