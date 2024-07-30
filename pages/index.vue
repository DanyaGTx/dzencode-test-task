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
    <ProductList
      v-if="!isLoading"
      :products="filteredProducts"
      @deleteItem="deleteProduct"
    />
    <BaseLoader v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, computed, onMounted, nextTick } from "vue";
import { useProductsStore } from "~/stores/products";
import { useProductsService } from "~/services/products";
import type { IProduct } from "~/types";

const searchFilter = inject("searchFilter", ref(""));
const productsStore = useProductsStore();
const filterByType = ref("all");

const { getAllProducts } = useProductsService();

const isLoading = ref(true);

const filteredProducts = computed(() => {
  const searchTerm = searchFilter.value.toLowerCase();

  const products = productsStore.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  if (filterByType.value === "all") {
    return products;
  }

  return products.filter((product) => product.type === filterByType.value);
});

const deleteProduct = (id: number) => {
  productsStore.deleteProduct(id);
};

const getProducts = async () => {
  if (productsStore.products.length) {
    isLoading.value = false;
    return;
  }

  try {
    const products = (await getAllProducts()) as IProduct[];
    productsStore.products = products;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("Unknown error", err);
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await nextTick();
  await getProducts();
});
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
