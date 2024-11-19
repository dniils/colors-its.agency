<script setup lang="ts">
import AppButton from "./AppButton.vue";
</script>

<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      src="https://placehold.co/600x400"
      alt="image"
    />
    <div class="cart-item__content">
      <div class="cart-item__name"></div>
      <div class="cart-item__price"></div>
    </div>
    <div class="cart-item__buttons">
      <AppButton class="cart-item__btn-decrease">–</AppButton>
      <div class="cart-item__amount">1</div>
      <AppButton class="cart-item__btn-increse">+</AppButton>
      <AppButton class="cart-item__btn-delete">x</AppButton>
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
  max-height: 109px;

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

  &__buttons {
    display: flex;
    gap: 20px;
  }
}
</style>
