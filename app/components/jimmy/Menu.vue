<script setup>
// レイアウトから提供された 'pageTheme' を受け取る
const themeRaw = inject('jimmyColor', null);

// 2. computed を使って安全に中身を取り出す
// .value が存在しない場合（default）のフォールバックを用意する
const themeConfig = computed(() => {
  return themeRaw?.value || {
    bgimg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
    bgcolor: 'bg-slate-200',
    bar: 'bg-slate-400',
    map: 'bg-slate-500',
    barborder: 'border-slate-500',
    texttitle: 'text-slate-600',
    textlink: 'text-slate-500',
  };
});
</script>

<template>
  <div class="p-4">
    <h3
      class="font-bold block mb-4"
      :class="themeConfig.texttitle"
    >
      JIMMYの過去の公演評などをまとめました
    </h3>
    <nav class="mb-12">
      <NuxtLink
        to="/jimmy/"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">TOP</span></NuxtLink>
      <NuxtLink
        to="/jimmy/introduction"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">INTRODUCTION</span></NuxtLink>
      <NuxtLink
        to="/jimmy/review"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">REVIEW</span></NuxtLink>
      <NuxtLink
        to="/jimmy/contribution"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">CONTRIBUTION</span></NuxtLink>
      <NuxtLink
        to="/jimmy/"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">TOPICS</span></NuxtLink>
      <NuxtLink
        to="/jimmy/"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">ACTRESS</span></NuxtLink>
      <NuxtLink
        to="/jimmy/"
        class="bg-opacity-20 w-full p-4 block mb-4 hover:opacity-80"
        :class="themeConfig.map"
      ><span :class="themeConfig.textlink">GALLERY</span></NuxtLink>
    </nav>
    <h3
      class="font-bold block mb-4"
      :class="themeConfig.texttitle"
    >
      JIMMYのページ
    </h3>
    <nav class="mb-12">
      <NuxtLink
        to="/"
        class="block mb-4 hover:underline"
        :class="themeConfig.textlink"
      >WAIWAI TAKARAZUKA（会員制掲示板）</NuxtLink>
      <NuxtLink
        to="/"
        class="block mb-4 hover:underline"
        :class="themeConfig.textlink"
      >JIMMY's Homepage</NuxtLink>
      <NuxtLink
        to="/"
        class="block mb-4 hover:underline"
        :class="themeConfig.textlink"
      >WAIWAI WEB PAGE</NuxtLink>
    </nav>
  </div>
</template>
