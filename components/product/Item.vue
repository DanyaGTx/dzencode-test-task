<template>
  <div class="card">
    <div class="card-body d-flex align-items-center">
      <div class="d-flex justify-content-center align-items-center">
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
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <p class="card__serial-number">SN-12.312412</p>
        </div>
      </div>

      <div class="card__status-info first-status">свободен</div>

      <div class="card__date">
        <p>c 06/04/2017</p>
        <p>по 06/04/2017</p>
      </div>

      <p>новый</p>

      <div class="card__price">
        <p class="card__price-foreign">2500$</p>
        <p class="card__price-native">250 000 UAH</p>
      </div>

      <div class="card__group-name">Длинное предлинное название прихода</div>

      <div class="card__date">
        <p class="card__date-small">06/12</p>
        <p class="card__date-full">06 / Сен / 2017</p>
      </div>

      <BaseIconDelete class="icon" @click="deleteProduct" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  deleteProduct: [];
}>();

const deleteProduct = () => {
  emit("deleteProduct");
};
</script>

<style lang="scss">
.card {
  min-width: max-content;
  margin-bottom: 20px;

  &-body {
    width: 100%;
    gap: 20px;
  }

  &__description {
    max-width: 530px;

    &-text {
      font-size: 17px;
      text-decoration: underline;

      @media (max-width: 1500px) {
        max-width: 300px;
      }
    }
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

  &__image {
    margin-right: 10px;
  }

  &__serial-number {
    font-size: 14px;
    color: gray;
  }

  &__status-info {
    color: orange;
  }

  &__price {
    margin: 0 30px;
    &-foreign {
      font-size: 12px;
      color: gray;
    }
  }

  &__group-name {
    max-width: 300px;
    font-size: 20px;
    text-decoration: underline gray;
  }

  &__date {
    min-width: fit-content;

    &-small {
      font-size: 12px;
      text-align: center;
      color: gray;
    }
  }
}
</style>
