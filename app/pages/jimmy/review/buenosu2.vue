<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'moon',
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
            ブエノスアイレスの風
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              月組・神戸東京特別公演・７／１８～７／２９
            </p>
            <p>
              作品については、昨年ドラマシティ公演と特に変わった所もないようでしたので、省かせて頂いて、出演者の話を少しだけ。
            </p>
            <p>
              全体に<strong>紫吹淳の一人舞台</strong>といった印象でした。前回は、かなりリカルドの樹里咲穂にも目がいったのですが、この作品、ホント、ニコラスが出ずっぱりなんですよね～。ダンスに歌に芝居に、たっぷりりかちゃん(紫吹)を堪能した二時間半でした(^_^;)。
            </p>
            <p>
              ビセンテの<strong>汐美真帆</strong>は、髭を付けて、かなり渋めですが(^_^;)、見た目の端正さではメンバー中抜きん出ていました。ニコラスへの脅しや尾行も対抗心ではなく、エバ(美原志帆)が好きだから・・という役づくりが汐美らしくて良かったです。
            </p>
            <p>
              リカルドの<strong>嘉月絵理</strong>は、台詞も演技も的確で、リカルドの気持ちがはっきり伝わってきました。これ程の役は初めてだったと思いますが、十分安心して見ていられる出来だったと思います。
            </p>
            <p>
              マルセーロの<strong>霧矢大夢</strong>は、まだまだ母親に甘えているチンピラ、という軽さや甘さを出すのに、かなり苦労しているように見えました。でも「訳の分からない相手とケンカしないようにしているんだ。」であれだけウケるのはさすが霧矢です(^_^;)。
            </p>
            <p>
              <strong>西條三恵</strong>は去年よりもさらに垢抜けて(^_^;)、個性的な型の黒いドレス(たぶん今回の新調だと思う)も良く似合っていたのに感心。りかちゃんとのタンゴシーンはため息ものでした。やはりこの公演の一番の見どころは、二人のタンゴですね。
            </p>
            <p>
              <strong>叶千佳</strong>のリリアナは当たり役で、今回も可愛い。<strong>美原志帆</strong>は前回も感じましたが、エバに関しては、ちょっと大人しすぎると思います。
            </p>
            <p>
              その他では、バックで踊っていた<strong>越乃リュウ</strong>が、更に二枚目度を増していて目立ちました。
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
