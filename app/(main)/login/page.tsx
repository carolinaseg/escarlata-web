import type { Metadata } from "next";
import { AuthCard, AuthFooterLink } from "@/components/auth/AuthCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accedé a tu cuenta Escarlata.",
};

export default function LoginPage() {
  return (
    <AuthCard
      eyebrow="Cuenta"
      title="Iniciar sesión"
      description="Ingresá para ver tus pedidos y guardar favoritos."
      footer={
        <AuthFooterLink
          text="¿No tenés cuenta?"
          linkText="Crear cuenta"
          href={routes.register}
        />
      }
    >
      <form className="space-y-4" action="#" method="post" aria-label="Iniciar sesión">
        <div>
          <label htmlFor="login-email" className="sr-only">
            Correo electrónico
          </label>
          <Input
            id="login-email"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="login-password" className="sr-only">
            Contraseña
          </label>
          <Input
            id="login-password"
            name="password"
            type="password"
            placeholder="Contraseña"
            autoComplete="current-password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Ingresar
        </Button>
      </form>
    </AuthCard>
  );
}
