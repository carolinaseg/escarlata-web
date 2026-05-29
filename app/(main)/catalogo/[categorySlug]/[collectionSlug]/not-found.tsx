import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { routes } from "@/lib/constants/routes";

export default function CollectionNotFound() {
  return (
    <>
      <PageHeader title="Colección no encontrada" centered />
      <Container className="py-14 md:py-20">
        <EmptyState
          title="Esta colección no existe"
          description="Verificá el enlace o explorá el catálogo completo."
          action={{ label: "Ver catálogo", href: routes.catalog }}
        />
      </Container>
    </>
  );
}
