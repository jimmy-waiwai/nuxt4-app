// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    baseURL: "/waiwai-test2/",
    // baseURL: process.env.NODE_ENV === 'production' ? '/waiwai-test2/' : '/',
    buildAssetsDir: "assets",
    head: {
      title: "JIMMY's WEB SITE",
      htmlAttrs: {
        lang: "ja",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/waiwai-test2/favicon.ico",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/icon", "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
});
