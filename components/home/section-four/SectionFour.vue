<template>
  <section
    id="#projetos"
    class="section-four__container"
  >
    <h2 class="section-four__title">Projetos que desenvolvi.</h2>

    <div class="section-four__projects">
      <project-card
        v-for="(project, index) in projectsList"
        :key="`project-${index}`"
        :project-image="project.projectImage"
        :image-alt="project.imageAlt"
        :project-title="project.projectTitle"
        :project-description="project.projectDescription"
        :project-url="project.projectUrl"
        :repository-url="project.repositoryUrl"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
  const projectsList = ref([
    {
      projectImage: "/project1.png",
      imageAlt: "Imagem do meu portfólio",
      projectTitle: "Meu portfólio",
      projectDescription:
        "Este portfólio foi desenvolvimento para falar um pouco sobre minhas experiências e mostrar os projetos que já realizei.<br/> O projeto foi desenvolvido em Nuxt com TypeScript por conta do SEO e pela praticidade que é trabalhar com importações e plugins neste.",
      projectUrl: "https://portfolio-hjosephdev.vercel.app/",
      repositoryUrl: "https://github.com/haasedevv/portfolio/tree/release/v1.0.0"
    }
  ]);
</script>

<style lang="scss" scoped>
  .section-four__container {
    padding: 0 2.25rem;
    .section-four__title {
      color: #403886;
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      margin-bottom: 6.25rem;
    }

    .section-four__projects {
      display: flex;
      flex-direction: column;
      gap: 7.5rem;
    }
  }

  @media (max-width: 36.875rem) {
    .section-four__container {
      padding: 0 1rem;
      .section-four__title {
        font-size: 1.5rem;
        margin-bottom: 5rem;
      }

      .section-four__projects {
        gap: 6.25rem;
      }
    }
  }
</style>
