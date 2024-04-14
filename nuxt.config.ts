// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    //@ts-ignore
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },

  buildModules: ["@pinia/nuxt"],
  modules: [
    "@pinia/nuxt",
  ],
});
