<template>
  <article class="experience-card__article-container">
    <header class="experience-card__article-header">
      <h1 class="experience-card__company-name">Code n’App</h1>
      <h2 class="experience-card__role">Estagiário de front-end</h2>
      <h3 class="experience-card__experience-time">Duração de 1 ano</h3>
    </header>
    <section class="experience-card__article-section">
      <p class="experience-card__description">
        Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de
        1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano Duração de 1 ano
        Duração de 1 ano Duração de 1 ano Duração de 1 ano
      </p>
    </section>
  </article>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .experience-card__article-container {
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
        font-weight: 700;
      }

      .experience-card__company-name {
        color: $color-white;
        font-size: 1.5rem;
      }

      .experience-card__role,
      .experience-card__experience-time {
        color: $color-secondary;
        font-size: 0.75rem;
      }
    }

    .experience-card__article-section {
      margin-top: 12px;
      .experience-card__description {
        color: $color-white;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
</style>
