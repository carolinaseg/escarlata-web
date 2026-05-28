export type ProductCategory = "velas" | "jabones" | "sets";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: "ARS" | "USD";
  category: ProductCategory;
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
