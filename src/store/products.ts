import { defineStore } from "pinia";
import { Product } from "../types/Product";
import { computed, ref, watch } from "vue";
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
  const sortOptions = [
    { id: 0, label: "Сначала дорогие", sortBy: "price", order: "desc" },
    { id: 1, label: "Сначала недорогие", sortBy: "price", order: "asc" },
    { id: 2, label: "Сначала популярные", sortBy: "popularity", order: "desc" },
    { id: 3, label: "Сначала новые", sortBy: "new", order: "desc" },
  ];

  const selectedSortOption = ref(sortOptions[2]);

  const sortOptionQuery = computed(() => {
    return {
      sortBy: selectedSortOption.value.sortBy,
      order: selectedSortOption.value.order,
    };
  });
  const filtersQuery = computed(() => {
    return Object.entries(filters.value).reduce((acc, [key, value]) => {
      if (value.isActive) acc[key] = value.isActive;
      return acc;
    }, {} as Params);
  });

  const productQuery = computed(() => {
    return { ...filtersQuery.value, ...sortOptionQuery.value };
  });

  async function getProducts(): Promise<void> {
    if (loading.value || !hasMoreProducts.value) return;
    loading.value = true;

    const params = productQuery.value;

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

  watch(
    () => selectedSortOption.value,
    () => {
      resetProducts();
      getProducts();
    }
  );

  watch(filters.value, () => {
    resetProducts();
    getProducts();
  });

  return {
    page,
    productsPerPage,
    products,
    filters,
    sortOptions,
    selectedSortOption,
    getProducts,
    resetProducts,
  };
});
