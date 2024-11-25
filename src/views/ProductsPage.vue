<script setup lang="ts">
import BreadCrumbs from "../components/BreadCrumbs.vue";
</script>

<template>
  <div>
    <main class="main">
      <BreadCrumbs />
      <h1 class="title">Products:</h1>
      <ul>
        <li>
          <router-link to="/products/paints"> Paints </router-link>
        </li>
      </ul>
    </main>
  </div>
</template>
