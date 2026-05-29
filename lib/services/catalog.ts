import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchCategoryPageData,
  fetchCollectionBySlug,
  fetchProductsByCollectionId,
} from "@/lib/catalog/repository";

export {
  fetchCategories as getCategories,
  fetchCategoryBySlug as getCategoryBySlug,
  fetchCategoryPageData as getCategoryPageData,
  fetchCollectionBySlug as getCollectionBySlug,
  fetchProductsByCollectionId as getProductsByCollectionId,
};
