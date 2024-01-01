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
      role: "Desenvolvedor Front-end",
      companyTime: "4 meses (O momento)",
      description:
        "Atualmente participo do desenvolvimento de um novo sistema de soluções de crédito. Estou desenvolvendo novas telas e atuando em correções de bugs. Além disso, auxilio outros membros de equipe e levanto questionamentos após a leitura das especificações técnicas, buscando melhor resultado para o produto final.",
      technologies:
        "HTML, CSS, JavaScript, TypeScript, Vue, Vuex, React, Zustand, Hooks, SASS, Webpack, Vite, API RESTful, Azure Devops"
    },
    {
      company: "Code n'App",
      role: "Estagiário em Desenvolvimento Front-end",
      companyTime: "1 ano e 2 meses",
      description:
        "Atuação como estagiário agregando valor aos 3 projetos que participei a partir de desenvolvimento e correções de bugs utilizando Vue.js e React.js. O principal projeto que participei foi o da indsiders.<br/>Atuei no desenvolvimento dos produtos internos para auxiliar as fábricas a mapeaream a alocação de seus recursos, visando reduzir custos e melhorar a capacidade de produção.",
      technologies:
        "HTML, CSS, JavaScript, TypeScript, Vue, Vuex, Hooks, SASS, Webpack, Vite, API RESTful, Azure Devops"
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
      max-width: 34.375rem;
      margin: 0 auto;

      .section-five__experience {
        width: 100%;
        display: flex;
        flex-direction: column;

        .section-five__experience-division {
          height: 3rem;
          width: 0.5rem;
          border-radius: 1.25rem;
          background: $color-secondary;
          user-select: none;
          margin: 1rem auto;
        }
      }
    }
  }

  @media (max-width: 36.875rem) {
    .section-five__container {
      padding: 0 1rem;
      .section-five__title {
        font-size: 1.5rem;
        margin-bottom: 5rem;
      }

      .section-five__experiences {
        .section-five__experience {
          .section-five__experience-division {
            height: 3rem;
            width: 0.5rem;
            border-radius: 1.25rem;
            background: $color-secondary;
            user-select: none;
            margin: 1rem auto;
          }
        }
      }
    }
  }
</style>
