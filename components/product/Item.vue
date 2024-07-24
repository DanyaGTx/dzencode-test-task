<template>
  <div class="card">
    <div
      class="card-body d-flex justify-content-between align-items-center gap-3"
    >
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
          <p>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <p>SN-12.312412</p>
        </div>
      </div>

      <div class="card__status-info">свободен</div>

      <div class="card__date">
        <p>c 06/04/2017</p>
        <p>по 06/04/2017</p>
      </div>

      <div class="card__status-info">новый</div>

      <div class="card__price">
        <p class="card__price-foreign">2500$</p>
        <p class="card__price-native">250 000 UAH</p>
      </div>

      <div class="card__group-name">Длинное предлинное название группы</div>

      <div class="card__username">Христорождественский Александр</div>

      <div class="card__group-name">Длинное предлинное название группы</div>

      <div class="card__date">
        <p class="card__date-small">06/12</p>
        <p class="card__date-full">06 / Сен / 2017</p>
      </div>

      <button href="#" class="btn btn-primary">delete</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  width: 2200px !important;
  margin-bottom: 20px;
  width: 100%;
  &__description {
    min-width: fit-content;
  }

  &__status {
    &-point {
      min-width: 10px;
      min-height: 10px;
      border-radius: 50%;
      background-color: rgb(255, 196, 0);
      margin-right: 20px;
    }
  }
}
</style>
