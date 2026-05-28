import { routes } from "@/lib/constants/routes";

export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "Catálogo", href: routes.catalog },
  { label: "Nosotros", href: routes.about },
  { label: "Contacto", href: routes.contact },
];

export const footerNavigation: NavItem[] = [
  { label: "Catálogo", href: routes.catalog },
  { label: "Nosotros", href: routes.about },
  { label: "Contacto", href: routes.contact },
];

export const authNavigation: NavItem[] = [
  { label: "Iniciar sesión", href: routes.login },
  { label: "Crear cuenta", href: routes.register },
];
