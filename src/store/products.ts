import { defineStore } from "pinia";
import { Product } from "../types/Product";
import { ref } from "vue";
import { fetchProducts } from "../api";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const offset = ref(0);
  const productsPerPage = 10;

  async function getProducts(): Promise<void> {
    try {
      const data = await fetchProducts(
        offset.value.toString(),
        productsPerPage.toString()
      );
      if (data.products.length > 0) {
        products.value.push(...data.products);
        offset.value += productsPerPage;
      } else {
        console.log("No more products to load");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return { offset, productsPerPage, products, getProducts };
});
