import type { Category, CategoryPageData, Collection } from "@/types/catalog";
import type { Product } from "@/types/commerce";

export type CatalogSuccess<T> = { ok: true; data: T };
export type CatalogFailure = { ok: false; error: string };
export type CatalogResult<T> = CatalogSuccess<T> | CatalogFailure;

export type CategoriesResult = CatalogResult<Category[]>;
export type CategoryResult = CatalogResult<Category>;
export type CollectionResult = CatalogResult<Collection>;
export type CategoryPageResult = CatalogResult<CategoryPageData>;
export type ProductsResult = CatalogResult<Product[]>;
