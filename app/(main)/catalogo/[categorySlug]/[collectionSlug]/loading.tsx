import { ProductSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";

export default function CollectionLoading() {
  return (
    <Container className="py-14 md:py-20">
      <div className="mb-12 h-28 animate-pulse bg-beige/80" />
      <ProductSkeleton count={4} />
    </Container>
  );
}
