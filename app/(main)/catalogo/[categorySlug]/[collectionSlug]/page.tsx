import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CollectionPageContent } from "@/components/catalog/CollectionPageContent";
import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";
import { getCollectionBySlug } from "@/lib/services/catalog";

type CollectionPageProps = {
  params: Promise<{ categorySlug: string; collectionSlug: string }>;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { categorySlug, collectionSlug } = await params;
  const result = await getCollectionBySlug(categorySlug, collectionSlug);

  if (!result.ok) {
    return { title: "Colección no encontrada" };
  }

  return {
    title: result.data.name,
    description: result.data.description ?? undefined,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { categorySlug, collectionSlug } = await params;

  const preview = await getCollectionBySlug(categorySlug, collectionSlug);
  if (
    !preview.ok &&
    (preview.error.includes("colección") || preview.error.includes("categoría"))
  ) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <Container className="py-14 md:py-20">
          <ProductSkeleton count={4} />
        </Container>
      }
    >
      <CollectionPageContent
        categorySlug={categorySlug}
        collectionSlug={collectionSlug}
      />
    </Suspense>
  );
}
