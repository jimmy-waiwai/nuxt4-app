// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. Nuxt 4 のディレクトリ構造と新機能を有効化
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxt/eslint'],
  devtools: { enabled: true },

  app: {
    // ベースURLの設定
    baseURL: '/waiwai-test2/',
    buildAssetsDir: 'assets',
    head: {
      title: 'JIMMY\'s WEB SITE',
      htmlAttrs: {
        lang: 'ja',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          // baseURLが適用されるため、先頭のパスを省略可能にするのが一般的です
          // 可能なら、href: 'favicon.ico',
          href: '/waiwai-test2/favicon.ico',
        },
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  // 2025年の互換性日付（最新機能を使用）
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      // これを true にすることで、Prettier 不要でコードが綺麗になります
      stylistic: {
        indent: 2, // インデントはスペース2つ
        quotes: 'single', // シングルクォートを使用
        semi: true, // セミコロンを入れる
        commaDangle: 'always-multiline', // 末尾のカンマ設定
      },
    },
  },
});
