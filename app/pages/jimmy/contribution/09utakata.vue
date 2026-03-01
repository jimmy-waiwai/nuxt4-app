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
            宝塚大劇場新人公演「うたかたの恋」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              星組新人公演「うたかたの恋」を観る。この作品は主演コンビが成功の鍵を握っていると言え、本公演では紫苑ゆうが抜けた穴の大きさを感じさせたが、新人公演では正にこの主演コンビが大健闘し、名作を十分に見応えあるものにしていた。
            </p>
            <p>
              昨年「白夜伝説」新人公演で、オーディンを美しく心優しく演じ、素晴らしかったのが記憶に新しい絵麻緒ゆうだが、前回「ＰＡＲＦＵＭ ＤＥ ＰＡＲＩＳ」の時は喉を痛めていた様で、正直がっかりさせられた。しかし今回の絵麻緒は、これまで新人時代に演じてきたどの役よりも素晴らしかったのではないだろうか。幕開きからの容姿の美しさは抜群で、課題の歌も驚くほどよく伸びていて圧倒された。又、今まで割とかわいらしいイメージが有ったのだが、今回は大人っぽさやギザさも見せ、数多くのラブシーンでは何度もドキッとすることも。
            </p>
            <p>
              雪組に移籍の決まった花總まりは、今最も注目されている人の一人であろう。研三とは思えない完成度の高い舞台を観せる人だ。本公演でのミリーは「やさしい恋人」にしては硬く、無表情なのが気になったが、新人公演でのマリーにおいては、生き生きとしていて余裕があり、このまま本公演で演れそうな感じ。終演後の挨拶も感動的だった。
            </p>
            <p>
              神田智のジャンは軍服姿がスマートで美しい人だが、語り手としてのセリフが少し伝わりにくく、いつもよりは地味な感じがした。もっと華やかな見せられる役で次回は見てみたい。
            </p>
            <p>
              特筆したいのがマリンカを演じた星奈優里。本役出雲綾が歌う多くのナンバーをしっかりと歌っており、華やかな容姿に加え、定評のあるダンスはダイナミック。レセプションの場面を大いに盛り上げていた。又、陵あきののミリーは優しい声がミリーという役にピッタリ。湖月わたるのブラッドフィッシュが明るく、大きなキラキラした目が印象的。
            </p>
            <p>
              他ではステファニーの万理沙ひとみ、フリードリヒの希佳、ジェシカの舞路はるか、ラリッシュ夫人の鈴奈沙也が上手で目立つ。エピローグでカゲソロをした鈴奈、朝宮真由はどちらも本役に負けない程上手だった。
            </p>
            <p>
              全く最後の新人公演にふさわしい絵麻緒の主役振りだった。これからの本公演での活躍に期待している。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              ぶんちゃん(絵麻緒ゆう)がすごくキレイだったのと、花ちゃん(花總まり)が上手ですっかりファンになってしまったのが印象的です。
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
