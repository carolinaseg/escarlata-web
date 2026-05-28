import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { routes } from "@/lib/constants/routes";
import { getFeaturedProducts } from "@/lib/services/products";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

export async function HomeFeatured() {
  const products = await getFeaturedProducts();

  return (
    <Section id="destacados" ariaLabelledby="destacados-titulo">
      <Container>
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="mb-3">Destacados</Eyebrow>
            <Heading id="destacados-titulo">Piezas esenciales</Heading>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Text tone="muted" className="max-w-xs md:text-right">
              Tres creaciones para comenzar. Cada lote es pequeño y numerado.
            </Text>
            <Link
              href={routes.catalog}
              className={cn(
                "text-[10px] font-medium uppercase tracking-[0.28em] text-negro",
                motion.transition,
                "hover:text-rosa",
              )}
            >
              Ver catálogo completo →
            </Link>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} linked />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
