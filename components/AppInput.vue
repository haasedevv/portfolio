<template>
  <div :class="['app-input__container', { '--error': props.hasError }]">
    <label
      v-if="!!props.label"
      class="app-input__label"
    >
      {{ props.label }}
    </label>

    <input
      v-if="!props.isTextArea"
      class="app-input__input"
      :type="props.inputType || 'text'"
      :name="props.inputName"
      :placeholder="props.inputPlaceholder"
      :value="localValue"
      @input="updateInputValue"
    />

    <textarea
      v-if="props.isTextArea"
      class="app-input__input-text-area"
      :type="props.inputType || 'text'"
      :name="props.inputName"
      :placeholder="props.inputPlaceholder"
      rows="5"
      :value="localValue"
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

  const props = defineProps<AppInputProps>();
  const emit = defineEmits<InputEmitsProps>();

  const localValue = ref(
    props.mask === "general"
      ? masksOptions.general(props.modelValue, props?.formatMask || "")
      : props.mask
        ? masksOptions[props.mask](props.modelValue)
        : ""
  );

  const updateInputValue = (e: Event) => {
    localValue.value = (e.target as HTMLInputElement).value;
    emit("update:modelValue", (e.target as HTMLInputElement).value);
  };

  watch(localValue, (value) => {
    const formattedValue =
      props.mask === "general"
        ? masksOptions.general(value, props?.formatMask || "")
        : props.mask
          ? masksOptions[props.mask](value)
          : value;
    localValue.value = formattedValue;
    emit("update:modelValue", formattedValue);
  });

  watch(
    () => props.modelValue,
    (value: string) => {
      if (props.modelValue !== localValue.value) {
        localValue.value =
          props.mask === "general"
            ? masksOptions.general(value, props?.formatMask || "")
            : props.mask
              ? masksOptions[props.mask](value)
              : value;
      }
    }
  );
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
