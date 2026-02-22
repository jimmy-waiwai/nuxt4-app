<script setup>
const teamProps = ref({ team: "moon" });
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
              うたかたの恋／ブラボー！ タカラヅカ
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                月組全国ツアー公演・１１／２７～１２／１９
              </p>
              <p>
                内容も充実！&emsp;出演者、客席とも乗りに乗った良い公演で大満足でした！&emsp;ファン歴長いのですが、これほど盛り上がった客席に座ったことはありません(^_^;)。新潟の皆様、どうもありがとうございました！！
              </p>
              <p>&emsp;</p>
              <p>
                まず心配だったのが、ハードスケジュールが続いている<strong>真琴つばさ</strong>の調子ですが、やはり乗りに乗っている人は勢いが違いますね(^_^;)。好調で、全く心配ありませんでした。中国公演の生中継を観た時には、「痩せたな～」と思ったのですが、取り戻したようで、お顔もキレイでしたよ。
              </p>
              <p>
                <strong>檀れい</strong
                >とのコンビも、こっちが見慣れたせいもあるかもしれないですが(笑)、ぐっと落ち着いてきたように見え、美男、美女の良いコンビ振りで、うっとりと物語を楽しませて頂きました(^_^;)。
              </p>
              <p>
                ショーは一層ノリノリで、客席も大騒ぎ！&emsp;明るい場面ではずっと手拍子が鳴っている状態でした。真琴が客席に降りてきた時には、楽しさとかっこ良さに「キャー」と手をぶんぶん振る人続出(私も振りました^_^;)、場面が終わると「おぉ～」「かっこ良い～」なんてため息が聞こえて、見ていて嬉しかったです。
              </p>
              <p>&emsp;</p>
              <p>
                他で役替わりを中心に目に付いた人を挙げると、まず<strong>霧矢大夢</strong>が加わって、やはりモーリスの存在感が違いましたね。真琴にアドリブでかまってもらったりしていて、持ち前の愛嬌が生きた楽しいモーリスになっていました(^_^;)。ショーでも、カンカン女Sのダンスはダイナミックだったし、エンターテイメントの歌も明るくて良かったです。又、<strong>北翔海莉</strong>がジャズの場面でソロで歌っていましたが、上手かったです。非常に楽しみな若手ですね。後は<strong>西條三恵</strong>が、ステファニーでは説得力ある演技で物語を盛り上げていましたし、ショーでも例の「アチチ」の場面が(^_^;)、スタイルの良さと思い切った髪型がバッチリハマっていて、かっこ良かったです。
              </p>
              <p>
                ご当地スターの<strong>越乃リュウ</strong>は「うたかた」の方では最後の舞踏会を開くドイツ大使役だったのですが、申し分なくダンディで良かったです(^_^;)。気迫が違うのが分かりました。通常の公演でも十分注目の男役さんですから、もっと良い役つけてあげても良いのにな～、と思いました。
              </p>
              <p>&emsp;</p>
              <p>
                地元の方が観るべき貴重な公演のチケットを申し訳なくも取ってしまったのは、<strong>汐美真帆</strong>が見たかったからなのですが(^_^;)、既に何人かの方が書いて下さっているように気迫のこもった堂々としたジャンで、はるばる観に行った価値がありました！&emsp;ショーの方も、出番が少なかったのは残念でしたが、そんな中、持ち前の色気を発揮した魅力的な男役振りを見せてくれて、<strong>「やっぱり良いわ、汐美真帆！」</strong>との思いを新たにしました。
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
