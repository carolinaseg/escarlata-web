import { routes } from "@/lib/constants/routes";

/** Rutas accesibles solo sin sesión (redirigen a cuenta si hay usuario). */
export const guestOnlyPaths = [routes.login, routes.register] as const;

/** Rutas que requieren sesión activa. */
export const protectedPaths = [routes.account] as const;

export function isGuestOnlyPath(pathname: string): boolean {
  return guestOnlyPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

export function isProtectedPath(pathname: string): boolean {
  return protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

/** Evita open redirects: solo rutas internas relativas. */
export function getSafeRedirect(path: string | null | undefined): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return routes.account;
  }
  if (isGuestOnlyPath(path)) {
    return routes.account;
  }
  return path;
}
