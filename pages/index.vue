<template>
  <main class="home-page__container">
    <section-one />
    <section-two />
    <section-three />
    <section-four />
    <section-five />
    <section-six />
  </main>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "layout-default"
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
