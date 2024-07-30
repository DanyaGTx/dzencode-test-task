<template>
  <div class="card">
    <div
      class="card-body d-flex align-items-center"
      :class="{
        'justify-content-between': !isOrderOpen,
        'pe-6': isOrderOpen,
      }"
    >
      <div
        v-if="!isOrderOpen"
        class="d-flex justify-content-center align-items-center card__group"
      >
        <div class="card-text card__group-name">
          {{ order.title }}
        </div>
      </div>

      <div class="card__catalog">
        <div @click="openOrder" class="card__catalog-icon">
          <BaseIconList />
        </div>
        <div class="card__catalog-info">
          <p class="card__catalog-info_num">
            {{ order.products.length }}
          </p>
          <span class="card__catalog-info_text">{{
            declensionOrder(order.products.length)
          }}</span>
        </div>
      </div>

      <div class="card__date">
        <p class="card__date-small">
          {{ formatSmallDate(order.date) }}
        </p>
        <p class="card__date-full">
          {{ formatDateWithMonth(order.date) }}
        </p>
      </div>

      <div v-show="!isOrderOpen" class="card__price">
        <p class="card__price-foreign">{{ productsPriceInOrder / 40 }}$</p>
        <p class="card__price-native">{{ productsPriceInOrder }} UAH</p>
      </div>

      <BaseIconDelete v-show="!isOrderOpen" class="icon" @click="deleteOrder" />
    </div>

    <span
      v-show="isOrderOpen && props.order.id === props.openedItemId"
      class="order__card-opened"
    >
      <BaseIconArrowRight style="width: 25px; height: 25px; fill: white" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { declensionOrder } from "~/utils/orders/index";
import type { IOrder } from "~/types/index";
import { useOrdersStore } from "~/stores/orders";
import { formatSmallDate, formatDateWithMonth } from "~/utils/index";

const ordersStore = useOrdersStore();

export interface Props {
  order: IOrder;
  openedItemId: number | null;
}

const props = withDefaults(defineProps<Props>(), {
  order: () => ({} as IOrder),
  openedItemId: null,
});

const isOrderOpen = defineModel("isOrderOpen");

const emit = defineEmits<{
  deleteOrder: [orderId: number];
  openOrder: [orderInfo: IOrder];
}>();

const deleteOrder = () => {
  emit("deleteOrder", props.order.id);
};

const openOrder = async () => {
  isOrderOpen.value = true;
  emit("openOrder", props.order);
};

const productsPriceInOrder = computed(() => {
  return ordersStore.calculateProductsPriceInOrder(props.order.id);
});
</script>

<style scoped lang="scss">
.card {
  &__group {
    max-width: 500px;
    width: 100%;
    justify-content: left !important;
    &-name {
      max-width: 700px;
      font-size: 20px;
      text-decoration: underline gray;
    }

    @media (max-width: 1280px) {
      max-width: 300px;
    }
  }

  &__catalog {
    display: flex;
    align-items: center;
    gap: 15px;
    &-icon {
      height: 40px;
      width: 40px;
      position: relative;
      cursor: pointer;
      border: 1px solid gray;
      border-radius: 50%;

      & svg {
        height: 20px;
        width: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &-info {
      &_num {
        font-size: 21px;
        line-height: 20px;
      }

      &_text {
        font-size: 16px;
        color: gray;
      }
    }
  }
}

.order__card-opened {
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0%, -50%);
  background-color: rgb(199, 197, 197);
  height: 100%;
  width: 50px;
  line-height: 70px;
  text-align: center;
}

.pe-6 {
  padding-right: 60px !important;
}
</style>
