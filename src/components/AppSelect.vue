<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  options: string[];
  selectedOption: string;
}>();
const emit = defineEmits(["select"]);

const selectActive = ref(false);
const selectedOption = ref(props.selectedOption);

function toggleOptions(): void {
  selectActive.value = !selectActive.value;
}

function handleOptionSelect(optionLabel: string): void {
  selectedOption.value = optionLabel;
  toggleOptions();
  emit("select", selectedOption.value);
}
</script>

<template>
  <div class="select" :class="{ select_active: selectActive }">
    <div class="select__overlay" @click="toggleOptions"></div>
    <div class="select__selected" @click="toggleOptions">
      {{ selectedOption }}
    </div>
    <ul class="select__options">
      <li
        class="select__option"
        :class="{ select__option_selected: selectedOption === option }"
        v-for="(option, i) in options"
        :key="i"
        @click="handleOptionSelect(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  cursor: pointer;
  text-wrap: nowrap;
  z-index: 2;

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
    .select__options {
      display: flex;
    }

    .select__overlay {
      opacity: 1;
      pointer-events: auto;
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
    transition: opacity 0.15s ease-in;
  }
}
</style>
