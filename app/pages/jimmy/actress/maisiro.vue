<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            舞城のどか
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/04/30 up
            </p>

            <p>
              <strong>舞城のどかちゃん</strong>、いきま～す!
            </p>

            <p>
              初認識は、<strong>「Cocktail」</strong>。ブラック・オパールの場面で、舞風りらちゃんと二人、チャーリー(匠ひびき)と妖しく踊る場面がありました。<br>
              かなり若手でしたし、芸名を見ても、かなり踊れる人なんだろうとは思いましたが、その時は正直、スタイルがゴツかったせいか(^_^;)、そんなに良いとは思いませんでした。<br>
              続く<strong>「ダイアモンド・アイズ」</strong>では、既に1コーナーメインで踊る場面を持っていて、<strong>大人っぽい雰囲気の場面担当でしたが、それが良く似合い、確かにかっこ良いな～</strong>、と思い直しました。<br>
              また、その後の<strong>「アキコ・カンダ レッスン発表会」</strong>で、多士済々な出演メンバーの中、彼女がソロで踊るパートがあったのにも驚いたのですが、<strong>それが本当にキレイで良かった!</strong>　彼女は宝塚の中でも屈指の貴重なダンサーなんだと、これではっきり分かりました。
            </p>

            <p>
              以降、ダンス場面での彼女の活躍振りは、見ていて気持ち良いです。<br>
              動きもキレイですし、見た目もキレイになりましたね。<strong>ショーを観る際は、彼女を目で追ってしまう事が多い</strong>です。<br>
              これからも、怪我しないように(笑)、長く素敵なダンスを見せ続けて欲しい人です。
            </p>

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
