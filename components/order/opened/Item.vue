<template>
  <div class="card order__card">
    <div @click="closeOpenedOrder" class="card__close">
      <BaseIconClose style="width: 18px; height: 18px; fill: gray" />
    </div>
    <div class="card-body px-0 pb-0">
      <div class="card-content">
        <h5>
          {{ openedItemInfo.title }}
        </h5>
        <div class="card__add-product">
          <span class="card__add-product_plus">+</span>
          <p class="card__add-product_text">Добавить Продукт</p>
        </div>
      </div>

      <div class="card__inner-orders">
        <OrderOpenedInnerItem
          v-for="innerProduct in openedItemInfo.products"
          :innerProduct="innerProduct"
          @deleteInnerProduct="deleteInnerProduct"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IOrder } from "~/types/index";

export interface Props {
  openedItemInfo: IOrder;
}

const props = withDefaults(defineProps<Props>(), {
  openedItemInfo: () => ({} as IOrder),
});

const emit = defineEmits<{
  closeOpenedOrder: [];
  deleteInnerProduct: [innerProductId: number, orderId: number];
  deleteOrder: [orderId: number];
}>();

const closeOpenedOrder = () => {
  emit("closeOpenedOrder");
};

const deleteInnerProduct = (innerProductId: number) => {
  emit("deleteInnerProduct", innerProductId, props.openedItemInfo.id);

  if (!props.openedItemInfo.products.length) {
    emit("deleteOrder", props.openedItemInfo.id);
  }
};
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 3px;

  &-body {
    @media (max-width: 768px) {
      max-width: 450px !important;
    }
  }

  &-content {
    padding: 5px 20px;
    margin-bottom: 10px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__add-product {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: max-content;
    &_plus {
      display: block;
      background-color: rgb(96, 164, 1);
      color: white;
      width: 25px;
      height: 25px;
      font-size: 21px;
      text-align: center;
      line-height: 20px;
      border-radius: 50%;
      user-select: none;
    }

    &_text {
      color: rgb(82, 164, 1);
    }
  }

  &__close {
    text-align: right;
    position: absolute;
    right: -15px;
    top: -15px;
    background-color: white;
    box-shadow: rgba(83, 86, 90, 0.2) 0px 5px 15px;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }

  &__inner-orders_empty {
    text-align: center;
  }
}
</style>
