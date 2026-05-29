import { notFound } from "next/navigation";
import { CategoryBanner } from "@/components/catalog/CategoryBanner";
import { CatalogBreadcrumbs } from "@/components/catalog/CatalogBreadcrumbs";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductError } from "@/components/products/ProductFeedback";
import { Container } from "@/components/ui/Container";
import { categoryRoute } from "@/lib/constants/routes";
import {
  getCollectionBySlug,
  getProductsByCollectionId,
} from "@/lib/services/catalog";

type CollectionPageContentProps = {
  categorySlug: string;
  collectionSlug: string;
};

export async function CollectionPageContent({
  categorySlug,
  collectionSlug,
}: CollectionPageContentProps) {
  const collectionResult = await getCollectionBySlug(categorySlug, collectionSlug);

  if (!collectionResult.ok) {
    if (
      collectionResult.error.includes("categoría") ||
      collectionResult.error.includes("colección")
    ) {
      notFound();
    }
    return (
      <Container className="py-14 md:py-20">
        <ProductError message={collectionResult.error} />
      </Container>
    );
  }

  const collection = collectionResult.data;
  const productsResult = await getProductsByCollectionId(collection.id);

  if (!productsResult.ok) {
    return (
      <Container className="py-14 md:py-20">
        <ProductError message={productsResult.error} />
      </Container>
    );
  }

  const category = collection.category;
  if (!category) {
    notFound();
  }

  return (
    <>
      <CategoryBanner
        category={{
          id: category.id,
          slug: category.slug,
          name: category.name,
          description: category.description,
          sortOrder: 0,
        }}
        collection={collection}
      />

      <Container className="space-y-12 py-10 md:py-14">
        <CatalogBreadcrumbs
          items={[
            { label: category.name, href: categoryRoute(category.slug) },
            { label: collection.name },
          ]}
        />

        {productsResult.data.length > 0 ? (
          <ProductGrid products={productsResult.data} />
        ) : (
          <p className="text-center text-sm text-piedra">
            Próximamente nuevas piezas en esta colección.
          </p>
        )}
      </Container>
    </>
  );
}
