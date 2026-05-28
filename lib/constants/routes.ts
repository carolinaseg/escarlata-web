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

/** Ruta de ficha de producto (slug o id). */
export function productRoute(slugOrId: string): `/producto/${string}` {
  return `/producto/${slugOrId}`;
}
