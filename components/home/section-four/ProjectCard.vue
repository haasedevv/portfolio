<template>
  <article class="section-four__project-card">
    <img
      class="section-four__project-card-photo"
      :alt="imageAlt"
      :src="projectImage"
    />

    <div class="section-four__article-helper">
      <header class="section-four__article-header">
        <h1 class="section-four__article-project-title">{{ projectTitle }}</h1>
      </header>
      <section class="section-four__article-section">
        <p
          v-for="(part, index) in splitedDescription"
          :key="`part-${index}`"
          class="section-four__article-project-description"
        >
          {{ part }}
          <br v-if="splitedDescription.length > 1 && index !== splitedDescription.length - 1" />
        </p>

        <div class="section-four__article-buttons-container">
          <NuxtLink
            :to="projectUrl"
            target="_blank"
          >
            <app-button
              button-style="black"
              full
            >
              Acessar Projeto
            </app-button>
          </NuxtLink>

          <NuxtLink
            :to="repositoryUrl"
            target="_blank"
          >
            <app-button
              button-style="secondary"
              full
            >
              Acessar Repositório
            </app-button>
          </NuxtLink>
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts" setup>
  import type { ProjectCardComponentProps } from "~/@types/Sections/SectionFour";

  const { projectImage, imageAlt, projectTitle, projectDescription, projectUrl, repositoryUrl } =
    defineProps<ProjectCardComponentProps>();

  const splitedDescription = ref(projectDescription.split("<br/>"));
</script>

<style lang="scss" scoped>
  .section-four__project-card {
    width: 100%;
    max-width: 43.75rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .section-four__project-card-photo {
      max-width: 100%;
      width: 100%;
    }

    .section-four__article-helper {
      margin-top: 3rem;
      .section-four__article-header {
        width: 100%;

        .section-four__article-project-title {
          color: #403886;
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }

      .section-four__article-section {
        .section-four__article-project-description {
          color: #242938;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin: 1rem 0 1.5rem;
        }
      }

      .section-four__article-buttons-container {
        width: 100%;
        display: flex;
        gap: 1rem;

        a {
          width: 100%;
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 36.875rem) {
    .section-four__project-card {
      .section-four__article-helper {
        margin-top: 1.5rem;

        .section-four__article-section {
          .section-four__article-project-description {
            color: #242938;
            font-size: 0.75rem;
          }
        }

        .section-four__article-buttons-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }

  @media (max-width: 26.25rem) {
    .section-four__container {
      .section-four__title {
        font-size: 1.125rem;
        margin-bottom: 4.5rem;
      }
    }
  }
</style>
