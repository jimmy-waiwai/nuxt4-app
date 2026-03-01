<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'star',
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
            エピファニー
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              星組バウホール公演・１２／４～１２／１２
            </p>
            <p>
              色々と・・非常に面白くて、爆笑の連続だったのですが、<strong>この作品って、こんなに笑って良い作品だったのでしょうか？</strong>&emsp;というのが素直な感想です(^_^;)。<strong>大野先生</strong>のデビュー作という事で、新人作家と思えば、まぁ、楽しく観られて良かったな、という所でしょうか。
            </p>
            <p>
              細かい所に疑問や書き込み不足は感じられましたが、「十二夜」を歌舞伎の世界に移し、そこから女優誕生を描く、という主筋には思ったよりも無理がなく、主演の彩輝直に男女二役をあてて、持ち前の色気を存分に生かした作品であったのは、良かったと思いました。
            </p>
            <p>
              <strong>彩輝</strong>は出番の8割位は女役のおたかの方だったと思いますが、繊細な心の動きを丁寧に演じていて、色気と美貌も手伝って、彩輝ならではの役所で魅力を発揮していました。が、台詞や歌などキャリアの割にはあまりにも課題が多いのは気になります。これからの為にも、恵まれているだけに、必死で勉強して欲しいですね。
            </p>
            <p>
              <strong>妃里梨江</strong>も今回は文句なく衣装、鬘などに持ち前の美貌が生かせていて、とても美しかったです。「お嬢様」がピッタリでした。
            </p>
            <p>
              <strong>朝澄けい</strong>は今までのノーブルなイメージからするとかなり弾けた役だったのですが(^_^;)、伸び伸びとこなせていて上手かったです。新境地が開けたのではないでしょうか。
            </p>
            <p>
              他では、<strong>司祐輝</strong>が念願の二枚目役で、とても嬉しかったです！&emsp;包容力があって優しげで良かったです。<strong>夏美よう</strong>もダンディなおじさまで、ステキでした。
            </p>
            <p>
              上手さでは<strong>大洋あゆ夢</strong>が抜群でした。始め女役さんだと思っていたのですが、ちょっと大きいな・・・と思って顔を見たら大洋さんだ！&emsp;と、びっくり(^_^;)。それ位自然に女形を演じていたのに感心しました。<strong>万里柚美、にしき愛、朝宮真由、美椰エリカ</strong>も良かったです。
            </p>
            <p>
              <strong>真飛聖</strong>がかなり背伸びした役所で、思い切り良く演じていたのが面白かったのですが、本当はシリアスだったのかどうか、大野先生の真意が気になる所です(^_^;)。何にしてもあれだけパンチがあるのは、大したスター性だと思いますが(^_^;)。
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★<span class="text-gray-400">★★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyReviewList />
    </div>
    
  </div>
</template>

<style scoped></style>
