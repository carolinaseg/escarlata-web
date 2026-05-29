import { CategoryGrid } from "@/components/catalog/CategoryGrid";
import { ProductEmpty, ProductError } from "@/components/products/ProductFeedback";
import { Container } from "@/components/ui/Container";
import { getCategories } from "@/lib/services/catalog";

export async function CatalogIndexContent() {
  const result = await getCategories();

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
      <CategoryGrid categories={result.data} />
    </Container>
  );
}
