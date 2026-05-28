import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductEmpty, ProductError } from "@/components/products/ProductFeedback";
import { getAllProducts } from "@/lib/services/products";

export async function CatalogContent() {
  const result = await getAllProducts();

  if (!result.ok) {
    return (
      <Container className="py-14 md:py-20">
        <ProductError message={result.error} />
      </Container>
    );
  }

  if (result.data.length === 0) {
    return (
      <Container className="py-14 md:py-20">
        <ProductEmpty />
      </Container>
    );
  }

  return (
    <Container className="py-14 md:py-20">
      <ProductGrid products={result.data} />
    </Container>
  );
}
