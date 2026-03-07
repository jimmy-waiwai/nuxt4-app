<script setup>
definePageMeta({
  title: '３月のアクセス',
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
            ３月のアクセス
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/04/07 up)
            </p>
            <p>プロバイダーからの報告書より、今月も皆様に少しだけお知らせしますね。()内が３月のアクセス数です。</p>
            <p><strong>●トップページ(7105)</strong></p>
            <p>いや～、今月は公演が多かった為か、すごい数ですね～。ありがとうございます。</p>
            <p><strong>●トピックス/最新(1304)</strong></p>
            <p><strong>●まずは公演(1220)</strong></p>
            <p>1.うたかたの恋(452)2.冬物語(321)3.WEST SIDE STORY(247)</p>
            <p>～「うたかた～」は全面的誉め誉めモードになってしまいましたが(^_^;)、本当にあんな感想しか浮かばなかったんですよ。読んで下さってありがとうございます(^_^;)。</p>
            <p><strong>●気になるこの人をチェック(832)</strong></p>
            <p>組1.宙組(285)2.月組(139)3.花組(137)</p>
            <p>生徒1.姿月あさと(248)2.真琴つばさ(151)3.花總まり(123)</p>
            <p>～何と、先月と全く順位不動！！宙組とずんちゃん(姿月)がダントツですね(^_^;)。ただ今大幅更新に向けてがんばっておりますので、気長に待ってて下さい(^_^;)。</p>
            <p><strong>●ＪＩＭＭＹの投稿文大公開(419)</strong></p>
            <p>1.表紙の人/汐美真帆(139)2.組替え/檀・汐美など(106)3. 組替え/真琴・姿月など(86)</p>
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
