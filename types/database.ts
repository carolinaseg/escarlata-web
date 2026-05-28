export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ProductCategoryDb = "velas" | "jabones" | "sets";
export type ProductCurrencyDb = "ARS" | "USD";

export type ProductRow = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: ProductCurrencyDb;
  category: ProductCategoryDb;
  image_url: string | null;
  featured: boolean;
  stock: number | null;
  active: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductInsert = Omit<ProductRow, "id" | "created_at" | "updated_at"> & {
  id?: string;
  created_at?: string;
  updated_at?: string;
};

export type Database = {
  public: {
    Tables: {
      products: {
        Row: ProductRow;
        Insert: ProductInsert;
        Update: Partial<ProductInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
