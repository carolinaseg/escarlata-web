/**
 * Variables de entorno de Supabase (solo lectura desde process.env).
 * Nunca hardcodear URLs ni keys en el código.
 */
const ENV_URL = "NEXT_PUBLIC_SUPABASE_URL";
const ENV_ANON_KEY = "NEXT_PUBLIC_SUPABASE_ANON_KEY";

export type SupabaseEnv = {
  url: string;
  anonKey: string;
};

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

/**
 * Devuelve la configuración validada o lanza un error descriptivo.
 * Usar en runtime cuando Supabase es obligatorio (clientes, middleware activo).
 */
export function getSupabaseEnv(): SupabaseEnv {
  const url = readEnv(ENV_URL);
  const anonKey = readEnv(ENV_ANON_KEY);

  if (!url) {
    throw new Error(
      `Falta la variable de entorno ${ENV_URL}. Definila en .env.local (ver .env.example).`,
    );
  }

  if (!anonKey) {
    throw new Error(
      `Falta la variable de entorno ${ENV_ANON_KEY}. Definila en .env.local (ver .env.example).`,
    );
  }

  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("protocolo inválido");
    }
  } catch {
    throw new Error(
      `${ENV_URL} no es una URL válida. Revisá el valor en .env.local.`,
    );
  }

  return { url, anonKey };
}

/**
 * Comprueba si Supabase está configurado sin lanzar errores.
 * Útil para middleware y rutas opcionales durante el desarrollo.
 */
export function isSupabaseConfigured(): boolean {
  try {
    getSupabaseEnv();
    return true;
  } catch {
    return false;
  }
}

/**
 * Resumen seguro para logs/diagnóstico (nunca expone keys).
 */
export function getSupabaseEnvStatus(): {
  configured: boolean;
  urlPresent: boolean;
  anonKeyPresent: boolean;
  urlHost?: string;
} {
  const url = readEnv(ENV_URL);
  const anonKey = readEnv(ENV_ANON_KEY);

  let urlHost: string | undefined;
  if (url) {
    try {
      urlHost = new URL(url).host;
    } catch {
      urlHost = undefined;
    }
  }

  return {
    configured: Boolean(url && anonKey),
    urlPresent: Boolean(url),
    anonKeyPresent: Boolean(anonKey),
    urlHost,
  };
}
