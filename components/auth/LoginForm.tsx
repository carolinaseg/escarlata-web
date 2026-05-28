"use client";

import { useActionState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthCard, AuthFooterLink } from "@/components/auth/AuthCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { loginAction, type AuthActionState } from "@/lib/actions/auth";
import { routes } from "@/lib/constants/routes";

const initialState: AuthActionState = {};

type LoginFormProps = {
  redirectTo?: string;
};

export function LoginForm({ redirectTo }: LoginFormProps) {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

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
      <form action={formAction} className="space-y-4" aria-label="Iniciar sesión">
        {redirectTo && (
          <input type="hidden" name="redirect" value={redirectTo} />
        )}

        {state.error && <AuthAlert variant="error" message={state.error} />}
        {state.success && <AuthAlert variant="success" message={state.success} />}

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
            disabled={pending}
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
            disabled={pending}
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Ingresando…" : "Ingresar"}
        </Button>
      </form>
    </AuthCard>
  );
}
