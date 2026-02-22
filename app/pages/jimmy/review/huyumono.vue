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
              冬&emsp;物&emsp;語
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                花組バウホール公演・３／４～１４
              </p>
              <p>
                一幕のラスト近く、降りしきる雪の中、<strong>熱唱する春野寿美礼に感動</strong>！！&emsp;歌で盛り上げられるスターって、最近少ないじゃないですか(^_^;)。貴重だわ～。<strong>この場面を見せて頂けただけで、十分春野初主役を観に来た価値はあった</strong>と思います。
              </p>
              <p>
                又、二幕の<strong>遊女姿の美しさ</strong>も必見！！&emsp;台詞の声も全く違和感なく、<strong>今すぐトップ娘役でもできそう</strong>(^_^;)な位の素晴らしさです！！&emsp;男役にあれだけ完璧な娘役を見せられてしまっては、娘役たちは形なしですね(^_^;)。
              </p>
              <p>
                と、春野のスター性を十分再認識させてくれた「冬物語」。演出は昨年処女作「Endless
                Love」を発表したばかりの<strong>児玉先生</strong>。その「Endless
                Love」が着眼点は面白かったけど、ちょっと・・笑える作品だっただけに(^_^;)、今回はいかに？&emsp;と期待と不安の入り交じった状態での観劇でしたが・・。
              </p>
              <p>
                まず一番重要なはずの、<strong>主人公のお人柄が変</strong>(^_^;)！！&emsp;原作の「冬物語」の内容を知らないので、どこまで原作に合わせた為の無理なのか分かりませんが、勝手に一人で嫉妬に怒り狂い、友人に切り掛かり、妻を幽閉し、(過ってですが)息子を殺してしまう主人公って一体・・(^_^;)。これを、ちょっと精神が病んでいたのだと理解すると、そんな人がその後16年間も、歌舞伎界で立派に舞台を勤められるのかどうか・・？&emsp;これを、息子の死によって目が覚め、気持ちを入れ替えたと理解すると、どうして16年間も妻を隠しておく必要があるのか・・？
              </p>
              <p>
                又、<strong>歌舞伎のマネを、経験のない若手に正面からさせてしまう</strong>度胸というか、何というか・・(^_^;)。過去、歌舞伎の一場面を盛り込んだ舞台に「雪之丞変化」があり、その時一路真輝が少し歌舞伎のマネをするのでさえ、大変な挑戦に思われました。それなのに・・、あれを経験のない若手に上手く演れなんていう方が無理！！&emsp;出演者には大変勉強になったでしょうし、実際健闘していたとは思いますが、技術のアラが見えて仕方がありませんでした。
              </p>
              <p>
                実験作として、<strong>着眼点の面白さ</strong>は評価できるし、どこかの大ベテラン作家ではなく(^_^;)、<strong>期待の新人演出家だと思うと、これからがとても楽しみ</strong>ではあります。でも今の時点では、普通にやれば出演者が素敵に見えるような<strong>「スターを助ける」</strong>作品ではなく、出演者の<strong>「スター性に助けられている」</strong>作品だと言わざるを得ません。これからに期待しています。
              </p>
              <p>
                <strong>瀬奈じゅん</strong
                >は、「松の廊下」高師直役での、男らしい姿や目線など、とてもかっこ良いのですが、まだまだ立ち姿が甘く、声に可愛らしさが抜けないのが非常に残念。ここさえなんとかなれば、大人っぽい容姿の二枚目だけに、大化けするのに、と思うと勿体無い～！！&emsp;ぜひぜひ、がんばって欲しいです！！
              </p>
              <p>
                <strong>沢樹くるみ</strong
                >は台詞の声が美しく、気迫のこもった演技に圧倒されましたが、富五郎と伊左衛門が取り合った女性だと思うと、もっと華やかさが欲しいです。
              </p>
              <p>
                <strong>彩吹真央</strong
                >は、二幕で春野の相手役という非常においしい役。台詞をキリリと決めてくれて、爽やかでした。雪組での渋いイメージに比べ、若手らしさも出てきたのが良いですね。
              </p>
              <p>
                他では、吉次の<strong>麻園みき</strong>が控えめに、でも上手い所を見せてくれて良かったです。
              </p>
              <p>
                ちょっと辛口になってしまいましたが、花組期待の若手の熱演が見られるとあって、劇場は満員。観客の反応も上々でしたよ。世の中が不景気な中、確実に客を呼べるトップスターの舞台ではなく、こうして<strong>若手の演出家、スターの舞台を上演してくれる歌劇団の姿勢は嬉しく、応援したいです</strong>。続くシェイクスピアシリーズ、楽しみにしています。
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
