import type { ProductRowWithRelations } from "@/types/database";
import type { Product } from "@/types/commerce";
import { mapCategorySummary, mapCollectionSummary } from "@/lib/catalog/mapper";

export function mapProductRow(row: ProductRowWithRelations): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    currency: row.currency,
    categoryId: row.category_id,
    category: row.category ? mapCategorySummary(row.category) : undefined,
    collectionId: row.collection_id ?? undefined,
    collection: row.collection ? mapCollectionSummary(row.collection) : undefined,
    imageUrl: row.image_url ?? undefined,
    featured: row.featured,
    stock: row.stock ?? undefined,
  };
}

export function mapProductRows(rows: ProductRowWithRelations[]): Product[] {
  return rows.map(mapProductRow);
}
