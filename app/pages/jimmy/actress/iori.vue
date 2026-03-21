<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sonota',
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
            伊織 直加
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>
              彼女も成績が良かったので出てくるのも早く、ずーっと見ていた気がするのですが、まず印象に残ったのは<strong>バウ「ル・グラン・モーヌ」</strong>かな。かなり色濃い、おいしい役だったように思うのですが、若手ながら上手くて感心しました。その後の新公、バウも安心して見ていられましたね。バウ初主演の<strong>「Endless
                Love」</strong>は作品がイマイチ盛り上がらなかったのが気の毒でしたが（^_^;）、インド人の扮装も、二幕のイギリス人の扮装も、<strong>とってもかっこ良かったのには惚れ惚れしました</strong>。が、芝居、とくに台詞の単調なのが気になりました。<strong>「SPEAKEASY」のランディ</strong>も、すごくおいしい役だったとは思うのですが、幕開けの歌がイマイチで、ちょっとびっくりしました。どうしても音楽学校卒業時に成績一番だった事の印象が強くて（^_^;）、彼女にはかなりのハイレベルを期待してしまうんですよ（^_^;）。
            </p>
            <p><strong>「夜明けの序曲」のパリの場</strong>はステキでしたよね。<strong>見た目はかなり好きなタイプ</strong>なんです（^_^;）。どうしても実力派だという期待があるし、実際そうだと思うので、上の二人が歌に不安がある今、ちょっと頼もしい所を見せて欲しいです。そうすれば、本公演での存在感が全然違ってくると思うのですが。でないと、勢いのあるおさちゃん(春野寿美礼)以下の下級生が人気をさらってしまうのではないかと、ちょっと心配しています。</p>
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
