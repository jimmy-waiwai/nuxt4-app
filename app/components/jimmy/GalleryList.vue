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
  <h4
    class="font-bold block p-1 border-t-4 mb-1"
    :class="[themeConfig.texttitle, themeConfig.barborder]"
  >
    GALLERY一覧
  </h4>
  <nav class="mb-16 flex flex-wrap">
    <NuxtLink
      to="/jimmy/gallery/musasi"
      class="block py-2 px-8 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/musasi.jpg"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/hekomi"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/hekomi.jpg"
        alt="嶺恵斗"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/charlie"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/charlie.jpg"
        alt="匠ひびき"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/fan"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/fan.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/syokoshi"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/syokoshi.jpg"
        alt="久遠麻耶"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/depart"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/depart.jpg"
        alt="轟悠"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/israel"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/israel.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/kero"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/kero.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/zun"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/zun.gif"
        alt="姿月あさと"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/great"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/great.gif"
        alt="星奈優里"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/zigoro"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/zigoro.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/revue99"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/revue99.gif"
        alt="姿月あさと"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/utakata"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/utakata.gif"
        alt="真琴つばさ"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/west"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/west.gif"
        alt="稔幸"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/gypsy"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/gypsy.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/tod"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/tod.gif"
        alt="姿月あさと"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/basya"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/basya.gif"
        alt="真琴つばさ"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/besame"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/besame.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/mariko"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/mariko.gif"
        alt="麻路さき"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/mcfis"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/mcfis.gif"
        alt="真矢みき"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/jeimz"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/jeimz.gif"
        alt="姿月あさと"
        class="w-full"
      >
    </NuxtLink>
    <NuxtLink
      to="/jimmy/gallery/sakka"
      class="block p-2 w-1/2"
    >
      <img
        src="/images/jimmy/gallery/sakka.gif"
        alt="汐美真帆"
        class="w-full"
      >
    </NuxtLink>
  </nav>
</template>
