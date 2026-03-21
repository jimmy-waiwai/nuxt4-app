<script setup>
definePageMeta({
  title: '宝塚ビデオシアター「愛華みれ・伝説のプロローグ」',
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
            宝塚ビデオシアター「愛華みれ・伝説のプロローグ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/10 up)
            </p>
            <p>ビデオシアターに<strong>タモさん(愛華みれ)</strong>初登場だったそうで・・、おめでとうございます～（^_^;）。<strong>素顔のタモさん・・とってもキレイでしたわ～</strong>（^_^;）。</p>
            <p>今回の貴重映像は、何といっても<strong>初舞台ラインダンスの稽古風景</strong>！！私、実は公演を生で見ているのですが（^_^;）、<strong>タモさん、ノルさん(稔幸)、まみさん(真琴つばさ)</strong>と、何と、お隣どうしだったんですね～（^_^;）。いや～、知りませんでした(当たり前)。<strong>トップスターが三人並んでいる初舞台ラインダンス</strong>なんて、ちょっとないでしょうね～（^_^;）。皆、純粋な顔して、張り切って踊っているのが、可愛いです～（^_^;）。</p>
            <p>後は<strong>「ロマノフの宝石」新公、「秋・・冬への前奏曲」新公、「春の風を君に」新公、「ヴェネツィアの紋章」新公</strong>などもありました（^_^;）。順に<strong>友麻夏希、森奈みはる、白城あやか、真琴</strong>との芝居部分が見られます。貴重です。特に「秋・・冬～」「ヴェネツィア～」は観に行ったので、懐かしいですね～（^_^;）。他は、本公演が主でした。バウはなかったです。次回でしょうね。</p>
            <p>興味のある方は、是非どうぞ（^_^;）。</p>
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
