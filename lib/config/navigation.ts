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
  { label: "Mi cuenta", href: routes.account },
];
