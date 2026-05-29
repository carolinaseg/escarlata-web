import type { CollectionWithProducts } from "@/types/catalog";
import { CollectionCard } from "@/components/catalog/CollectionCard";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { collectionRoute } from "@/lib/constants/routes";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

type CollectionSectionProps = {
  collection: CollectionWithProducts;
  categorySlug: string;
  showProducts?: boolean;
};

export function CollectionSection({
  collection,
  categorySlug,
  showProducts = true,
}: CollectionSectionProps) {
  const hasProducts = collection.products.length > 0;

  return (
    <section className="space-y-8" aria-labelledby={`collection-${collection.slug}`}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-piedra">Colección</p>
          <Heading as={2} id={`collection-${collection.slug}`} className="mt-2">
            {collection.name}
          </Heading>
          {collection.description && (
            <Text tone="muted" className="mt-3 max-w-xl">
              {collection.description}
            </Text>
          )}
        </div>
        <Link
          href={collectionRoute(categorySlug, collection.slug)}
          className={cn(
            "shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-negro",
            motion.transition,
            "hover:text-rosa",
          )}
        >
          Ver colección →
        </Link>
      </div>

      {!showProducts && (
        <CollectionCard
          collection={collection}
          categorySlug={categorySlug}
          productCount={collection.products.length}
        />
      )}

      {showProducts && hasProducts && (
        <ProductGrid products={collection.products} />
      )}

      {showProducts && !hasProducts && (
        <p className="text-sm text-piedra">Próximamente nuevas piezas en esta colección.</p>
      )}
    </section>
  );
}
