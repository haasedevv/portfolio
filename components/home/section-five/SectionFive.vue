<template>
  <section
    id="#experiencias"
    class="section-five__container"
  >
    <h2 class="section-five__title">Experiências profissionais.</h2>

    <div class="section-five__experiences">
      <div
        v-for="(experience, index) in experiences"
        :key="`experience-${index}`"
        class="section-five__experience"
      >
        <experience-card :experience="experience" />
        <div
          v-if="index !== experiences.length - 1"
          class="section-five__experience-division"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const experiences = ref([
    {
      company: "Code n'App",
      role: "Desenvolvedor Front-end Treinee",
      companyTime: "3 meses (O momento)",
      description:
        "Desenvolvedor Front-end Treinee Desenvolvedor Front-end Treinee Desenvolvedor Front-end Treinee Desenvolvedor Front-end Treinee",
      technologies: "Vue, React"
    },
    {
      company: "Code n'App",
      role: "Estagiário em Desenvolvimento Front-end",
      companyTime: "1 ano e 2 meses",
      description:
        "Desenvolvedor Front-end Treinee Desenvolvedor Front-end Treinee Desenvolvedor Front-end Treinee Desenvolvedor Front-end Treinee",
      technologies: "Vue, React"
    }
  ]);
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-five__container {
    padding: 0 2.25rem;
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
      margin: 0 auto;

      .section-five__experience {
        width: 100%;
        display: flex;
        flex-direction: column;

        .section-five__experience-division {
          height: 48px;
          width: 8px;
          border-radius: 20px;
          background: $color-secondary;
          user-select: none;
          margin: 1rem auto;
        }
      }
    }
  }

  @media (max-width: 36.875rem) {
    .section-five__container {
      .section-five__title {
        font-size: 1.5rem;
        margin-bottom: 5rem;
      }
    }
  }
</style>
