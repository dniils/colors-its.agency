<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />
    <main class="main">
      <h1>Products:</h1>
      <ul>
        <li>
          <router-link to="/products/paints"> Paints </router-link>
        </li>
      </ul>
    </main>
  </div>
</template>
