<template>
  <BaseModal
    v-model="isModalOpen"
    :targetInfo="productForDeletion"
    @deleteItem="deleteProduct"
    type="product"
  />
  <div v-if="products.length" class="product-list">
    <ProductItem
      v-for="product in products"
      :product="product"
      :key="product.id"
      @deleteProduct="handleDeletionProduct"
    />
  </div>
  <div v-else class="empty-list">No products</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IProduct } from "~/types/index";

export interface Props {
  products: IProduct[];
}

withDefaults(defineProps<Props>(), {
  products: () => [],
});

const emit = defineEmits<{
  deleteItem: [id: number];
}>();

const isModalOpen = ref(false);
const productForDeletion = ref<IProduct>({} as IProduct);

const handleDeletionProduct = (product: IProduct) => {
  productForDeletion.value = product;
  isModalOpen.value = true;
};

const deleteProduct = (id: number) => {
  emit("deleteItem", id);
  isModalOpen.value = false;
  setTimeout(() => {
    productForDeletion.value = {} as IProduct;
  }, 150);
};
</script>

<style scoped lang="scss">
.product-list {
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max-content, 1fr));
  gap: 20px;
  padding-bottom: 20px;
}
</style>
