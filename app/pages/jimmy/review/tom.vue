<script setup>
const teamProps = ref({ team: "flower" });
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
              トム・ジョーンズの華麗なる冒険
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                花組バウホール公演・9/9～19
              </p>
              <p>
                <strong>匠ひびき</strong
                >主演、「トム・ジョーンズの華麗なる冒険」を9/10、9/15の2回、観てきました。
              </p>
              <p>
                <strong>匠</strong
                >のトム。匠主演、太田先生演出のコメディ、と聞いて、<strong>「こんなチャーリー(匠)が観たいな～」</strong>と、下にも書きましたが(^_^;)、思っていた通りの役柄で大満足でした！&emsp;
              </p>
              <p>
                登場の白ブラウス姿から若くてキレイなのにビックリ。ベテランの域に入ろうとする専科の人には見えません(^_^;)。ダンスシーンも多く、常に軽やかに動き回るのが気持ち良いです。奔放で可愛い青年、というピッタリの役柄で魅力を発揮していました。
              </p>
              <p>
                歌や芝居はあまり上手い人ではないですが(^_^;)、私が観た2回共、膨大なテンポの速い台詞をノーミスで言い切っていたのに、かなりの意気込みを感じます(^_^;)。ナンバーも上手く作られていて、太田先生にも感謝！&emsp;ですね。
              </p>
              <p>
                久しぶりのヒロイン、<strong>舞風りら</strong>。ダンサー同士で、小柄で華奢な所も匠にピッタリでした。ダンスは勿論、歌も、芝居も、まずまず上手かったです。敢えて言うなら少し痩せすぎで、瑞々しさが失われている気がするので、もう少し取り戻して欲しいですね。
              </p>
              <p>
                ジョージの<strong>瀬奈じゅん</strong>。少し役不足な気がしますが、のびのびと友人役を演じていました。ブリフィルの<strong>麻園みき</strong>は、敵役らしい存在感がありましたが、思ったより台詞に上手さが感じられなくて残念。もっともっと美味しい役になる筈です。ドーリングの<strong>彩吹真央</strong>はちょっとした仕草で確実に客席から笑いをとっていて、改めて上手い人だな、と思うと同時に、人気あるな、とも思いました(^_^;)。
              </p>
              <p>
                狂言まわしのような役目も担って舞台を引っ張っていたのが<strong>箙かおる</strong>。最初はこの作品には重すぎる(濃すぎる)のでは(^_^;)？&emsp;と思ったのですが、さすがに上手くて、きっちり舞台を締めていました。<strong>邦なつき</strong>も生き生きしていて魅力あります。
              </p>
              <p>
                <strong>貴柳みどり、矢吹翔</strong
                >のキャラクターを生かした役作りも完璧(^_^;)。<strong>沢樹くるみ、彩乃かなみ</strong>もキレイで上手くて、非常に豪華な配役だと思いました。
              </p>
              <p>
                <strong>高翔みず希</strong
                >もほのぼのと楽しい。<strong>幸美杏奈</strong>は洒落た大人っぽい雰囲気はありましたが、トムがコロッと誘惑されるには色気不足かな(^_^;)。
              </p>
              <p>
                <strong>百花沙里</strong
                >は非常～に濃い役作りでしたが、今回の作品には面白かったです。トムとのやりとりや、妊娠騒ぎの辺りは作品中一番のヒットかも(^_^;)。<strong>桜一花</strong>のメイドも可愛かったです。
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
