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
              BOXMAN
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宙組&emsp;シアター・ドラマシティ3/19～31
              </p>
              <p>宙組ドラマシティ公演「BOXMAN」、3/27に観てきました！</p>
              <p>
                正塚先生演出、和央ようか＆花總まり主演。期待に違わず文句の言いようのない舞台でした。レベルが違いますね。他の組と。<br />未沙のえる、美郷真也の頼もしさは言うに及ばず。以下のメンバーは若手も多く、思い切った配役もありましたが、それぞれ上手くハマっていると思いました。
              </p>
              <p>それでは印象に残る人を個別に。</p>
              <p>
                ケビンの和央。かっこ良いですね。サラサラの髪や、スタイルの良さを生かしたしぐさがパターン化してきているのが最近のショーなどから気になっていたのですが、それも確固とした和央のスタイルとして良いのではないでしょうか。<br />オペラグラスで見ると、身近な現代物という事で、口紅の色もほとんど分からない程でしたし、ほほも影が見える程こけていたので、若干顔色が悪いな、というのは気になりましたが、別に大した事ではないです(^_^;)。
              </p>
              <p>
                ドリーの花總。等身大の役を無理なくこなしていて、こちらも特に文句はないです。<br />クラブの場面のピンクのドレス姿が、一般人ではあり得ないくらい品があって美しかったのが苦笑ものでしたが、一番見ていて嬉しくもありました(^_^;)。<br />あまり見た目と雰囲気でハッタリをかませない役なので、デュエットの時など、歌があまり上手くないのが珍しく気になりました。<br />鏡のように、役の大きさに比例してそのまま見せられる人なのかな・・と。大役は大役として、等身大の役はそのまま等身大に見せてしまうのかな、と思いました。語っているレベルがもの凄く高いんですけれど(^_^;)。
              </p>
              <p>
                上に「思い切った配役」と書いた第一がチャンプの寿つかさ。スター度を考えれば妥当ですが、芝居では今までにない大役ではないでしょうか。かっこ良いんだけれど、悪いんだけれど、全く憎めないのが彼女らしい。何とも味のあるキャラでした。群舞でのかっこ良さはダントツ。<br />もう一人がダイアンの初嶺麿代。男役だと可愛らしい持ち味の初嶺も、ドレス姿だと流石に男役らしい迫力もあったし、学年相応の大人っぽさもありました。<br />チンピラ役の速水リキが、髪型といい芝居といい、役を良く現していて上手かった！&emsp;もっと物語に絡んで欲しかったです。
              </p>
              <p>
                遼河はるひは押さえた渋い役所でしたが、前から大人っぽい役の方が似合うと思っていた通り、安心して見ていられました。<br />悠未ひろも渋めの役でしたが、こちらも似合っていて、安心して見ていられる上手さです。
              </p>
              <p>
                若手では十輝いりすが・・機械バカというのか・・あんまり宝塚では見なかったキャラクターで面白かったです。ぬお～っとした持ち味が、役に合っていて、「正塚先生、良く見てるな・・。」と思います(^_^;)。<br />結局、クロスワードを延々としていただけ？&emsp;機械に関しても、本当に役に立っているのかどうか微妙？&emsp;だったのが、また可笑しい。<br />しかし明るい髪型や化粧が美しく、固いイメージのあった彼女にも、ちょっと甘さが出てきたかな・・と思いました。
              </p>
              <p>
                他では凪七瑠海がいかにもおばちゃまに好感持たれそうなキャラで(^_^;)、イメージ通り。矢代鴻は「永遠の祈り」に引き続き、芝居でも最近はとても頼もしいです。<br />早霧せいながウエイターや社員役でちょこちょこ目につきました。「白昼の稲妻」新人公演に引き続き、なかなか魅力ある男役さんで気になります。
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
