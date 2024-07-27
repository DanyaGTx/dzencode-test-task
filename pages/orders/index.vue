<template>
  <div class="orders">
    <div class="orders__header">
      <div class="orders__header-wrapper">
        <h2 class="orders__title">Заказы / {{ filteredOrders.length }}</h2>
      </div>
    </div>
    <OrderList
      :orders="filteredOrders"
      @deleteInnerProduct="deleteInnerProduct"
      @deleteOrder="deleteOrder"
    />
  </div>
</template>

<script setup lang="ts">
import { useOrdersStore } from "~/stores/orders";

const ordersStore = useOrdersStore();

const deleteInnerProduct = (innerProductId: number, orderId: number) => {
  ordersStore.deleteProductInOrder(orderId, innerProductId);
};

const deleteOrder = (orderId: number) => {
  ordersStore.deleteOrder(orderId);
};

const searchFilter = inject("searchFilter", ref(""));

const filteredOrders = computed(() => {
  const searchTerm = searchFilter.value.toLowerCase();

  return ordersStore.orders.filter((order) =>
    order.title.toLowerCase().includes(searchTerm)
  );
});
</script>

<style scoped lang="scss">
.orders {
  &__header {
    margin-bottom: 60px;
  }
}
</style>
