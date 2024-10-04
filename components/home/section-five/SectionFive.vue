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
      role: "Desenvolvedor Full Stack",
      companyTime: "1 ano e 1 mês (O momento)",
      description: `
        Trabalho no desenvolvimento de aplicações, incluindo sistema de gestão de recursos de chão de fábrica e sistema de crédito pessoal. Além do desenvolvimento, atuo com correções de bugs e possuo flexibilidade para atuar em outros projetos sempre que necessário. Adquiri habilidade com refinamento de novas funcionalidades, criando tarefas com estimativas de horas para a equipe, e colaborando com o Product Owner (PO) com olhar crítico sobre novas funcionalidades.<br/>
Participo de dailys para reportar o andamento dos projetos e alinhar prazos com a equipe, garantindo que todos estejam na mesma página. Também faço revisão de pull requests, onde avalio as boas práticas para elevar o nível das entregas e compartilhar conhecimentos com meus colegas. Meu foco é não só entregar funcionalidades de qualidade, mas também contribuir para o crescimento e a eficiência da equipe.`,
      technologies:
        "HTML, CSS, JavaScript, TypeScript, Vue, Vuex, React, Zustand, Hooks, Next.js, API, Node.js, PostgreSQL, SASS, Webpack, Vite, API RESTful, Azure Devops"
    },
    {
      company: "Code n'App",
      role: "Estagiário em Desenvolvimento Front-end",
      companyTime: "1 ano e 2 meses",
      description: `Atuação como estagiário agregando valor aos projetos que participei a partir de desenvolvimento e correções de bugs utilizando Vue.js e React.js.`,
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
      max-width: 37.5rem;
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
