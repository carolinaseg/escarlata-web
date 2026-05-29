/**
 * Rutas centralizadas. Usar siempre estas constantes en lugar de strings sueltos.
 */
export const routes = {
  home: "/",
  catalog: "/catalogo",
  about: "/nosotros",
  contact: "/contacto",
  login: "/login",
  register: "/registro",
  journal: "/#diario",
  cart: "/carrito",
  checkout: "/checkout",
  account: "/cuenta",
  admin: "/admin",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

export function categoryRoute(categorySlug: string): `/catalogo/${string}` {
  return `/catalogo/${categorySlug}`;
}

export function collectionRoute(
  categorySlug: string,
  collectionSlug: string,
): `/catalogo/${string}/${string}` {
  return `/catalogo/${categorySlug}/${collectionSlug}`;
}

/** Ruta de ficha de producto (slug). */
export function productRoute(slugOrId: string): `/producto/${string}` {
  return `/producto/${slugOrId}`;
}
