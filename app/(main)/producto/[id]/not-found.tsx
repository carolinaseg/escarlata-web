import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { routes } from "@/lib/constants/routes";

export default function ProductoNotFound() {
  return (
    <>
      <PageHeader title="Producto no encontrado" centered />
      <Container className="py-14 md:py-20">
        <EmptyState
          title="Esta pieza no existe"
          description="Es posible que el enlace haya cambiado o que el producto ya no forme parte de la colección actual."
          action={{ label: "Ir al catálogo", href: routes.catalog }}
        />
      </Container>
    </>
  );
}
