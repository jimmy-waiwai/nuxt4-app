<script setup>
const teamProps = ref({ team: "snow" });
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
              アンナ・カレーニナ
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                雪組・バウホール公演・・8/4～13
              </p>
              <p>
                文句なしです。雪組バウホール公演<strong>「アンナ・カレーニナ」</strong>。
              </p>
              <p>
                演出は<strong>植田景子先生</strong>。相手役に今トップに一番近い娘役の<strong>紺野まひる</strong>を配し、雪組自慢のホープ<strong>貴城けい、立樹遥、音月桂</strong>を従えた、<strong>朝海ひかる</strong>初単独主演作。悪い訳がないと思っていましたが、本当に見応えある良い作品でした。この公演が短期間のバウホール作品であるのが勿体ない！&emsp;こういう作品こそ、大劇場で沢山の人に観て欲しいと思います。
              </p>
              <p>
                前主演作「SAY IT
                AGAIN」がイマイチで、私の中では株が下がり気味だった主演の<strong>朝海</strong>。今回も、正直に言うと植田景子先生の作品と、周りの雪組若手を楽しみに観に行ったようなものだったのですが(^_^;)、今回のヴィロンスキー伯爵は良かったです。今まで評判が高かった女役でも、中性的な役でもなく、男役として、堂々とした主役振りだったと思いました。
              </p>
              <p>
                タイトルロールの<strong>紺野</strong>も、今の紺野にこの役は苦しいのでは・・、と思っていたのですが、美貌を生かして落ち着いて演じていて、二人の男性に愛される女性として、説得力がありました。
              </p>
              <p>
                周りも期待通り良かった！&emsp;まずカレーニンの<strong>貴城</strong>。プログラムの写真を見た時は、髭が見慣れないもので「ぷっ」と笑っちゃったりしたのですが(^_^;)、実際の舞台では髭も違和感なく、高身長が生きて包容力がある大人の男性になっていて、ステキでした。
              </p>
              <p>
                競馬場の場面の歌が切なく、迫力もあって、場面を盛り上げていましたね。瀕死のアンナに会いに行く場面も感動的で、一番共感できる役だったかもしれません。
              </p>
              <p>
                朝海、紺野、貴城と並ぶ<strong>「愛の十字架」</strong>の場面は、植田景子先生のこだわりと、三人の美しさが生きて大満足。宝塚はこうでなくっちゃ！&emsp;と思いました(^_^;)。
              </p>
              <p>
                <strong>立樹</strong
                >はコンスタンチン。持ち前の屈託のない明るさが役にピッタリ。キティにプロポーズする為に出かけた舞踏会で、衣装が似合っていると褒められて<strong>「よっしゃぁ～」</strong>と小さくガッツ・ポーズ(?)するのが可愛かったです(^_^;)。そのキティ役は<strong>舞咲りん</strong>。大きな役を観るのは初めてでしたが、可愛らしくて、台詞や歌もとても上手くて良かったです。
              </p>
              <p>
                朝海の友人役に<strong>音月</strong>。軍服姿がまだまだ板についていない気はしますが、台詞は上手くてちゃんと朝海のライバル役に見えました。ラストの台詞も良かったです。
              </p>
              <p>
                他で挙げたいのは<strong>美穂圭子</strong>。しっかりと芝居を締めていました。<strong>山科愛</strong>は子役続きですが、これだけ重要な役だと他の人では考えられませんね。
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
