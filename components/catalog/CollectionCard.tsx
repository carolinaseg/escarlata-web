import Link from "next/link";
import type { Collection } from "@/types/catalog";
import { collectionRoute } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

type CollectionCardProps = {
  collection: Collection;
  categorySlug: string;
  productCount?: number;
};

export function CollectionCard({
  collection,
  categorySlug,
  productCount,
}: CollectionCardProps) {
  return (
    <Link
      href={collectionRoute(categorySlug, collection.slug)}
      className={cn(
        "group block border border-negro/8 bg-crema/80 p-6 shadow-soft md:p-8",
        motion.transition,
        "hover:border-rosa/35 hover:bg-beige/50",
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.35em] text-rosa">Colección</p>
      <h3 className="mt-2 font-serif text-xl font-light text-negro md:text-2xl">
        {collection.name}
      </h3>
      {collection.description && (
        <p className="mt-3 text-sm leading-relaxed text-piedra line-clamp-2">
          {collection.description}
        </p>
      )}
      <p
        className={cn(
          "mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-negro",
          motion.transition,
          "group-hover:text-rosa",
        )}
      >
        {productCount !== undefined
          ? `${productCount} pieza${productCount === 1 ? "" : "s"} →`
          : "Ver colección →"}
      </p>
    </Link>
  );
}
