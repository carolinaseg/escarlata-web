import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductError } from "@/components/products/ProductFeedback";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { routes } from "@/lib/constants/routes";
import { getFeaturedProducts } from "@/lib/services/products";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

export async function FeaturedProducts() {
  const result = await getFeaturedProducts();

  if (!result.ok) {
    return (
      <div className="py-8">
        <ProductError message={result.error} />
      </div>
    );
  }

  if (result.data.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="mb-3">Destacados</Eyebrow>
          <Heading id="destacados-titulo">Piezas esenciales</Heading>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Text tone="muted" className="max-w-xs md:text-right">
            Creaciones seleccionadas del taller. Cada lote es pequeño y numerado.
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

      <ProductGrid products={result.data} />
    </>
  );
}
