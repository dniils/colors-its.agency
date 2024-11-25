<script setup lang="ts">
import BreadCrumbs from "../components/ui/BreadCrumbs.vue";
</script>

<template>
  <div>
    <main class="main">
      <BreadCrumbs />
      <h1 class="title">Products:</h1>
      <ul>
        <li>
          <RouterLink to="/products/paints"> Paints </RouterLink>
        </li>
      </ul>
    </main>
  </div>
</template>
