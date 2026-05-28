import { EmptyState } from "@/components/ui/EmptyState";
import { routes } from "@/lib/constants/routes";

type ProductErrorProps = {
  message?: string;
  onRetry?: () => void;
};

export function ProductError({
  message = "No pudimos cargar los productos. Intentá de nuevo en unos instantes.",
}: ProductErrorProps) {
  return (
    <EmptyState
      title="Algo salió mal"
      description={message}
      action={{ label: "Volver al inicio", href: routes.home }}
    />
  );
}

export function ProductEmpty() {
  return (
    <EmptyState
      title="Catálogo en preparación"
      description="Muy pronto vas a encontrar aquí nuestras velas y jabones artesanales."
      action={{ label: "Volver al inicio", href: routes.home }}
    />
  );
}
