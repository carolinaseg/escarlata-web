import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/types/catalog";
import { categoryRoute } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

type CategoryCardProps = {
  category: Category;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={categoryRoute(category.slug)}
      className={cn(
        "group flex flex-col overflow-hidden border border-negro/8 bg-crema shadow-soft",
        motion.transition,
        "hover:border-rosa/30 hover:bg-beige/40",
        className,
      )}
    >
      <div className="relative aspect-[5/4] bg-beige/60">
        {category.imageUrl ? (
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-beige/80 via-rosa/10 to-crema"
            aria-hidden
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-[10px] uppercase tracking-[0.35em] text-piedra">Explorar</p>
        <h2 className="mt-2 font-serif text-2xl font-light text-negro md:text-3xl">
          {category.name}
        </h2>
        {category.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-piedra">
            {category.description}
          </p>
        )}
        <span
          className={cn(
            "mt-6 text-[10px] font-medium uppercase tracking-[0.32em] text-negro",
            motion.transition,
            "group-hover:text-rosa",
          )}
        >
          Ver piezas →
        </span>
      </div>
    </Link>
  );
}
