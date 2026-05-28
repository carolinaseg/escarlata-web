import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export default function CatalogoLoading() {
  return (
    <>
      <PageHeader
        eyebrow="Colección"
        title="Catálogo"
        description="Cargando piezas del taller…"
      />
      <Container className="py-14 md:py-20">
        <ProductSkeleton count={6} />
      </Container>
    </>
  );
}
