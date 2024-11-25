<script setup lang="ts">
import CartItem from "./CartItem.vue";
import AppButton from "./AppButton.vue";
import { useCartStore } from "../store/cart";

const store = useCartStore();

defineEmits<{
  closeCart: [];
}>();

function clearCart(): void {
  store.clearCart();
}
</script>

<template>
  <div class="cart">
    <div>
      <button class="cart__btn-close" @click="$emit('closeCart')">X</button>
      <h1 class="title cart__title">Корзина</h1>
      <div class="cart__info">
        <!-- TODO: товар-[]/-а/-ов -->
        <div class="cart__total-count">{{ store.cartCount }} товара</div>
        <div class="cart__clear-list" @click="clearCart">Очистить список</div>
      </div>
      <ul class="cart__list">
        <li v-for="item in store.cartItems" :key="item.id">
          <CartItem :item="item" />
        </li>
      </ul>
    </div>

    <div class="cart__checkout">
      <div>
        <div>Итого</div>
        <div class="cart__price-total">{{ store.total }} ₽</div>
      </div>
      <AppButton>оформить заказ</AppButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  background-color: var(--white);
  padding: 32px 40px 40px;
  overflow: auto;

  &__btn-close {
    position: absolute;
    top: 32px;
    right: 40px;
    width: 48px;
    height: 48px;
    background-color: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: 50%;
    cursor: pointer;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 94px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__price-total {
    font-size: 30px;
    font-weight: 500;
  }

  &__checkout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__clear-list {
    color: var(--gray-100);

    &:hover {
      cursor: pointer;
      color: var(--black);
    }
  }
}
</style>
