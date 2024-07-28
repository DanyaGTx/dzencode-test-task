<template>
  <div class="header__logo">
    <img src="~/assets/images/logo.png" alt="logo" width="30" />
    <span>Inventory</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;

    & span {
      text-transform: uppercase;
      font-size: 14px;
      color: var(--base-green);
      font-weight: 500;
    }
  }
}
</style>
