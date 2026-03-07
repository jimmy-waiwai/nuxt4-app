<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            香寿 たつき
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/09/16 up
            </p>
            <p>たーたん(香寿)を始めて認識したのは、<strong>バウ「エル・アミーゴ」のシモン</strong>くらいかなぁ(^_^;)。堂々たる二番手振りで、貫禄ありましたね～、始めから(^_^;)。今思えば、当時研4だったはずなんですが(^_^;)。その後<strong>「秋・・・冬への前奏曲」のカレル</strong>や<strong>「春の風を君に」の陳丁生</strong>なんて、学年や、当時花組にひしめいていたホープ達の事を考えると、飛び抜けて良い役で、しかも上手くて・・、すごかったです～、あの頃。悪く言えば、貫禄ありすぎて、全然若手らしさがなかったような気がしますが(^_^;)。</p>
            <p>でも今は、<strong>その技術というか、持ち味というか・・、と学年、立場がマッチして</strong>、堂々たる男役として、良い舞台を見せてくれていますよね～。<strong>貫禄、余裕がたっぷりの、大人っぽいムード、そして、素晴らしい歌声に、いつもうっとりさせて頂いてます</strong>(^_^;)。<strong>ダンスも良いし、台詞の声もステキだし・・、実力では宝塚一だと思います</strong>。今更私が言わなくても・・、って、言われそうですが(^_^;)。</p>
            <p>今までの芝居では、前述のシモンとカレル、それからちょっと渋いけど<strong>「ＪＦＫ」のフーバー長官</strong>がすっごく好き！！　後はやはり<strong>「エリザベート」のルドルフ</strong>ですねぇ・・、イチロさんとの「闇が広がる」のデュエットは、他ではなかなか聞けないぞ、って言う素晴らしさでした(^_^;)。</p>
            <p>
              ショーでは、今回のショー<strong>「ラ・ヴィール」のナイト・カフェ</strong>の場面なんて、ステキでしたね～。最初の銀橋ソロの時のような、<strong>余裕たっぷりに歌っているたーたんがすごく好き</strong>(^_^;)。反対に「TAKE
              OFF」の踊るマタドールのような、濃すぎるキザ(^_^;)は、ちょっとイヤ(^_^;)。でも、最近は全然見なくなりましたが(^_^;)。
            </p>
            <p>もう、完成度と学年を考えると、とっくにトップになっていてもらわないと困る、という所まで来ていますが(^_^;)、う～ん、<strong>いつまで待てるか・・</strong>、がんばってくれ～、たーたん(^_^;)。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyActressList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyActressList />
    </div>
  </div>
</template>

<style scoped></style>
