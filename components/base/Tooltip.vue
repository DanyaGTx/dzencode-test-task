<template>
  <div class="custom-tooltip">
    <slot />
    <span class="tooltiptext">{{ msg }}</span>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  msg?: string;
}

withDefaults(defineProps<Props>(), {
  msg: "Tooltip",
});
</script>

<style scoped>
.custom-tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Tooltip text */
.custom-tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.custom-tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #333 transparent; /* arrow position */
}

/* Hover state */
.custom-tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 1500px) {
  .custom-tooltip .tooltiptext {
    top: 50%;
    left: auto;
    right: 125%;
    margin-left: 0;
    margin-right: 10px;
    transform: translateY(-50%);
  }

  .custom-tooltip .tooltiptext::after {
    bottom: auto;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    margin-left: 0;
    margin-right: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent #333; /* arrow position */
  }
}

</style>
