<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <RouterLink to="/products"> Продукты </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/"> Цвета </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/"> Вдохновение </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/"> Советы </RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="/"> Найти магазин </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  background-color: var(--white);
  overflow: auto;

  &__list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 1.5rem;

    @media screen and (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__item {
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
