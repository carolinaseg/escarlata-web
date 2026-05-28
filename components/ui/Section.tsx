import type { ReactNode } from "react";
import { spacing } from "@/lib/design/tokens";
import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "warm" | "dark" | "compact";
  ariaLabelledby?: string;
};

const variants = {
  default: "bg-crema",
  warm: "bg-beige",
  dark: "bg-negro text-crema",
  compact: "bg-crema",
};

const paddings = {
  default: spacing.sectionY,
  warm: spacing.sectionY,
  dark: spacing.sectionY,
  compact: spacing.sectionYCompact,
};

export function Section({
  children,
  id,
  className,
  variant = "default",
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("scroll-mt-24", variants[variant], paddings[variant], className)}
    >
      {children}
    </section>
  );
}
