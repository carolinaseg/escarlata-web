import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { routes } from "@/lib/constants/routes";

export default function NotFound() {
  return (
    <SiteShell>
      <PageHeader title="Página no encontrada" centered />
      <Container className="py-14 md:py-20">
        <EmptyState
          title="No encontramos esta página"
          description="El enlace puede estar desactualizado o la página fue movida."
          action={{ label: "Volver al inicio", href: routes.home }}
        />
        <p className="mt-8 text-center">
          <Link
            href={routes.catalog}
            className="text-[10px] font-medium uppercase tracking-[0.28em] text-piedra hover:text-negro"
          >
            Ver catálogo
          </Link>
        </p>
      </Container>
    </SiteShell>
  );
}
