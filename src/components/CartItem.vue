<script setup lang="ts">
import { CartItem } from "../types/Cart";
import AppButton from "./AppButton.vue";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();

defineProps<{
  item: CartItem;
}>();

function removeItem(id: number) {
  cartStore.removeItem(id);
}

function decreaseQuantity(id: number): void {
  cartStore.decreaseQuantity(id);
}
function increaseQuantity(id: number): void {
  cartStore.increaseQuantity(id);
}
</script>

<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="item.imageSource" alt="image" />
    <div class="cart-item__content">
      <div>{{ item.name }}</div>
      <div class="cart-item__price">{{ item.price }}</div>
    </div>
    <div class="cart-item__buttons">
      <AppButton
        @click="decreaseQuantity(item.id)"
        :disabled="item.quantity === 1"
        >–</AppButton
      >
      <div>{{ item.quantity }}</div>
      <AppButton @click="increaseQuantity(item.id)">+</AppButton>
      <AppButton @click="removeItem(item.id)">x</AppButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &::before {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--gray-100);
  }

  &__image {
    width: 100%;
    width: 96px;
    height: 96px;
    object-fit: contain;
    object-position: left;
  }

  &__content {
    padding: 0 12px;
  }

  &__price {
    font-weight: 600;
  }

  &__buttons {
    display: flex;
    gap: 20px;
  }
}
</style>
