<script setup lang="ts"></script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <router-link to="/products"> Продукты </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/"> Цвета </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/"> Вдохновение </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/"> Советы </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/"> Найти магазин </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  &__list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 1.5rem;

    @media screen and (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__item {
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
