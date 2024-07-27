<template>
  <div class="product__filter">
    <span>Тип:</span>
    <select
      class="form-select product__filter-select"
      aria-label="Default select example"
      v-model="model"
    >
      <option selected>All</option>
      <option v-for="type in types" :key="type.value" :value="type.value">
        {{ type.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  onFilterTypeChange: [type: string];
}>();

export interface Props {
  types: { value: string; label: string }[];
}

const model = defineModel();

withDefaults(defineProps<Props>(), {
  types: () => [],
});
</script>

<style scoped lang="scss">
.product__filter {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  &-select {
    max-width: 300px;
    box-shadow: none;
  }
}
</style>
