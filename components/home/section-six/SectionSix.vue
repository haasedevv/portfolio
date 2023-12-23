<template>
  <section
    id="#contato"
    class="section-six__container"
  >
    <img
      class="section-six__vector --desktop-vector"
      src="/vectorDesktop.svg"
      alt="vetor do background"
    />

    <img
      class="section-six__vector --mobile-vector"
      src="/vectorMobile.svg"
      alt="vetor do background"
    />

    <div class="section-six__content">
      <h1 class="section-six__title">Entre em contato.</h1>

      <form class="section-six__form">
        <app-button
          button-type="black"
          full
        >
          Enviar mensagem
        </app-button>
      </form>

      <div class="section-six__background" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-six__container {
    display: flex;
    flex-direction: column;

    .section-six__vector {
      width: 100%;
      z-index: -1;
      transform: rotate(180deg);

      &.--desktop-vector {
        display: initial;
      }

      &.--mobile-vector {
        display: none;
      }
    }

    .section-six__content {
      padding: 0 2.25rem;
      position: relative;

      .section-six__title {
        color: $color-white;
        font-size: 2.25rem;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        margin-bottom: 5rem;
      }

      .section-six__form {
        padding: 2.25rem;
        border-radius: 16px;
        border: 2px solid $color-primary;
        background: $color-white;
        width: 100%;
        max-width: 36.125rem;
        margin: 0 auto;
      }

      .section-six__background {
        position: absolute;
        background: $color-primary;
        height: 32.625rem;
        width: 100%;
        top: 0;
        left: 0;
        margin-top: -0.0625rem;
        z-index: -1;
      }
    }
  }

  @media (max-width: 48.75rem) {
    .section-six__container {
      .section-six__vector {
        &.--desktop-vector {
          display: none;
        }

        &.--mobile-vector {
          display: initial;
        }
      }
    }
  }

  @media (max-width: 36.875rem) {
    .section-six__container {
      .section-six__content {
        position: relative;
        padding: 0 1rem;

        .section-six__title {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .section-six__form {
          padding: 1.5rem 1rem;
        }

        .section-six__background {
          height: 29.375rem;
        }
      }
    }
  }
</style>
