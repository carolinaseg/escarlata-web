import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

/**
 * Obtiene la sesión actual del usuario (Server Components / Actions).
 * Devuelve null si Supabase no está configurado o no hay sesión.
 */
export async function getSession() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = await createClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    return null;
  }

  return session;
}

/**
 * Obtiene el usuario autenticado validado en servidor.
 * Preferir esto sobre getSession() cuando se implemente protección de rutas.
 */
export async function getUser() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return user;
}
