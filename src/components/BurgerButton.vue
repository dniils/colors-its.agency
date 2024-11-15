<template>
  <button class="burger-btn">
    <div class="burger-btn__line"></div>
    <div class="burger-btn__line"></div>
    <div class="burger-btn__line"></div>
  </button>
</template>

<style scoped lang="scss">
.burger-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background-color: var(--white);
  border: none;
  padding: 0.1rem 0;
  transition: transform 0.15s ease-in;

  &__line {
    width: 100%;
    height: 2px;
    background-color: var(--black-100);
  }

  &:hover {
    cursor: pointer;
  }

  &_active {
    transform: rotate(-90deg);
  }
}
</style>
