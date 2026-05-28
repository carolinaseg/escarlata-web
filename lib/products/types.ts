import type { Product } from "@/types/commerce";

export type ProductsSuccess = {
  ok: true;
  data: Product[];
};

export type ProductsFailure = {
  ok: false;
  error: string;
};

export type ProductsResult = ProductsSuccess | ProductsFailure;

export type ProductSuccess = {
  ok: true;
  data: Product;
};

export type ProductFailure = {
  ok: false;
  error: string;
};

export type ProductResult = ProductSuccess | ProductFailure;
