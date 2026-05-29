import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/products/ProductImage";
import { ProductError } from "@/components/products/ProductFeedback";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import {
  categoryRoute,
  collectionRoute,
  routes,
} from "@/lib/constants/routes";
import { getProductDetailLabel } from "@/lib/products/labels";
import { getProductBySlugOrId } from "@/lib/services/products";
import { formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

type ProductDetailContentProps = {
  slugOrId: string;
};

export async function ProductDetailContent({ slugOrId }: ProductDetailContentProps) {
  const result = await getProductBySlugOrId(slugOrId);

  if (!result.ok) {
    if (result.error.includes("No encontramos")) {
      notFound();
    }

    return (
      <Container className="py-14 md:py-20">
        <ProductError message={result.error} />
      </Container>
    );
  }

  const product = result.data;
  const inStock = product.stock === undefined || product.stock > 0;

  return (
    <>
      <Container className="py-10 md:py-14">
        <nav className="flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em]">
          <Link
            href={routes.catalog}
            className={cn("text-piedra", motion.transition, "hover:text-negro")}
          >
            Catálogo
          </Link>
          {product.category && (
            <>
              <span className="text-piedra/50" aria-hidden>
                /
              </span>
              <Link
                href={categoryRoute(product.category.slug)}
                className={cn("text-piedra", motion.transition, "hover:text-negro")}
              >
                {product.category.name}
              </Link>
            </>
          )}
          {product.collection && product.category && (
            <>
              <span className="text-piedra/50" aria-hidden>
                /
              </span>
              <Link
                href={collectionRoute(product.category.slug, product.collection.slug)}
                className={cn("text-piedra", motion.transition, "hover:text-negro")}
              >
                {product.collection.name}
              </Link>
            </>
          )}
        </nav>
      </Container>

      <Container className="pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            priority
            className="shadow-soft"
          />

          <div className="flex flex-col justify-center">
            <Eyebrow tone="accent" className="mb-4">
              {getProductDetailLabel(product)}
            </Eyebrow>
            <Heading as={1}>{product.name}</Heading>
            <Text tone="muted" className="mt-5">
              {product.description}
            </Text>

            <p className="mt-8 font-serif text-3xl font-light text-negro">
              {formatPrice(product.price, product.currency)}
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-piedra">
              {inStock ? "Disponible" : "Agotado"}
              {product.stock !== undefined && inStock && (
                <span className="text-negro/60"> · {product.stock} unidades</span>
              )}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href={routes.contact}>
                Consultar disponibilidad
              </ButtonLink>
              {product.category && (
                <ButtonLink
                  href={categoryRoute(product.category.slug)}
                  variant="ghost"
                  size="sm"
                >
                  Ver categoría
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
