/** Resumen de categoría embebido en productos y navegación. */
export type CategorySummary = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
};

export type Category = CategorySummary & {
  imageUrl?: string;
  sortOrder: number;
};

/** Resumen de colección (siempre ligada a una categoría). */
export type CollectionSummary = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  categoryId: string;
};

export type Collection = CollectionSummary & {
  imageUrl?: string;
  sortOrder: number;
  category?: CategorySummary;
};

export type CollectionWithProducts = Collection & {
  products: import("@/types/commerce").Product[];
};

export type CategoryPageData = {
  category: Category;
  collections: CollectionWithProducts[];
  /** Productos de la categoría sin colección asignada. */
  standaloneProducts: import("@/types/commerce").Product[];
};
