<template>
  <span class="logo">
    <router-link to="/"> COLORS </router-link>
  </span>
</template>

<style scoped lang="scss">
.logo {
  position: relative;
  display: inline-block;
  line-height: 1;

  a {
    color: #000;
    text-decoration: none;
    font-size: 1.5rem;
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
    background-color: #000;
    border-radius: 50%;
  }
}
</style>
