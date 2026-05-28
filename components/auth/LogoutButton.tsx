"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/Button";
import { logoutAction } from "@/lib/actions/auth";

type LogoutButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function LogoutButton({
  className,
  variant = "outline",
}: LogoutButtonProps) {
  const [pending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      disabled={pending}
      onClick={() => startTransition(() => logoutAction())}
    >
      {pending ? "Cerrando sesión…" : "Cerrar sesión"}
    </Button>
  );
}
