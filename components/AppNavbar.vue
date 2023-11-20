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
      <nav class="app-navbar__navbar-options">
        <ul>
          <li class="app-navbar__navbar-item"><a href="#sobre">sobre</a></li>
          <li class="app-navbar__navbar-item"><a href="#tecnologias">tecnologias</a></li>
          <li class="app-navbar__navbar-item"><a href="#projetos">projetos</a></li>
          <li class="app-navbar__navbar-item"><a href="#experiencias">experiências</a></li>
          <li class="app-navbar__navbar-item"><a href="#contato">contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
  const devAnimationDeveloper = ref();
  const devAnimationFrontEnd = ref();
  const timeoutFrontEnd = ref();
  const tiemoutDeveloper = ref();
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
  @import "@/assets/styles/colors/_colors.scss";

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
      padding: 2.25rem;
      ul {
        display: flex;
        gap: 1rem;

        .app-navbar__navbar-item {
          transition: border-color 0.5s ease;

          a {
            padding: 0.25rem 0.375rem;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-decoration: none;
            transition: color 0.5s ease;
          }

          &:hover {
            a {
              color: $color-secondary;
            }
          }
        }
      }
    }
  }
</style>
