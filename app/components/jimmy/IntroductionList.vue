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
    INTRODUCTIONの記事一覧
  </h4>
  <nav class="mb-16">
    <NuxtLink
      to="/jimmy/introduction"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ごあいさつ。</span>
      <span class="text-sm block text-slate-500">2005/02/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/introduction/watasi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚と私と公演評。</span>
      <span class="text-sm block text-slate-500">2005/02/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/introduction/100faq"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">タカラヅカファンに100の質問</span>
      <span class="text-sm block text-slate-500">2002/08/18</span>
    </NuxtLink>
  </nav>
</template>
