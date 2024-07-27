<template>
  <div class="header__search">
    <input
      v-model="model"
      class="header__input"
      type="text"
      placeholder="Поиск"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();

const router = useRouter();
const route = useRoute();

watch(model, (value) => {
  if (model.value) {
    router.push({ query: { ...route.query, search: model.value } });
  }

  const query = { ...route.query, search: model.value };
  if (!value) {
    delete query.search;
  }
  router.push({ query });
});

watch(
  () => route.query.search,
  (newSearch) => {
    model.value = (newSearch as string) || "";
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
.header {
  &__search {
    width: 100%;
    max-width: 500px;
  }

  &__input {
    border-radius: 5px;
    outline: none;
    padding: 5px;
    width: 100%;
    border: 1px solid rgb(214, 213, 213);
    background-color: rgb(237, 242, 246);

    &::placeholder {
      color: black;
      font-weight: 700;
    }
  }
}
</style>
