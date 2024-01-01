<template>
  <footer class="footer__container">
    <p class="footer__text">Desenvolvido por Joseph Haase <span>🐧</span></p>
  </footer>
</template>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .footer__container {
    padding: 3rem 2.25rem 1.5rem;
    width: 100%;

    .footer__text {
      color: $color-text-primary;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: normal;
      text-align: center;

      span {
        font-size: 1.125rem;
      }
    }
  }
</style>
