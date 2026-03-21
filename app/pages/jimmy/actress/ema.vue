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
            英真なおき
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2004/01/25 up
            </p>
            <p>
              私の最初のご贔屓である<strong>一路さんの同期で、最後の現役生</strong>です。<br>
              もう一人しかいないんですよ～。信じられないです。<br>
              男役でスターっぽくなった人は一路さんだけでしたが、組長には<strong>まゆさん(大峯真友)</strong>と二人、早くから就任されていて・・。そういう意味で、<strong>しっかりした人は多かった期</strong>なのかもしれませんね。
            </p>
            <p>その<strong>じゅんこ(英真ｳ</strong>ん。ずっとダ<strong>ンサーの</strong>イメージでした。と言っても、星組にはそれ程通い詰めた経験がなかったせいか、じゅんこさんにまで注目する事もなく・・ずっと時は過ぎていました。えさん。ずっとダンサーのイメージでした。と言っても、星組にはそれ程通い詰めた経験がなかったせいか、じゅんこさんにまで注目する事もなく・・ずっと時は過ぎていました。</p>
            <p>
              星組宴会余興集団<strong>「エマエージェンシー」</strong>というからには・・やっぱり英真さんから始まったものなんでしょうね～。何かのバウ公演で、<strong>通りすがりにすごい関西弁で凄む役</strong>があって（^_^;）。それを見て、<strong>「さすが、面白い人なんだろうな～。」</strong>などと、思った覚えがあります。<br>
              だから、全国ツアーの<strong>「サザンクロス・レビュー3」</strong>の<strong>ベルナルド</strong>も、ガラ悪いのがその時のじゅんこさんを思い出させて（^_^;）、<strong>じゅんこさんらしいなぁ～</strong>、と思ったんですよ。
            </p>
            <p>上手い人なんだな、と思い始めたのはつい最近で、<strong>「花吹雪 恋吹雪」</strong>での芝居や、<strong>「王家に捧ぐ歌」</strong>の歌にも感心しました。</p>
            <p>
              そして最大にグッときたのが、実は<strong>「巌流」の白サギ</strong>（^_^;）。大真みらんちゃんなど、見たい若手は沢山いる筈なのに・・<strong>なぜかじゅんこさんに釘付け</strong>でした。<br>
              立ち位置なんて、センターに気の向かない時は、2列目でも最後列端でも遠慮なく見る私ですが、「巌流」の白サギはなぜか周りをザッと見ても、前列の組長の方が良くて、ついつい見てしまいました。改めて、<strong>「そういえばダンサーだったよなぁ・・」</strong>と思いだしましたね。<br>
              何か、ベテランだからかもしれませんが、<strong>動きに気持ちが入っている</strong>んですよね。気合いが見えるんです。そこが好き（^_^;）。
            </p>
            <p>
              そう思うとやはりケロちゃん(汐美真帆)が組替えになったから、星組も良く見るようになったし、だから組長の良さも分かってきたのかもしれませんね。<br>
              何か<strong>体育会系で</strong>(・・とCSで出雲綾さんも言っておられましたが・・)、パワーがあって、楽しそうで良いですね。<br>
              「王家に捧ぐ歌」公演中の挨拶なども、<strong>「新生星組絶好調！」</strong>を強調した挨拶で、ファンとしてはとても嬉しかったんですよ。<br>
              <strong>星組の明るく楽しいお父さん、一路さんの最後の同期生！</strong>&emsp;これからもますます張りきって、星組を引っ張っていって下さいね！
            </p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
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
