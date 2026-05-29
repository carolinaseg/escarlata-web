import Image from "next/image";
import type { Category, Collection } from "@/types/catalog";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils/cn";

type CategoryBannerProps = {
  category: Category;
  collection?: Collection;
  className?: string;
};

export function CategoryBanner({ category, collection, className }: CategoryBannerProps) {
  const title = collection?.name ?? category.name;
  const description = collection?.description ?? category.description;
  const imageUrl = collection?.imageUrl ?? category.imageUrl;

  return (
    <header
      className={cn(
        "relative border-b border-negro/5 bg-beige/30",
        className,
      )}
    >
      {imageUrl && (
        <div className="absolute inset-0 opacity-30">
          <Image src={imageUrl} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-crema via-crema/90 to-crema/70" />
        </div>
      )}

      <Container className="relative py-14 md:py-20">
        <Eyebrow tone="accent" className="mb-3">
          {collection ? category.name : "Categoría"}
        </Eyebrow>
        <Heading as={1} balance>
          {title}
        </Heading>
        {description && (
          <Text tone="muted" className="mt-5 max-w-2xl">
            {description}
          </Text>
        )}
      </Container>
    </header>
  );
}
