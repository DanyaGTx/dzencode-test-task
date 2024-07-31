<template>
  <div class="header__date-info">
    <span class="header__day">{{ currentDay }}</span>
    <div class="header__date-wrapper">
      <span class="header__full-date">{{ currentDate }}</span>
      <span class="header__time">
        <BaseIconTime style="fill: var(--base-green)" />
        <span>{{ currentTime }}</span>
      </span>
      <div class="header__online">
        <BaseTooltip msg="Current Online">
          <div class="header__online-wrapper">
            <BaseIconUser />
            <span>{{ connectionStore.online }}</span>
          </div>
        </BaseTooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getDayName, formatTime, formatRealDateWithMonth } from "~/utils/index";
import { useConnectionStore } from "@/stores/connection";

const connectionStore = useConnectionStore();

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

const getMillisecondsUntilNextMinute = computed(() => {
  const now = new Date();
  const millisecondsUntilNextMinute =
    (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  return millisecondsUntilNextMinute;
});

const manageRealDate = () => {
  updateDateTime();
  setTimeout(() => {
    updateDateTime();
    intervalId = setInterval(updateDateTime, 60000);
  }, getMillisecondsUntilNextMinute.value);
};

onMounted(async () => {
  manageRealDate();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped lang="scss">
.header {
  &__time {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__date-wrapper {
    display: flex;
    gap: 20px;
  }

  &__full-date {
    min-width: max-content;
  }

  &__online {
    display: flex;
    align-items: center;
    gap: 5px;

    &-wrapper {
      display: flex;
      align-items: center;
    }
  }
}
</style>
