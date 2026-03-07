<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            七帆ひかる
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2004/03/06 up
            </p>
            <p>最初に印象に残るのは<strong>「エイジ・オブ・イノセンス」</strong>でしょうか。幕開けからお芝居で台詞があったので、何となく名前をチェックした覚えがあります。</p>
            <p>続いて<strong>「傭兵ピエール」</strong>の<strong>新公</strong>での<strong>トマ</strong>。安心して見ていられる上手さで、特に<strong>銀橋ソロ</strong>での華やかさが印象的でした。</p>
            <p><strong>「里見八犬伝」</strong>の<strong>信乃</strong>が今までのベストかな。<strong>いかにも宝塚らしい甘い二枚目</strong>振りで、良かったです。</p>
            <p>
              <strong>「白昼の稲妻」新公</strong>では、公演評にも書きましたが、今までのイメージからいくと、甘さのある二枚目の七帆がオーギュスト、キリリとした二枚目の十輝がランブルーズというのが自然に想像できる配役ですが、そこは勉強の場の新人公演。わざと逆転させたのだろうな、と思って見ていました。<br>
              しかし<strong>髭も良く似合い、高身長も生きていて、十分な敵役振りにますます感心</strong>。
            </p>
            <p>この同期二人組は、二人とも背が高く、いかにも宙組若手。本公演でもこれからどんどん活躍してくれそうで、楽しみにしています。</p>
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
