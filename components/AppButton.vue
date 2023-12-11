<template>
  <button :class="`app-button__container --button-${buttonType || 'black'}-color`">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import type { AppButtonProps } from "~/@types/components";

  const { buttonType } = defineProps<AppButtonProps>();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .app-button__container {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0.625rem 4.0625rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.6s ease;
    border: 3px solid transparent;

    &.--button-black-color {
      background: $color-black;
      color: $color-white;

      &:hover {
        background: $color-white;
        color: $color-black;
        border-color: $color-black;
      }
    }

    &.--button-secondary-color {
      background: $color-secondary;
      color: $color-black;

      &:hover {
        background: $color-white;
        color: $color-secondary;
      }
    }

    &.--button-white-color {
      background: $color-white;
      color: $color-black;

      &:hover {
        background: $color-black;
        color: $color-white;
      }
    }
  }
</style>
