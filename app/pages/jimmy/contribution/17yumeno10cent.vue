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
            宝塚バウホール公演「夢の１０セント銀貨」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              今度こそは天海祐希で美しいコスチューム物を見たい！と常々思っていた私にとって、「夢の１０セント銀貨」は決して嬉しい公演ではなかった。でもそれは幕が開くまでの事。実際の舞台は、もうとにかく楽しくて、そんな不満は吹き飛んでしまった。
            </p>
            <p>
              天海はトップとして公演を重ねるごとに、自信や余裕のようなものが見えるようになり、頼もしくなってきた。やはりそれだけの力がある人だと感じずにはいられない。今回も等身大の青年役を非常に楽しそうに演じていて危なげないが、それも確かな演技力があるからこそだ。ただ歌になると、途端に肩に力が入ってしまい、未熟さが出てしまう点だけが惜しい。又、あれほど美しい人なのに「見せる」舞台ではなく「一緒に楽しむ」舞台を作ろうとしている事を、今回は特に強く感じた。だがファンとしては、「見せる」舞台もそろそろ観たいというのが正直なところ。
            </p>
            <p>
              真琴つばさの昨年一年での躍進はすばらしかった。今回の公演ではすでにスターとしての安定感を見せ、天海を支えているのが頼もしい。歌も格段に上手くなった。
            </p>
            <p>
              麻乃佳世もどこにでもいそうな妻を的確に演じていて親しみがもてる。どこか近寄りがたい雰囲気のあった彼女だが、相手役の交代と共に心境の変化もあった様だ。
            </p>
            <p>他では朝吹南が美しく魅力的だったのと、真山葉留が上手で面白かったのが印象的。</p>
            <p>
              幸運にも千秋楽を見ることも出来た。終演後、「悪夢の１０セント銀貨」と名打って、天海と真琴がパロディを演ってくれたのが最高。そのサービス精神が嬉しい。
            </p>
            <p>
              さて、その千秋楽の興奮も覚めやらぬうちに、「風と共に去りぬ」の前夜祭を見に出掛けた。ＯＧの方たちの歌はどれも迫力満点。トークも面白い話が続々と飛び出した。唯一現役時代を見た事がある麻美れいが私にとっては特に懐かしかった。しかしあの怖い位の色気は当時小学生だった私には分からなかった事で、今見たかったと悔やまれる。彼女のような人がまた早く出てきて欲しいと思わずにはいられない。天海らによる上演も、新春公演の成功を予想させるに十分。上演決定、配役を聞いた時には少なからず反感をもったが、真琴のスカーレットも思ったよりずっと自然だった。「悪夢の１０セント銀貨」を見た(？)直後だったので、彼女たちの変わり身の速さには驚いてしまう。期待をもって、この作品の上演を待ちたい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              マミさん(真琴つばさ)伸び盛りの頃ですね(^_^;)。「カスター(マミさんの役)は虫を食べる～」という歌が、今でも思い出されます(^_^;)。
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
