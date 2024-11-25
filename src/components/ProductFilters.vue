<script setup lang="ts">
import AppToggle from "./AppToggle.vue";

defineProps<{
  filters: Record<string, { name: string; isActive: boolean }>;
}>();
</script>

<template>
  <ul class="filters">
    <li v-for="(filter, key) in filters" :key="key">
      <AppToggle :filter="filter" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
