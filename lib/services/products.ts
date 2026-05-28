import {
  fetchAllProducts,
  fetchFeaturedProducts,
  fetchProductBySlugOrId,
  fetchProductSlugs,
} from "@/lib/products/repository";
import type { ProductResult, ProductsResult } from "@/lib/products/types";
import type { Product } from "@/types/commerce";

/**
 * API de productos para la aplicación.
 * La persistencia vive en lib/products/repository.ts (Supabase).
 */
export async function getAllProducts(): Promise<ProductsResult> {
  return fetchAllProducts();
}

export async function getFeaturedProducts(): Promise<ProductsResult> {
  return fetchFeaturedProducts();
}

export async function getProductBySlugOrId(slugOrId: string): Promise<ProductResult> {
  return fetchProductBySlugOrId(slugOrId);
}

/** @deprecated Usar getProductBySlugOrId */
export async function getProductById(id: string): Promise<Product | null> {
  const result = await fetchProductBySlugOrId(id);
  return result.ok ? result.data : null;
}

export async function getProductSlugs(): Promise<string[]> {
  return fetchProductSlugs();
}

/** @deprecated Usar getProductSlugs */
export async function getProductIds(): Promise<string[]> {
  return fetchProductSlugs();
}
