<script setup>
definePageMeta({
  title: '「ブエノスアイレスの風」ケロちゃん(汐美真帆)報告',
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
            「ブエノスアイレスの風」ケロちゃん(汐美真帆)報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/07/18 up)
            </p>
            <p>「ブエノス～」神戸公演、見てきました！公演の感想はもう少し待って頂くとして、とりあえずケロちゃんのご報告を簡単に(^_^;)。</p>
            <p>まず見た目は、今まで見た事ないような<strong>見事な金髪にお髭</strong>で、<strong>洋画の世界から抜け出たような、ダンディなおじさま</strong> (^_^;)。出番は、おそらくドラマシティ公演のなるちゃん(成瀬こうき)と全く同じではないでしょうか。</p>
            <p>二番手のわりには出番が少ないとか、役がおいしくないとかいうのは、もう分っていた事なので、始めから諦めていましたが、やっぱりケロちゃんファンにとっては物足りない公演でした。</p>
            <p>収穫は一部のラスト、<strong>ニコラス(紫吹淳)との対決場面</strong>。迫力ありました。後はやはり<strong>フィナーレのタンゴ！</strong>こもちゃん(美原志帆)とのデュエットは期待通りとても大人っぽくて、かっこ良かった！久し振りに<strong>女役を見つめるあの色っぽい目</strong>を拝む事ができて・・それだけで十分満足かな(^_^;)？</p>
            <p>でもひょっとしたら、これが私にとっては<strong>今年最後のケロちゃんの舞台</strong>になるかもしれないのよね・・。それは寂しすぎる・・。<strong>もっと関西で活躍して～、ケロちゃん！！</strong></p>
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
