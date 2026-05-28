import type { Metadata } from "next";
import { AuthCard, AuthFooterLink } from "@/components/auth/AuthCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Registrate en Escarlata para gestionar tus pedidos.",
};

export default function RegistroPage() {
  return (
    <AuthCard
      eyebrow="Cuenta"
      title="Crear cuenta"
      description="Un perfil simple para seguir tus pedidos y novedades del taller."
      footer={
        <AuthFooterLink
          text="¿Ya tenés cuenta?"
          linkText="Iniciar sesión"
          href={routes.login}
        />
      }
    >
      <form className="space-y-4" action="#" method="post" aria-label="Crear cuenta">
        <div>
          <label htmlFor="register-name" className="sr-only">
            Nombre
          </label>
          <Input id="register-name" name="name" placeholder="Nombre" required />
        </div>
        <div>
          <label htmlFor="register-email" className="sr-only">
            Correo electrónico
          </label>
          <Input
            id="register-email"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="register-password" className="sr-only">
            Contraseña
          </label>
          <Input
            id="register-password"
            name="password"
            type="password"
            placeholder="Contraseña"
            autoComplete="new-password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Registrarme
        </Button>
      </form>
    </AuthCard>
  );
}
