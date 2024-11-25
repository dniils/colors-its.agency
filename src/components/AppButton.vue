<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  line-height: 1;
  padding: 4px 12px;
  color: var(--black-100);
  background-color: var(--gray-200);
  border-radius: 4px;
  border: 0;
  transition: all 0.15s ease-in;

  &:enabled:hover {
    cursor: pointer;
    background-color: var(--green-100);
  }

  &:disabled {
    color: var(--gray-100);
  }
}
</style>
