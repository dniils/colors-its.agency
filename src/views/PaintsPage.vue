<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import ProductList from "../components/ProductList.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ModalBottomSheet from "../components/ModalBottomSheet.vue";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useProductsStore } from "../store/products";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { slides } from "../slides/index.ts";

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

    <div class="slider-wrapper">
      <vueper-slides
        class="no-shadow"
        :dragging-distance="70"
        prevent-y-scroll
        autoplay
        no-shadow
        fixed-height="560px"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
          :image="slide.image"
        />
      </vueper-slides>
      <BreadCrumbs class="breadcrumbs" />
    </div>

    <main class="main">
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

h1.title {
  margin-top: 28px;

  @media screen and (min-width: 992px) {
    display: none;
  }
}

.breadcrumbs {
  margin-top: 20px;
  padding: 0 24px;
}

.vueperslides {
  display: none;
}

@media screen and (min-width: 992px) {
  .vueperslides {
    display: block;
  }
  .slider-wrapper {
    position: relative;
  }
  .breadcrumbs {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
</style>
