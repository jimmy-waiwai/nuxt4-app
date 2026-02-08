<script setup>
  useSeoMeta({
    title: "JIMMY's WEB SITE",
    ogTitle: "JIMMY's WEB SITE",
    description: 'waiwai.ciao.jp より移転しました。JIMMYのホームページです。',
    ogDescription: 'waiwai.ciao.jp より移転しました。JIMMYのホームページです。',
    ogImage: 'https://jimmy-waiwai.github.io//waiwai-test2/images/takaraimage.jpg',
    twitterCard: 'summary_large_image',
  })
</script>

<template>
  <div>
    <!-- NuxtRouteAnnouncer スクリーンリーダーなどの支援技術(assistive technologies)を利用しているユーザにページタイトルの通知を行うことでアクセシビリティを向上させることを目的としたコンポーネント -->
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .noto-sans {
    font-family: "Noto Sans JP", sans-serif;
  }
  .noto-serif {
    font-family: "Noto Serif JP", serif;
  }
  .klee-one {
    font-family: "Klee One", cursive;
  }
</style>
