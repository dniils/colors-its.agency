<script setup lang="ts"></script>

<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <router-link to="/">breadcrumbs</router-link>
    </li>
    <li class="breadcrumbs__item">
      <router-link to="/">here</router-link>
    </li>
  </ul>
</template>

<style lang="scss">
.breadcrumbs {
  display: flex;
  gap: 20px;

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 10px;
    text-transform: uppercase;

    a {
      color: var(--gray-100);
    }

    &:not(:last-child)::after {
      position: absolute;
      right: -10px;
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: var(--gray-100);
    }
  }
}
</style>
