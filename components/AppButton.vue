<template>
  <button
    :class="[
      `app-button__container --button-${props.buttonStyle || 'black'}-color`,
      { '--full': props.full, '--loading': props.loading }
    ]"
  >
    <slot v-if="!props.loading" />
    <LoadingIcon
      v-if="props.loading"
      class="app-button__loading-icon"
    />
  </button>
</template>

<script lang="ts" setup>
  import LoadingIcon from "@/assets/icons/LoadingIcon.svg?component";
  import type { AppButtonProps } from "~/@types/components";

  const props = defineProps<AppButtonProps>();
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
    border: 0.1875rem solid transparent;

    .app-button__loading-icon {
      height: 20px;
      width: 20px;
      animation: spinner-loading 1s infinite linear;

      @keyframes spinner-loading {
        to {
          transform: rotate(360deg);
        }
        from {
          transform: rotate(0deg);
        }
      }
    }

    &.--full {
      display: flex;
      justify-content: center;
      padding: 0.625rem 1.5rem;
      width: 100%;
    }

    &.--button-black-color {
      background: $color-black;
      color: $color-white;

      &.--loading {
        &:hover {
          background: $color-black;
          color: $color-white;
        }
      }

      &:hover {
        background: $color-white;
        color: $color-black;
        border-color: $color-black;
      }
    }

    &.--button-secondary-color {
      background: $color-secondary;
      color: $color-black;

      &.--loading {
        &:hover {
          background: $color-secondary;
          color: $color-black;
        }
      }

      &:hover {
        background: $color-white;
        color: $color-secondary;
        border-color: $color-secondary;
      }
    }

    &.--button-white-color {
      background: $color-white;
      color: $color-black;

      &.--loading {
        &:hover {
          background: $color-white;
          color: $color-black;
        }
      }

      &:hover {
        background: $color-black;
        color: $color-white;
      }
    }
  }
</style>
