<template>
  <div class="products">
    <div class="products__header">
      <div class="products__header-wrapper">
        <h2 class="products__title">Продукты / 25</h2>
        <ProductFilter />
      </div>
    </div>
    <ProductList />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.products {
  width: 100%;
  &__header {
    margin-bottom: 80px;
    &-wrapper {
      display: flex;
      align-items: center;
      gap: 30px;

      @media (max-width: 580px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
      }
    }
  }

  &__title {
    min-width: fit-content;
    font-weight: 600;
    margin-bottom: 0;
  }
}
</style>
