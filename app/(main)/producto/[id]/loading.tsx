import { ProductDetailSkeleton } from "@/components/products/ProductSkeleton";
import { Container } from "@/components/ui/Container";

export default function ProductoLoading() {
  return (
    <Container className="py-14 md:py-20">
      <div className="mb-10 h-3 w-32 animate-pulse bg-beige" />
      <ProductDetailSkeleton />
    </Container>
  );
}
