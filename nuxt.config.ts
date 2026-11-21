import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/eslint', '@nuxtjs/sitemap'],
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
    name: 'JIMMY\'s WEB SITE',
    indexable: true, // 👈 検索エンジンへのインデックス許可を明示します
    trailingSlash: true, // 👈 URLの末尾にスラッシュを付与する設定
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
        // 末尾のスラッシュを自動付与する設定
      },
    },
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

  sitemap: {
    // 最終更新日時（lastmod）を自動付与
    autoLastmod: true,
    exclude: [
      '/**/*.json', // JSONファイルを除外
      '/_nuxt/**', // Nuxt内部ビルド成果物
      '/assets/**', // アセットフォルダ
      '/images/**', // 画像フォルダ
      '/annai/**', // その他静的フォルダ
      '/back/**',
      '/syokai/**',
      '/wai100faq/**',
    ],
  },
});
