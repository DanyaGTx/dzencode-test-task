<template>
  <div class="sidebar">
    <div class="row flex-nowrap h-100">
      <div class="px-0 sidebar__wrapper">
        <div class="align-items-center pt-2 text-white">
          <div class="sidebar__avatar">
            <img src="../assets/images/avatar.jpg" class="sidebar__avatar-img" alt="avatar"></img>
          </div>
          <ul class="nav flex-column mb-0 align-items-center" id="menu">
            <li class="nav-item">
              <NuxtLink
                class="nav-link align-middle px-0 text-uppercase"
                to="/"
              >
                Продукты
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="nav-link align-middle px-0 text-uppercase"
                to="/orders"
              >
                Заказы
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar {
  margin-right: 20px;
  &__wrapper {
    width: 200px !important;
    padding-top: 50px;
    min-height: calc(100vh - 68px);
    box-shadow: 0px 10px 20px rgba(177, 176, 176, 0.6);
    background-color: white;
  }

  &__avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    &-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid black;

      @media (max-width: 650px) {
     width: 80px;
     height: 80px;
    }
    }

    @media (max-width: 650px) {
      transform: translateX(5px);
    }
  }

  @media (max-width: 650px) {
    width: 100px !important;
  }
}

.router-link-exact-active {
  border-bottom: 2px solid green;
}

.nav-link {
  color: black;
  font-weight: 600;
}
</style>
