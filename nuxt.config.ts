// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/color-mode"],
  css: ["assets/styles/main.scss"],
  ui: {
    icons: ["fa6-brands"],
  },
  colorMode: {
    preference: "light",
  },
});
