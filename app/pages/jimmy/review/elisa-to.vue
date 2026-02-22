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
              エリザベート
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">帝国劇場・6/6～8/30</p>
              <p>
                <strong>一路真輝</strong
                >のエリザベート。戴冠式の場面のキリリとした気品、目線の強さが印象的で、一路さんの良さを一番感じました。衣裳も外部の舞台にしてはどれもとてもキレイでしたが、中でもこの場面のブルーのドレスが一番似合っていたような気がします。後は、一幕ラストの歌い上げがエリザベートになっていて、バッと扇を返す所も強くて良かったです。また、宝塚バージョンにはなかった場面では、詩を書きながらマックスの亡霊と「パパみたいに、なりたかった・・。」と歌う所に感動しました。
              </p>
              <p>
                歌ではフランツの<strong>鈴木綜馬</strong>との「夜のボート」が良かったです。鈴木さんはとても歌の上手い方ですね～。メンバーの中では一番だと思いました。「私だけに」はコンサートで聞いた時の方が良かったと思ったのですが・・？
              </p>
              <p>
                トートの<strong>内野聖陽</strong>。私、トートに関しては思い入れがあるので、多分ダメだと思うだろうな～、と思っていたのですが・・素敵でした～。もともと「ふたりっ子」の時からかっこ良い～と思っていたので、好みなのだと思うのですが(^_^;)、ムードがあって良かったです。<strong>トートダンサー</strong>の皆様もセクシーでかっこ良かったです。最後のダンスの辺りで、階段からバラバラと流れてくる(他にどう表現したら良いんだろう・・)演出が不気味だけど・・美しかったですね。
              </p>
              <p>
                子ルドルフの<strong>小野泰隆</strong>、ルドルフの<strong>井上芳雄</strong>も見た目も美しくてピッタリでした。井上はすごい人気で、「闇が広がる」の拍手はアンコールを除けば一番大きかったかも。
              </p>
              <p>
                <strong>マダム・ヴォルフのコレクション</strong
                >の迫力はさすがで、宝塚の娘役では表現できないですね。
              </p>
              <p>
                けれど、例えば二幕のエリザベートが倒れる理由。<strong>「美貌を保たなければ生きていけない→過度のダイエット」</strong>が宝塚版の理由です。それが、今回は<strong>「性病をうつされた」</strong>となっています。それが現実で、原作のウィーン版も(知らないのですが)そうなっているのだろうと思います。<br />
                でも、美しくない部分は真綿にくるんで、精神的な想像にまかせる宝塚の演出が好きだな～、と、改めて<strong>小池先生の宝塚化脚色の上手さ</strong>を感じ、<strong>自分が宝塚好きである事</strong>を感じました(^_^;)。
              </p>
              <p>
                私が観た日は会場が明るくなってからもアンコールがあって、登場した一路さんの手に内野さんがキスするサービス(?)があって、会場中「きゃ～」と絶叫でした(^_^;)。私も一緒に叫んでしまいましたよ。いいな～やるな～内野さん・・(^_^;)。
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
