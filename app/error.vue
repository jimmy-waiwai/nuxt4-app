<script setup lang="ts">
const error = useError();

useSeoMeta({
  title: "JIMMY's WEB SITE",
  ogTitle: "JIMMY's WEB SITE",
  description: "waiwai.ciao.jp より移転しました。JIMMYのホームページです。",
  ogDescription: "waiwai.ciao.jp より移転しました。JIMMYのホームページです。",
  ogImage:
    "https://jimmy-waiwai.github.io//waiwai-test2/images/takaraimage.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <!-- NuxtRouteAnnouncer スクリーンリーダーなどの支援技術(assistive technologies)を利用しているユーザにページタイトルの通知を行うことでアクセシビリティを向上させることを目的としたコンポーネント -->
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <div class="relative">
        <div
          class="absolute top-0 left-0 w-full h-screen bg-[url(/images/back-left.png)] bg-no-repeat bg-left bg-fixed bg-contain"
        ></div>
        <div
          class="absolute top-0 right-0 w-full h-screen bg-[url(/images/back-right.png)] bg-no-repeat bg-right bg-fixed bg-contain"
        ></div>
        <div
          id="top"
          class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
        >
          <div class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70">
            <div class="absolute top-[25%] w-full text-center">
              <div>
                <h1 class="text-5xl mb-4">{{ error.statusCode }}</h1>
                <p class="mb-8" v-if="error.statusCode === 404">
                  ページが見つかりませんでした。
                </p>
                <p class="mb-8" v-else>エラーが発生しました。</p>
                <NuxtLink to="/" class="text-xl text-blue-600 underline"
                  >トップページへ戻る</NuxtLink
                >
              </div>
            </div>
            <div id="footer" class="absolute bottom-12 w-full text-center">
              <p>Copyright © JIMMY. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
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
.poiret-one {
  font-family: "Poiret One", sans-serif;
}
</style>
