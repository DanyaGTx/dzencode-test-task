<template>
  <BaseModal v-model="isModalOpen" />
  <div class="product-list">
    <ProductItem @deleteProduct="isModalOpen = true" />
    <ProductItem />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isModalOpen = ref(false);
</script>

<style scoped>
.product-list {
  width: 100%;
  overflow: auto;
}
</style>
