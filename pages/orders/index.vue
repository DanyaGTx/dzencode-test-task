<template>
  <div class="orders">
    <div class="orders__header">
      <div class="orders__header-wrapper">
        <h2 class="orders__title">Заказы / {{ filteredOrders.length }}</h2>
      </div>
    </div>
    <OrderList
      v-if="!isLoading"
      :orders="filteredOrders"
      @deleteInnerProduct="deleteInnerProduct"
      @deleteOrder="deleteOrder"
    />
    <BaseLoader v-else />
  </div>
</template>

<script setup lang="ts">
import { useOrdersStore } from "~/stores/orders";
import { useOrdersService } from "~/services/orders";
import type { IOrder } from "~/types";

const ordersStore = useOrdersStore();

const { getAllOrders } = useOrdersService();
const isLoading = ref(true);

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

const getOrders = async () => {
  if (ordersStore.orders.length) {
    isLoading.value = false;
    return;
  }

  try {
    const orders = (await getAllOrders()) as IOrder[];
    ordersStore.orders = orders;
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
  await getOrders();
});
</script>

<style scoped lang="scss">
.orders {
  &__header {
    margin-bottom: 60px;
  }
}
</style>
