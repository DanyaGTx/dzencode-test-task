<template>
  <div class="product__filter">
    <span>Тип:</span>
    <select
      class="form-select product__filter-select"
      aria-label="Default select example"
      v-model="model"
    >
      <option v-for="type in types" :key="type.value" :value="type.value">
        {{ type.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

export interface Props {
  types: { value: string; label: string }[];
}

const props = withDefaults(defineProps<Props>(), {
  types: () => [],
});

const router = useRouter();
const route = useRoute();

const model = defineModel<string>();

const isValidType = (value: string) => {
  return props.types.some((type) => type.value === value);
};

watch(model, (value) => {
  if (value) {
    router.push({ query: { ...route.query, type: model.value } });
  }
});

watch(
  () => route.query.type,
  (newType) => {
    if (isValidType(newType as string)) {
      model.value = (newType as string) || "";
    } else {
      model.value = "all";
    }
  },
  { immediate: true }
);
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
