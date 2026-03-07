<script setup>
definePageMeta({
  title: '「グラフ」の表紙見ました?',
  layout: 'jimmy',
  team: 'topics',
});

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
  <div>
    <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
      <div class="w-48 flex-none pb-16 hidden lg:block">
        <JimmyMenu />
      </div>
      <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
        <div class="pt-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
            :class="themeConfig.texttitle"
          >
            「グラフ」の表紙見ました?
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/07/17 up)
            </p>
            <p><strong>「これはイカンよね～(^_^;)」</strong>と母と笑うこと10分(^_^;)。</p>
            <p><strong>個人的にはこんなのも好き</strong>、なのですが(^_^;)、だんだん凄くなってきてます(^_^;)。妖しい、妖しい(^_^;)。</p>
            <p>誰がどう、とは言いませんが(^_^;)、かなり「お水」入ってますよ～(^_^;)。</p>
            <p>どうしよう～、スカウトされちゃったら～(^_^;)。高いよ～、彼等は(冗談、^_^;)。</p>
            <p>この雑誌持ち歩いてたら、一般人に、<strong>別方向の趣味</strong>の人かと誤解されそうですよね(^_^;)。危ない、危ない(^_^;)。</p>
            <p><strong>皆さん、気を付けて下さいませ</strong>(^_^;)。</p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyTopicsList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyTopicsList />
    </div>
  </div>
</template>

<style scoped></style>
