<template>
  <div
    class="modal fade"
    tabindex="-1"
    ref="baseModalRef"
    @click.self="closeModal"
  >
    <div class="modal-dialog modal-dialog-centered base-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            @click.stop="closeModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  modelValue: boolean;
}

const props = defineProps<Props>();

const baseModalRef = ref(null);
const modal = ref<bootstrap.Modal | null>(null);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const closeModal = () => {
  emit("update:modelValue", false);
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

<style scoped>
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
</style>
