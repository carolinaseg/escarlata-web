import { notFound } from "next/navigation";
import { CategoryBanner } from "@/components/catalog/CategoryBanner";
import { CatalogBreadcrumbs } from "@/components/catalog/CatalogBreadcrumbs";
import { CollectionCard } from "@/components/catalog/CollectionCard";
import { CollectionSection } from "@/components/catalog/CollectionSection";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductError } from "@/components/products/ProductFeedback";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getCategoryPageData } from "@/lib/services/catalog";

type CategoryPageContentProps = {
  categorySlug: string;
};

export async function CategoryPageContent({ categorySlug }: CategoryPageContentProps) {
  const result = await getCategoryPageData(categorySlug);

  if (!result.ok) {
    if (result.error.includes("No encontramos esta categoría")) {
      notFound();
    }
    return (
      <Container className="py-14 md:py-20">
        <ProductError message={result.error} />
      </Container>
    );
  }

  const { category, collections, standaloneProducts } = result.data;
  const collectionsWithProducts = collections.filter((c) => c.products.length > 0);
  const emptyCollections = collections.filter((c) => c.products.length === 0);

  return (
    <>
      <CategoryBanner category={category} />

      <Container className="space-y-16 py-10 md:space-y-20 md:py-14">
        <CatalogBreadcrumbs items={[{ label: category.name }]} />

        {collections.length > 0 && (
          <section aria-label="Colecciones de la categoría">
            <Heading as={2} className="mb-6 text-2xl md:text-3xl">
              Colecciones
            </Heading>
            <ul className="grid gap-4 sm:grid-cols-2">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <CollectionCard
                    collection={collection}
                    categorySlug={category.slug}
                    productCount={collection.products.length}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {collectionsWithProducts.map((collection) => (
          <CollectionSection
            key={collection.id}
            collection={collection}
            categorySlug={category.slug}
          />
        ))}

        {standaloneProducts.length > 0 && (
          <section aria-labelledby="standalone-heading">
            <Heading as={2} id="standalone-heading" className="mb-8 text-2xl md:text-3xl">
              {collections.length > 0 ? "Más piezas" : "Todas las piezas"}
            </Heading>
            <ProductGrid products={standaloneProducts} />
          </section>
        )}

        {standaloneProducts.length === 0 &&
          collectionsWithProducts.length === 0 &&
          emptyCollections.length === 0 && (
            <p className="text-center text-sm text-piedra">
              Próximamente nuevas piezas en esta categoría.
            </p>
          )}
      </Container>
    </>
  );
}
