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
      imageAlt: "Imagem da plataforma de estudos gamificada",
      projectTitle: "Plataforma de estudos de javascript gamificada",
      projectDescription:
        "Plataforma de estudos gamificada desenvolvida para ajudar estudantes a se manterem motivados e focados nos estudos. <br/> O projeto foi desenvolvido em Vue com TypeScript e Node.js.",
      projectUrl: "https://gamified-study-platform.vercel.app",
      repositoryUrl: "https://github.com/haasedevv/gamified-study-platform"
    },
    {
      projectImage: "/project2.png",
      imageAlt: "Imagem da tela de login",
      projectTitle: "Tela de login com internacionalização",
      projectDescription:
        "Tela de login com internacionalização voltada para estudos. <br/> O projeto foi desenvolvido em Next.js com TypeScript.",
      projectUrl: "https://form-next-js-sage.vercel.app",
      repositoryUrl: "https://github.com/haasedevv/form-next-js"
    },
    {
      projectImage: "/project3.png",
      imageAlt: "Imagem da lista de imagens",
      projectTitle: "Integração com a API do Rick and Morty",
      projectDescription:
        "Projeto desenvolvido com intuito de estudar a integração com APIs. <br/> O projeto foi desenvolvido em Next.js com TypeScript e a API pública do Rick and Morty.",
      projectUrl: "https://rick-and-morty-hjosephdev.vercel.app",
      repositoryUrl: "https://github.com/haasedevv/rick-and-morty"
    },
    {
      projectImage: "/project4.png",
      imageAlt: "Imagem do meu portfólio",
      projectTitle: "Meu portfólio",
      projectDescription:
        "Este portfólio foi desenvolvimento para falar um pouco sobre minhas experiências e mostrar os projetos que já realizei.<br/> O projeto foi desenvolvido em Nuxt com TypeScript.",
      projectUrl: "https://portfolio-hjosephdevs-projects.vercel.app",
      repositoryUrl: "https://github.com/haasedevv/portfolio"
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
