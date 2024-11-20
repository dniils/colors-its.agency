<script setup lang="ts">
import { ref } from "vue";
import AppLogo from "./AppLogo.vue";
import AppMenu from "./AppMenu.vue";
import BurgerButton from "./BurgerButton.vue";
import ModalCart from "./ModalCart.vue";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();
const menuIsOpen = ref(false);
const cartIsOpen = ref(false);

function toggleMenu(): void {
  menuIsOpen.value = !menuIsOpen.value;
}

function toggleCart(): void {
  cartIsOpen.value = !cartIsOpen.value;
}

function handleOverlayClick(): void {
  if (cartIsOpen) cartIsOpen.value = false;
  if (menuIsOpen) menuIsOpen.value = false;
}
</script>

<template>
  <header class="header">
    <div
      class="overlay"
      :class="{ overlay_active: menuIsOpen || cartIsOpen }"
      @click="handleOverlayClick"
    ></div>
    <BurgerButton
      class="header__burger-btn"
      :class="{ 'burger-btn_active': menuIsOpen }"
      @click="toggleMenu"
    />
    <AppLogo />
    <AppMenu
      class="header__menu"
      :class="{ header__menu_active: menuIsOpen }"
    />

    <div
      @click="toggleCart"
      class="header__cart-icon"
      :class="{ 'header__cart-icon_has-items': cartStore.cartCount > 0 }"
    >
      {{ cartStore.cartCount }}
    </div>
    <ModalCart
      class="header__cart"
      :class="{ header__cart_active: cartIsOpen }"
      @close-cart="toggleCart"
    />
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--gray-200);
    margin: 0 20px;
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #00000096;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0s linear 0.5s;
    z-index: 3;

    &_active {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s ease-in-out;
    }
  }

  &__menu {
    position: fixed;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10rem 1.5rem 1.5rem;
    margin-left: -24px;
    transform: translateX(-100%);
    transition: transform 0.15s ease-in;
    z-index: 3;

    &_active {
      transform: translateX(0%);
    }

    @media screen and (min-width: 992px) {
      position: initial;
      transform: translateX(0%);
      height: initial;
      padding: 0;
      margin: 0;
      background-color: initial;
      backdrop-filter: unset;
      box-shadow: none;
    }
  }

  &__burger-btn {
    z-index: 4;

    @media screen and (min-width: 992px) {
      display: none;
    }
  }

  &__cart-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 24px;
    height: 24px;
    background-color: var(--gray-100);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.15s ease-in;

    &_has-items {
      background-color: var(--green-100);
    }
  }

  &__cart {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 4;

    &_active {
      transition: transform 0.3s ease-in-out;
      transform: translateX(0);
    }
  }
}
</style>
