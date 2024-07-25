<template>
  <div class="card">
    <div
      class="card-body d-flex align-items-center"
      :class="{
        'justify-content-between': !isOrderOpen,
        'pe-6': isOrderOpen,
      }"
    >
      <div class="d-flex justify-content-center align-items-center">
        <div v-show="!isOrderOpen" class="card-text card__group-name">
          Длинное предлинное предлинное название прихода
        </div>
      </div>

      <div class="card__catalog">
        <div @click="openOrder" class="card__catalog-icon">
          <BaseIconList />
        </div>
        <div class="card__catalog-info">
          <p class="card__catalog-info_num">23</p>
          <span class="card__catalog-info_text">Продукта</span>
        </div>
      </div>

      <div class="card__date">
        <p class="card__date-small">06/12</p>
        <p class="card__date-full">06 / Сен / 2017</p>
      </div>

      <div v-show="!isOrderOpen" class="card__price">
        <p class="card__price-foreign">2500$</p>
        <p class="card__price-native">250 000 UAH</p>
      </div>

      <BaseIconDelete v-show="!isOrderOpen" class="icon" @click="deleteOrder" />
    </div>

    <span v-show="isOrderOpen" class="order__card-opened">
      <BaseIconArrowRight style="width: 25px; height: 25px; fill: white" />
    </span>
  </div>
</template>

<script setup lang="ts">
const openedItemInfo = defineModel("openedItemInfo");
const isOrderOpen = defineModel("isOrderOpen");

const emit = defineEmits<{
  deleteOrder: [orderId: number];
}>();

const deleteOrder = () => {
  emit("deleteOrder", 777);
};

const openOrder = async () => {
  isOrderOpen.value = true;
  openedItemInfo.value = { id: 1, name: "Order1", date: new Date() };
};
</script>

<style scoped lang="scss">
.card {
  &__group-name {
    max-width: 500px;
    font-size: 20px;
    text-decoration: underline gray;

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
