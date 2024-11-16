<script setup lang="ts">
const emit = defineEmits<{
  close: [];
}>();

function handleOverlayClick(): void {
  emit("close");
}
</script>

<template>
  <div class="modal">
    <div class="modal__overlay" @click="handleOverlayClick"></div>
    <div class="modal__bottom-sheet">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.15s ease-in;

  &_active {
    opacity: 1;
    pointer-events: auto;

    .modal__overlay {
      opacity: 1;
      pointer-events: auto;
    }
    .modal__bottom-sheet {
      transform: translateY(0);
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

  &__bottom-sheet {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--white);
    width: 100%;
    height: 50%;
    padding: 54px 24px;
    border-radius: 24px 24px 0 0;
    background-color: var(--white);
    transform: translateY(100%);
    transition: transform 0.15s ease-in;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 4px;
      background-color: var(--gray-100);
      border-radius: 40px;
    }
  }
}
</style>
