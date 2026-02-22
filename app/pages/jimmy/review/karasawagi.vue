<script setup>
const teamProps = ref({ team: "moon" });
const textTitle = ref("text-slate-600");
if (teamProps.value.team === "flower") {
  textTitle.value = "text-pink-700";
}
if (teamProps.value.team === "moon") {
  textTitle.value = "text-yellow-700";
}
if (teamProps.value.team === "snow") {
  textTitle.value = "text-green-700";
}
if (teamProps.value.team === "star") {
  textTitle.value = "text-sky-700";
}
if (teamProps.value.team === "cosmos") {
  textTitle.value = "text-purple-700";
}
</script>

<template>
  <div>
    <NuxtLayout name="jimmy" :team="teamProps.team">
      <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
        <div class="w-48 flex-none pb-16 hidden lg:block">
          <JimmyMenu :team="teamProps.team" />
        </div>
        <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
          <div class="pt-8">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
              :class="textTitle"
            >
              から騒ぎ
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                月組バウホール公演・３／２０～４／４
              </p>
              <p>
                シェイクスピアシリーズ第二弾は、<strong>藤井先生の「から騒ぎ」</strong>。楽しい作品に仕上がっていましたよ。
              </p>
              <p>
                例によって原作を読んでいないのですが、物語は一幕、冒頭の辺りが一番ドタバタ感があって楽しかったです。二幕は、シェイクスピアらしい狂気、苦悩など、真に迫った演技が見られるのかな・・、と思わせておいて(^_^;)、意外とあっさり終わってしまったのが残念でした。もう少し<strong>ルージュ(叶千佳)</strong>の嫉妬の部分と、そこから<strong>ブルース(大空祐飛)</strong>を殺そうとする<strong>ロッキー(初風緑)</strong>の心の動きなどをしっかり見せて頂けると、もっと結末に感動できたのではないかな、と思います。別にコメディだから良いではないか、という気もしますが、所々に特有の重い台詞が出てくるので、消化しきれない部分がありました。もう一度見れば、もっと理解できるかも(^_^;)。
              </p>
              <p>
                ショーでお洒落な場面を作りだしている藤井先生らしく、ショーの要素も多く、ロープやゴム(?)を使ったダンスなど、面白かったです。
              </p>
              <p>
                難しそうな膨大な台詞を言い切った(^_^;)主演の<strong>初風</strong>と<strong>叶</strong>に拍手。<strong>初風</strong>はさすがに余裕があり、下級生揃いの舞台を纏めている感じがしました。歌声等に、少し元気がないような気がしましたが、調子が悪いのでしょうか？&emsp;<strong>叶</strong>は所々つっかえていたりもしましたが、パンチ力があり(^_^;)、鼻っ柱の強い女の子、というキャラクターがピッタリ。ダンスの出来る人だったと思うのですが、ドレスを着た時の姿勢が、すっきりしないのが気になりました。ミニスカート等はとても可愛くて似合っていましたよ(^_^;)。
              </p>
              <p>
                <strong>大空</strong
                >は冒頭の、わざとらしい位大袈裟な一目惚れっぷりが最高！！&emsp;笑わせて頂きました(^_^;)。<strong>星野瞳</strong>も、「控えめで純情な乙女」を徹底的にオーバーに演じて面白かったです(^_^;)。黙っていれば、結構美人なのに・・、上手いですよね～(^_^;)。
              </p>
              <p>
                <strong>霧矢大夢</strong
                >は悪役を一人で受け持ち、迫力ありました。フィナーレのタップも流石！&emsp;です。
              </p>
              <p>
                助演では、まずはやっぱり<strong>越乃リュウ</strong>。ダンディなお父様でした～(^_^;)。<strong>真山葉瑠</strong>も余裕たっぷり。<strong>鳴海じゅん</strong>が精一杯張り切っているのも可愛いです(^_^;)。
              </p>
              <p>
                若手は終始道化の化粧の為、顔が分かりにくいのが残念でしたが、霧矢中心のタップの場面も受け持った若手の<strong>紫城るい</strong>と<strong>北翔海莉</strong>が目につきました。<strong>紫城</strong>はその道化の化粧が一際似合っていて、妖しさもあってキレイ。<strong>北翔</strong>も二枚目になる予感がします(^_^;)。娘役では<strong>湖泉きらら</strong>がやはり可愛くて目立ちました。
              </p>
              <p :class="textTitle">
                (満足度&emsp;★★★<span class="text-gray-400">★★</span>)
              </p>
            </div>
          </div>
        </div>
        <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
          <JimmyReviewList :team="teamProps.team" />
        </div>
      </div>
      <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
        <JimmyReviewList :team="teamProps.team" />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
