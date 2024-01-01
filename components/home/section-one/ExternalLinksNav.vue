<template>
  <nav class="section-one__nav-links">
    <ul :class="`--${direction || 'column'}`">
      <li>
        <a
          href="https://github.com/haasedevv?tab=repositories"
          target="_blank"
        >
          <IconGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/joseph-haase"
          target="_blank"
        >
          <IconLinkedin />
        </a>
      </li>
      <li>
        <a href="mailto:joseph.haase.dev@gmail.com">
          <IconAtSign />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import type { SectionOneNavLinksProps } from "~/@types/components";

  const { direction } = defineProps<SectionOneNavLinksProps>();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-one__nav-links {
    ul {
      display: flex;
      gap: 1rem;

      &.--column {
        flex-direction: column;
      }

      li {
        svg {
          height: 2rem;
          width: 2rem;
          color: $color-white;
          transition: color 0.5s ease;
        }

        &:hover {
          svg {
            color: $color-secondary;
          }
        }
      }
    }

    @keyframes navLinksAnimation {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
</style>
