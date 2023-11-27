<template>
  <div class="section-one__container">
    <div class="section-one__content">
      <me-icon class="section-one__me-icon" />
      <article class="section-one__article-titles">
        <header>
          <h1>Desenvolvedor Front end</h1>
          <h2>Joseph Haase</h2>
          <div class="section-one__article-github-link">
            <span><IconGithub /></span>
            <h3>/haasedevv</h3>
          </div>
        </header>
      </article>
      <app-button
        button-type="secondary"
        class="section-one__download-cv-button"
      >
        Baixar CV
      </app-button>
      <external-links-nav
        direction="row"
        class="section-one__content-nav-center"
      />
    </div>

    <img
      class="section-one__vector"
      src="/vector.svg"
      alt="vetor do background"
    />

    <external-links-nav
      direction="column"
      class="section-one__content-nav-right"
    />
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

          .section-one__article-github-link {
            display: flex;
            justify-content: center;
            margin-top: 0.375rem;

            span {
              svg {
                height: 1.125rem;
                width: 1.125rem;
                color: $color-secondary;
              }
            }

            h3 {
              font-size: 0.875rem;
              color: $color-secondary;
            }
          }
        }
      }

      .section-one__download-cv-button {
        margin-top: 2rem;
      }

      .section-one__content-nav-center {
        margin-top: 2.25rem;
        display: none;
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

    .section-one__vector {
      width: 100%;
      position: absolute;
      top: 99%;
      z-index: -1;
    }

    .section-one__content-nav-right {
      height: 100%;
      position: absolute;
      right: 2.25rem;
      top: 0;
      display: flex;
      align-items: center;
      animation: navLinksAnimation 1s ease;
    }
  }

  @media (max-width: 48.75rem) {
    .section-one__container {
      .section-one__content {
        padding-top: 4.375rem;
        .section-one__content-nav-center {
          display: flex;
        }
      }

      .section-one__content-nav-right {
        display: none;
      }
    }
  }
</style>
