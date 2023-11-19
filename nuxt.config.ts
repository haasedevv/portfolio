export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/eslint-module", "@nuxtjs/google-fonts", "nuxt-lucide-icons"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "/api"
    }
  },
  lucide: {
    namePrefix: "Icon"
  },
  googleFonts: {
    families: {
      Roboto: [300, 400, 500]
    }
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
});
