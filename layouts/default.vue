<template>
  <div>
    <AppHeader />
    <div class="main">
      <AppSidebar />
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

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
