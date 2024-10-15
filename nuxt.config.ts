// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxt/icon"],
  fonts: {
   provider: "google"
  },
  icon: {
     size: "24px",
  },
  // for some reason when hitting save button does not auto format on vscode with the recommended recipe with stylistic
  // so we need to put the rule 
  // eslint: {
  //   config: {
  //     stylistic: {
  //       // semi: true,
  //       // quotes: "double",
  //     },
  //   },
  // },
});