<script setup lang="ts">
import CartItem from "./CartItem.vue";
import AppButton from "./AppButton.vue";

const emit = defineEmits<{
  closeCart: [];
}>();

function closeCart() {
  emit("closeCart");
}
</script>

<template>
  <div class="cart">
    <div>
      <button class="cart__btn-close" @click="closeCart">X</button>
      <h1 class="title cart__title">Корзина</h1>
      <ul class="cart__list">
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
      </ul>
    </div>

    <div class="cart__checkout">
      <div>
        <div>Итого</div>
        <div class="cart__price-total">1000₽</div>
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
}
</style>
