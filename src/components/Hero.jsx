import Image from "next/image";
export default function Hero({ nama, tagline }) {
 return (
 <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
 <Image
 src="/aydin.jpeg"
 alt={`Foto profil ${nama}`}
 width={160}
 height={160}
 loading="eager"
 className="h-40 w-40 shrink-0 rounded-full border-4 border-primary object-cover"
 />
 <div>
 <h1 className="text-3xl font-bold text-primary md:text-5xl">Halo, saya Aydin Akmal Daffa{nama}!</h1>
 <p className="mt-3 text-lg text-muted-foreground">{tagline}</p>
 </div>
 </section>
 );
}