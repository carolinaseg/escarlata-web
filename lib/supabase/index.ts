/**
 * Punto de entrada de Supabase.
 *
 * - Client Components: import { createClient } from "@/lib/supabase/client"
 * - Server:           import { createClient } from "@/lib/supabase/server"
 * - Env / estado:     import { getSupabaseEnv, isSupabaseConfigured } from "@/lib/supabase/env"
 */

export {
  getSupabaseEnv,
  getSupabaseEnvStatus,
  isSupabaseConfigured,
  type SupabaseEnv,
} from "@/lib/supabase/env";

export { createClient as createBrowserClient } from "@/lib/supabase/client";
export { createClient as createServerClient } from "@/lib/supabase/server";
export { updateSession } from "@/lib/supabase/middleware";
