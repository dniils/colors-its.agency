<template>
  <span class="logo">
    <RouterLink to="/" class="logo__link"> COLORS </RouterLink>
  </span>
</template>

<style scoped lang="scss">
.logo {
  position: relative;
  display: inline-block;
  line-height: 1;

  &__link {
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
  }

  &::after {
    position: absolute;
    top: 0;
    right: -0.8rem;
    content: "";
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--black-100);
    border-radius: 50%;
  }
}
</style>
