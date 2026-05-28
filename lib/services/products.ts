import { products } from "@/lib/data/products";
import type { Product } from "@/types/commerce";

/**
 * Capa de acceso a productos.
 * Sustituir implementación interna por Supabase cuando el catálogo esté listo.
 */
export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((product) => product.featured);
}

export async function getProductById(id: string): Promise<Product | null> {
  return (
    products.find((product) => product.id === id || product.slug === id) ?? null
  );
}

export async function getProductIds(): Promise<string[]> {
  return products.map((product) => product.id);
}
