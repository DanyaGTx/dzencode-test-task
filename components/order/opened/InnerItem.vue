<template>
  <div
    :class="{
      'border-0': showItemForModal,
      'border-top': !showItemForModal,
    }"
  >
    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <span :class="getPointStatusClassName" class="card__status-point">
        </span>
        <div class="card__image">
          <img :src="innerProduct.photo" width="70" height="55" alt="image" />
        </div>

        <div class="card-text card__info">
          <p class="card__title-text">
            {{ innerProduct.title }}
          </p>
          <p class="card__serial-number">
            {{ innerProduct.serialNumber }}
          </p>
        </div>
      </div>

      <div v-if="!showItemForModal" class="card__status-info first-status">
        свободен
      </div>

      <BaseIconDelete
        v-if="!showItemForModal"
        @click="deleteInnerProduct"
        class="icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "~/types/index";

export interface Props {
  innerProduct: IProduct;
  showItemForModal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  innerProduct: () => ({} as IProduct),
});

const emit = defineEmits<{
  deleteInnerProduct: [innerProductId: number];
}>();

const deleteInnerProduct = () => {
  emit("deleteInnerProduct", props.innerProduct.id);
};

const getPointStatusClassName = computed(() => {
  return props.innerProduct.status === "free"
    ? "free-point"
    : "repairing-point";
});
</script>

<style scoped lang="scss">
.card {
  width: 100% !important;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-radius: 0;

  &-body {
    @media (max-width: 768px) {
      max-width: 450px !important;
    }
  }

  &__info {
    max-width: 450px;
  }
}
</style>
