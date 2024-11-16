<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  const pathArr = route.path.split("/").filter((crumb) => crumb);
  const breadcrumbsList = pathArr.map((crumb, i) => {
    const path = "/" + pathArr.slice(0, i + 1).join("/");
    return { name: crumb, path: path };
  });

  return [{ name: "home", path: "/" }, ...breadcrumbsList];
});
</script>

<template>
  <ul class="breadcrumbs">
    <li
      class="breadcrumbs__item"
      v-for="(crumb, index) in breadcrumbs"
      :key="crumb.name"
    >
      <router-link v-if="index !== breadcrumbs.length - 1" :to="crumb.path">{{
        crumb.name
      }}</router-link>
      <span v-else> {{ crumb.name }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  gap: 20px;

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 10px;
    text-transform: uppercase;

    a,
    span {
      color: var(--gray-100);
    }

    a:hover {
      color: var(--black-100);
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
