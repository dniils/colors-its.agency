<script setup lang="ts">
import AppToggle from "./AppToggle.vue";

const props = defineProps<{
  filters: Record<string, { name: string; isActive: boolean }>;
}>();
</script>

<template>
  <ul class="filters">
    <li v-for="(filter, key) in props.filters" :key="key">
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
