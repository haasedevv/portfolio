<template>
  <div class="section-one__container">
    <div class="section-one__content">
      <me-icon class="section-one__me-icon" />
      <article class="section-one__article-titles">
        <header>
          <h1>Desenvolvedor Front end</h1>
          <h2>Joseph Haase</h2>
          <h3>/haasedevv</h3>
        </header>
      </article>
      <app-button
        button-type="secondary"
        class="section-one__download-cv-button"
      >
        Baixar CV
      </app-button>
    </div>

    <section-one-nav-links />
  </div>
</template>

<script lang="ts" setup>
  import MeIcon from "public/me.svg?component";
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-one__container {
    background: $color-primary;
    position: relative;

    .section-one__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: contenteCenterAnimation 2s ease;

      .section-one__me-icon {
        width: 12.5rem;
        height: 14.5625rem;
      }

      .section-one__article-titles {
        header {
          h1,
          h2,
          h3 {
            color: $color-white;
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-align: center;
          }

          h1 {
            font-size: 1.25rem;
          }

          h2 {
            font-size: 1.125rem;
          }

          h3 {
            font-size: 0.875rem;
          }
        }
      }

      .section-one__download-cv-button {
        margin-top: 32px;
      }

      @keyframes contenteCenterAnimation {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
</style>
