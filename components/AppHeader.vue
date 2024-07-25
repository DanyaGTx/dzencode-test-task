<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left-part">
          <div class="header__logo">
            <img src="../assets/images/logo.png" alt="logo" width="30" />
            <span>Inventory</span>
          </div>
          <div class="header__search">
            <input class="header__input" type="text" placeholder="Поиск" />
          </div>
        </div>
        <div class="header__right-part">
          <div class="header__date-info">
            <span class="header__day">Вторник</span>
            <div class="header__date-wrapper">
              <span class="header__full-date"> 23.07.2023 </span>
              <span class="header__time">
                <BaseIconTime style="fill: var(--base-green)" />
                <span>18:22</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../assets/styles/variables";
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
}
</style>
