<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import { Product } from "../types/Product";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <ul class="list">
    <li class="list__item" v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
