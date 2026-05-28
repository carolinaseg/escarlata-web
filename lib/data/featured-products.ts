import { products } from "@/lib/data/products";

export const featuredProducts = products.filter((product) => product.featured);
