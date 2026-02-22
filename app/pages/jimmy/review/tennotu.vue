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
              天の鼓
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                花組&emsp;シアター・ドラマシティ12/17～29
              </p>
              <p>花組ドラマシティ公演「天の鼓」、12/18に観てきました!</p>
              <p>
                作・演出は児玉先生。物語はまずまず。装置や照明がきれいでした。<br />レインボーの照明と共に虹人(春野寿美礼)が登場したり、天上人となって登場する時の、虹人の衣装や鬘が絢爛豪華だったりするのは、ちょっとやりすぎで面白かったですけれど(^_^;)。
              </p>
              <p>
                虹人の春野。ポスターを見た時から思っていましたが、日本物の装束が良く似合い、とてもきれい。<br />私は自信満々に演技をしている時の春野が苦手なのですが(もうそれが持ち味なのだと諦めもつきましたが^_^;)、今回は若者の役を素直に肩の力を抜いて演じていたので、全体的には嫌悪感なく観る事ができました。
              </p>
              <p>
                ただ、御簾の内の照葉(ふづき美世)に思いを打ち明け、思いを遂げる幻想場面のあたりや、その後の樹(未涼亜希)と顔を合わせる件などでも、全く苦悩や気まずさが表情に表れないのが、春野らしいけれど、物足りないです。
              </p>
              <p>
                照葉のふづき。御簾の中にいたり、笠をかぶっていたりする時間が長く、アラが見えにくいのもあって、こちらも特に今回は嫌悪感なく見る事ができました。
              </p>
              <p>
                帝の彩吹真央。管絃マニアの我が儘ぼっちゃん。帝なのに・・そんな素性の分からない田舎の青年の、ましてやプライベートの事なんて、ほっておいてやんなよ・・と思わずつっこんでしまいますが、わざわざ家臣やまわりの人間を使っていじわるをする悪者っ振りが、やたらと面白かったです(^_^;)。<br />悪役・・なんですよね?&emsp;決して下手ではなく、安心して観ていられるのですが、何か似合っていない気がして、居心地が悪かったです。怖さとか、威圧感がないんですよね。悪役を演るには。<br />ラストの北斗(珠まゆら)に鼓を返す件が、観ていてホッとしました。
              </p>
              <p>
                伊吹の遠野あすか。上手くて特に文句なしです。<br />物語の序盤で、樹は伊吹が好きそうだし、虹人が照葉を好きなら、相手を交換すれば万々歳だね、と思ったのですが、そんなハッピーエンドにはならなくて・・(^_^;)。最後まで報われなくて、役としては可愛そうでした。
              </p>
              <p>
                樹の未涼。虹人より年上、しかも虹人が赤子の時に蔵に火をつける位だから、10才近くは年が離れている・・?&emsp;と思うとさすがに苦しいものはありますが(^_^;)、揺れ動く胸の内が一番良く伝わってきたのは彼女で、感心しました。<br />演技派ですね。かなり小柄なのが惜しいですが。
              </p>
              <p>
                他では響の花純風香。演技をしっかり観たのは「猛き黄金の国」新公以来のような気もするのですが(^_^;)、その時と同様、思った以上に落ち着いていて上手でした。これからが楽しみです。<br />伊尹の悠真倫は、軽妙なお公家振りで、これも気持ちの良い上手さ。<br />博雅の桐生園加は、真摯な家臣役を、素直にキレイに演じていました。
              </p>
              <p>
                若手では樹の子供時代の華耀きらりが美しく、大臣の扇めぐむの奏上台詞が良い声でした。
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
