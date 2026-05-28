import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils/cn";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  children,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-sm border border-negro/8 bg-beige/30 px-8 py-16 text-center md:px-12 md:py-20",
        className,
      )}
    >
      <Heading as={3} className="text-negro">
        {title}
      </Heading>
      <Text tone="muted" className="mt-4 max-w-md">
        {description}
      </Text>
      {children}
      {action && (
        <ButtonLink href={action.href} variant="outline" className="mt-8">
          {action.label}
        </ButtonLink>
      )}
    </div>
  );
}
