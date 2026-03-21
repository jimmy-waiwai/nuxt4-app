<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            夏河&emsp;ゆら
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/05/18 up
            </p>
            <p>
              昭和60年初舞台。<strong>「愛あれば命は永遠に」</strong>は、生の舞台を観ているので、初舞台から知っている生徒さんの中では初めての組長さんです。<br>
              つい最近までのトップ、真琴つばさの同期ですから、かなり若いですよね。中卒ですし。
            </p><p>
              ゆらさんで印象に残るのは、まずは<strong>「たけくらべ」</strong>の<strong>お夏さん</strong>。割と当時から美人で怪演役者のイメージがあったので（^_^;）、しっとりと舞台を絞めている頼もしさに、驚きました。<br>
              なぜだろう・・？&emsp;<strong>「ＷＡＮＴＥＤ」での肝っ玉母ちゃん</strong>や、<strong>「ローン・ウルフ」のナチスの人の役</strong>も、「たけくらべ」の後の作品ですよね～。なぜ、最初から怪演役者のイメージがあったのかは・・記憶にありません（^_^;）。<br>
              とにかく威勢が良くて、舞台を盛り上げてくれた役としては、この二つが思い浮かびますね。<br>
              本公演では、<strong>「チェーザレ・ボルジア」のカテリーナ</strong>なんて、美しくて、かっこ良い女領主様で、素敵でしたよね。
            </p>
            <p>
              その後もずっと月組の頼もしい戦力の一員として、芝居でも、ダンスでも支えてくれていたゆらさん。<br>
              月組が苦しかった時代(と私は思っている)<strong>「ガイズ＆ドールズ」</strong>での、<strong>カートライト将軍</strong>での盛り上げ！&emsp;時節柄、涙が出そうでした（^_^;）。私はこの役が、ゆらさん組長への決め手になったのだろうと、勝手に思っています。
            </p>
            <p>その後、<strong>「長い春の果てに」</strong>の<strong>りかちゃん(紫吹淳)のママ役</strong>、今回の<strong>「シニョール～」</strong>での<strong>「レオの最初の女」役</strong>と、怪演ものが続いていて、ちょっと勿体ない気がしますが、普通の役でも結構頼もしいと思うんですよ・・（^_^;）。</p>
            <p>日本物の<strong>「花の宝塚風土記」の初舞台生の口上</strong>は、歴代組長さんに良く回ってくる役柄でしたが、ゆらさんも堂々としていて立派なものでした。今や、すっかり頼もしい組長さんです(そういえば、就任当初の挨拶は、結構可笑しかったけれど・・^_^;)。</p>
            <p><strong>月組の為なら命も張ろう</strong>という勢いのある組長さん、大好きです。これからも、がんばって下さいね(*^。^*)。</p>
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
