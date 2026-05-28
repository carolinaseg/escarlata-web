import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { cn } from "@/lib/utils/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  centered = false,
}: PageHeaderProps) {
  return (
    <header className={cn("border-b border-negro/5 bg-beige/40 py-14 md:py-20", className)}>
      <Container
        className={cn(
          "max-w-3xl",
          centered && "mx-auto text-center",
        )}
      >
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <Heading as={1} balance>
          {title}
        </Heading>
        {description && (
          <Text tone="muted" className={cn("mt-5", centered && "mx-auto")}>
            {description}
          </Text>
        )}
      </Container>
    </header>
  );
}
