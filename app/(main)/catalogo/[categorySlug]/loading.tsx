import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";

export default function CategoryLoading() {
  return (
    <Container className="py-14 md:py-20">
      <div className="mb-12 h-24 animate-pulse bg-beige/80" />
      <ProductSkeleton count={6} />
    </Container>
  );
}
