<template>
  <header class="app-navbar__container">
    <div class="app-navbar__left-content">
      <div
        ref="devAnimationDeveloper"
        class="app-navbar__dev-animation-developer"
      >
        <span class="app-navbar__dev-animation-span">Desenvolvedor</span>
        <span class="app-navbar__dev-animation-span">Desenvolvedor</span>
        <span class="app-navbar__dev-animation-span">Desenvolvedor</span>
      </div>
      <div
        ref="devAnimationFrontEnd"
        class="app-navbar__dev-animation-front-end"
      >
        <span class="app-navbar__dev-animation-span">Front end</span>
        <span class="app-navbar__dev-animation-span">Front end</span>
        <span class="app-navbar__dev-animation-span">Front end</span>
      </div>
    </div>
    <div class="app-navbar__right-content">
      <anchor-links-menu class="app-navbar__nav-links-container" />

      <div
        class="app-navbar__hamburguer-menu"
        @click="opennedDrawerMenu = true"
      >
        <div />
        <div />
        <div />
      </div>
    </div>

    <app-drawer-menu
      v-if="opennedDrawerMenu"
      @close="opennedDrawerMenu = false"
    />
  </header>
</template>

<script lang="ts" setup>
  const devAnimationDeveloper = ref();
  const devAnimationFrontEnd = ref();
  const timeoutFrontEnd = ref();
  const tiemoutDeveloper = ref();
  const opennedDrawerMenu = ref(false);

  const showDevelopText = () => {
    devAnimationDeveloper.value.style.display = "flex";
    devAnimationFrontEnd.value.style.display = "none";
  };

  const showFrontEndText = () => {
    devAnimationDeveloper.value.style.display = "none";
    devAnimationFrontEnd.value.style.display = "flex";
  };

  const handleAnimation = () => {
    showDevelopText();

    timeoutFrontEnd.value = setTimeout(() => {
      showFrontEndText();

      tiemoutDeveloper.value = setTimeout(() => handleAnimation(), 4000);
    }, 4000);
  };

  onMounted(() => {
    handleAnimation();
  });

  onUnmounted(() => {
    clearTimeout(timeoutFrontEnd.value);
    clearTimeout(tiemoutDeveloper.value);
  });
</script>

<style lang="scss" scoped>
  @import "assets/styles/colors/colors";

  .app-navbar__container {
    background: $color-primary;
    display: flex;
    justify-content: space-between;
    position: relative;

    .app-navbar__dev-animation-span,
    .app-navbar__navbar-item a {
      color: $color-white;
    }

    .app-navbar__left-content {
      .app-navbar__dev-animation-developer,
      .app-navbar__dev-animation-front-end {
        display: none;
        flex-direction: column;
        position: absolute;
        left: 2.25rem;
        top: 2.25rem;
        user-select: none;

        .app-navbar__dev-animation-span {
          font-size: 2.5rem;
          font-weight: 700;

          &:nth-child(1) {
            animation: devAnimationSpanOne 2s ease infinite alternate;
          }
          &:nth-child(2) {
            animation: devAnimationSpanTwo 2s ease infinite alternate;
          }
          &:nth-child(3) {
            animation: devAnimationSpanThree 2s ease infinite alternate;
          }
        }
      }

      @keyframes devAnimationSpanOne {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes devAnimationSpanTwo {
        0% {
          opacity: 0;
        }
        16.5% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes devAnimationSpanThree {
        0% {
          opacity: 0;
        }
        33% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }

    .app-navbar__right-content {
      padding: 2.25rem 2.25rem 5.625rem;
      animation: rightContentAnimation 1s ease;

      .app-navbar__hamburguer-menu {
        width: fit-content;
        display: none;
        flex-direction: column;
        gap: 0.375rem;
        cursor: pointer;

        & > div {
          border-radius: 0.625rem;
          width: 2.75rem;
          height: 0.375rem;
          background: #fff;
        }
      }

      @keyframes rightContentAnimation {
        0% {
          opacity: 0;
          transform: translateX(20px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }

  @media (max-width: 64rem) {
    .app-navbar__container {
      .app-navbar__right-content {
        .app-navbar__hamburguer-menu {
          display: flex;
        }

        .app-navbar__nav-links-container {
          display: none;
        }
      }
    }
  }

  @media (max-width: 32.5rem) {
    .app-navbar__container {
      .app-navbar__left-content {
        .app-navbar__dev-animation-developer,
        .app-navbar__dev-animation-front-end {
          left: 1rem;
          .app-navbar__dev-animation-span {
            font-size: 1.5rem;
          }
        }
      }

      .app-navbar__right-content {
        padding: 2.25rem 1rem 2.4375rem 2.25rem;
      }
    }
  }
</style>
