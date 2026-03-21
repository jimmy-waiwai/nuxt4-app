<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            美穂&emsp;圭子
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/07/09 up
            </p>

            <p>
              <strong>けいこさん(美穂圭子)</strong>、いきま～す！<br>
              歌手なのに、細身で背が高く、スタイルの良いけいこさん。今回の公演(<strong>「霧のミラノ／ワンダーランド」</strong>)では大人の女役として、一際存在感がありました。化粧をちょっとキリッとした感じに変えたのではないでしょうか。それが、トランプの黒のドレスに良く合っていました。芝居のカフェのお姉さんも素敵でしたね。
            </p>

            <p>
              けいこさんの初認識は、多分<strong>「エリザベート」</strong>だと思います。<br>
              当時はまだそれほど生徒隅々まで認識していなかったので、けいこさんの事もあまり意識はしていなかったのですが、あれから各組のそうそうたる歌手たちがこの役で歌っても、やはりけいこさんの<strong>「マダム・ヴォルフのコレクション」</strong>はすごく良かったと思います。
            </p>

            <p>
              彼女も最初からバリバリの歌手として活躍していた訳ではなく、徐々に歌声に磨きがかかり、それとともに活躍の場が広がってきた感があります。「おとめ」にエトワールがやりたいと書き続けていて、割と上級生になってからやっとその夢がかなったのを覚えています。確か、博多公演が初だったような気が・・。
            </p>

            <p>
              印象に残るのは、<strong>「Switch」</strong>。唯一の女役として参加したけいこさん。堂々と一つのミュージカルのヒロインとして存在できる実力を見せてもらえました。
            </p>

            <p>
              今現在、広～く宝塚を見渡して、一番好きな歌手は？&emsp;と聞かれたら、<strong>私ならけいこさんだと答える</strong>でしょう。<br>
              デビュー作(?)の「マダム・ヴォルフのコレクション」もそうですが、<strong>地声の歌</strong>が、宝塚では独特で、特に好きです。<br>
              「ON THE 5th」の<strong>「GOD Bless America」</strong>も、彼女の歌ありきの場面でしたね。
            </p>

            <p>
              かずみさん(森央かずみ)も退団して、学年的にもさらに重要なポジションになったのを感じます。<br>
              最近は芝居も頼もしく、安心して観ていられますし、これからもまだまだ雪組で活躍して欲しい女役さんです。
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
