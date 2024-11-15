<script setup lang="ts">
import { ref } from "vue";
import AppLogo from "./AppLogo.vue";
import AppMenu from "./AppMenu.vue";
import BurgerButton from "./BurgerButton.vue";

const menuIsOpen = ref(false);

function toggleMenu(): void {
  if (!menuIsOpen.value) {
    menuIsOpen.value = true;
  } else {
    menuIsOpen.value = false;
  }
}
</script>

<template>
  <header class="header">
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
    <div>Cart</div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;

  &__menu {
    position: absolute;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10rem 1.5rem 1.5rem;
    margin-left: -24px;
    background-color: #ffffffcc;
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1px 0 rgba($color: #000000, $alpha: 0.1);
    transform: translateX(-200%);
    transition: transform 0.15s ease-in;

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
    display: flex;
    z-index: 99;

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
}
</style>
