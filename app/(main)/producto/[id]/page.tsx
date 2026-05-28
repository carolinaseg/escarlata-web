import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { routes } from "@/lib/constants/routes";
import { getProductById, getProductIds } from "@/lib/services/products";
import { formatPrice } from "@/lib/utils/format";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

const categoryLabels = {
  velas: "Vela artesanal",
  jabones: "Jabón artesanal",
  sets: "Set ritual",
} as const;

export async function generateStaticParams() {
  const ids = await getProductIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductoPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Container className="py-10 md:py-14">
        <Link
          href={routes.catalog}
          className="text-[10px] font-medium uppercase tracking-[0.28em] text-piedra transition-colors hover:text-negro"
        >
          ← Volver al catálogo
        </Link>
      </Container>

      <Container className="pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div
            className="aspect-[4/5] w-full bg-beige/80 shadow-soft"
            aria-hidden
          />

          <div className="flex flex-col justify-center">
            <Eyebrow tone="accent" className="mb-4">
              {categoryLabels[product.category]}
            </Eyebrow>
            <Heading as={1}>{product.name}</Heading>
            <Text tone="muted" className="mt-5">
              {product.description}
            </Text>
            <p className="mt-8 font-serif text-3xl font-light text-negro">
              {formatPrice(product.price, product.currency)}
            </p>

            <div className="mt-10 space-y-4">
              <EmptyState
                title="Próximamente disponible"
                description="El carrito y el pago con Mercado Pago se activarán en la siguiente etapa. Mientras tanto, puedes consultarnos para reservar esta pieza."
                action={{ label: "Contactar", href: routes.contact }}
                className="items-stretch text-left md:items-center md:text-center"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={routes.contact}>Consultar disponibilidad</ButtonLink>
              <ButtonLink href={routes.catalog} variant="ghost" size="sm">
                Ver más piezas
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
