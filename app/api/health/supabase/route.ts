import { NextResponse } from "next/server";
import { checkSupabaseConnection } from "@/lib/supabase/health";

/**
 * GET /api/health/supabase
 * Diagnóstico de variables de entorno y conexión (sin exponer keys).
 */
export async function GET() {
  const result = await checkSupabaseConnection();

  return NextResponse.json(result, {
    status: result.ok ? 200 : 503,
  });
}
