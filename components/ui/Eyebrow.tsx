import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "light";
};

const tones = {
  default: "text-piedra",
  accent: "text-rosa",
  light: "text-crema/60",
};

export function Eyebrow({ children, className, tone = "default" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-medium uppercase tracking-[0.4em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
