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
            初風&emsp;緑
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>
              彼女もずーっと見てます（^_^;）。実は新公の主演も運良く三回共見られました（^_^;）。どれも上手かったですね。でも、これ、といった印象に残る役はないんですよ（^_^;）。バウ初主演の<strong>「君に恋してラビリンス」</strong>や、評判の良かった<strong>「WEST
                SIDE STORY」のリフ</strong>も、上手かったですが、あまりツボに来ませんでした。返って、<strong>「黒い瞳」のシヴァーブリン</strong>で、すごく歌が上手くなったな～、と感心した位なんですよ（^_^;）。遅いですよね。
            </p>
            <p>いいんですか？&emsp;これじゃヤバいですよね、やっぱり（^_^;）。今や月組三番手ですもの。でも、ファンの人って結構多いみたいで、昔から劇場近辺で良く見かけたのを覚えています。どの役にも、<strong>懸命な姿勢と優しそうな人柄が伺えます</strong>よね。そこが良いのかも。</p>
            <p>次公演<strong>「ノバ・ボサ・ノバ」</strong>では、<strong>マール</strong>というかっこ良い役がついていることですし、似合いそうだという声も多いので、熱～い男が見られるかしら、と、楽しみにしています（^_^;）。</p>
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
