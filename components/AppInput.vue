<template>
  <div :class="['app-input__container', { '--error': hasError }]">
    <label
      v-if="!!label"
      class="app-input__label"
    >
      {{ label }}
    </label>

    <input
      v-if="!isTextArea"
      class="app-input__input"
      :type="inputType || 'text'"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="updateInputValue"
    />

    <textarea
      v-if="isTextArea"
      class="app-input__input-text-area"
      :type="inputType || 'text'"
      :name="inputName"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      rows="5"
      @input="updateInputValue"
    />

    <span
      v-if="hasError"
      class="app-input__feedback-error"
    >
      {{ feedback }}
    </span>
  </div>
</template>

<script lang="ts" setup>
  import type { AppInputProps, InputEmitsProps } from "@/@types/components";

  const { label, inputType, inputName, inputPlaceholder, isTextArea, hasError, feedback, modelValue } =
    defineProps<AppInputProps>();

  const emit = defineEmits<InputEmitsProps>();

  const updateInputValue = (e: Event) => {
    emit("update:modelValue", (e.target as HTMLInputElement).value);
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .app-input__container {
    display: flex;
    flex-direction: column;
    position: relative;

    &.--error {
      .app-input__input,
      .app-input__input-text-area {
        border-color: $color-feedback;

        &:focus {
          border-color: $color-feedback;
        }
      }
    }

    .app-input__label {
      color: $color-card-background;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0.25rem;
    }

    .app-input__input,
    .app-input__input-text-area {
      border-radius: 0.375rem;
      background: $color-white;
      border: 0.0625rem solid $color-card-background;
      padding: 0.375rem 0.5rem;
      outline: none;
      font-size: 0.75rem;

      &:focus {
        border-color: $color-input-focus;
      }

      &::placeholder {
        color: $color-placeholder;
      }
    }

    .app-input__input-text-area {
      min-height: 2rem;
      resize: vertical;
    }

    .app-input__feedback-error {
      position: absolute;
      top: 100%;
      margin: 0.25rem 0 0 0.25rem;

      font-size: 0.625rem;
      color: $color-feedback;
    }
  }
</style>
