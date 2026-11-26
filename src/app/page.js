import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

export default async function Beranda() {
  const { data: skills } = await supabase.from("skills").select("*");

  const { data: proyekTerbaru } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills?.map((item) => (
            <Card key={item.id ?? item.nama}>
              <CardHeader>
                <CardTitle>{item.nama}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge>{item.level}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru?.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className={buttonVariants({ size: "lg", className: "mt-6" })}
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}