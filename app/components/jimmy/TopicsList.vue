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
    TOPICSの記事一覧
  </h4>
  <nav class="mb-16">
    <NuxtLink
      to="/jimmy/contribution/66kyosokyoku7"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「宝塚狂想曲7」汐美真帆</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/65blood"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「血と砂」</span>
    </NuxtLink>
  </nav>
</template>
