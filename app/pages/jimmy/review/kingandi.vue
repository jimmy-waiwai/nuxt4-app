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
              王様と私
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                飛天・７／５～７／３０
              </p>
              <p>
                むか～しからの一路さんファンの私ですが、現在の宝塚の方に力が入っているので、<strong>なるべく外部の舞台には手を出さないことにしている</strong>んです。だって、お金が続かないんだもの・・(^_^;)。
              </p>
              <p>
                でも、やっぱり一路さんだもの、と、宝塚ファンには<strong>とっても痛い12000円</strong>を払って(^_^;)、飛天へ行って参りました。
              </p>
              <p>
                もぅ、すっごく良かった～。めったに泣かないＪＩＭＭＹですが、<strong>最後には涙が止まりませんでした～</strong>(T_T)。
              </p>
              <p>
                まず、<strong>一路さん</strong>が良いっ(^_^;)。<strong>現役の頃と全く変わらぬ、美しい歌声！！</strong>&emsp;男役の頃よりずっと肩の力が抜けて、自然に「お母さん」として舞台に立っているのが不思議(^_^;)。でも、<strong>オフのすごーく優しそうで、知的で、上品な一路さんのイメージが生かされていて、ピッタリ合っていますね</strong>。さらに、<strong>おちゃめな一路さんの面も出ていて、とってもチャーミング</strong>(^_^;)。ステキでした～。<strong>女優になった一路さんに、ここまでウットリできるとは・・</strong>、って感じです。
              </p>
              <p>
                そして、<strong>びっくりしました、高嶋(兄)さん</strong>(^_^;)！！&emsp;初舞台だったんですよね、「王様」が。<strong>上手でした、すごく</strong>。大阪公演までは丸刈りでなかったそうですが、<strong>丸刈り以外は考えられない位、ハマってましたね。迫力ありました。あのギョロッとした目が、効いていましたね。</strong>表情を見ているだけで、王様の考えが、オペラグラスなしでも(^_^;)、はっきりわかるんです。
              </p>
              <p>
                正直、何で高嶋(兄)なの～、ヤダ～、とか言っていた私(^_^;)。何となく、テレビで見るイメージで、今まであまり好きではなかったので、<strong>ここまで彼を褒めている自分が不思議</strong>です(^_^;)。舞台向けなんじゃないかなぁ～。
              </p>
              <p>
                他では、<strong>チャン夫人</strong>の優しさと、<strong>第一王子</strong>を演っていた男の子のラストの演技に泣かされました(T_T)。
              </p>
              <p>劇中劇のダンスも迫力ありましたね。</p>
              <p>
                <strong>やっぱり良い作品ですよね～</strong
                >、何度も再演されるだけのことはあります。
              </p>
              <p>
                <strong>宝塚も良い作品やってよ～</strong
                >、と、ついつい<strong>普段のぐち</strong>が出てしまう私達でした(^_^;)。
              </p>
              <p>
                帰りにポスターを見かけたのですが、来年東京で「南太平洋」を一路さんがされるようですね。飛天にも来るかしら？
              </p>
              <p>
                これは、<strong>これからも一路さんのミュージカルだけは、見に行かなくてはならないな～</strong>、と心に誓った私です(^_^;)。
              </p>
              <p>
                <strong>アンコール</strong>での、<strong
                  >堂々とした一路さんの「Shall we dance ?」の歌唱</strong
                >。そして、<strong>華やかな高嶋さんとのデュエット</strong>は、本当に<strong>何度でも見たくなる楽しさ</strong>でした(^_^;)。もうどうぞ、ライフワークにでも何でもしちゃって下さ～い！！
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
