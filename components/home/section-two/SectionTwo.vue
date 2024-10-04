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
          Sou desenvolvedor full stack com foco em tecnologias como Vue, React e Node.js, utilizando TypeScript e JavaScript. Tenho 3 anos de experiência na área de tecnologia, trabalhando no desenvolvimento de aplicações web, desde a criação de interfaces até a implementação de APIs, onde viso aplicar as melhores práticas e as melhores arquiteturas. Resumidamente, sou a pessoa que vai solucionar os seus problemas!
        </p>

        <p class="section-two__article-about-me">
         Meu dia a dia é marcado pela colaboração com equipes multidisciplinares e pela constante busca por otimizações, seja em código ou em processos. O trabalho em equipe e a capacidade analítica são competências que, junto às metodologias ágeis, me permitem contribuir significativamente para os objetivos da empresa e para a satisfação dos clientes.
        </p>

        <img
          class="section-two__article-photo"
          src="/me-about.png"
          alt="Joseph Haase Desenvolvedor Vue.js React.js"
        />
      </section>
      <a
        href="/cv.pdf"
        download="joseph_haase_cv.pdf"
      >
        <app-button button-style="black">Baixar CV</app-button>
      </a>
    </article>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .section-two__container {
    margin-top: 10rem;
    display: flex;
    gap: 2.25rem;
    padding: 0 2.25rem;

    .section-two__photo {
      width: 24.125rem;
      height: 27.5rem;
    }

    .section-two__article {
      .section-two__article-header {
        .section-two__article-header-title {
          color: #403886;
          font-size: 2rem;
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
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;

          &:nth-child(2) {
            padding: 1rem 0;
          }
        }

        .section-two__article-photo {
          margin-top: 1.5rem;
          width: 24.125rem;
          height: 27.5rem;
          display: none;
        }
      }
    }
  }

  @media (max-width: 64rem) {
    .section-two__container {
      .section-two__photo {
        width: 16.875rem;
        height: 19.25rem;
      }
    }
  }

  @media (max-width: 48rem) {
    .section-two__container {
      padding: 1rem;
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
      margin-top: 4.5rem;
      display: flex;
      gap: 2.25rem;

      .section-two__photo {
        width: 24.125rem;
        height: 27.5rem;
      }

      .section-two__article {
        .section-two__article-header {
          .section-two__article-header-title {
            color: #403886;
            font-size: 1.5rem;
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
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            &:nth-child(2) {
              padding: 1rem 0;
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
