<script setup>
definePageMeta({
  title: '宝塚ビデオシアター「真琴つばさ・ビート＆ハート」',
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
            宝塚ビデオシアター「真琴つばさ・ビート＆ハート」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/06/06 up)
            </p>
            <p>今回もビデオシアター観てきました！<strong>なぜ「ビート＆ハート」なのか？</strong>という毎度のツッコミはさておき（^_^;）、<strong>まみさん(真琴)の出演も三度目</strong>だそうですよ～。今回の貴重映像はバウ初主演の<strong>「ル・グラン・モーヌ」</strong>や<strong>「ローン・ウルフ」</strong>からの一場面でしょうか。それ以外はショーでの活躍が中心で、<strong>「ラ・ノーバ」の中詰の歌手</strong>などは懐かしかったです。顔が、やっぱり今とは全然違いますね（^_^;）。</p>
            <p>スタッフも改善を考えているのか、入場者からアンケートをとっていました。私も「会場が遠い」とか「料金が高い」とか「もっと新公やバウ公演等、ビデオで観られない映像を沢山見せて欲しい」等、書いておきましたので、そのうち内容の改善があるかもしれません。期待しましょう（^_^;）。</p>
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
