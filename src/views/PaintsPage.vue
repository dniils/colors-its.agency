<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import ProductList from "../components/ProductList.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ModalBottomSheet from "../components/ModalBottomSheet.vue";
import { onBeforeMount, ref } from "vue";
import { useProductsStore } from "../store/products";

const isBottomModalOpen = ref(false);
const store = useProductsStore();

function toggleBottomModal(): void {
  isBottomModalOpen.value = !isBottomModalOpen.value;
}

onBeforeMount(() => {
  store.getProducts();
});
</script>

<template>
  <div>
    <AppHeader class="header" />

    <main class="main">
      <BreadCrumbs />
      <h1 class="title">Краски</h1>
      <div @click="toggleBottomModal">Фильтры</div>
      <ProductList
        v-if="store.products"
        :products="store.products"
        class="product-list"
      />
      <ModalBottomSheet
        :class="{ modal_active: isBottomModalOpen }"
        @close="toggleBottomModal"
      >
        Filters
      </ModalBottomSheet>
    </main>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  margin-top: 24px;
}
</style>
