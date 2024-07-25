<template>
  <div class="card">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <span class="card__status-point"></span>
        <div class="card__image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/887/131/small_2x/computer-monitor-free-png.png"
            width="55"
            height="55"
            alt="monitor image"
          />
        </div>

        <div class="card-text card__description">
          <p class="card__description-text">
            Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
          </p>
          <p class="card__serial-number">SN-12.312412</p>
        </div>
      </div>

      <div class="card__status-info first-status">свободен</div>

      <BaseIconDelete class="icon" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
}
</style>
