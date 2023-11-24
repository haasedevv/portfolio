<template>
  <nav class="section-one__nav-links">
    <ul>
      <li>
        <a
          href="https://github.com/HJosephDEV?tab=repositories"
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

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-one__nav-links {
    height: 100%;
    position: absolute;
    right: 2.25rem;
    top: 0;
    display: flex;
    align-items: center;
    animation: navLinksAnimation 1s ease;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

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
