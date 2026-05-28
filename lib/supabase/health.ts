import { createClient } from "@/lib/supabase/server";
import { getSupabaseEnvStatus, isSupabaseConfigured } from "@/lib/supabase/env";

export type SupabaseHealthResult = {
  ok: boolean;
  configured: boolean;
  env: ReturnType<typeof getSupabaseEnvStatus>;
  auth: {
    reachable: boolean;
    message?: string;
  };
};

/**
 * Verifica configuración y conectividad sin exponer credenciales.
 */
export async function checkSupabaseConnection(): Promise<SupabaseHealthResult> {
  const env = getSupabaseEnvStatus();

  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      configured: false,
      env,
      auth: {
        reachable: false,
        message: "Variables de entorno de Supabase incompletas",
      },
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.getSession();

    if (error) {
      return {
        ok: false,
        configured: true,
        env,
        auth: {
          reachable: false,
          message: error.message,
        },
      };
    }

    return {
      ok: true,
      configured: true,
      env,
      auth: {
        reachable: true,
        message: "Conexión con Supabase Auth correcta",
      },
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido al conectar";

    return {
      ok: false,
      configured: env.configured,
      env,
      auth: {
        reachable: false,
        message,
      },
    };
  }
}
