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
