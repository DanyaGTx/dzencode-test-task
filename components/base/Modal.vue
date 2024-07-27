<template>
  <div
    class="modal fade"
    tabindex="-1"
    ref="baseModalRef"
    @click.self="closeModal"
  >
    <div class="modal-dialog modal-dialog-centered base-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5">
            Вы уверены, что хотите удалить этот
            {{ type === "product" ? "продукт" : "заказ" }}?
          </h3>
          <button
            type="button"
            class="btn-close"
            @click.stop="closeModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="type === 'product'" class="modal-content__wrapper">
            <span class="card__status-point"></span>
            <div>
              <img
                :src="(targetInfo as IProduct).photo"
                alt="image"
                width="40"
                height="30"
              />
            </div>
            <div class="target__info">
              <p class="target__title">{{ (targetInfo as IProduct).title }}</p>
              <span class="target__serial-number">
                {{ (targetInfo as IProduct).serialNumber }}
              </span>
            </div>
          </div>
          <div v-else-if="type === 'order'">
            <OrderOpenedInnerItem
              v-for="innerProduct in (targetInfo as IOrder).products"
              :innerProduct="innerProduct"
              :showItemForModal="true"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn modal__btn-cancel"
            @click="closeModal"
          >
            Отменить
          </button>
          <button
            type="button"
            class="modal__btn-confirm btn d-flex align-items-center gap-1"
            @click="deleteItem"
          >
            <BaseIconDelete style="width: 15px; height: 15px; fill: red" />
            <span> Удалить </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IOrder, IProduct } from "~/types/index";

export interface Props {
  modelValue: boolean;
  targetInfo: IProduct | IOrder;
  type: "product" | "order";
}

const props = withDefaults(defineProps<Props>(), {
  targetInfo: () => {
    return {
      title: "Modal",
    } as IProduct;
  },
});

const baseModalRef = ref(null);
const modal = ref<bootstrap.Modal | null>(null);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  deleteItem: [id: number];
}>();

const closeModal = () => {
  emit("update:modelValue", false);
};

const deleteItem = () => {
  emit("deleteItem", props.targetInfo.id);
};

watch(
  () => props.modelValue,
  (value) => {
    if (modal.value) {
      if (value) {
        modal.value.show();
      } else {
        modal.value.hide();
      }
    }
  }
);

onMounted(() => {
  if (baseModalRef.value) {
    modal.value = new bootstrap.Modal(baseModalRef.value);
  }
});
</script>

<style scoped lang="scss">
.modal.show {
  display: block;
  opacity: 1;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.base-dialog {
  margin-top: -50px;
}

.modal-content {
  border: none;
  border-top: 1px solid gray;

  &__wrapper {
    display: flex;
    align-items: center;
  }
}

.modal-footer {
  background-color: var(--base-green);
}

.modal__btn {
  &-cancel {
    color: white;
    border: none;
  }

  &-confirm {
    background-color: white;
    color: rgb(175, 12, 12);
    font-weight: 500;
    border-radius: 20px;
    padding: 5px 20px;
  }
}

.target {
  &__info {
    margin-left: 50px;

    @media (max-width: 490px) {
      margin-left: 15px;
    }
  }

  &__title {
    text-decoration: underline;
  }

  &__serial-number {
    text-decoration: underline;
    color: gray;
  }
}
</style>
~/types
