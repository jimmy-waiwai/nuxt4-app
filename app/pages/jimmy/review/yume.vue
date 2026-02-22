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
              夢・シェイクスピア
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組バウホール公演・８／７～２２
              </p>
              <p>
                物語としては・・大した事ない話で(すみませんっ)、売れない役者のピーターが、アマチュアのメンバーに演技を教え、途中市長の我がままで上演中止になった所を、公園で上演して大成功する・・という話。<strong>もう少し、ピーターの心の成長とか、ミリーとの愛とか・・しっかり書いて欲しかった気もします</strong>が(^_^;)、腹の立つような物語でもなく、<strong
                  >純粋にがんばっている役者達がフレッシュで、後味は良かったです。</strong
                >
              </p>
              <p>
                ピーターの<strong>絵麻緒ゆう</strong>は、アマチュアの中に一人交じったプロ、という設定がピッタリで、先生らしい頼もしさと、スターらしいムードが際立っていました。長めの髪とカジュアルな服装が甘い容姿に良く似合っていて、なかなか素敵(^_^;)。ぶんちゃん(絵麻緒)も大人になったなぁ・・と(失礼ですみません)、見直しました(^_^;)。
              </p>
              <p>
                ミリーの<strong>秋園美緒</strong>はとにかく歌声がキレイ。冒頭の田舎者っぽい感じも(^_^;)上手いです。でもちょっと引き過ぎているように感じました。もっと迫力を出せる人だと思うので。
              </p>
              <p>
                ビルの<strong>音羽椋</strong>は、ポスターの写真があまりに可愛く写っていたので、期待していたのですが、蓋を開けてみるとやっぱりいつものおとこちゃん(音羽)で(^_^;)、粗野な腕白坊主っぽいパックでした(^_^;)。でも、何か愛嬌があって、面白い人ですね。バレエの動きはさすが&emsp;で、グラン・ジュッテが女性なのにとても高く飛べていたのに感心しました。でも、体型なのか姿勢なのか・・肩の辺りがちょっとすっきり見えないのが気になりました。直せるものなら、かなり印象が違ってくると思うのですが・・。
              </p>
              <p>
                他でも良い若手が沢山見られたのが収穫で、ブレントの<strong>水瀬あお</strong>は華やかな二枚目。セリーの<strong>琴まりえ</strong>もスタイルと動きがキレイで、今後が楽しみです。ヘンリーの<strong>椿火呂花</strong>も、可愛い顔と、ヒゲと、弾けた演技(演出ですが)のアンバランスさが面白くて目立ちましたね。それにしてもみきちゃん(真矢みき)にそっくり(^_^;)。<strong>涼紫央</strong>の棒読み芝居が、とても上手くて可愛かったです。優等生っぽいイメージがあったのが、ちょっと変わったかも(^_^;)。<strong>雪路歌帆</strong>も上手かったです。
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
