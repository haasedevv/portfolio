<template>
  <div
    id="#sobre"
    class="stack-icon-component__container"
  >
    <slot
      name="icon"
      class="aa"
    />

    <div class="stack-icon-component__name-container">
      <p class="stack-icon-component__name">
        {{ tecName }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { StackiconComponentProps } from "~/@types/components";

  const { tecName } = defineProps<StackiconComponentProps>();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/_colors.scss";

  .stack-icon-component__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 5.625rem;
    width: 100%;

    .stack-icon-component__name-container {
      width: 100%;
      .stack-icon-component__name {
        color: $color-card-background;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
