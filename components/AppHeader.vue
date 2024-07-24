<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left-part">
          <div class="header__logo">Inventory</div>
          <div class="header__search">
            <input class="header__input" type="text" placeholder="Поиск" />
          </div>
        </div>
        <div class="header__right-part">
          <div class="header__date-info">
            <span class="header__day">Вторник</span>
            <div class="header__date-wrapper">
              <span class="header__full-date"> 23.07.2023 </span>
              <span class="header__time">18:22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

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
