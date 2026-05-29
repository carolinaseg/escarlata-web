import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { routes } from "@/lib/constants/routes";

export default function CategoryNotFound() {
  return (
    <>
      <PageHeader title="Categoría no encontrada" centered />
      <Container className="py-14 md:py-20">
        <EmptyState
          title="Esta categoría no existe"
          description="El enlace puede estar desactualizado o la categoría fue movida."
          action={{ label: "Ver catálogo", href: routes.catalog }}
        />
      </Container>
    </>
  );
}
