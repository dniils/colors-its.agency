<script setup lang="ts">
import { Product } from "../types/Product";
import AppButton from "./AppButton.vue";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();

defineProps<{
  product: Product;
}>();

function addItemToCart(product: Product) {
  cartStore.addToCart({
    id: product.id,
    name: product.name,
    imageSource: product.imgSrc,
    price: product.price,
    quantity: 1,
  });
}
</script>

<template>
  <div class="product">
    <div class="product__image-wrapper">
      <img :src="product.imgSrc" alt="paint" class="product__image" />
    </div>
    <div class="product__content">
      <div class="product__name">
        {{ product.name }}
      </div>
      <div class="product__price">{{ product.price }} ₽</div>
    </div>
    <AppButton class="product__btn-add" @click="addItemToCart(product)"
      >+</AppButton
    >
  </div>
</template>

<style scoped lang="scss">
.product {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  background-color: var(--white);
  height: 100%;
  color: var(--black-100);

  @media screen and (pointer: fine) {
    &:hover {
      .product__btn-add {
        display: block;
      }
    }
  }

  &::after {
    position: absolute;
    bottom: -12px;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--gray-100);

    @media screen and (min-width: 768px) {
      bottom: -20px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding-right: 8px;
  }

  &__name {
    margin-bottom: 20px;

    @media screen and (min-width: 992px) {
      margin-bottom: 24px;
    }
  }

  &__price {
    font-weight: 600;
  }

  &__btn-add {
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: 600;

    @media screen and (min-width: 992px) and (pointer: fine) {
      display: none;
    }
  }
}
</style>
