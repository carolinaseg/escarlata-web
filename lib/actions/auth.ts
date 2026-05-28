"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSafeRedirect } from "@/lib/auth/config";
import { translateAuthError } from "@/lib/auth/errors";
import { routes } from "@/lib/constants/routes";
import { createClient } from "@/lib/supabase/server";

export type AuthActionState = {
  error?: string;
  success?: string;
};

function validateEmail(email: string): string | null {
  if (!email?.trim()) return "Ingresá tu correo electrónico.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return "El correo electrónico no es válido.";
  }
  return null;
}

function validatePassword(password: string): string | null {
  if (!password) return "Ingresá tu contraseña.";
  if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
  return null;
}

export async function loginAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = getSafeRedirect(String(formData.get("redirect") ?? ""));

  const emailError = validateEmail(email);
  if (emailError) return { error: emailError };

  const passwordError = validatePassword(password);
  if (passwordError) return { error: passwordError };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: translateAuthError(error.message) };
  }

  revalidatePath("/", "layout");
  redirect(redirectTo);
}

export async function registerAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!name) return { error: "Ingresá tu nombre." };

  const emailError = validateEmail(email);
  if (emailError) return { error: emailError };

  const passwordError = validatePassword(password);
  if (passwordError) return { error: passwordError };

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
    },
  });

  if (error) {
    return { error: translateAuthError(error.message) };
  }

  revalidatePath("/", "layout");

  if (data.session) {
    redirect(routes.account);
  }

  if (data.user) {
    return {
      success:
        "Cuenta creada. Revisá tu correo para confirmar el registro antes de iniciar sesión.",
    };
  }

  return { error: "No se pudo completar el registro. Intentá nuevamente." };
}

export async function logoutAction(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect(routes.home);
}
