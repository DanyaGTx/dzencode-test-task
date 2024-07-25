<template>
  <div class="product__filter">
    <span>Тип:</span>
    <select
      class="form-select product__filter-select"
      aria-label="Default select example"
    >
      <option selected>Выберите тип</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.product__filter {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  &-select {
    max-width: 300px;
    box-shadow: none;
  }
}
</style>
