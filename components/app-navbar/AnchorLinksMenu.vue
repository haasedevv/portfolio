<template>
  <nav class="app-navbar__navbar-options">
    <ul :class="`app-navbar__navbar-options-list --${itemsColor || 'white'} --${direction || 'row'}`">
      <li class="app-navbar__navbar-item">
        <a
          href="#sobre"
          @click="event"
        >
          sobre
        </a>
      </li>
      <li class="app-navbar__navbar-item">
        <a
          href="#tecnologias"
          @click="event"
        >
          tecnologias
        </a>
      </li>
      <li class="app-navbar__navbar-item">
        <a
          href="#projetos"
          @click="event"
        >
          projetos
        </a>
      </li>
      <li class="app-navbar__navbar-item">
        <a
          href="#experiencias"
          @click="event"
        >
          experiências
        </a>
      </li>
      <li class="app-navbar__navbar-item">
        <a
          href="#contato"
          @click="event"
        >
          contato
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import type { NavMenuLinksNavbarProps } from "~/@types/components";

  const { itemsColor, direction, event } = defineProps<NavMenuLinksNavbarProps>();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .app-navbar__navbar-options {
    .app-navbar__navbar-options-list {
      display: flex;
      gap: 1rem;

      &.--column {
        flex-direction: column;
      }

      &.--white {
        .app-navbar__navbar-item {
          a {
            color: $color-white;
          }
        }
      }

      &.--primary {
        .app-navbar__navbar-item {
          a {
            color: $color-primary;
          }
        }
      }

      .app-navbar__navbar-item {
        transition: border-color 0.5s ease;

        a {
          padding: 0.25rem 0.375rem;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-decoration: none;
          transition: color 0.5s ease;

          &:hover {
            color: $color-secondary;
          }
        }
      }
    }
  }
</style>
