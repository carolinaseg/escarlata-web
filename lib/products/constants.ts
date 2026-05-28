import type { ProductCategory } from "@/types/commerce";

export const PRODUCT_SELECT =
  "id, slug, name, description, price, currency, category, image_url, featured, stock, active, created_at, updated_at" as const;

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  velas: "Vela",
  jabones: "Jabón",
  sets: "Set",
};

export const CATEGORY_DETAIL_LABELS: Record<ProductCategory, string> = {
  velas: "Vela artesanal",
  jabones: "Jabón artesanal",
  sets: "Set ritual",
};
