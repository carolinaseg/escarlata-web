import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/LoginForm";
import { getSafeRedirect } from "@/lib/auth/config";
import { routes } from "@/lib/constants/routes";
import { getUser } from "@/lib/services/auth";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accedé a tu cuenta Escarlata.",
};

type LoginPageProps = {
  searchParams: Promise<{ redirect?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const user = await getUser();

  if (user) {
    redirect(routes.account);
  }

  const { redirect: redirectParam } = await searchParams;

  return <LoginForm redirectTo={getSafeRedirect(redirectParam)} />;
}
