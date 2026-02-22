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
              Love Insuranse
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組ドラマシティ公演・3/12～21
              </p>
              <p>
                まず開演前から登場してる<strong>装置</strong>からお洒落(「FAKE
                LOVE」に雰囲気が似ていますね)。<strong>「ラ～～ブ・インシュランス」</strong>と楽しい稔幸の開演アナウンスに始まって、気楽に楽しめる秀作でした。
              </p>
              <p>
                やはり主演コンビの稔＆星奈優里が抜群に良かったです。レイ・モンゴメリーの<strong>稔</strong>はまずスーツの着こなしが素晴らしく、プロローグのダンスのかっこ良さはもちろん、寝椅子から起きあがった時の、シャツにスラックス姿の<strong>長～い足</strong>にもホレボレしてしまいました(^_^;)。偶然出会った女性が、亡くなった恋人に似ているという事で、しげしげと彼女を見つめたりするのもおかしく、自由自在の活躍振りが楽しいです。
              </p>
              <p>
                セシルの<strong>星奈</strong>は、舞台では今までなかったタイプの役かもしれないけれど、雑誌等から知れるオフのイメージから、ギャップに驚くような事はなかったし(^_^;)、実際とても役にハマっていたと思います。サバサバと気持ちよく、<strong>「ほんっとごめんなさいね、こんなズケズケいっちゃって」</strong>なんてセリフが、姿はとても色っぽくって良い女だから余計おかしい(^_^;)。姿が以前の恋人に似ているから好きなんだろうか・・と悩むレイに、<strong>「どうでも良いんじゃない？&emsp;今は私しかいないんだから！」</strong>と気持ちよく言い放つ所なんて、<strong>「そうだよね～(ポン！)」</strong>とレイと一緒になって手を打ちそうになってしまいました。この台詞大好き(^_^;)。
              </p>
              <p>
                マクガバンの<strong>音羽椋</strong>はホント、自然に男っぽいですよね(^_^;)。バスケットのダンスシーンなんて、登場した時は本当に男の人が出てきたのかと思いました(^_^;)。動きがキビキビしていて、かっこ良かったです。序盤の熱血刑事というのが、良く似合っていましたが、稔との言い合いのシーンは、役柄を意識しての事だと思いますが、どなり過ぎで見ていて疲れる気も。
              </p>
              <p>
                ジェフの<strong>真飛聖</strong>。リーゼントにするとますます絵麻緒ゆうに似ていますね～。一生懸命がんばっている姿が、何か愛嬌があって可愛いです。
              </p>
              <p>
                後、前々からどうしても言いたかったのですが(^_^;)、何か・・おかしいんですよ、真飛を見てると。今回も<strong>「ち～すっ！」</strong>って挨拶するしぐさから既に何かおかしいのですが(^_^;)、まぁ、それは悪い事ではないから良いとして、プリシラ(秋園美緒)にキスされて<strong>「くぅ～」</strong>としゃがみこんで泣く所！&emsp;これは多分本当はギャグじゃなかったと思うのですが、どうしても<strong>「泣いている芝居してみました～」</strong>っていうのが見えるのが、私の笑いのツボに入ってしまって、おかしいんです～。一所懸命すぎて、まわりが見えていないのかな？&emsp;一緒に観た母は「それ程気にならない」と言っていたので、<strong>必要以上にウケすぎ</strong>なのかもしれませんが(^_^;)。
              </p>
              <p>
                私の中では同じく、何か不器用でおもしろい<strong>音羽</strong>が、その後、<strong>妙にお兄さんぶって</strong>(実際大人の役なのですが・・)、バスケのコーチに誘いに来たりすると、もうダメ(^_^;)・・という感じで・・<strong>失礼ですね～すみません</strong>。一応、共感してくれる人もいるだろうと思って書いているのですが。
              </p>
              <p>
                華やかだし、歌も問題ないと思うのですが、「エピファニー」の新五郎の時から、ちょっとその点、気になっています。それも可愛くて魅力の一つではあるけれど(^_^;)。
              </p>
              <p>
                <strong>秋園</strong
                >は優しげなお姉さんがピッタリでした。子役の<strong>琴まりえ</strong>も上手いです。プリシラは最後、ジェフに惹かれているようですが・・、<strong>ポールの立場は</strong>(^_^;)？&emsp;<strong>もうすぐ死ぬから良いの？</strong>&emsp;「待っているから・・」とジェフに言わせておくだけで良かったんじゃないかと思うのですが。
              </p>
              <p>
                サイモンの<strong>司祐輝</strong>。最近良い役がつくようになって嬉しい(^_^;)。でも、芝居がホント自然で上手くなったので、それももっともだと思えました。ホテルのバーのシーンは、妻役の<strong>万里柚美</strong>もいかにも悪女っぽくて迫力あって良かったし、司も相手はすごい上級生なのに存在感が負けてなかったのがすごい(^_^;)。いかにも優し気で包容力がありました。後半は少しおじさんに見えてしまったのが残念。って・・おじさん役なんですよね、実際(^_^;)。
              </p>
              <p>
                後は・・東京公演中このホームページでもやたらと評判になったので、つい注目してしまった<strong>柚希礼音</strong>。キーパーソンのポール役で、いかにも注目の新人がしそうな役でしたね(^_^;)。まぁ、捕らえられているのと、二、三言つぶやくだけだったので、良く分からなかったですが、スパイダーマンの群舞の方は、一際大きくてダイナミックに見えました。次の大劇場も出ないんですよね～残念だなぁ。
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
