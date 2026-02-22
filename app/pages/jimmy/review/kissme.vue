<script setup>
const teamProps = ref({ team: "sonota" });
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
              キス・ミー・ケイト
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                梅田コマ劇場公演・8/3～8/29
              </p>
              <p>
                <strong>「キス・ミー・ケイト」</strong
                >、素晴らしかった！！&emsp;<strong>一路真輝</strong>好き、そして「エリザベート」からすっかり<strong>鈴木綜馬</strong>好きにもなった私には、堪えられない舞台でした(^_^;)。<br />
                以前観た一路さんの<strong>「DIVA」</strong>でも思ったのですが、<strong>一路さんと綜馬さんの阿吽の呼吸</strong>が、ホントに気持ち良いですね。
              </p>
              <p>
                昔、<strong>宝塚で上演されたものも観ている</strong>ので、ミュージカル・ナンバーはほとんど聞き覚えがあり、どれも素敵な曲ばかり。聞いているだけで胸が弾みます。<br />
                一路さんももちろん良かったですが、中ではやっぱり綜馬さんの<strong>「ソウ・イン・ラブ」</strong>。ハートを持って行かれてしまいました(^_^;)。<br />
                「TOO Darn
                Hot」を、<strong>「クソ暑い」</strong>と訳して歌っちゃうのは、イマイチかっこ悪いと思いましたけれど～。
              </p>
              <p>
                <strong>なおちゃん(伊織直加)</strong
                >はとても可愛かったです。女優になると、<strong>改めてキレイな人だったんだなぁ・・</strong>と思いました(^_^;)。キュートな役柄がとても良く似合っていましたよ。<br />
                そして<strong>赤坂晃</strong>さんも、舞台で観たのは初めてでしたが、上手ですね～。それで、あれだけ二枚目なのだから、舞台で活躍するのも良く分かります。特に、<strong>歌が上手い</strong>のに驚きました。
              </p>
              <p>
                宝塚版と印象が違うな・・と思ったのは、まず<strong>ロイス(伊織)</strong>の人柄。<strong>梢真奈美</strong>さんは、もう少しビルに手を焼いている<strong>しっかりもののお姉さん</strong>みたいな感じだったのではないかと思うのですが、なおちゃんのロイスは、<strong>ロイスの方が手に負えない感じ</strong>で(^_^;)。でも、元はきっとなおちゃんの方が近いんじゃないのかな？
              </p>
              <p>
                あとラストが、<strong>ひびき美都</strong>さんのリリは、<strong>「女はひざまずいて大人しくしていましょう」</strong>という歌のままの、大人しい～女性になってしまって、それが今の時代と合わないな・・というか、<strong>古いミュージカルなんだな～</strong>、という感じがしたのですが、一路さんはそう舞台で歌っているものの、<strong>「やっぱりあなたが好きだから戻ってきたわ」</strong>っていうリリの自主性が見えて、ひざまずいているのは綜馬さん。その横でガッツ・ポーズしたりするんですよ！&emsp;それがすごく今の私が観ても共感できて、気持ちよかったです。
              </p>
              <p>
                宝塚版を観たのは相当昔で(和央ようかさんの初舞台ですから)、その時の私と、今の私は全然違うので、それによる解釈の違いもあると思うんですけれど。<br />
                それに、元は、宝塚版のままの演出だったのかもしれないですけれど。<br />
                それが何か古い作品だというのを感じさせない、<strong>一路さんにちゃんと合った、今の作品になっている</strong>ような気がして、嬉しい驚きでした。
              </p>
              <p>
                他のメンバーももちろん良かったですが、やっぱり<strong>主演が上手いに越した事はない</strong>です。そういう意味で、とても<strong>レベルの高い公演</strong>だと思いました。<br />
                チケット代が高くなければ(^_^;)、もう一度観たい位。皆様も余裕があれば、ぜひ観てみて下さいね。
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
