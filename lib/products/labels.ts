import type { Product } from "@/types/commerce";

/** Etiqueta editorial para tarjetas y detalle (sin hardcodear categorías). */
export function getProductLabel(product: Product): string {
  if (product.collection?.name) {
    return product.collection.name;
  }
  if (product.category?.name) {
    return product.category.name;
  }
  return "Escarlata";
}

export function getProductDetailLabel(product: Product): string {
  if (product.collection?.name) {
    return product.collection.name;
  }
  if (product.category?.name) {
    return `${product.category.name} artesanal`;
  }
  return "Pieza artesanal";
}
