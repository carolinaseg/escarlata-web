import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogContent } from "@/components/products/CatalogContent";
import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Velas y jabones artesanales Escarlata. Ediciones limitadas y materiales nobles.",
};

export const revalidate = 60;

export default function CatalogoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Colección"
        title="Catálogo"
        description="Piezas elaboradas a mano en lotes pequeños. Cada creación está pensada para transformar lo cotidiano en ritual."
      />

      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-10 md:py-20">
            <ProductSkeleton count={6} />
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </>
  );
}
