<template>
  <section
    id="#sobre"
    class="section-two__container"
  >
    <img
      class="section-two__photo"
      src="/me-about.png"
      alt="Joseph Haase Desenvolvedor Vue.js React.js"
    />

    <article class="section-two__article">
      <header class="section-two__article-header">
        <h1 class="section-two__article-header-title">Sobre mim.</h1>
      </header>
      <section class="section-two__article-section">
        <p class="section-two__article-about-me">Olá, meu nome é Joseph!</p>
        <p class="section-two__article-about-me">
          Sou desenvolvedor front-end focado no ecossistema Vue, utilizando as tecnologias Vue.js e Nuxt.js. Com mais de
          1 ano e meio de experiência no mercado, tornei-me especialista no desenvolvimento de interfaces responsivas e
          interativas.
        </p>
        <p class="section-two__article-about-me">
          Ao longo da minha trajetória, também desenvolvi aplicações utilizando React, Next e Node. Com isso, sou uma
          pessoa versátil para diversos projetos, pois adquiri conhecimentos em diferentes tecnologias. Meu objetivo é
          me especializar cada vez mais!
        </p>
        <img
          class="section-two__article-photo"
          src="/me-about.png"
          alt="Joseph Haase Desenvolvedor Vue.js React.js"
        />
      </section>
      <app-button button-type="black">Visualizar CV</app-button>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .section-two__container {
    margin-top: 160px;
    display: flex;
    gap: 2.25rem;
    padding: 0 2.25rem;

    .section-two__photo {
      width: 386px;
      height: 440px;
    }

    .section-two__article {
      .section-two__article-header {
        .section-two__article-header-title {
          color: #403886;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }

      .section-two__article-section {
        margin: 1rem 0 3rem;
        display: flex;
        flex-direction: column;
        .section-two__article-about-me {
          width: 100%;
          color: #242938;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;

          &:nth-child(2) {
            padding: 16px 0;
          }
        }

        .section-two__article-photo {
          margin-top: 1.5rem;
          width: 386px;
          height: 440px;
          display: none;
        }
      }
    }
  }

  @media (max-width: 64rem) {
    .section-two__container {
      .section-two__photo {
        width: 270px;
        height: 308px;
      }
    }
  }

  @media (max-width: 48rem) {
    .section-two__container {
      .section-two__photo {
        display: none;
      }

      .section-two__article {
        display: flex;
        flex-direction: column;
        align-items: center;

        .section-two__article-section {
          margin: 2.25rem 0 3rem;
          align-items: center;

          .section-two__article-photo {
            display: initial;
          }
        }
      }
    }
  }

  @media (max-width: 30.3125rem) {
    .section-two__container {
      margin-top: 72px;
      display: flex;
      gap: 2.25rem;
      padding: 0 2.25rem;

      .section-two__photo {
        width: 386px;
        height: 440px;
      }

      .section-two__article {
        .section-two__article-header {
          .section-two__article-header-title {
            color: #403886;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }

        .section-two__article-section {
          display: flex;
          flex-direction: column;
          .section-two__article-about-me {
            width: 100%;
            color: #242938;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            &:nth-child(2) {
              padding: 16px 0;
            }
          }

          .section-two__article-photo {
            max-width: 100%;
            max-height: 100%;
            width: 75%;
            height: 75%;
          }
        }
      }
    }
  }
</style>
