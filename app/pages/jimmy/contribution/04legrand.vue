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
            宝塚バウホール公演「ル・グラン・モーヌ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「ああ、きれいだった！」と思わずため息の出た花組バウ公演「ル・グラン・モーヌ」・一幕ではこれは幻の世界？現実の世界？と惑わせ、二幕になると一転して話がしっかりと筋の通ったものになる。内容が充実しているなかにもどこか神秘的な所のある作品だった。
            </p>
            <p>
              初主役モーヌの真琴つばさは、今までの役柄の為か色の濃い役が似合う人だと思っていたが、今回は純白の伝統的な二枚目を大真面目に(？)しかも思ったよりもずっと自然に演じていてステキだった。特に物語の最後、幕が閉まる前のポーズは彫刻の様に美しい。そして何よりもこの役に対する意気込みの強さが感じられ少々の歌の弱さは感じられない程の大熱演が見ていて気持ち良かった。
            </p>
            <p>
              華陽子のイボンヌは、幻想的な城のお姫様にふさわしい雰囲気。こういう役がこの人より似合う人は今の所いないのでは。本当に退団が残念だ。
            </p>
            <p>
              フランソワの匠ひびき、これほど感情を出す役は初めてだったと思うが、親友の恋人を好きになってしまうという難しい役を仲々表情豊かに演じていて驚いた。特に各々の心情をダンスで表現する所での表情は印象に残った。また他の場面でも匠の動きの美しさは群を抜いている。
            </p>
            <p>
              他、詩乃優花は華と対称的な役柄を持ち前の強さで観せて魅力的。ただ最近同じ様な役ばかりでかわいそうな気がする。伊織直加も個性のあるおいしい役を、下級生ながら危な気なく演じており上手い人だなぁと思った。更に最近は華やかさも加わってきた様で、今後がとても楽しみ。
            </p>
            <p>
              また夏城、初風を始め、花組自慢の二枚目達を学生に配したり、幻想的なダンス場面を多く用いたりと、この作品はとにかく美しさを際立たせており、真琴達もその期待に十分に答え、夢のような舞台を観せてくれた。先日、真琴の月組組替えが発表されたが、この作品を観て、天海に続くスターとして十分にやっていけるのではと期待を持った。これからの活躍を応援しています。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              今では、すっかり純白の二枚目も似合うようになってしまったマミさん(真琴つばさ)ですが、この頃はちょっと不良っぽい(？)持ち味の人だと思っていたので、その変わりようにビックリでした(^_^;)。
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
