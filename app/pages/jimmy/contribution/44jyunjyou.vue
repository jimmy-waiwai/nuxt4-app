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
            星組バウホール公演「殉情」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              絵麻緒ゆう初主演「殉情」を観る。谷崎潤一郎「春琴抄」の舞台化と聞いて、暗そう(失礼)等と心配し、あまり期待していなかったのだが、結果は上々。嬉しい誤算に大満足で帰途についた。
            </p>
            <p>
              そう、いくら「春琴抄」とは言っても、演出家があの「硬派・坂本竜馬」を作り、「恋人たちの神話」を作り、「ライト＆シャドウ」を作った石田先生なのだ。今回も徹底的、冒険的(？)コミカルな演出に、場内爆笑になる事もしばしば。そして、その殆どを担った千珠晄の怪演！ 「ライト＆シャドウ」の大山弦太郎に引き続き、彼女にはお気の毒な気もするが、普段はキザなダンスを売り物にしているだけに達者な人だと感心してしまう。「宝塚でそこまでするか？」とヒヤヒヤさせるのも石田作品の特徴で、賛否両論あろうが、とにかく面白いから良いのではないか。
            </p>
            <p>
              そして勿論、特筆すべきは絵麻緒ゆう、月影瞳のコンビ。星組は上級生陣が充実しており、絵麻緒も新人公演卒業後、中々活躍の場がなかったが、今回の好演は「白夜伝説」、「うたかたの恋」新人公演での美しさと確かな実力を思い出させるに十分であった。新生星組を活気づかせる為にも、もっともっと本公演で活躍させて欲しい。月影も、よく見られる気の強い娘という役所ではあったが、落ち着いた美しい声と確かな演技できつくなるのをおさえた。そして物語の最後、自らの目を潰し、愚かしい程の愛を見せる佐助と、とうとう全面的に心を許す春琴の演技は素晴らしく、今まで笑う場面が多かっただけに印象的で、涙を抑える事が出来なかった。
            </p>
            <p>
              又、夏美よう、湖月わたる、白鳥ゆりえは現代人という作りにくい役柄の上に、中途半端になれば役自体の是非も問われるであろう危険もあったが、活気があって自然に溶け込めていたと言えるし、現代の私たちからは想像も出来ないような「殉情」を際立たせ、物語が暗い方に傾いてしまうのを救う役目も、十分に果たしたと言えるだろう。英真なおき、出雲綾、朋舞花ら上級生が多く出演していた功績も大きいし、舞路はるか、千歳まなぶ、高央りおも上手さで目を引いた。
            </p>
            <p>
              やはり舞台は観てみなければ分からない。このような作品に出会うと、観に来て良かったとつくづく感じる。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              笑いが多かった作品だけに、涙腺かたい私ですが、ラストはホントに、泣けました(^_^;)。あぁ、なつかしい、千珠晄さまっ・・最高(^_^;)。
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
