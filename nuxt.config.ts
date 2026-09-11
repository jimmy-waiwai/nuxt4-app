import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/eslint'],
  devtools: { enabled: true },

  app: {
    baseURL: '/waiwai/',
    buildAssetsDir: 'assets',
    head: {
      title: 'JIMMY\'s WEB SITE',
      htmlAttrs: { lang: 'ja' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/waiwai/favicon.ico' }],
    },
  },

  // サイト全体のドメイン定義（SEO用）
  site: {
    url: 'https://jimmy-waiwai.github.io',
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-07-15',
  nitro: {
    prerender: {
      failOnError: false,
      routes: [
        '/',
        '/jimmy/',
        '/takarazuka/',
        '/waiwai/',
      ],
    },
  },
  vite: {
    server: { hmr: { overlay: false } },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
        commaDangle: 'always-multiline',
      },
    },
  },
});
