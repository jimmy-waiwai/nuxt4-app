<script setup>
const route = useRoute();

useSeoMeta({
  title: 'JIMMY\'s WEB SITE',
  ogTitle: 'JIMMY\'s WEB SITE',
  description: 'waiwai.ciao.jp より移転しました。JIMMYのホームページです。',
  ogDescription: 'waiwai.ciao.jp より移転しました。JIMMYのホームページです。',
  ogImage: 'https://jimmy-waiwai.github.io/waiwai/images/jimmy_hp_og.webp',
  twitterCard: 'summary_large_image',
});

// canonical URLを自動生成
const canonicalUrl = computed(() => {
  const base = 'https://jimmy-waiwai.github.io/waiwai';

  const path = route.path === '/'
    ? '/'
    : `${route.path.replace(/\/+$/, '')}/`;

  return `${base}${path}`;
});

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],
});
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
  font-family: 'Noto Sans JP', sans-serif;
}
.noto-serif {
  font-family: 'Noto Serif JP', serif;
}
.klee-one {
  font-family: 'Klee One', cursive;
}
.poiret-one {
  font-family: 'Poiret One', sans-serif;
}
</style>
