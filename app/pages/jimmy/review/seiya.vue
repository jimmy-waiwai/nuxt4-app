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
              聖 夜 物 語
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組ドラマシティ公演・１２／２１～１２／３０
              </p>
              <p>
                私にとって、今年の見納め、<strong>「聖夜物語」</strong>を観てきました！！
              </p>
              <p>
                プログラムの<strong>草野先生</strong>のお言葉通り、<strong>のるさん(稔幸)のトップ披露</strong>と、<strong>今年の締めくくり</strong>の、初めと終わりの両方を兼ねたこの公演。年忘れにふさわしい、気軽に楽しめる作品でしたよ(^_^;)。
              </p>
              <p>
                <strong>元気で楽しいのるさん</strong
                >が好きな私にとって、今回の作品での役柄は、<strong>とっても見たかったタイプ</strong>(^_^;)。三役を自在に演じ分け、しかもどのキャラクターも魅力たっぷりで・・、<strong>上手いです、本当</strong>(^_^;)。二部のショー場面で、なつかしい<strong>ピッピちゃんの衣装</strong>(ピンクのミニスカート。「ラ・パッション」というショーで杜けあきさんが着ていたのですが・・古くてすみません(^_^;))を着たのるさんが可愛かったです～、足が長いです～。出番が短かったので<strong>アンコールしたかったくらい</strong>(^_^;)。
              </p>
              <p>
                それだけに、物語が<strong>もっとコメディに傾いても良かったのになぁ</strong>、と思いました。震災を取り入れているのも・・。もう、あまり目くじら立てる気もありませんが、冒頭、仲間が下敷きになったと子供が泣くあたりの件は、作品がコメディだけに、少し抵抗がありました。
              </p>
              <p>
                <strong>星奈優里</strong
                >は今回は大人しめでしたが、ラストの芝居が良かったです。<strong>彩輝直</strong>はミュージカルナンバーを歌う所が、ちょっと不安定でしたが、後は華やかで可愛らしくて、頼もしさが増したような気がします。ギャングがとっても似合いそうな<strong>音羽椋</strong>が、今回は純二枚目の青年をしていましたが(^_^;)、なかなか若々しくて良かったです。ダンスの動きの良さには、思わず目が引き付けられます。
              </p>
              <p>
                他では<strong>朋舞花</strong>が素晴らしく面白かったです！！&emsp;惚れ直しました(^_^;)。子分の<strong>大洋あゆ夢、司祐輝</strong>も、迫力たっぷりでかっこ良かったです(^_^;)。後、<strong>羽純るい</strong>がキレイで、歌が上手くて、良いですね～。
              </p>
              <p>
                今日はアンコールで<strong>「のる、がんばれよ！！」</strong>なんて、ちょっと恐い男性の声がかかり、のるさんはボスの声で「ありがとうございます」って茶目っ気たっぷりに答えていました(^_^;)。大劇場トップ披露作が「WEST
                SIDE
                STORY」なのは・・、不安ですが(^_^;)、<strong>新生星組、のるさんもイキイキしていて、メンバーもなかなか個性派、美形が多くて、魅力あるなあ</strong>と思いました。これからが楽しみです。
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
