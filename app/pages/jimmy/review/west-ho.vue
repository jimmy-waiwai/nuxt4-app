<script setup>
const teamProps = ref({ team: "star" });
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
              WEST SIDE STORY
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組大劇場公演・２／１９～３／２９
              </p>
              <p>
                いや～、<strong>のるさん(稔幸)の勝利</strong>です！！&emsp;参りました、ごめんなさいっ(^_^;)！！
              </p>
              <p>
                と、言うのも、新生星組で再演と聞いた時には、<strong>「あのメンバーでＷＳＳはないだろう～！！」</strong>と、スターの個性を無視した、話題先行の無茶苦茶な計画に、我が耳を疑った程でしたもの。
              </p>
              <p>
                でも、良かったのです。何がって、まず、<strong>のるさんのトニー</strong>が！！&emsp;<strong>これ程、トニーが似合っちゃうとはね～</strong>、恐れ入りました(^_^;)。長～い足にジーンズ、金髪が良く似合い、歌ものびやかで、とっても甘い二枚目に仕上がっていました(^_^;)。表情も豊かで、気持ちが良く伝わってきましたね。実力があるからこそ、ここ一番の底力が違うんだぞ、って所を見せて頂きました(^_^;)。
              </p>
              <p>
                そして<strong>ぶんちゃん(絵麻緒ゆう)</strong>。始めはベルナルドを演るのかと思って驚きましたが、<strong>リフで正解</strong>でしたね～。少年役が良く似合い、とっても可愛かったです。冒頭のダンス場面でも、純粋でキラキラした表情が華やかで、一際目立ちました。のるさんに甘える弟分、という雰囲気もピッタリ(^_^;)。
              </p>
              <p>
                <strong>ゆりちゃん(星奈優里)のマリア</strong
                >も、良く健闘していたと思います。トニーに出会うまではキャピキャピした女の子、という感じだったゆうこちゃん(風花舞)とは違い、内気で大人しい少女、という感じでした。ゆうこちゃんの様な迫力がない分、トニーとのシーンでのムードが良く、歌は、ミュージカルのヒロインだと思うと物足りないですが、とても優しい声でした。
              </p>
              <p>
                <strong>ベルナルド</strong
                >に抜擢の<strong>彩輝直</strong>は、やはりりかちゃん(紫吹淳)程の迫力はありませんが、リーゼントにジーンズが良く似合ってかっこ良かったです。<strong>アニタの羽純るいは</strong>見ていてスカッとする上手さで、色気もあり、大拍手ですね。
              </p>
              <p>
                この主要な五役が予想以上に良く役にハマってくれたおかげで、バランスが良く、純粋に作品を楽しむ事が出来ました。<strong>リフとベルナルドが無理なく少年らしくて(^_^;)、決闘騒ぎもまだまだ成長していない子供の喧嘩</strong>、という感じだったのが、生々しくなくて、月組より良いと思った一番のポイントかも(^_^;)。
              </p>
              <p>
                他ではグラジェラの<strong>妃里梨江</strong>が、千紘れいかの様なキレた面白さはないですが(^_^;)、とっても大人っぽくてキレイでした。<strong>秋園美緒</strong>もコンスエーロは迫力あるし、エトワールもさすがの上手さ。<strong>美椰エリカ</strong>がエニーボディズに、フィナーレでは中心で踊ったりと大活躍でしたね。少年達も良くまとまっていました。
              </p>
              <p>
                今回の成功には、月組とは違い、フィナーレを始めとして、<strong>演出に随分現地スタッフの歩み寄りが見られた</strong>事が大きかったと思います。本当、初めからこうしていて欲しかったです。<strong>フィナーレ</strong>はほんの少しでしたが、洗練されていて良かったです。ロケットやパレード等も、従来にとらわれない振付けで、新鮮でした。大階段のデュエットも、このカップルにピンクの衣装？！&emsp;というイメージを払拭するさわやかさで(^_^;)、素敵でしたね～。今までの濃すぎた部分がすっかり削ぎ落とされて(^_^;)、すっかり甘～い二枚目に変身してしまったのるさんに、惚れなおしましたよ(^_^;)。
              </p>
              <p>
                新生星組、なかなか良いです！！&emsp;ＪＩＭＭＹ同様の気持ちで公演を観るのをためらっている方、これは、観ておくべきですよ～。
              </p>
              <p :class="textTitle">
                (満足度&emsp;★★★★<span class="text-gray-400">★</span>)
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
