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
            宝塚大劇場公演「春櫻賦」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              実質的新生雪組公演となった新春大劇場公演。まずは最近大活躍の、谷先生作品「春櫻賦」。日舞の得意な轟悠の踊りをたっぷりと見られるという点では大満足の舞台で、透かし絵の様な背景も美しく、華やかな日本物ショー的世界を満喫できる。反面、時間的限界からか、プログラムを見ても大事なセリフが随分カットになっており、人物書き込み不足の感は拭えない。
            </p>
            <p>
              轟は衣装、鬘、化粧とも良く似合い、文句なくかっこ良い。踊りも前述の通り、難なくこなして頼もしい。ただ、谷作品はいつもだが、主役があまりにも英雄然としていて魅力に乏しく、そろそろトップスターとしての良い役を、と願わずにはいられない。
            </p>
            <p>
              香寿たつきの数馬は、龍山よりもさらに書き込み不足で気の毒。しかしさわやかな二枚目振りに、渋い印象が強かっただけに正直いって驚いた。セリフも危惧されていたような早口になることなどまるでなく、貫禄十分。歌も良い。やはり香寿には雪組芝居が合う。
            </p>
            <p>
              小紫は月影らしい、気の強いしっかりものの役で、伸び伸びと演じているように見えるのが嬉しい。魅力的だったのが喜楽坊遊三の汐風幸。良い役で遊びもあり上手かった。安蘭けいと彩吹真央は龍山につく琉球の武士。二人ともセリフが明瞭で聞いていて気持ちが良い。ゆうなの貴咲美里がかわいらしく、プロローグの歌も必聴。汐美真帆が心暖かな人物を演じて魅力的。貴城けいの美しさは一際目を引く。
            </p>
            <p>
              「ＬＥＴ‘Ｓ
              ＪＡＺＺ」は、昨年「サザンクロス・レビュー」に続き、幕開きから一気に盛り上がるノリノリのショー。同じ手法を使っていると言えばそれまでだが、楽しいから良いのではないか。岡田先生のロマンチックレビューシリーズの様に、草野先生独自パターンとして、これからもこの手の作品を出して欲しい。話題の開演生アナウンスも効果的。可能ならばこれからも続けて欲しい。
            </p>
            <p>
              箙組長の「オールマンリバー」は、バウ公演「ショーボート」での熱唱を思い出し感慨ひとしお。又、若手の台頭が頼もしく、安蘭、汐美、貴城や、ロケットで中央の立樹遙が華やか。今回は小人数での活躍が少なかったが、今の実力派雪組若手陣はもっと売り出しても良いのでは？
            </p>
            <p>
              今回のショーは「歌劇」誌の座談会にもあったように、色々な肌色ＯＫのお触れが出ていたにも拘わらず、轟は敢えて得意(？)の黒塗りをせず、見事な金髪にホワイトで通しているのが興味深い。実際、プロローグでの帽子姿はかわいらしくて、又、新しい面を発見出来た気がした。まだまだ未知数の轟率いる新生雪組に目が離せない。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              さりげなーく、もっと若手を使ってくれ！ とアピールしてます(^_^;)。
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
