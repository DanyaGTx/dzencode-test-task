<template>
  <BaseModal v-model="isDeletionModalOpen" />
  <div class="orders__wrapper">
    <div class="orders__openers" :class="{ opened: isOrderOpen }">
      <div v-for="i in 2">
        <div class="order-list__items">
          <OrderItem
            @deleteOrder="deleteOrder"
            v-model:isOrderOpen="isOrderOpen"
            v-model:openedItemInfo="openedItemInfo"
          />
        </div>
      </div>
    </div>

    <div class="order-list__opened">
      <OrderOpenedItem
        @closeOpenedOrder="isOrderOpen = false"
        v-show="isOrderOpen"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const openedItemInfo = ref({});
const isOrderOpen = ref(false);
const isDeletionModalOpen = ref(false);

const isOrderOpened = computed(() => {
  return !!Object.entries(openedItemInfo.value).length;
});

const deleteOrder = (orderId: number) => {
  isDeletionModalOpen.value = true;
  console.log("deleteOrder", orderId);
};
</script>

<style scoped lang="scss">
.orders {
  &__wrapper {
    display: flex;
    gap: 20px;
    overflow: auto;
    padding-bottom: 50px;
    padding-top: 20px;
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
