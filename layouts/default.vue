<template>
  <div>
    <AppHeader />
    <div class="main">
      <AppSidebar />
      <div class="container py-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex !important;
  margin-right: 280px;

  @media (max-width: 650px) {
    margin-right: 130px;
  }
}
</style>
