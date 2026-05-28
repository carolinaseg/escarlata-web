import type { Metadata } from "next";
import { ProductCard } from "@/components/ui/ProductCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { getAllProducts } from "@/lib/services/products";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Velas y jabones artesanales Escarlata. Ediciones limitadas y materiales nobles.",
};

export default async function CatalogoPage() {
  const products = await getAllProducts();

  return (
    <>
      <PageHeader
        eyebrow="Colección"
        title="Catálogo"
        description="Piezas elaboradas a mano en lotes pequeños. Cada creación está pensada para transformar lo cotidiano en ritual."
      />

      <Container className="py-14 md:py-20">
        {products.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} linked />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-sm text-piedra">
            El catálogo estará disponible muy pronto.
          </p>
        )}
      </Container>
    </>
  );
}
