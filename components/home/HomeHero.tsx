import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { routes } from "@/lib/constants/routes";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-end overflow-hidden md:min-h-[calc(100svh-4rem)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(216,180,160,0.35),transparent_65%)]"
        aria-hidden
      />

      <Container className="grid flex-1 items-end gap-10 pb-14 md:grid-cols-12 md:gap-8 md:pb-20">
        <div className="md:col-span-7">
          <Eyebrow tone="accent" className="mb-5 md:mb-6">
            Colección primavera 2026
          </Eyebrow>
          <Heading as={1} balance>
            Ritual lento,
            <span className="block italic text-rosa">hecho a mano.</span>
          </Heading>
        </div>

        <div className="flex flex-col gap-7 md:col-span-4 md:col-start-9 md:pb-1">
          <Text tone="muted">
            Velas y jabones artesanales con ingredientes nobles, fragancias
            equilibradas y una estética serena inspirada en la calma de los
            espacios bien cuidados.
          </Text>
          <div className="flex flex-wrap items-center gap-5">
            <ButtonLink href={routes.catalog}>
              Ver catálogo
              <span aria-hidden>→</span>
            </ButtonLink>
            <ButtonLink href={routes.about} variant="ghost" size="sm">
              Nuestro proceso
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div
        className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-negro/8 to-transparent"
        aria-hidden
      />
    </section>
  );
}
