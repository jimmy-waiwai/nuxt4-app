<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            宝塚大劇場新人公演「カサノヴァ・夢のかたみ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              湖月わたる主演、星組新人公演「カサノヴァ・夢のかたみ」。これが退団公演になる紫苑ゆうならではの、成熟した大人の甘い魅力を存分に引き出したこの作品を、湖月わたるがどのように見せるか、期待と不安を両方持って客席に着いた。
            </p>
            <p>
              キラキラ光る瞳、明るく素直な演技が魅力の湖月は、今回のカサノヴァを奔放に、女性なら放っておけないような実に愛すべき人物として作り上げ、紫苑のカサノヴァとは又違った魅力が感じられた。長身に合わせた長い金髪の鬘を始め、数々のコスチュームも良く映え、常に華やかで一際目立つ存在。ただ、しっかりと歌えていたものの、喉の調子が悪いのではと感じる程、歌声がかすれていたのが残念。早く改善して欲しい。
            </p>
            <p>
              星奈優里は動きが美しく、微妙な立場に揺れる悲しさなども良く表現されていたが、今乗りに乗っている白城あやかと比べるのは酷ながら、もう少し女王としての、内面から出る堂々とした華やかさが出れば申し分ない。雪組への組替えが決まった彼女の、終演後の挨拶が感動的で、これからの頑張りと益々の活躍を期待したい。
            </p>
            <p>
              これが新人公演最後になってしまった神田智は、湖月とは対称的に黒っぽい役柄を魅力的に見せ、歌にもかなり安定感が出て来た。一度彼女の主役を(東京公演ではあったが)見たかったと思ったのは私だけではあるまい。
            </p>
            <p>
              朝宮真由は高貴な感じは出ていたが、豪華な衣装に似合うメイクの工夫を。九城彬はキリッとした二枚目で、歌も進歩。高央りおはカサノヴァとの友情を強調して、もっと存在感を出して欲しかった。
            </p>
            <p>
              特筆すべきは舞路はるか、美々杏里、渓なつきで、それぞれ本役とは一味違った工夫が見られ面白い。朝峰ひかり、大洋あゆ夢も好演。じゅんあつき、京極彩之も危なげないが、出来る人だけにもっと違った役作りをしても良かったのでは。万理沙ひとみはキャラクターと全く違う役柄で大変だっただろうが、彼女なりの工夫が見られ健闘。ただ、もっとダンスでの迫力と心の余裕を。陵あきのは、あばずれた感じは良く出ていたが、肝心の歌が今一歩だった。
            </p>
            <p>
              彼女なりのカサノヴァをここまで魅力的に見せた湖月に、益々の可能性を感じた嬉しい公演だった。紫苑退団後の星組で無くてはならぬ存在になるであろう彼女の、これからの活躍が楽しみだ。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              随分昔の舞台ですが、わたる君(湖月わたる)では、これがベストですね。すごーく良かった覚えがあります。最近は思ったほどヒットがないのが残念。でも、まだまだ大化けすると信じています(^_^;)。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
    
  </div>
</template>

<style scoped></style>
