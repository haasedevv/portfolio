<template>
  <section
    id="#sobre"
    class="section-three__container"
  >
    <div class="section-three__vector" />

    <article class="section-three__article-tec">
      <header class="section-three__article-tec-header">
        <h1 class="section-three__title">Tecnologias que atuo.</h1>
      </header>
      <section class="section-three__article-tec-section">
        <StackIconComponent
          v-for="(iconItem, index) in iconsList"
          :key="`icon-${index}`"
          :tec-name="iconItem.name"
        >
          <template #icon>
            <component
              :is="iconItem.icon"
              class="section-three__tec-icon"
            />
          </template>
        </StackIconComponent>
      </section>
    </article>
  </section>
</template>

<script lang="ts" setup>
  import ZustandIcon from "@/assets/icons/ZustandIcon.svg?component";
  import AzureIcon from "@/assets/icons/AzureIcon.svg?component";
  import DockerIcon from "@/assets/icons/DockerIcon.svg?component";
  import FigmaIcon from "@/assets/icons/FigmaIcon.svg?component";
  import CssIcon from "@/assets/icons/CssIcon.svg?component";
  import GitIcon from "@/assets/icons/GitIcon.svg?component";
  import HtmlIcon from "@/assets/icons/HtmlIcon.svg?component";
  import JestIcon from "@/assets/icons/JestIcon.svg?component";
  import MongoIcon from "@/assets/icons/MongoIcon.svg?component";
  import NestIcon from "@/assets/icons/NestIcon.svg?component";
  import NextIcon from "@/assets/icons/NextIcon.svg?component";
  import NodeIcon from "@/assets/icons/NodeIcon.svg?component";
  import NuxtIcon from "@/assets/icons/NuxtIcon.svg?component";
  import PiniaIcon from "@/assets/icons/PiniaIcon.svg?component";
  import PostgresqlIcon from "@/assets/icons/PostgresqlIcon.svg?component";
  import ReactIcon from "@/assets/icons/ReactIcon.svg?component";
  import ReduxIcon from "@/assets/icons/ReduxIcon.svg?component";
  import SassIcon from "@/assets/icons/SassIcon.svg?component";
  import StyledComponentsIcon from "@/assets/icons/StyledComponentsIcon.svg?component";
  import TailwindcssIcon from "@/assets/icons/TailwindcssIcon.svg?component";
  import TypescriptIcon from "@/assets/icons/TypescriptIcon.svg?component";
  import VueIcon from "@/assets/icons/VueIcon.svg?component";
  import VuexIcon from "@/assets/icons/VuexIcon.svg?component";

  const iconsList = shallowRef([
    {
      icon: HtmlIcon,
      name: "HTML"
    },
    {
      icon: CssIcon,
      name: "CSS"
    },
    {
      icon: TypescriptIcon,
      name: "TypeScript"
    },
    {
      icon: ReactIcon,
      name: "React JS/Native"
    },
    {
      icon: NextIcon,
      name: "Next.js"
    },
    {
      icon: ReduxIcon,
      name: "Redux"
    },
    {
      icon: ZustandIcon,
      name: "Zustand"
    },
    {
      icon: VueIcon,
      name: "Vue.js"
    },
    {
      icon: NuxtIcon,
      name: "Nuxt.js"
    },
    {
      icon: VuexIcon,
      name: "Vuex"
    },
    {
      icon: PiniaIcon,
      name: "Pinia"
    },
    {
      icon: StyledComponentsIcon,
      name: "styled-components"
    },
    {
      icon: SassIcon,
      name: "SASS"
    },
    {
      icon: TailwindcssIcon,
      name: "Tailwind"
    },
    {
      icon: NodeIcon,
      name: "Node.js"
    },
    {
      icon: NestIcon,
      name: "Nest.js"
    },
    {
      icon: PostgresqlIcon,
      name: "PostgreSQL"
    },
    {
      icon: MongoIcon,
      name: "MongoDB"
    },

    {
      icon: DockerIcon,
      name: "Docker"
    },
    {
      icon: JestIcon,
      name: "Jest"
    },
    {
      icon: GitIcon,
      name: "GIT"
    },
    {
      icon: FigmaIcon,
      name: "Figma"
    },
    {
      icon: AzureIcon,
      name: "Azure"
    }
  ]);
</script>

<style lang="scss">
  @import "@/assets/styles/colors/_colors.scss";

  @media (min-width: 48rem) {
    .section-three__container {
      .stack-icon-component__container {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7) {
          .stack-icon-component__name-container {
            .stack-icon-component__name {
              color: $color-white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 48rem) and (min-width: 26.25rem) {
    .section-three__container {
      .stack-icon-component__container {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          .stack-icon-component__name-container {
            .stack-icon-component__name {
              color: $color-white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 26.25rem) and (min-width: 21.875rem) {
    .section-three__container {
      .stack-icon-component__container {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          .stack-icon-component__name-container {
            .stack-icon-component__name {
              color: $color-white;
            }
          }
        }
      }
    }
  }

  @media (max-width: 21.875rem) {
    .section-three__container {
      .stack-icon-component__container {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          .stack-icon-component__name-container {
            .stack-icon-component__name {
              color: $color-white;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  @import "@/assets/styles/colors/_colors.scss";

  .section-three__container {
    position: relative;

    .section-three__vector {
      top: 0;
      position: absolute;
      width: 100%;
      height: 18.75rem;
      background: $color-primary;
      z-index: -1;
    }

    .section-three__article-tec {
      width: 100%;

      .section-three__article-tec-header {
        margin: 5rem 0 4.375rem;

        .section-three__title {
          color: $color-white;
          font-size: 2.25rem;
          font-weight: 700;
          line-height: normal;
          text-align: center;
        }
      }

      .section-three__article-tec-section {
        display: grid;
        gap: 1.5rem 2.25rem;
        grid-template-columns: repeat(7, 4.0625rem);
        width: min-content;
        margin: 0 auto;

        .section-three__tec-icon {
          height: 4.0625rem;
          width: 4.0625rem;
        }
      }
    }
  }

  @media (max-width: 48rem) {
    .section-three__container {
      .section-three__article-tec {
        .section-three__article-tec-section {
          grid-template-columns: repeat(5, 4.0625rem);
        }
      }
    }
  }

  @media (max-width: 36.875rem) {
    .section-three__container {
      position: relative;

      .section-three__vector {
        height: 12.625rem;
      }

      .section-three__article-tec {
        width: 100%;

        .section-three__article-tec-header {
          margin: 2.8125rem 0 2.8125rem;

          .section-three__title {
            font-size: 1.5rem;
          }
        }

        .section-three__article-tec-section {
          display: grid;
          gap: 1.5rem 2.25rem;
          grid-template-columns: repeat(5, 2.8125rem);
          width: min-content;
          margin: 0 auto;

          .section-three__tec-icon {
            height: 2.8125rem;
            width: 2.8125rem;
          }
        }
      }
    }
  }

  @media (max-width: 26.25rem) {
    .section-three__container {
      .section-three__article-tec {
        .section-three__article-tec-section {
          grid-template-columns: repeat(4, 2.8125rem);
        }
      }
    }
  }

  @media (max-width: 21.5625rem) {
    .section-three__container {
      .section-three__article-tec {
        .section-three__article-tec-section {
          grid-template-columns: repeat(4, 2.8125rem);
        }
      }
    }
  }

  @media (max-width: 21.875rem) {
    .section-three__container {
      .section-three__article-tec {
        .section-three__article-tec-section {
          grid-template-columns: repeat(3, 2.8125rem);
        }
      }
    }
  }
</style>
