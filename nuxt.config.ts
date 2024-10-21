// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-30",
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  // Nuxt Modules
  // https://nuxt.com/modules
  modules: [
    "@nuxthub/core",
    "@nuxt/eslint",
    "@ucstu/nuxt-naive-ui",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/icon",
  ],
  hub: {
    ai: true,
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },
  // Development
  devtools: { enabled: true },
});
