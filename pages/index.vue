<template>
  <div class="products">
    <div class="products__header">
      <div class="products__header-wrapper">
        <h2 class="products__title">
          Продукты / {{ filteredProducts.length }}
        </h2>
        <ProductFilter
          v-model="filterByType"
          :types="productsStore.productTypes"
        />
      </div>
    </div>
    <ProductList :products="filteredProducts" @deleteItem="deleteProduct" />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/stores/products";
import { ref, inject } from "vue";

const searchFilter = inject("searchFilter", ref(""));

const productsStore = useProductsStore();

const filterByType = ref("All");

const filteredProducts = computed(() => {
  const searchTerm = searchFilter.value.toLowerCase();

  const products = productsStore.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  if (filterByType.value === "All") {
    return products;
  }

  return products.filter((product) => product.type === filterByType.value);
});

const deleteProduct = (id: number) => {
  productsStore.deleteProduct(id);
};
</script>

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
