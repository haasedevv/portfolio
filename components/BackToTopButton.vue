<template>
  <div
    v-if="showButton"
    class="back-to-top-button__container"
    @click="backToTop"
  >
    <button class="back-to-top-button__button">
      <icon-arrow-up />
    </button>
  </div>
</template>

<script lang="ts" setup>
  const showButton = ref(false);
  const blockListernetAction = ref(false);

  const backToTop = () => {
    blockListernetAction.value = true;

    setTimeout(() => window.scrollTo(0, 0), 300);
  };

  onMounted(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300 && blockListernetAction.value) {
        blockListernetAction.value = false;
      }

      if (blockListernetAction.value) return;

      if (window.scrollY >= 300 && !showButton.value) {
        showButton.value = true;
        return;
      }

      if (window.scrollY < 300 && showButton.value) {
        showButton.value = false;
      }
    });
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .back-to-top-button__container {
    position: fixed;
    right: 2.5rem;
    bottom: 2.5rem;

    .back-to-top-button__button {
      display: flex;
      background: $color-black;
      outline: none;
      border: 0;
      border-radius: 0.375rem;
      padding: 0.75rem 0.75rem;
      cursor: pointer;

      svg {
        color: $color-white;
        transition: color 0.6s ease;
      }

      &:hover {
        svg {
          color: $color-secondary;
        }
      }
    }
  }
</style>
