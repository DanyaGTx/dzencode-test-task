<template>
  <BaseModal
    v-model="isDeletionModalOpen"
    :targetInfo="openedItemInfo"
    @deleteItem="deleteOrder"
    type="order"
  />
  <div v-if="props.orders.length" class="orders__wrapper">
    <div class="orders__openers" :class="{ opened: isOrderOpen }">
      <div class="orders__opener" v-for="order in orders" :key="order.id">
        <div class="order-list__items">
          <OrderItem
            :order="order"
            @deleteOrder="handleDeleteOrder"
            @openOrder="openOrder"
            v-model:isOrderOpen="isOrderOpen"
            :openedItemId="openedItemInfo.id"
          />
        </div>
      </div>
    </div>

    <div class="order-list__opened">
      <OrderOpenedItem
        v-show="isOrderOpen"
        :openedItemInfo="openedItemInfo"
        @closeOpenedOrder="isOrderOpen = false"
        @deleteInnerProduct="deleteInnerProduct"
        @deleteOrder="deleteOrder"
      />
    </div>
  </div>
  <div v-else class="empty-list">No Orders</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IOrder } from "~/types/index";

export interface Props {
  orders: IOrder[];
}

const props = withDefaults(defineProps<Props>(), {
  orders: () => [],
});

const emit = defineEmits<{
  deleteInnerProduct: [innerProductId: number, orderId: number];
  deleteOrder: [orderId: number];
}>();

const openedItemInfo = ref<IOrder>({} as IOrder);
const isOrderOpen = ref(false);
const isDeletionModalOpen = ref(false);

const openOrder = (orderInfo: IOrder) => {
  openedItemInfo.value = orderInfo;
};

const handleDeleteOrder = (orderId: number) => {
  const findOrderIndex = props.orders.findIndex(
    (order) => order.id === orderId
  );

  isDeletionModalOpen.value = true;
  openedItemInfo.value = props.orders[findOrderIndex];
};

const deleteOrder = (orderId: number) => {
  isDeletionModalOpen.value = false;
  isOrderOpen.value = false;
  emit("deleteOrder", orderId);
};

const deleteInnerProduct = (innerProductId: number, orderId: number) => {
  emit("deleteInnerProduct", innerProductId, orderId);
};
</script>

<style scoped lang="scss">
.orders {
  &__wrapper {
    display: flex;
    gap: 20px;
    overflow: auto;
    padding-bottom: 50px;
    padding: 20px 30px 50px 0;
  }

  &__opener {
    margin-bottom: 20px;
  }

  &__openers {
    width: 100%;
    min-width: fit-content;

    &.opened {
      max-width: 500px !important;
    }
  }
}

.order-list__items {
  width: 100%;
}

.order-list__opened {
  position: relative;
}
</style>
