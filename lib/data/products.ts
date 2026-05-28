import type { Product } from "@/types/commerce";

/**
 * Catálogo estático temporal hasta conectar Supabase.
 */
export const products: Product[] = [
  {
    id: "vela-nocturna",
    slug: "vela-nocturna",
    name: "Vela Nocturna",
    description: "Cera de soja, vainilla y sándalo. 220 g · 45 h de combustión.",
    price: 18500,
    currency: "ARS",
    category: "velas",
    featured: true,
  },
  {
    id: "jabon-lino",
    slug: "jabon-lino",
    name: "Jabón de Lino",
    description: "Aceites botánicos, arcilla blanca y lavanda. 120 g.",
    price: 9200,
    currency: "ARS",
    category: "jabones",
    featured: true,
  },
  {
    id: "set-amanecer",
    slug: "set-amanecer",
    name: "Set Amanecer",
    description: "Vela + jabón · edición limitada en beige cálido.",
    price: 24800,
    currency: "ARS",
    category: "sets",
    featured: true,
  },
  {
    id: "vela-amanecer",
    slug: "vela-amanecer",
    name: "Vela Amanecer",
    description: "Cera de soja, bergamota y té blanco. 180 g · 38 h.",
    price: 16200,
    currency: "ARS",
    category: "velas",
  },
  {
    id: "jabon-arcilla",
    slug: "jabon-arcilla",
    name: "Jabón de Arcilla",
    description: "Arcilla rosa, geranio y manteca de karité. 100 g.",
    price: 8800,
    currency: "ARS",
    category: "jabones",
  },
];
