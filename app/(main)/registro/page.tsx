import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { routes } from "@/lib/constants/routes";
import { getUser } from "@/lib/services/auth";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Registrate en Escarlata para gestionar tus pedidos.",
};

export default async function RegistroPage() {
  const user = await getUser();

  if (user) {
    redirect(routes.account);
  }

  return <RegisterForm />;
}
