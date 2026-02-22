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
              The Wonder Three
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                雪組バウホール公演・６／１０～６／１３
              </p>
              <p>
                バウ・ワークショップ第３弾は、大売り出し中の雪組同期三人組、<strong>安蘭けい、成瀬こうき、朝海ひかる</strong>のリサイタル。本当に歌中心の、<strong>３人分の小さなコンサートをつなぎ合わせたような</strong>構成で、各々のファンにとってはたまらなく嬉しい内容になっていたのではないでしょうか。
              </p>
              <p>
                <strong>成瀬こうき</strong
                >コーナーはジャズ。大人っぽい容姿を生かしてまずは「Night and
                Day」をキザに。<strong>夢奈さや</strong>とのデュエットに、<strong>男役らしい立ち姿の良さ</strong>が生かされていました。
              </p>
              <p>
                <strong>朝海ひかる</strong
                >はラテン。登場では観客にカスタネットを叩かせたりして、ちょっと<strong>コミカル味を効かせた構成</strong>も良く、観客の心を掴んで、<strong>なかなかスターらしい華やかさを感じさせていた</strong>のには感心しました。
              </p>
              <p>
                <strong>安蘭けい</strong
                >はシャンソン。しっかりと歌を聞かせてくれて、やはり<strong>頼もしさでは一歩リード</strong>しています。
              </p>
              <p>
                各々の今までの舞台をスライドで紹介するコーナーでは、<strong>同期ならではの遠慮のないトーク</strong>も出たりして、楽しかったです。構成が全くヒネリのないものだったので、<strong>モロに各々の素の力が見える</strong>結果となり、良く言えばフレッシュ、悪く言えばまだまだ一人でショー場面をもたせるには、課題の見えた公演でした。でも、ファンとしては、非常に嬉しい公演だったし、各々にもとても良い経験になるのではないでしょうか。<strong>もっと色々な人で、このようなリサイタルを見てみたいな</strong>、と思いました。
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
