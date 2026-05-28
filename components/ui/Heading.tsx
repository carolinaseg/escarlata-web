import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = {
  children: ReactNode;
  as?: HeadingLevel;
  id?: string;
  className?: string;
  balance?: boolean;
};

const styles: Record<HeadingLevel, string> = {
  1: "font-serif text-4xl font-light leading-[1.08] sm:text-5xl md:text-6xl lg:text-[3.5rem]",
  2: "font-serif text-3xl font-light leading-tight sm:text-4xl md:text-[2.75rem]",
  3: "font-serif text-2xl font-light leading-snug",
};

export function Heading({
  children,
  as: Level = 2,
  id,
  className,
  balance = false,
}: HeadingProps) {
  const Tag = { 1: "h1", 2: "h2", 3: "h3" }[Level] as "h1" | "h2" | "h3";

  return (
    <Tag
      id={id}
      className={cn(
        styles[Level],
        "text-negro",
        balance && "text-balance",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
