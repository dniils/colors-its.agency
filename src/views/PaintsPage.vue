<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import ProductList from "../components/ProductList.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import { paints } from "../data";
</script>

<template>
  <div>
    <AppHeader class="header" />
    <main class="main">
      <BreadCrumbs />
      <h1 class="title">Краски</h1>
      <ProductList :products="paints" />
    </main>
  </div>
</template>

<style scoped lang="scss">
.title {
  margin: 48px 0;
}
</style>
