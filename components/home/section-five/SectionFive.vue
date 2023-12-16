<template>
  <section
    id="#experiencias"
    class="section-five__container"
  >
    <h2 class="section-five__title">Experiências profissionais.</h2>

    <div class="section-five__experiences">
      <experience-card />
      <div class="section-five__experience-division"></div>
      <experience-card />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-five__container {
    .section-five__title {
      color: #403886;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      margin-bottom: 6.25rem;
    }

    .section-five__experiences {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 550px;
      gap: 1rem;
      margin: 0 auto;

      .section-five__experience-division {
        height: 48px;
        width: 8px;
        border-radius: 20px;
        background: $color-secondary;
        user-select: none;
      }
    }
  }
</style>
