import type { Category } from "@/types/catalog";
import { CategoryCard } from "@/components/catalog/CategoryCard";

type CategoryGridProps = {
  categories: Category[];
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
}
