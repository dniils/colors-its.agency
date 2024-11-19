<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import ProductList from "../components/ProductList.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ModalBottomSheet from "../components/ModalBottomSheet.vue";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useProductsStore } from "../store/products";

const isBottomModalOpen = ref(false);
const store = useProductsStore();

function toggleBottomModal(): void {
  isBottomModalOpen.value = !isBottomModalOpen.value;
}

async function onScroll(): Promise<void> {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    await store.getProducts();
  }
}

onBeforeMount(() => {
  if (!store.products.length) store.getProducts();
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
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
