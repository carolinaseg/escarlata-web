import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CategoryPageContent } from "@/components/catalog/CategoryPageContent";
import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";
import { getCategoryBySlug } from "@/lib/services/catalog";

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export const revalidate = 60;

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const result = await getCategoryBySlug(categorySlug);

  if (!result.ok) {
    return { title: "Categoría no encontrada" };
  }

  return {
    title: result.data.name,
    description: result.data.description ?? undefined,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;

  const categoryResult = await getCategoryBySlug(categorySlug);
  if (!categoryResult.ok && categoryResult.error.includes("No encontramos")) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <Container className="py-14 md:py-20">
          <ProductSkeleton count={6} />
        </Container>
      }
    >
      <CategoryPageContent categorySlug={categorySlug} />
    </Suspense>
  );
}
