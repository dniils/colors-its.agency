<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import ProductList from "../components/ProductList.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ModalBottomSheet from "../components/ModalBottomSheet.vue";
import { paints } from "../data";
import { ref } from "vue";

const isBottomModalOpen = ref(false);

function toggleBottomModal(): void {
  isBottomModalOpen.value = !isBottomModalOpen.value;
}
</script>

<template>
  <div>
    <AppHeader class="header" />

    <main class="main">
      <BreadCrumbs />
      <h1 class="title">Краски</h1>
      <div @click="toggleBottomModal">Фильтры</div>
      <ProductList :products="paints" class="product-list" />
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
