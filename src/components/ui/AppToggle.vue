<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  filter: { name: string; isActive: boolean };
}>();

const classes = computed(() => ({
  toggle_active: props.filter.isActive,
}));
</script>

<template>
  <label class="toggle-wrapper">
    <div class="toggle" :class="classes">
      <input
        type="checkbox"
        v-model="props.filter.isActive"
        class="toggle__input"
      />
      <div class="toggle__slider"></div>
    </div>
    <span>{{ filter.name }}</span>
  </label>
</template>

<style scoped lang="scss">
.toggle-wrapper {
  display: flex;
  gap: 12px;
}

.toggle {
  position: relative;
  width: 36px;
  height: 22px;
  background-color: #f2f2f2;
  border-radius: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &__input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__slider {
    position: absolute;
    left: calc(0% + 8px);
    height: 8px;
    width: 8px;
    background-color: #1f2020;
    border-radius: 50%;
    transition: all 0.15s ease-in;
  }

  &_active {
    background-color: #7bb899;

    .toggle__slider {
      left: calc(80% - 8px);
    }
  }
}
</style>
