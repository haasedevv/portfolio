<template>
  <aside :class="['app-drawer-menu__container', { '--close': closeDrawer }]">
    <div class="app-drawer-menu__close-container">
      <IconXCircle @click="handleClose" />
    </div>
    <div class="app-drawer-menu__content">
      <anchor-links-menu
        direction="column"
        items-color="primary"
        :event="handleClose"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
  import type { closeEmitVoidProps } from "~/@types/emits";

  const emit = defineEmits<closeEmitVoidProps>();
  const closeDrawer = ref(false);

  const handleClose = () => {
    closeDrawer.value = true;
    setTimeout(() => {
      emit("close");
    }, 500);
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .app-drawer-menu__container {
    padding: 1.5rem;
    background: $color-white;
    position: fixed;
    height: 100dvh;
    width: 18.75rem;
    z-index: 2;
    right: 0;
    animation: openAnimation 0.5s ease;

    &.--close {
      animation: closeAnimation 1s ease;
      right: -18.75rem;
    }

    .app-drawer-menu__close-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      svg {
        cursor: pointer;

        &:hover {
          color: $color-red;
        }
      }
    }

    .app-drawer-menu__content {
      display: flex;
      flex-direction: column;
      margin-top: 2.25rem;
    }

    @keyframes openAnimation {
      0% {
        transform: translateX(300px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes closeAnimation {
      0% {
        transform: translateX(-300px);
      }
      100% {
        transform: translateX(300px);
      }
    }
  }

  @media (max-width: 32.5rem) {
    .app-drawer-menu__container {
      width: 100%;
      z-index: 2;
      right: 0;
      animation: openAnimation 0.5s ease;

      &.--close {
        animation: closeAnimation 1s ease;
        left: 100%;
      }

      @keyframes openAnimation {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(0);
        }
      }

      @keyframes closeAnimation {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    }
  }
</style>
