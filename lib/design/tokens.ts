/**
 * Tokens de diseño centralizados.
 * Los colores también se definen en app/globals.css para Tailwind.
 */
export const colors = {
  crema: "#F5EFE6",
  rosaCuarzo: "#D8B4A0",
  negroSuave: "#1F1F1F",
  beigeCalido: "#E8DCCF",
  grisPiedra: "#B7B0A8",
} as const;

export const fonts = {
  serif: "var(--font-cormorant)",
  sans: "var(--font-dm-sans)",
} as const;

export const spacing = {
  sectionY: "py-20 md:py-28",
  sectionYCompact: "py-16 md:py-24",
} as const;

export const layout = {
  maxWidth: "max-w-6xl",
  gutter: "px-5 sm:px-6 md:px-10",
} as const;

export const motion = {
  transition: "transition-colors duration-300 ease-out",
  transitionSlow: "transition-all duration-500 ease-out",
} as const;

export const shadows = {
  soft: "0 4px 24px -4px rgba(31, 31, 31, 0.06)",
  card: "0 8px 32px -8px rgba(31, 31, 31, 0.08)",
} as const;
