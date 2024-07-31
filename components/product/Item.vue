<template>
  <div class="card">
    <div class="card-body d-flex align-items-center justify-content-between">
      <div class="d-flex justify-content-center align-items-center">
        <span :class="getPointStatusClassName" class="card__status-point">
        </span>
        <div class="card__image">
          <img
            :src="product.photo"
            width="70"
            height="55"
            alt="monitor image"
          />
        </div>

        <div class="card-text card__title">
          <p class="card__title-text">
            {{ product.title }}
          </p>
          <p class="card__serial-number">{{ product.serialNumber }}</p>
        </div>
      </div>

      <div
        :class="{
          'free-status': product.status === 'free',
          'repairing-status': product.status === 'repairing',
        }"
        class="card__status-info"
      >
        {{ getProductStatus }}
      </div>

      <div class="card__date">
        <p>c {{ formatDate(product.guarantee?.start) }}</p>
        <p>по {{ formatDate(product.guarantee?.end) }}</p>
      </div>

      <div class="card__state">
        <p v-if="props.product.isNew">новый</p>
        <p v-else>Б/У</p>
      </div>

      <div class="card__price">
        <p class="card__price-foreign">{{ getForeignPrice }}</p>
        <p class="card__price-native">{{ getNativePrice }}</p>
      </div>

      <div class="card__group-name">{{ product.order_name }}</div>

      <div class="card__date">
        <p class="card__date-small">
          {{ formatSmallDate(product.date) }}
        </p>
        <p class="card__date-full">
          {{ formatDateWithMonth(product.date) }}
        </p>
      </div>

      <BaseIconDelete
        class="icon"
        data-test="deleteProduct"
        @click="deleteProduct"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatDate } from "../../utils/index";
import {
  getCurrencySymbol,
  formatSmallDate,
  formatDateWithMonth,
} from "../../utils/index";
import type { IProduct } from "../../types/index";

export interface Props {
  product: IProduct;
}

const props = withDefaults(defineProps<Props>(), {
  product: () => ({} as IProduct),
});

const emit = defineEmits<{
  deleteProduct: [product: IProduct];
}>();

const deleteProduct = () => {
  emit("deleteProduct", props.product);
};

const getNativePrice = computed(() => {
  return props.product.price[1].value + " " + props.product.price[1].symbol;
});

const getForeignPrice = computed(() => {
  const price = props.product.price[0].value;
  const symbol = getCurrencySymbol(props.product.price[0].symbol);
  return price + " " + symbol;
});

const getProductStatus = computed(() => {
  return props.product.status === "free" ? "свободен" : "В ремонте";
});

const getPointStatusClassName = computed(() => {
  return props.product.status === "free" ? "free-point" : "repairing-point";
});
</script>

<style lang="scss">
.card {
  min-width: max-content;

  &-body {
    width: 100%;
    gap: 20px;
  }

  &__title {
    min-width: 530px;
    max-width: 530px;

    &-text {
      font-size: 17px;
      text-decoration: underline;

      @media (max-width: 1500px) {
        max-width: 300px;
      }
    }

    @media (max-width: 1500px) {
      min-width: auto;
    }
  }

  &__image {
    margin-right: 20px;
  }

  &__serial-number {
    font-size: 14px;
    color: gray;
  }

  &__status-info {
    &.free-status {
      color: orange;
    }

    &.repairing-status {
      color: black;
    }
  }

  &__price {
    margin: 0 30px;

    &-foreign {
      font-size: 12px;
      color: gray;
    }
  }

  &__group-name {
    max-width: 300px;
    font-size: 20px;
    text-decoration: underline gray;
  }

  &__date {
    min-width: fit-content;

    &-small {
      font-size: 12px;
      text-align: center;
      color: gray;
    }
  }
}
</style>
