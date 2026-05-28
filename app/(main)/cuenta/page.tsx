import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Text } from "@/components/ui/Text";
import { getUserDisplayName } from "@/lib/auth/user";
import { routes } from "@/lib/constants/routes";
import { getUser } from "@/lib/services/auth";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Gestioná tu perfil en Escarlata.",
};

export default async function CuentaPage() {
  const user = await getUser();

  if (!user) {
    redirect(routes.login);
  }

  const displayName = getUserDisplayName(user);
  const createdAt = user.created_at
    ? new Date(user.created_at).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <PageHeader
        eyebrow="Cuenta"
        title={`Hola, ${displayName}`}
        description="Tu sesión está activa. Desde aquí podrás gestionar pedidos cuando habilitemos el checkout."
      />

      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-lg space-y-8 border border-negro/8 bg-beige/20 p-8 shadow-soft md:p-10">
          <dl className="space-y-6">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-piedra">
                Correo
              </dt>
              <dd className="mt-2 font-serif text-xl font-light text-negro">
                {user.email}
              </dd>
            </div>
            {createdAt && (
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-piedra">
                  Miembro desde
                </dt>
                <dd className="mt-2 text-sm text-negro">{createdAt}</dd>
              </div>
            )}
          </dl>

          <Text tone="muted" variant="small">
            La gestión de pedidos y favoritos se activará en una próxima etapa.
          </Text>

          <LogoutButton className="w-full sm:w-auto" />
        </div>
      </Container>
    </>
  );
}
