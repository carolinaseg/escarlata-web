import Link from "next/link";
import type { Product } from "@/types/commerce";
import { ProductImage } from "@/components/products/ProductImage";
import { getProductLabel } from "@/lib/products/labels";
import { productRoute } from "@/lib/constants/routes";
import { formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";
import { Text } from "@/components/ui/Text";

type ProductCardProps = {
  product: Product;
  className?: string;
  linked?: boolean;
  priorityImage?: boolean;
};

export function ProductCard({
  product,
  className,
  linked = false,
  priorityImage = false,
}: ProductCardProps) {
  const content = (
    <>
      <ProductImage
        src={product.imageUrl}
        alt={product.name}
        priority={priorityImage}
        className="mb-8 transition-colors duration-500 group-hover:bg-rosa/10"
      />

      <div className="mt-auto space-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-piedra">
          {getProductLabel(product)}
        </p>
        <h3 className="font-serif text-2xl font-light text-negro">{product.name}</h3>
        <Text variant="small" tone="muted" className="line-clamp-2">
          {product.description}
        </Text>
        <p className="pt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-negro">
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </>
  );

  const classes = cn(
    "group flex h-full flex-col bg-crema p-6 shadow-soft transition-colors duration-300 hover:bg-beige md:p-8",
    linked && "focus-within:ring-1 focus-within:ring-rosa/40",
    className,
  );

  if (linked) {
    return (
      <Link href={productRoute(product.slug)} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
