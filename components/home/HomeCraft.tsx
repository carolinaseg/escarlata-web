import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { routes } from "@/lib/constants/routes";

export function HomeCraft() {
  return (
    <Section variant="dark" ariaLabelledby="taller-titulo">
      <Container className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <Eyebrow tone="light" className="mb-3">
            El taller
          </Eyebrow>
          <Heading id="taller-titulo" className="text-crema">
            Menos ruido,
            <span className="block italic text-rosa">más presencia.</span>
          </Heading>
        </div>

        <div className="space-y-6">
          <Text tone="light">
            Vertimos cera a temperatura precisa, curamos jabones durante semanas y
            elegimos envases que honran la materia prima sin competir con ella.
          </Text>
          <ButtonLink href={routes.about} variant="secondary">
            Conocer el taller
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
