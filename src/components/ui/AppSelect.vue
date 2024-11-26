<script setup lang="ts">
import { ref } from "vue";
import { SelectOption } from "../../types/Params";

defineProps<{
  options: SelectOption[];
  modelValue: SelectOption;
}>();

const emit = defineEmits<{
  (e: "update:model-value", value: SelectOption): void;
}>();

const selectActive = ref(false);

function toggleOptions(): void {
  selectActive.value = !selectActive.value;
}

function handleOptionSelect(option: SelectOption): void {
  toggleOptions();
  emit("update:model-value", option);
}
</script>

<template>
  <div class="select" :class="{ select_active: selectActive }">
    <div class="select__overlay" @click="toggleOptions"></div>
    <div class="select__selected" @click="toggleOptions">
      {{ modelValue.label }}
    </div>
    <ul class="select__options">
      <li
        class="select__option"
        :class="{ select__option_selected: modelValue.id === option.id }"
        v-for="option in options"
        :key="option.id"
        @click="handleOptionSelect(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  cursor: pointer;
  text-wrap: nowrap;
  z-index: 1;
  transition: z-index 0.15s step-end;

  &__options {
    background: var(--white);
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    flex-direction: column;
    font-size: 12px;
    text-transform: uppercase;
    z-index: 1;
  }

  &__option {
    padding: 17px 24px;

    &_selected {
      background-color: var(--green-100);
    }
  }

  &_active {
    z-index: 2;
    transition: z-index 0.15s step-start;

    .select__options {
      display: flex;
    }

    .select__overlay {
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.15s ease-in;
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000096;
    opacity: 0;
    pointer-events: none;
    transition: z-index 0.15s step-end, opacity 0.15s ease-in;
  }
}
</style>
