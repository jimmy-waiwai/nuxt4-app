<script setup>
useHead({
  title: "JIMMY's Homepage",
  meta: [
    {
      name: "description",
      content:
        "「歌劇」誌「高声低声」や、以前存在した「宝塚公式HP」の「お便りコーナー」、「WAIWAI TAKARAZUKA」にアップした公演評をまとめました。",
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/img/takarazuka/apple-touch-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/img/takarazuka/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/img/takarazuka/favicon-96x96.png",
    },
  ],
});
</script>

<template>
  <div
    class="w-full h-full min-h-dvh bg-[url(/images/jimmy/top.gif)] noto-sans font-[400] flex"
  >
    <div class="w-full max-w-[840px] m-auto">
      <h1 class="bg-lime-600 w-full px-6 py-4">
        <span class="text-yellow-100 text-2xl"
          >Welcome to JIMMY's Homepage</span
        >
      </h1>
      <div class="w-full flex justify-between flex-wrap py-8">
        <div class="w-[90%] max-w-[397px] mx-auto mb-8">
          <img
            src="/images/jimmy/gallery/keromina.jpg"
            alt="JIMMY's Homepage"
          />
        </div>
        <div class="w-[90%] max-w-[400px] m-auto">
          <div class="mb-4">
            <h3 class="text-stone-600 mb-4">
              <NuxtLink to="/jimmy/introduction"
                ><strong class="text-lime-600 text-xl">INTRODUCTION</strong
                >&emsp;はじめに</NuxtLink
              >
            </h3>
            <h3 class="text-stone-600 mb-4">
              <NuxtLink to="/jimmy/review"
                ><strong class="text-lime-600 text-xl">REVIEW</strong
                >&emsp;公演評</NuxtLink
              >
            </h3>
            <h3 class="text-stone-600 mb-4">
              <NuxtLink to="/jimmy/contribution"
                ><strong class="text-lime-600 text-xl">CONTRIBUTION</strong
                >&emsp;投稿文</NuxtLink
              >
            </h3>
            <h3 class="text-stone-600 mb-4">
              <NuxtLink to="/jimmy/topic"
                ><strong class="text-lime-600 text-xl">TOPICS</strong
                >&emsp;話題</NuxtLink
              >
            </h3>
            <h3 class="text-stone-600 mb-4">
              <NuxtLink to="/jimmy/actress"
                ><strong class="text-lime-600 text-xl">ACTRESS</strong
                >&emsp;生徒評</NuxtLink
              >
            </h3>
            <h3 class="text-stone-600 mb-4">
              <NuxtLink to="/jimmy/gallery"
                ><strong class="text-lime-600 text-xl">GALLERY</strong
                >&emsp;表紙ギャラリー</NuxtLink
              >
            </h3>
          </div>
          <div class="mb-4">
            <h3 class="text-lime-600 text-xl">Information</h3>
            <p class="text-stone-600">
              2005年以降の記事は、全てプログに移行しました。<br />
              最新記事はそちらをご覧下さい。
            </p>
          </div>
          <div>
            <h3 class="text-lime-600 text-xl">New Illustration</h3>
            <p class="text-stone-600">
              「Good Bye,Good Guy,Good
              Fellow」よりケロちゃん(汐美真帆)とみなみちゃん(南海まり)つもりです。<br />
              「なんで最後のイラストがそこやね～ん！」という全国一千万人のケロちゃんファンのつっこみが聞こえてきそうなのですが・・良いじゃない～、好きなんだから～。
            </p>
          </div>
        </div>
      </div>
      <div class="bg-lime-600 text-yellow-100 w-full px-6 py-4 text-right">
        <p>
          このＨＰで書かれた文章の無断転載を禁じます。Copyright 1994-2004. All
          rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
