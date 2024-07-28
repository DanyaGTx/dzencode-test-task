import { defineStore } from "pinia";
import type { IOrder } from "~/types";

export const useOrdersStore = defineStore("orders", () => {
  const orders = ref<IOrder[]>([]);

  const deleteProductInOrder = (orderId: number, productId: number) => {
    const orderIndex = orders.value.findIndex((order) => order.id === orderId);

    const foundedOrder = orders.value[orderIndex];

    foundedOrder.products = foundedOrder.products.filter(
      (product) => product.id !== productId
    );
  };

  const deleteOrder = (orderId: number) => {
    orders.value = orders.value.filter((order) => order.id !== orderId);
  };

  const calculateProductsPriceInOrder = (orderId: number) => {
    const orderIndex = orders.value.findIndex((order) => order.id === orderId);

    const priceSum = orders.value[orderIndex].products.reduce(
      (acc, product) => {
        return acc + product.price[1].value;
      },
      0
    );
    return priceSum;
  };

  return {
    orders,
    deleteProductInOrder,
    deleteOrder,
    calculateProductsPriceInOrder,
  };
});
