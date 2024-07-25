<template>
  <div class="orders">
    <div class="orders__header">
      <div class="orders__header-wrapper">
        <h2 class="orders__title">Заказы / 25</h2>
      </div>
    </div>
    <OrderList />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.orders {
  &__header {
    margin-bottom: 60px;
  }
}
</style>
