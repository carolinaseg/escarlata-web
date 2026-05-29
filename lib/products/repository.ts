import { PRODUCT_WITH_RELATIONS_SELECT } from "@/lib/catalog/constants";
import { mapProductRow, mapProductRows } from "@/lib/products/mapper";
import type { ProductResult, ProductsResult } from "@/lib/products/types";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { ProductRowWithRelations } from "@/types/database";

const LOAD_ERROR = "No pudimos cargar los productos. Intentá de nuevo en unos instantes.";
const NOT_FOUND_ERROR = "No encontramos este producto.";

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export async function fetchAllProducts(): Promise<ProductsResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_WITH_RELATIONS_SELECT)
    .eq("active", true)
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[products] fetchAllProducts:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  return { ok: true, data: mapProductRows((data ?? []) as ProductRowWithRelations[]) };
}

export async function fetchFeaturedProducts(): Promise<ProductsResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_WITH_RELATIONS_SELECT)
    .eq("active", true)
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("[products] fetchFeaturedProducts:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  return { ok: true, data: mapProductRows((data ?? []) as ProductRowWithRelations[]) };
}

export async function fetchProductBySlugOrId(
  slugOrId: string,
): Promise<ProductResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const column = isUuid(slugOrId) ? "id" : "slug";

  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_WITH_RELATIONS_SELECT)
    .eq(column, slugOrId)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    console.error("[products] fetchProductBySlugOrId:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  if (!data) {
    return { ok: false, error: NOT_FOUND_ERROR };
  }

  return { ok: true, data: mapProductRow(data as ProductRowWithRelations) };
}

export async function fetchProductSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("slug")
    .eq("active", true);

  if (error) {
    console.error("[products] fetchProductSlugs:", error.message);
    return [];
  }

  const rows = (data ?? []) as { slug: string }[];
  return rows.map((row) => row.slug);
}
