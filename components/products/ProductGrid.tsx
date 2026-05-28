import type { Product } from "@/types/commerce";
import { ProductCard } from "@/components/products/ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            linked
            priorityImage={index < 3}
          />
        </li>
      ))}
    </ul>
  );
}
