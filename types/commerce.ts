import type { CategorySummary, CollectionSummary } from "@/types/catalog";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: "ARS" | "USD";
  categoryId: string;
  category?: CategorySummary;
  collectionId?: string;
  collection?: CollectionSummary;
  imageUrl?: string;
  featured?: boolean;
  stock?: number;
};

export type CartItem = {
  productId: string;
  quantity: number;
};

export type Cart = {
  id: string;
  items: CartItem[];
  updatedAt: string;
};
