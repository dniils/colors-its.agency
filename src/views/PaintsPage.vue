<script setup lang="ts">
import ProductList from "../components/ProductList.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ModalBottomSheet from "../components/ModalBottomSheet.vue";
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useProductsStore } from "../store/products";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { slides } from "../assets/slides/index.ts";
import ProductFilters from "../components/ProductFilters.vue";
import AppSelect from "../components/AppSelect.vue";

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
  if (!store.products.length) {
    store.getProducts();
  }
  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div>
    <div class="slider-wrapper">
      <VueperSlides
        class="no-shadow"
        :dragging-distance="70"
        prevent-y-scroll
        autoplay
        no-shadow
        fixed-height="560px"
      >
        <VueperSlide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
          :image="slide.image"
        />
      </VueperSlides>
      <BreadCrumbs class="breadcrumbs" />
    </div>

    <main class="main">
      <section class="section">
        <aside class="sidebar">
          <ProductFilters :filters="store.filters" class="filters" />
        </aside>

        <div>
          <h1 class="title">Краски</h1>
          <div class="products-buttons">
            <div
              @click="toggleBottomModal"
              class="products-buttons__filters-btn"
            >
              Фильтры
            </div>

            <AppSelect
              :options="store.sortOptions"
              v-model="store.selectedSortOption"
            />
          </div>
          <ProductList
            v-if="store.products"
            :products="store.products"
            class="product-list"
          />
        </div>
      </section>

      <ModalBottomSheet
        :class="{ modal_active: isBottomModalOpen }"
        @close="toggleBottomModal"
      >
        <template #default>
          <ProductFilters :filters="store.filters" />
        </template>
      </ModalBottomSheet>
    </main>
  </div>
</template>

<style scoped lang="scss">
.section {
  display: block;
  width: 100%;
  padding-top: 28px;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding-top: 52px;
  }
}

.sidebar {
  position: relative;
  display: none;
  padding-right: 20px;

  @media screen and (min-width: 992px) {
    display: block;
  }

  .filters {
    position: sticky;
    top: 20px;
  }
}

.products-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;

  @media screen and (min-width: 992px) {
    margin-bottom: 44px;
    justify-content: flex-end;
  }

  &__filters-btn {
    display: block;

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
}

h1.title {
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
