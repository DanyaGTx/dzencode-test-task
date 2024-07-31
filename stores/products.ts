import { ref } from "vue";
import { defineStore } from "pinia";
import type { IProduct } from "~/types";
import { prodcutsData } from "./preloadedData";

export const useProductsStore = defineStore("products", () => {
  const products = ref<IProduct[]>(prodcutsData);

  const productTypes = [
    { value: "all", label: "All" },
    { value: "keyboard", label: "Keyboards" },
    { value: "monitor", label: "Monitors" },
  ];

  const deleteProduct = (productId: number) => {
    products.value = products.value.filter(
      (product) => product.id !== productId
    );
  };

  return { products, productTypes, deleteProduct };
});
