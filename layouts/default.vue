<template>
  <div>
    <AppHeader v-model="searchModel" />
    <div class="main">
      <AppSidebar />
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useConnectionStore } from "@/stores/connection";
const connectionStore = useConnectionStore();

const route = useRoute();

const searchModel = ref("");
connectionStore.bindEvents();
provide("searchFilter", readonly(searchModel));

watch(
  () => route.path,
  () => {
    searchModel.value = "";
  }
);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  width: calc(100% - 200px);

  @media (max-width: 650px) {
    width: calc(100% - 130px) !important;
  }
}

.container {
  padding-top: 80px;
}
</style>
