<template>
  <nav class="app-navbar__navbar-options">
    <ul :class="`app-navbar__navbar-options-list --${itemsColor || 'white'} --${direction || 'row'}`">
      <li
        class="app-navbar__navbar-item"
        @click="event"
      >
        <a href="#sobre">sobre</a>
      </li>
      <li
        class="app-navbar__navbar-item"
        @click="event"
      >
        <a href="#tecnologias">tecnologias</a>
      </li>
      <li
        class="app-navbar__navbar-item"
        @click="event"
      >
        <a href="#projetos">projetos</a>
      </li>
      <li
        class="app-navbar__navbar-item"
        @click="event"
      >
        <a href="#experiencias">experiências</a>
      </li>
      <li
        class="app-navbar__navbar-item"
        @click="event"
      >
        <a href="#contato">contato</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  const { itemsColor, direction } = defineProps<{
    itemsColor?: "primary" | "white";
    direction?: "row" | "column";
    event?: () => void;
  }>();
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
