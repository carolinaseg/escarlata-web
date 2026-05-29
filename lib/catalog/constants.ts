export const CATEGORY_SELECT =
  "id, slug, name, description, image_url, sort_order, active, created_at, updated_at" as const;

export const COLLECTION_SELECT =
  "id, category_id, slug, name, description, image_url, sort_order, active, created_at, updated_at" as const;

export const PRODUCT_BASE_SELECT =
  "id, slug, name, description, price, currency, category_id, collection_id, image_url, featured, stock, active, created_at, updated_at" as const;

/** Producto con categoría y colección anidadas (join Supabase). */
export const PRODUCT_WITH_RELATIONS_SELECT = `
  ${PRODUCT_BASE_SELECT},
  category:categories (${CATEGORY_SELECT}),
  collection:collections (${COLLECTION_SELECT})
` as const;

export const COLLECTION_WITH_CATEGORY_SELECT = `
  ${COLLECTION_SELECT},
  category:categories (id, slug, name, description)
` as const;
