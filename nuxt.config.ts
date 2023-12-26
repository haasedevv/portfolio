export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/eslint-module", "@nuxtjs/google-fonts", "nuxt-lucide-icons", "nuxt-svgo"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      serviceId: "",
      templateId: "",
      publicKey: ""
    }
  },
  svgo: {
    global: false
  },
  lucide: {
    namePrefix: "Icon"
  },
  googleFonts: {
    families: {
      Poppins: [500, 700]
    }
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
});
