import type { ProductRow } from "@/types/database";
import type { Product, ProductCategory } from "@/types/commerce";

const CATEGORIES: ProductCategory[] = ["velas", "jabones", "sets"];

function isProductCategory(value: string): value is ProductCategory {
  return CATEGORIES.includes(value as ProductCategory);
}

export function mapProductRow(row: ProductRow): Product {
  const category = isProductCategory(row.category) ? row.category : "velas";

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    currency: row.currency,
    category,
    imageUrl: row.image_url ?? undefined,
    featured: row.featured,
    stock: row.stock ?? undefined,
  };
}

export function mapProductRows(rows: ProductRow[]): Product[] {
  return rows.map(mapProductRow);
}
