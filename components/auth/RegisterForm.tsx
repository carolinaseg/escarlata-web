"use client";

import { useActionState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthCard, AuthFooterLink } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { registerAction, type AuthActionState } from "@/lib/actions/auth";
import { routes } from "@/lib/constants/routes";

const initialState: AuthActionState = {};

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(registerAction, initialState);

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
      <form action={formAction} className="space-y-4" aria-label="Crear cuenta">
        {state.error && <AuthAlert variant="error" message={state.error} />}
        {state.success && <AuthAlert variant="success" message={state.success} />}

        <div>
          <label htmlFor="register-name" className="sr-only">
            Nombre
          </label>
          <Input
            id="register-name"
            name="name"
            placeholder="Nombre"
            autoComplete="name"
            required
            disabled={pending}
          />
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
            disabled={pending}
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
            placeholder="Contraseña (mín. 6 caracteres)"
            autoComplete="new-password"
            minLength={6}
            required
            disabled={pending}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Creando cuenta…" : "Registrarme"}
        </Button>
      </form>
    </AuthCard>
  );
}
