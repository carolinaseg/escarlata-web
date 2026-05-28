import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { ButtonLink } from "@/components/ui/Button";
import { routes } from "@/lib/constants/routes";

export function HomeNewsletter() {
  return (
    <Section variant="compact" ariaLabelledby="novedades-titulo">
      <Container className="max-w-2xl text-center">
        <Eyebrow className="mb-3">Novedades</Eyebrow>
        <Heading id="novedades-titulo" balance>
          Recibí lanzamientos en primicia
        </Heading>
        <Text tone="muted" className="mx-auto mt-5 max-w-md">
          Ediciones limitadas y notas del taller. Escribinos o suscribite cuando
          activemos el boletín.
        </Text>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href={routes.contact}>Contactar</ButtonLink>
          <Link
            href={routes.catalog}
            className="inline-flex items-center px-4 py-3.5 text-[10px] font-medium uppercase tracking-[0.32em] text-piedra hover:text-negro"
          >
            Ver catálogo
          </Link>
        </div>
      </Container>
    </Section>
  );
}
