<script setup>
definePageMeta({
  title: '２月のアクセス',
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
            ２月のアクセス
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/03/10 up)
            </p>
            <p>プロバイダーからの報告書より、今月も皆様に少しだけお知らせしますね。()内が２月のアクセス数です。</p>
            <p>●トップページ(5614)</p>
            <p>●トピックス/最新(1287)</p>
            <p>●まずは公演(1237)</p>
            <p>1.WEST SIDE STORY(412)2.夜明けの序曲(357)3.うたかたの恋(257)</p>
            <p>～「うたかた～」は開いてみたら前評で(^_^;)、がっかりした人が多いでしょうね(^_^;)。</p>
            <p>●気になるこの人をチェック(791)</p>
            <p>組1.宙組(191)2.月組(134)3.花組(117)</p>
            <p>生徒1.姿月あさと(150)2.真琴つばさ(132)3.花總まり(123)</p>
            <p>～宙組とずんちゃん(姿月)は、何組公演中であっても不動のアクセス数ですね(^_^;)。</p>
            <p>●ＪＩＭＭＹの投稿文大公開(550)</p>
            <p>1.表紙の人/汐美真帆(338)2.組替え/檀・汐美など(134)3.エクスカリバー(66)</p>
            <p>～「表紙の人」読んで下さってありがとうございます。ボツも救われました(^_^;)。ほとんど更新のないページですが、大真面目に面白い事書いてますので、是非一度お越し下さいませ(^_^;)。</p>
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
