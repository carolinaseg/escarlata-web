import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ButtonLink } from "@/components/ui/Button";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé el taller Escarlata: velas y jabones artesanales elaborados con procesos lentos y materiales nobles.",
};

const values = [
  {
    title: "Proceso lento",
    text: "Curamos, vertimos y reposamos sin apuro. Cada lote tiene su tiempo.",
  },
  {
    title: "Materia consciente",
    text: "Cera de soja, aceites botánicos y fragancias equilibradas, sin excesos.",
  },
  {
    title: "Diseño sereno",
    text: "Envases y paleta pensados para integrarse en espacios calmados.",
  },
] as const;

const stats = [
  { label: "Fundación", value: "2020" },
  { label: "Artesanos", value: "6" },
  { label: "Lotes / mes", value: "48" },
] as const;

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="El taller"
        title="Menos ruido, más presencia"
        description="Escarlata nace del deseo de transformar lo cotidiano en ritual: un aroma que permanece, una espuma suave, una llama estable."
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div className="space-y-6">
            <Text>
              En un taller silencioso vertimos cera a temperatura precisa,
              curamos jabones durante semanas y elegimos envases que honran la
              materia prima sin competir con ella.
            </Text>
            <Text tone="muted">
              Inspirados en la estética de marcas que priorizan la experiencia
              sensorial, construimos piezas con identidad propia: artesanales,
              minimalistas y pensadas para durar.
            </Text>
            <ButtonLink href={routes.catalog}>Explorar catálogo</ButtonLink>
          </div>

          <div className="aspect-[4/3] bg-beige/80 shadow-soft" aria-hidden />
        </div>

        <div className="mt-20 grid gap-10 border-t border-negro/8 pt-16 md:grid-cols-3 md:gap-8">
          {values.map((value) => (
            <article key={value.title}>
              <Heading as={3}>{value.title}</Heading>
              <Text tone="muted" className="mt-3">
                {value.text}
              </Text>
            </article>
          ))}
        </div>

        <dl className="mt-20 grid grid-cols-3 gap-6 border-t border-negro/8 pt-12 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-piedra">
                {stat.label}
              </dt>
              <dd className="mt-2 font-serif text-3xl font-light text-negro">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-16 text-center text-sm text-piedra">
          ¿Querés visitar el taller?{" "}
          <Link href={routes.contact} className="text-negro underline-offset-4 hover:underline">
            Escribinos
          </Link>
        </p>
      </Container>
    </>
  );
}
