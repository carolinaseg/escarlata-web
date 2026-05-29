import Link from "next/link";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { motion } from "@/lib/design/tokens";

type Crumb = {
  label: string;
  href?: string;
};

type CatalogBreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function CatalogBreadcrumbs({ items, className }: CatalogBreadcrumbsProps) {
  return (
    <nav aria-label="Migas de pan" className={cn("flex flex-wrap items-center gap-2", className)}>
      <Link
        href={routes.catalog}
        className={cn(
          "text-[10px] font-medium uppercase tracking-[0.28em] text-piedra",
          motion.transition,
          "hover:text-negro",
        )}
      >
        Catálogo
      </Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          <span className="text-piedra/50" aria-hidden>
            /
          </span>
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "text-[10px] font-medium uppercase tracking-[0.28em] text-piedra",
                motion.transition,
                "hover:text-negro",
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-negro">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
