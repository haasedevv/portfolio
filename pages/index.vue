<template>
  <main class="home-page__container">
    <section-one />
    <section-two />
    <section-three />
    <section-four />
    <section-five />
    <section-six />
    <back-to-top-button />
  </main>
</template>

<script lang="ts" setup>
  import BackToTopButton from "~/components/BackToTopButton.vue";

  definePageMeta({
    layout: "layout-default"
  });

  useSeoMeta({
    title: "Desenvolvedor Full Stack - Joseph Haase",
    ogTitle: "Desenvolvedor Full Stack - Joseph Haase",
    description:
      "Sou desenvolvedor full stack com foco em Vue e React, utilizando Typescript, e " +
      "tenho 2 anos de experiência na área de tecnologia. Trabalho com desenvolvimento web, " +
      "criando novos projetos e realizando ajustes e correções de bugs em funcionalidades de projetos já existentes, " +
      "sempre priorizando a usabilidade e a experiência do usuário.",
    ogDescription:
      "Sou desenvolvedor full stack com foco em Vue e React, utilizando Typescript, e " +
      "tenho 2 anos de experiência na área de tecnologia. Trabalho com desenvolvimento web, " +
      "criando novos projetos e realizando ajustes e correções de bugs em funcionalidades de projetos já existentes, " +
      "sempre priorizando a usabilidade e a experiência do usuário."
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/_colors.scss";

  .home-page__container {
    display: flex;
    flex-direction: column;
    gap: 7.75rem;
  }

  @media (max-width: 48rem) {
    .home-page__container {
      gap: 6.25rem;
    }
  }
</style>
