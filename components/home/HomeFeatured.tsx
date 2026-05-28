import { Suspense } from "react";
import { FeaturedProducts } from "@/components/products/FeaturedProducts";
import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function HomeFeatured() {
  return (
    <Section id="destacados" ariaLabelledby="destacados-titulo">
      <Container>
        <Suspense fallback={<ProductSkeleton count={3} />}>
          <FeaturedProducts />
        </Suspense>
      </Container>
    </Section>
  );
}
