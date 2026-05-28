import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type TextProps = {
  children: ReactNode;
  className?: string;
  variant?: "body" | "small" | "caption";
  tone?: "default" | "muted" | "light";
};

const variants = {
  body: "text-sm leading-relaxed md:text-[0.9375rem]",
  small: "text-xs leading-relaxed",
  caption: "text-[11px] leading-relaxed",
};

const tones = {
  default: "text-negro",
  muted: "text-piedra",
  light: "text-crema/75",
};

export function Text({
  children,
  className,
  variant = "body",
  tone = "default",
}: TextProps) {
  return (
    <p className={cn(variants[variant], tones[tone], className)}>{children}</p>
  );
}
