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
            真矢 みき
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/19 up
            </p>
            <p>今日、彼女の舞台を見納めてきました。何か<strong>「みきちゃん(真矢みき)は偉大だったなぁ」</strong>としみじみ感じました。正直、ヤンさん(安寿ミラ)が退める頃には、<strong>みきちゃんがここまで自分の個性を極める</strong>とは思いませんでしたね。</p>
            <p>歓声を送ったり、手拍子したり、笑ったり、宝塚の観客ってなかなかできないんですよね。それが遠慮なくできるような、<strong>人を楽しませてくれる力</strong>がありました。技術点では不満もあるけれど、それが気にならないくらい、<strong>みきちゃんの舞台は楽しかった。「SPEAKEASY」のマック</strong>の様な役作りは、濃すぎてちょっと食傷気味ですが、これがサヨナラ公演だと思うと、そんなみきちゃんらしさも、愛しくなってしまいます(^_^;)。みきちゃんの舞台、本当に沢山見てきただけに、<strong>今はとっても寂しい</strong>です。</p>
            <p>みきちゃんの芝居のベストはやはり<strong>「失われた楽園」のアーサー</strong>ですね。みきちゃんらしい魅力に溢れた、二枚目でした。</p>
            <p>正直、昔の可愛いみきちゃんの方が好きなのですが、今のみきちゃんは、本当に立派になったと、驚いています。<strong>こんなスターは当分現れない</strong>でしょうね。</p>
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
