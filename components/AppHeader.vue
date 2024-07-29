<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left-part">
          <HeaderLogo />
          <HeaderSearch v-model="searchModel" />
        </div>
        <div class="header__right-part">
          <HeaderDate />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const searchModel = defineModel<string>();
</script>

<style scoped lang="scss">
.header {
  padding: 10px 0;
  box-shadow: 0px 10px 20px rgba(140, 139, 139, 0.178);
  background-color: white;
  position: relative;
  z-index: 1;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;

    @media (max-width: 520px) {
      flex-direction: column;
      align-items: flex-end;
      gap: 0;
    }
  }

  &__left-part {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 100px;

    @media (max-width: 650px) {
      gap: 20px;
    }
  }
}
</style>
