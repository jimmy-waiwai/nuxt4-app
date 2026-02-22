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
              桜吹雪狸御殿／ボンジュール・タカラジェンヌ
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">梅田コマ劇場・4/3～14</p>
              <p>
                梅田コマ劇場「桜吹雪狸御殿／ボンジュール・タカラジェンヌ」を4/4に観てきました！<br />今年で3回目のOG版「狸御殿」。昨年の2回目の公演は観なかったのですが、物語は2回目に近いそう。しかし、1回目の方が面白かったような気がします。<br />「OGが居並ぶ顔を観られればありがたい」座長芝居のようなノリを納得するならば、こんなものかな、と思いますが、そろそろ「狸」も卒業しても良いのではないかな、と思いました。<br />昨年の「シンデレラ」がOGのすごさを感じる良い公演でしたし、もっとまともな演目でも、見せられるのではないかな、と思います。<br />まぁ、同窓会だ、お祭りだ、と割り切るべきなのでしょうか・・？
              </p>
              <p>
                ショー「ボンジュール・タカラジェンヌ」は宝塚の名曲を集めたOGのTCAのよう(実際東京でやるんですよね・・OGのTCA)。<br />出てくるスターさんの代表作の曲を使った場面もあれば、「なぜこの曲？」という場面もあって、もっと懐かしいそのスターさんの代表作の曲を、厳選して持ってきて欲しかったな～、とも思いましたが、そうなると宝塚のイベントにゲスト出演された時といつも同じ曲になってしまうのかな(^_^;)。
              </p>
              <p>
                どう見ても宝塚が作った衣装を着たOGさん達。黒エンビで「すみれのボレロ」まであって驚きましたが、一発もののイベントと違い、ちゃんと練習できているせいか、若手のOGさんは現役の頃と変わらない姿でしたし、かなり懐かしいメンバーも、年々舞台に出る容姿のグレードが上がっている気がします。<br />年に一度のイベントとして定着してきていますし、OGさんもこの公演に向けて備えてこられているのかもしれません。
              </p>
              <p>
                出演者では、退団後初めて見た麻路さき。キレイでびっくりしました。<br />ディナーショーもされるそうですし、ちょっと磨いてこられたのかもしれないですが、お疲れの出ていた退団公演時よりも、ツヤツヤとお美しかったような気がしました。黒エンビもスーツも現役時代と変わらずバッチリ決まっており、「本当にお母ちゃんなんですか？」と思いながら見ていましたよ(^_^;)。
              </p>
              <p>
                後は毎度上手くて生き生きしていて目につく実力派の峰さを理。安奈淳も体調が悪かったとは思えない程の声量で歌っていました。昔のスターさんは歌の上手い人が多いです。
              </p>
              <p>
                湖月わたる、貴城けい、大和悠河の現役特出組は出番も多く、大活躍でした。湖月は元気で覇気があり、やはり一際華やか。大和は懐かしい「シンデレラ・ロック」のコスチュームで歌ったのが可愛らしくて良かったです。貴城がちょっと調子が悪かったのでしょうか？&emsp;歌に覇気がないと思いました。曲目も自分の作品のものがなかったのが「？」でしたけれど・・。<br />スーツでこのメンバーで「王家に捧ぐ歌」を熱唱されたのも・・やはり歌だけではあまり良くなくて残念でした。
              </p>
              <p>
                印象に残る場面としては、鳳蘭、瀬戸内美八、峰さを理、麻路さき、湖月わたるの歴代星組トップによる「セ・シャルマン」。<br />揃っている所が素晴らしいですし、星組男役らしく、濃くてステキでした～。<br />湖月もとても嬉しそうでしたね。
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
