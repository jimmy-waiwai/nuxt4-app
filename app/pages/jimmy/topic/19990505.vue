<script setup>
definePageMeta({
  title: '４月のアクセス',
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
            ４月のアクセス
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/05/05 up)
            </p>
            <p>プロバイダーからの報告書より、今月も皆様に少しだけお知らせしますね。()内が４月のアクセス数です。</p>
            <p><strong>●トップページ(8025)</strong></p>
            <p><strong>●トピックス/最新(1267)</strong></p>
            <p><strong>●まずは公演(1310)</strong></p>
            <p>1.再会／ノバ・ボサ・ノバ(572)2.うたかたの恋(543)3.WEST SIDE STORY(158)</p>
            <p><strong>●気になるこの人をチェック(962)</strong></p>
            <p>組 1.宙組(260)2.花組(174) 3.月組(142)</p>
            <p>生徒1.姿月あさと(236)2.真琴つばさ(172)3.花總まり(153)</p>
            <p>～今月も殆ど変わりませんね。宙組とずんちゃん(姿月)がダントツです(^_^;)。花ちゃんもすごいなぁ。久しぶりに大更新しましたので、来月は違ってくるかもしれません。</p>
            <p><strong>●ＪＩＭＭＹの投稿文大公開(398)</strong></p>
            <p>1.表紙の人/汐美真帆(114)2.組替え/檀・汐美など(101)3. エクスカリバー(72)</p>
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
