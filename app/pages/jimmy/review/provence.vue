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
              プロヴァンスの碧い空
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                月組ドラマシティ公演・１２／１８～２８
              </p>
              <p>
                プログラムの太田先生の言葉にある通りケレンも無く、主演<strong>紫吹淳</strong>の演じるのは、女に溺れ、流されてしまうだけの決してかっこ良くない人物。しかも、その恋も全うする事なく、結局男の友情が勝ち、男は明日に向かって歩き始める・・。
              </p>
              <p>
                <strong>アンドレ(紫吹)</strong
                >も<strong>フィリップ(初風緑)</strong>も、それぞれ血の通った魅力ある人物だったけれど、紫吹の個性が超越しすぎているせいか、二人が心を許した対等な親友には見えず、冒頭の親友の誓いが大きな楔であるはずが、それ程感じられなかったのがまず辛い。又、アンドレの<strong>ジェルメーヌ(美原志帆)</strong>に対する没頭振りがすさまじく、終盤にはお互い心中しそうな緊迫感があり、そこがとてもステキだっただけに、最終的にアンドレにとって、その恋よりも友情が勝ったのが不思議でした。
              </p>
              <p>
                現実はそんなもの、という、これは真実を描いているのかもしれません。でも、あまりにも淡々としすぎて大きな感動に欠け、物足りなく感じられました。
              </p>
              <p>&emsp;</p>
              <p>
                <strong>紫吹</strong
                >は前半の学生でも若々しさと脆さが良く出ていて、美しい夫人に憧れるというのも無理がなく、情熱にまかせて溺れていくという青年を、とても魅力的に演じていました。ラブシーンはムード満点。通うには退屈な物語ではないかと思うのですが(^_^;)、この為に通えると思っているファンは多いはず。
              </p>
              <p>
                <strong>美原</strong
                >は登場から艶やかに美しく、化粧もいつもより濃いめに描いて、はっきりと華やかさで押せていたのが嬉しい。紫吹ともお似合いでした。後は、いつ遊び心から、アンドレ以外の相手では救われない程の本気の恋に変わったのか、その辺りの女の心の動きが見えない所が弱みですが・・、とにかくはヒロインとして十分な華やかさを見せてくれて良かったです。
              </p>
              <p>
                <strong>初風</strong
                >は純粋すぎて嫌みにも見える好青年、という太田先生らしい難しい役柄がはっきりと表せていて、さすがに上手い。
              </p>
              <p>
                他、芝居では<strong>叶千佳、大樹槙</strong>が目に付きました。<strong>鳴海じゅん</strong>等、若手まで歌に活躍の場が多かったのは嬉しいですね。でも、全体に出演者の声が小さいのか、マイクのボリュームが足りないのか(^_^;)、出演者に絶叫させがちな太田先生にしては(^_^;)、迫力のない芝居で、どうしたんだろう？&emsp;と思いました。
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
