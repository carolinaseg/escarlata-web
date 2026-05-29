import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

const entries = [
  {
    date: "Mayo 2026",
    title: "Sobre el tiempo de curado",
    excerpt:
      "Por qué nuestros jabones reposan cuatro semanas antes de llegar a tu hogar.",
  },
  {
    date: "Abril 2026",
    title: "Notas de rosa cuarzo",
    excerpt:
      "La paleta que guía nuestras ediciones limitadas y la elección de envases.",
  },
] as const;

export function HomeJournal() {
  return (
    <Section className="bg-terciaria text-crema" id="diario" variant="warm" ariaLabelledby="diario-titulo">
      <Container>
        <Eyebrow className="mb-3">Diario</Eyebrow>
        <Heading id="diario-titulo" className="mb-10 md:mb-12">
          Desde el taller
        </Heading>

        <ul className="divide-y divide-negro/8">
          {entries.map((entry) => (
            <li key={entry.title}>
              <article
                className={cn(
                  "group grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8",
                )}
              >
                <time className="text-[11px] uppercase tracking-[0.22em] text-piedra md:col-span-2">
                  {entry.date}
                </time>
                <h3
                  className={cn(
                    "font-serif text-xl font-light text-negro md:col-span-4 md:text-2xl",
                    motion.transition,
                    "group-hover:text-rosa",
                  )}
                >
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-piedra md:col-span-5">
                  {entry.excerpt}
                </p>
                <span
                  className={cn(
                    "hidden text-rosa opacity-0 md:col-span-1 md:block md:text-right",
                    motion.transition,
                    "group-hover:opacity-100",
                  )}
                  aria-hidden
                >
                  →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
