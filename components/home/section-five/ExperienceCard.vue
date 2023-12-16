<template>
  <article class="experience-card__article-container">
    <header class="experience-card__article-header">
      <h1 class="experience-card__company-name">{{ experience.company }}</h1>
      <h2 class="experience-card__role">{{ experience.role }}</h2>
      <h3 class="experience-card__experience-time">{{ experience.companyTime }}</h3>
    </header>
    <section class="experience-card__article-section">
      <p class="experience-card__description">
        {{ experience.description }}
      </p>
      <p class="experience-card__technologies">
        Tecnologias: <span>{{ experience.technologies }}</span>
      </p>
    </section>
  </article>
</template>

<script lang="ts" setup>
  import type { ExperienceCardComponentProps } from "~/@types/Sections/SectionFive";

  const { experience } = defineProps<ExperienceCardComponentProps>();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .experience-card__article-container {
    width: 100%;
    border-radius: 0.75rem;
    background: $color-text-primary;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .experience-card__article-header {
      .experience-card__company-name,
      .experience-card__role,
      .experience-card__experience-time {
        font-style: normal;
        line-height: normal;
        font-weight: 600;
      }

      .experience-card__company-name {
        color: $color-white;
        font-size: 1.25rem;
        margin-bottom: 0.375rem;
      }

      .experience-card__role,
      .experience-card__experience-time {
        color: $color-secondary;
        font-size: 0.75rem;
      }

      .experience-card__experience-time {
        margin-top: 0.125rem;
      }
    }

    .experience-card__article-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 12px;

      .experience-card__description,
      .experience-card__technologies {
        color: $color-white;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .experience-card__technologies {
        span {
          color: $color-secondary;
        }
      }
    }
  }
</style>
