<script setup>
const teamProps = ref({ team: "cosmos" });
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
              砂漠の黒薔薇
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宙組大劇場新人公演・1/18
              </p>
              <p>
                前回「激情」新人公演以来、私にとっては大注目の新人、<strong>久遠麻耶</strong>主演の宙組新人公演、観てまいりました！
              </p>
              <p>
                今回の久遠には見違える程の<strong>頼もしさ</strong>を感じました。まわり中上級生ばかりの配役だった前回とは違い、今回は新人公演の長の学年。「しっかりしなければ」という心境が良い方向に作用していたのではないかと思います。開演アナウンスはかなり可愛らしい声でハラハラしたのですが(^_^;)、実際の舞台は幕開けからしっかりとした男役の低い声が出ており、歌も十分及第点。実力的にかなり満足できる出来であったのが嬉しかったです。「この思いは何だろう」のようなラブソングでは、姿月あさとのような甘さや包容力にはかないませんが、特に13場の<strong>黒薔薇の扮装での銀橋ソロ</strong>は、堂々と歌い上げられていて、驚きました。
              </p>
              <p>
                衣装も良く似合っていて華やか。目が効くので、ついつい目ばかり見てしまいましたが、遊び人を演じながら時折本心を覗かせる時に見せる<strong>厳しい目線</strong>が特にステキ(^_^;)。台詞が明瞭で、二役の演じ分けがかなりクリアに見せられていたのが良かったです。<strong>演出</strong>もはっきり具体的には覚えていませんが、良い方向に変えていたと思います。鈴木先生の工夫があったのでしょうか。物語が本公演より分かりやすく、見ていて面白かったです。
              </p>
              <p>
                道化小屋の場面で衣装の隙間から出てくる時に、衣装にからまってなかなか出られなかったのが唯一のアクシデントで、客席から笑いが起こってしまって、私などは思わず<strong>「がんばれ！」ってこぶしを握りしめてしまった</strong>のですが(^_^;)、その後の芝居に動揺がなかったのも立派。終演後の挨拶もしっかりとしたものでした。
              </p>
              <p>
                以下の配役が前述のようにかなり代替わりしていて、メンバーを見た時には大丈夫かとかなり不安がありましたが、思ったよりも皆健闘していて、色々工夫も見られて面白かったです。
              </p>
              <p>
                マリヤーナ姫の<strong>遠野</strong>は、ドラマシティの時は少し個性的な顔に抵抗があったのですが、なかなかヒロインらしい華やかさがあって、芝居もちゃんと出来ていて良かったと思います。ヤワンの<strong>月船</strong>はまだまだ可愛らしく、押しは弱かったですが、ミスカー(美風舞良)やマルシナー姫(美羽あさひ)との芝居に二枚目らしいムードがありました。ゼリムの<strong>初嶺</strong>も伸び伸びとした芝居で好感が持てたし、歌も上手かったです。
              </p>
              <p>
                他では何といっても、<strong>久路あかりと苑みかげと毬穂えりな！！</strong>&emsp;ジャミラ妃の<strong>久路</strong>とカシム大臣の<strong>苑</strong>は、上手いうえに色気もあって、私には本公演以上でした。<strong>毬穂</strong>は冒頭の金の歌手等も上手かったですが、一座の芝居を色々工夫して盛り上げてくれていましたね。他の一座のメンバーも新人公演らしいアドリブを多々見せてくれていたのが嬉しかったです。そういえばジャミラ妃の侍女達も、楽しいアドリブを見せていました。
                正直、今回の新人公演メンバーに、ここまで盛り上げる余裕があるとは予想していなかったので(^_^;)、なかなか良いムードだな～、と感心しました。
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
