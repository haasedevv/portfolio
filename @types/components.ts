export type AppButtonProps = {
  buttonStyle: "black" | "secondary" | "white";
  full?: boolean;
};

export type SectionOneNavLinksProps = {
  direction?: "row" | "column";
};

export type NavMenuLinksNavbarProps = {
  itemsColor?: "primary" | "white";
  direction?: "row" | "column";
  event?: () => void;
};

export type StackiconComponentProps = {
  tecName: string;
};

export type AppInputProps = {
  label?: string;
  inputType?: string;
  inputName?: string;
  inputPlaceholder?: string;
  isTextArea?: boolean;
  hasError?: boolean;
  feedback?: string;
  modelValue: string;
  mask?: "general" | "telephone";
  formatMask?: string;
};

export type InputEmitsProps = {
  (e: "update:modelValue", value: HTMLInputElement["value"]): HTMLInputElement["value"];
};
