import type { ComponentPropsWithoutRef } from "react";
import { motion } from "@/lib/design/tokens";
import { cn } from "@/lib/utils/cn";

type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full min-w-0 border border-negro/10 bg-transparent px-4 py-3.5 text-sm text-negro",
        "placeholder:text-piedra/70 focus:border-rosa focus:outline-none",
        motion.transition,
        className,
      )}
      {...props}
    />
  );
}
