import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogIndexContent } from "@/components/catalog/CatalogIndexContent";
import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Explorá velas, jabones, kits y más. Colecciones artesanales Escarlata.",
};

export const revalidate = 60;

export default function CatalogoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Explorar"
        title="Catálogo"
        description="Navegá por categorías y colecciones. Cada pieza está pensada para transformar lo cotidiano en ritual."
      />

      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-10 md:py-20">
            <ProductSkeleton count={5} />
          </div>
        }
      >
        <CatalogIndexContent />
      </Suspense>
    </>
  );
}
