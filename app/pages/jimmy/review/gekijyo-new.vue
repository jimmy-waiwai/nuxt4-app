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
              激&emsp;情
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宙組大劇場新人公演・７／１３
              </p>
              <p>
                11日、本公演の久遠麻耶を見ながら、こんな予感が頭をよぎりました。<strong>「新人公演を見ておかなければ、将来後悔する事になるような気がする！」</strong>と(^_^;)。そこで急遽、無理矢理スケジュールを空け、宝塚ＨＰの「チケット」コーナーでチケットをゲットし(譲って下さった方、メール下さった方、どうもありがとう。)、行ってまいりました宙組新人公演。
              </p>
              <p>
                <strong>結果は大当たり！</strong
                >&emsp;<strong>久々に心浮き立つ新人の登場</strong>にちょっぴり興奮気味です(^_^;)。
              </p>
              <p>
                さてその<strong>久遠</strong>。実際の所、絶賛される程上手かったか、というと、そんな事もないんですよね(^_^;)。立っているだけで文句なく男らしい姿月あさとに比べると、またまだ可愛らしさが抜けないし、実力的にも発展途上。でも色気ある目と甘～いマスクがとても魅力的で、これから人気が出そうな気がします(^_^;)。芝居ではプロローグ辺りは幼さが目につきましたが、だんだんと頼もしさを増して、後半、ジェラシーの場面辺りからは体当たりの大熱演で目が離せませんでした。数多い、しかも難しいであろうナンバーもまずまず歌えていたし、大きなミスがなかったのにも感心。これからの成長が非常に楽しみな男役になりそうです。
              </p>
              <p>
                カルメンの<strong>南城ひかり</strong>は、サバサバとした姐御肌っぽい雰囲気で、ホセをリードしている感じは良く出ていました。見た目も、花總まりにはかないませんが、他の娘役と比べるとやはりキレイ。でも、歌やダンスにかなり苦戦しているのが感じられました。改めて思いましたが、この役、相当難しいです。めちゃくちゃ良い女じゃないと、説得力がないんですよね(^_^;)。久遠のカルメンも見てみたかったな、と、ふと思ってしまいました(^_^;)。
              </p>
              <p>
                メリメ＆ガルシアの<strong>風輝マヤ</strong>。とても端正な顔立ちの人ですね。台詞も歌も安定していて、品の良さを感じました。エスカミリオの<strong>朝比奈慶</strong>。久しぶりに二枚目の朝比奈を見た、というか、これ程の二枚目は初めてのような気がするのですが(^_^;)、なかなかムードがあって良かったです。爽やかな湖月わたるとはかなり違った雰囲気でしたね。
              </p>
              <p>
                その他では、実業家の<strong>悠未ひろ</strong>がとにかく目立つ高身長だけでなく、スタイルも良く、歌もなかなか。ダンカイレの<strong>達つかさ</strong>が容姿で貫禄を出していて目立ちましたが、声が意外とこもりがちでした。フラスキータの<strong>菊穂りな</strong>が、久しぶりに見たら随分すっきりとキレイになっていて、頼もしかったです。ナザーロの<strong>月丘七央</strong>は、色々工夫していて好感が持てましたが、あの役をするには二枚目過ぎます。もっと良い役で見てみたいですね。
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
