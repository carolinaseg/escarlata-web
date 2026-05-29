import type { CategoryRow, CollectionRow } from "@/types/database";
import type { Category, CategorySummary, Collection, CollectionSummary } from "@/types/catalog";

export function mapCategoryRow(row: CategoryRow): Category {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    imageUrl: row.image_url ?? undefined,
    sortOrder: row.sort_order,
  };
}

export function mapCategorySummary(row: Pick<CategoryRow, "id" | "slug" | "name" | "description">): CategorySummary {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
  };
}

export function mapCollectionRow(
  row: CollectionRow & { category?: Pick<CategoryRow, "id" | "slug" | "name" | "description"> | null },
): Collection {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    categoryId: row.category_id,
    imageUrl: row.image_url ?? undefined,
    sortOrder: row.sort_order,
    category: row.category ? mapCategorySummary(row.category) : undefined,
  };
}

export function mapCollectionSummary(
  row: Pick<CollectionRow, "id" | "slug" | "name" | "description" | "category_id">,
): CollectionSummary {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    categoryId: row.category_id,
  };
}

export function mapCategoryRows(rows: CategoryRow[]): Category[] {
  return rows.map(mapCategoryRow);
}

export function mapCollectionRows(
  rows: (CollectionRow & { category?: Pick<CategoryRow, "id" | "slug" | "name" | "description"> | null })[],
): Collection[] {
  return rows.map(mapCollectionRow);
}
