import { defineStore } from "pinia";
import { Product } from "../types/Product";
import { ref } from "vue";
import { fetchProducts } from "../api";
import { Params } from "../types/Params";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const page = ref(1);
  const productsPerPage = 10;
  const loading = ref(false);
  const hasMoreProducts = ref(true);
  const filters = ref({
    new: { name: "Новинки", isActive: false },
    inStock: { name: "Есть в наличии", isActive: false },
    contract: { name: "Контрактные", isActive: false },
    exclusive: { name: "Эксклюзивные", isActive: false },
    sale: { name: "Распродажа", isActive: false },
  });

  function getActiveFilters() {
    return Object.entries(filters.value).reduce((acc, [key, value]) => {
      if (value.isActive) acc[key] = value.isActive;
      return acc;
    }, {} as Record<string, boolean>);
  }

  async function getProducts(params?: Params): Promise<void> {
    if (loading.value || !hasMoreProducts.value) return;
    loading.value = true;

    try {
      const data = await fetchProducts(
        page.value.toString(),
        productsPerPage.toString(),
        params
      );
      if (data.length > 0) {
        products.value.push(...data);
        page.value += 1;
      } else {
        hasMoreProducts.value = false;
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      loading.value = false;
    }
  }

  function resetProducts(): void {
    products.value = [];
    page.value = 1;
    hasMoreProducts.value = true;
  }

  return {
    page,
    productsPerPage,
    products,
    filters,
    getProducts,
    resetProducts,
    getActiveFilters,
  };
});
