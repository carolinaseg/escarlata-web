import {
  CATEGORY_SELECT,
  COLLECTION_SELECT,
  COLLECTION_WITH_CATEGORY_SELECT,
  PRODUCT_WITH_RELATIONS_SELECT,
} from "@/lib/catalog/constants";
import {
  mapCategoryRow,
  mapCategoryRows,
  mapCollectionRow,
  mapCollectionRows,
} from "@/lib/catalog/mapper";
import type {
  CatalogResult,
  CategoriesResult,
  CategoryPageResult,
  CategoryResult,
  CollectionResult,
  ProductsResult,
} from "@/lib/catalog/types";
import type { Collection } from "@/types/catalog";
import { mapProductRows } from "@/lib/products/mapper";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { CategoryPageData } from "@/types/catalog";
import type { CategoryRow, CollectionRow, ProductRowWithRelations } from "@/types/database";

const LOAD_ERROR = "No pudimos cargar el catálogo. Intentá de nuevo en unos instantes.";
const NOT_FOUND_CATEGORY = "No encontramos esta categoría.";
const NOT_FOUND_COLLECTION = "No encontramos esta colección.";

export async function fetchCategories(): Promise<CategoriesResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select(CATEGORY_SELECT)
    .eq("active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("[catalog] fetchCategories:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  return { ok: true, data: mapCategoryRows((data ?? []) as CategoryRow[]) };
}

export async function fetchCategoryBySlug(slug: string): Promise<CategoryResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select(CATEGORY_SELECT)
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    console.error("[catalog] fetchCategoryBySlug:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  if (!data) {
    return { ok: false, error: NOT_FOUND_CATEGORY };
  }

  return { ok: true, data: mapCategoryRow(data as CategoryRow) };
}

export async function fetchCollectionsByCategoryId(
  categoryId: string,
): Promise<CatalogResult<Collection[]>> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("collections")
    .select(COLLECTION_SELECT)
    .eq("category_id", categoryId)
    .eq("active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("[catalog] fetchCollectionsByCategoryId:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  return { ok: true, data: mapCollectionRows((data ?? []) as CollectionRow[]) };
}

export async function fetchProductsByCategoryId(
  categoryId: string,
): Promise<ProductsResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_WITH_RELATIONS_SELECT)
    .eq("active", true)
    .eq("category_id", categoryId)
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[catalog] fetchProductsByCategoryId:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  return {
    ok: true,
    data: mapProductRows((data ?? []) as ProductRowWithRelations[]),
  };
}

export async function fetchCollectionBySlug(
  categorySlug: string,
  collectionSlug: string,
): Promise<CollectionResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const categoryResult = await fetchCategoryBySlug(categorySlug);
  if (!categoryResult.ok) {
    return categoryResult;
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("collections")
    .select(COLLECTION_WITH_CATEGORY_SELECT)
    .eq("category_id", categoryResult.data.id)
    .eq("slug", collectionSlug)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    console.error("[catalog] fetchCollectionBySlug:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  if (!data) {
    return { ok: false, error: NOT_FOUND_COLLECTION };
  }

  return {
    ok: true,
    data: mapCollectionRow(
      data as CollectionRow & {
        category: Pick<CategoryRow, "id" | "slug" | "name" | "description"> | null;
      },
    ),
  };
}

export async function fetchProductsByCollectionId(
  collectionId: string,
): Promise<ProductsResult> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase no está configurado." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_WITH_RELATIONS_SELECT)
    .eq("active", true)
    .eq("collection_id", collectionId)
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[catalog] fetchProductsByCollectionId:", error.message);
    return { ok: false, error: LOAD_ERROR };
  }

  return {
    ok: true,
    data: mapProductRows((data ?? []) as ProductRowWithRelations[]),
  };
}

export async function fetchCategoryPageData(
  categorySlug: string,
): Promise<CategoryPageResult> {
  const categoryResult = await fetchCategoryBySlug(categorySlug);
  if (!categoryResult.ok) {
    return categoryResult;
  }

  const category = categoryResult.data;

  const [collectionsResult, productsResult] = await Promise.all([
    fetchCollectionsByCategoryId(category.id),
    fetchProductsByCategoryId(category.id),
  ]);

  if (!collectionsResult.ok) {
    return collectionsResult;
  }
  if (!productsResult.ok) {
    return productsResult;
  }

  const products = productsResult.data;
  const collections = collectionsResult.data.map((collection) => ({
    ...collection,
    products: products.filter((product) => product.collectionId === collection.id),
  }));

  const standaloneProducts = products.filter((product) => !product.collectionId);

  const pageData: CategoryPageData = {
    category,
    collections,
    standaloneProducts,
  };

  return { ok: true, data: pageData };
}
