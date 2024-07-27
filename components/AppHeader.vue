<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left-part">
          <div class="header__logo">
            <img src="~/assets/images/logo.png" alt="logo" width="30" />
            <span>Inventory</span>
          </div>
          <HeaderSearch v-model="searchModel" />
        </div>
        <div class="header__right-part">
          <div class="header__date-info">
            <span class="header__day">{{ currentDay }}</span>
            <div class="header__date-wrapper">
              <span class="header__full-date">{{ currentDate }}</span>
              <span class="header__time">
                <BaseIconTime style="fill: var(--base-green)" />
                <span>{{ currentTime }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { getDayName, formatTime, formatRealDateWithMonth } from "~/utils/index";

const searchModel = defineModel<string>();

const currentDay = ref(getDayName(new Date()));
const currentDate = ref(formatRealDateWithMonth(new Date()));
const currentTime = ref(formatTime(new Date()));

const updateDateTime = () => {
  const now = new Date();
  currentDay.value = getDayName(now);
  currentDate.value = formatRealDateWithMonth(now);
  currentTime.value = formatTime(now);
};

let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  // Update time immediately
  updateDateTime();
  // Update time every minute
  intervalId = setInterval(updateDateTime, 60000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.header {
  padding: 10px 0;
  box-shadow: 0px 10px 20px rgba(140, 139, 139, 0.178);
  background-color: white;
  position: relative;
  z-index: 1;

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;

    & span {
      text-transform: uppercase;
      font-size: 14px;
      color: var(--base-green);
      font-weight: 500;
    }
  }

  &__time {
    display: flex;
    align-items: center;
    gap: 5px;
  }

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

  &__date-wrapper {
    display: flex;
    gap: 20px;
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

  &__full-date {
    min-width: max-content;
  }
}
</style>
