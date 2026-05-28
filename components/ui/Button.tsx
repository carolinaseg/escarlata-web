import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { motion } from "@/lib/design/tokens";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.32em] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: `bg-negro text-crema hover:bg-rosa hover:text-negro ${motion.transition}`,
  secondary: `bg-beige text-negro hover:bg-rosa/30 ${motion.transition}`,
  outline: `border border-negro/15 text-negro hover:border-rosa hover:text-negro ${motion.transition}`,
  ghost: `text-piedra hover:text-negro ${motion.transition}`,
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5",
  md: "px-7 py-3.5",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
