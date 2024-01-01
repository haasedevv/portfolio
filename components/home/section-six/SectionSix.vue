<template>
  <section
    id="#contato"
    class="section-six__container"
  >
    <img
      class="section-six__vector --desktop-vector"
      src="/vectorDesktop.svg"
      alt="vetor do background"
    />

    <img
      class="section-six__vector --mobile-vector"
      src="/vectorMobile.svg"
      alt="vetor do background"
    />

    <div class="section-six__content">
      <h1 class="section-six__title">Entre em contato.</h1>

      <form class="section-six__form">
        <app-input
          v-model="fields.name"
          class="section-six__form-field"
          label="Nome"
          input-placeholder="Digite aqui"
          input-name="name"
          :has-error="validations.name.invalid"
          :feedback="validations.name.feedback"
        />

        <app-input
          v-model="fields.telephone"
          class="section-six__form-field"
          label="Telefone"
          input-placeholder="(00) 00000-0000"
          input-name="telephone"
          :has-error="validations.telephone.invalid"
          :feedback="validations.telephone.feedback"
          mask="telephone"
        />

        <app-input
          v-model="fields.email"
          class="section-six__form-field"
          label="E-mail"
          input-placeholder="exemplo@gmail.com"
          input-name="email"
          :has-error="validations.email.invalid"
          :feedback="validations.email.feedback"
        />

        <app-input
          v-model="fields.message"
          class="section-six__form-field"
          label="Mensagem"
          input-placeholder="Digite aqui"
          input-name="message"
          :has-error="validations.message.invalid"
          :feedback="validations.message.feedback"
          is-text-area
        />

        <app-button
          button-style="black"
          type="button"
          :loading="loading"
          full
          @click="sendMessage"
        >
          Enviar mensagem
        </app-button>
      </form>

      <div class="section-six__background" />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { send } from "../../../node_modules/@emailjs/browser";

  const fields = ref({
    name: "",
    telephone: "",
    email: "",
    message: ""
  });

  const validations = ref({
    name: {
      invalid: false,
      feedback: "",
      validation: () => {
        const isValid = !!fields.value.name;
        const feedback = !isValid ? "Campo obrigatório" : "";

        validations.value.name.invalid = !isValid;
        validations.value.name.feedback = feedback;
        return isValid;
      }
    },
    telephone: {
      invalid: false,
      feedback: "",
      validation: () => {
        const { telephone } = fields.value;

        const isFilled = !!telephone;
        const isValidTelephone = validateTelephone(telephone);
        const isValid = isFilled && isValidTelephone;

        let feedback = "";

        if (!isFilled) feedback = "Campo obrigatório";
        if (isFilled && !isValidTelephone) feedback = "Telefone inválido";

        validations.value.telephone.invalid = !isValid;
        validations.value.telephone.feedback = feedback;
        return isValid;
      }
    },
    email: {
      invalid: false,
      feedback: "",
      validation: () => {
        const { email } = fields.value;

        const isFilled = !!email;
        const isValidEmail = validateEmail(email);
        const isValid = isFilled && isValidEmail;

        let feedback = "";

        if (!isFilled) feedback = "Campo obrigatório";
        if (isFilled && !isValidEmail) feedback = "E-mail inválido";

        validations.value.email.invalid = !isValid;
        validations.value.email.feedback = feedback;
        return isValid;
      }
    },
    message: {
      invalid: false,
      feedback: "",
      validation: () => {
        const isValid = !!fields.value.message;
        const feedback = !isValid ? "Campo obrigatório" : "";

        validations.value.message.invalid = !isValid;
        validations.value.message.feedback = feedback;
        return isValid;
      }
    }
  });

  const clearFields = () => {
    fields.value = {
      name: "",
      telephone: "",
      email: "",
      message: ""
    };

    validations.value = {
      name: {
        ...validations.value.name,
        invalid: false,
        feedback: ""
      },
      telephone: {
        ...validations.value.telephone,
        invalid: false,
        feedback: ""
      },
      email: {
        ...validations.value.email,
        invalid: false,
        feedback: ""
      },
      message: {
        ...validations.value.message,
        invalid: false,
        feedback: ""
      }
    };
  };

  const validateFields = () => {
    let isValid = true;

    for (const field of Object.values(validations.value)) {
      const validation = field.validation();
      if (isValid) isValid = validation;
    }

    return isValid;
  };

  const loading = ref(false);
  const config = useRuntimeConfig();

  const sendMessage = () => {
    const validation = validateFields();
    if (!validation) return;

    const templateParams = {
      from_name: fields.value.name,
      message: fields.value.message,
      telephone: fields.value.telephone,
      email: fields.value.email
    };

    loading.value = true;
    send(config.public.serviceId, config.public.templateId, templateParams, config.public.publicKey)
      .then(() => {
        clearFields();
      })
      .finally(() => (loading.value = false));
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/colors/colors";

  .section-six__container {
    display: flex;
    flex-direction: column;

    .section-six__vector {
      width: 100%;
      z-index: -1;
      transform: rotate(180deg);

      &.--desktop-vector {
        display: initial;
      }

      &.--mobile-vector {
        display: none;
      }
    }

    .section-six__content {
      padding: 0 2.25rem;
      position: relative;

      .section-six__title {
        color: $color-white;
        font-size: 2.25rem;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        margin-bottom: 5rem;
      }

      .section-six__form {
        padding: 2.25rem;
        border-radius: 16px;
        border: 2px solid $color-primary;
        background: $color-white;
        width: 100%;
        max-width: 36.125rem;
        margin: 0 auto;

        .section-six__form-field {
          margin-bottom: 1.5rem;

          &:nth-child(4) {
            margin-bottom: 2.25rem;
          }
        }
      }

      .section-six__background {
        position: absolute;
        background: $color-primary;
        height: 32.625rem;
        width: 100%;
        top: 0;
        left: 0;
        margin-top: -0.0625rem;
        z-index: -1;
      }
    }
  }

  @media (max-width: 48.75rem) {
    .section-six__container {
      .section-six__vector {
        &.--desktop-vector {
          display: none;
        }

        &.--mobile-vector {
          display: initial;
        }
      }
    }
  }

  @media (max-width: 36.875rem) {
    .section-six__container {
      .section-six__content {
        position: relative;
        padding: 0 1rem;

        .section-six__title {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .section-six__form {
          padding: 1.5rem 1rem;
        }

        .section-six__background {
          height: 29.375rem;
        }
      }
    }
  }
</style>
