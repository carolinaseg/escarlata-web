import type { ReactNode } from "react";
import { layout } from "@/lib/design/tokens";
import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full", layout.maxWidth, layout.gutter, className)}
    >
      {children}
    </Component>
  );
}
