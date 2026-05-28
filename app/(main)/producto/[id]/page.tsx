import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductDetailContent } from "@/components/products/ProductDetailContent";
import { ProductDetailSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";
import { getProductBySlugOrId } from "@/lib/services/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export const revalidate = 60;

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const result = await getProductBySlugOrId(id);

  if (!result.ok) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: result.data.name,
    description: result.data.description,
  };
}

export default async function ProductoPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <Container className="py-14 md:py-20">
          <ProductDetailSkeleton />
        </Container>
      }
    >
      <ProductDetailContent slugOrId={id} />
    </Suspense>
  );
}
