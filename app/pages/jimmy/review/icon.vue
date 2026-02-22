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
              イコンの誘惑
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組バウホール公演・８／２７～９／６
              </p>
              <p>
                麻路さきのサヨナラに加え、<strong>稔幸、星奈優里、彩輝直、久城彬、音羽椋</strong>とスター満載、さらには助演に<strong>夏美よう、千秋慎、英真なおき、朋舞花</strong>と贅沢すぎるメンバーの上に、<strong>人気の小池作品</strong>とくれば、もう観る前から<strong>良くて当たり前</strong>。限られた11日間分のチケットにマリコさんファン以外の人も群がるじゃないの～、観られないマリコさん(麻路)ファンが可哀相～。と、<strong>その企画自体</strong>が、ちょっとファンには<strong>ご無体</strong>な気もしますが(^_^;)、まぁ、期待通りのすごーく良い舞台でした。
              </p>
              <p>
                もう、何と言っても<strong>マリコさん</strong>！！&emsp;<strong>今更ですが、かっこ良いです</strong>(*^｡^*)～。立ち姿、背中、ちょっとしたしぐさ、<strong>惚れ惚れする程、良い男</strong>ですわ～。物語のラスト、思い出すようにゆったりと一人で踊るミハイル(麻路)の姿、<strong>その形の美しいこと</strong>！！&emsp;本当、最後になって、惚れさせてくれますわ～、罪な方・・。
              </p>
              <p>
                そして<strong>ゆりちゃん(星奈)</strong>との大人っぽいコンビの美しさ！！&emsp;二人だけの場面での、何とも言えない良いムード・・。<strong>こんな素敵な大人の雰囲気を醸し出すコンビは、なかなか出ないですよ～</strong>。あぁ・・、この作品で最後とは・・勿体ない～。
              </p>
              <p>
                <strong>のるさん(稔)</strong
                >も、輝いてましたね～。全てタチアーナ(星奈)への愛ゆえ・・、とミハイルと言い合う所。<strong>彼女への強い愛が感じられて、素敵でした～</strong>。
              </p>
              <p>
                最後、次はのるさんとゆりちゃんのコンビになることだし(^_^;)、このままミハイルはタチアーナと別れて終わるのかな・・、ハードだなぁ・・、と思ったのですが、タチアーナがミハイルの元へ戻ってきたのは、<strong>さすが宝塚</strong>(^_^;)。良いではないですか、この甘さが(^_^;)。
              </p>
              <p>
                <strong>さえちゃん(彩輝)</strong
                >は、若者のアイドルとなる位、美しい教祖様(^_^;)。美しい・・本当に美しい・・。そして、<strong>またまた妖しい</strong>(^_^;)。これ、なんとなく乗っている<strong>レオナード(稔)もレオナードだけど</strong>(*^｡^*)・・、<strong>良いのか？</strong>&emsp;こんなに妖しい役ばっかりやっちゃって(^_^;)？！&emsp;面白いけど(^_^;)。
              </p>
              <p>
                <strong>おとこちゃん(音羽)</strong
                >は若者役。やはり周りの若手男役達とは、一際違った個性が光っていて、<strong>とにかく目を引き付けられます</strong>。<strong>バレエシーンでの動きの良さも、さすが～</strong>(見た目がバレエっぽくないけど(^_^;))。
              </p>
              <p>
                でも、このバレエシーンのコールドは全体的にはイマイチ。衣装がスッキリしていなくて重く感じられるし、マリコさんとユリちゃんはキレイだけど、周りがバタバタ出てくると、ちゃちな感じがする(ちょっと厳しすぎるかな・・)。
              </p>
              <p>
                <strong>ボリス(千秋)</strong
                >は超ラブリー(^_^;)。こーんなマフィアのボスのつくりかたもあったんだな、って、感心しました。最後にして、とっても目新しいもの見せて頂きました！！&emsp;上手さに脱帽です！！
              </p>
              <p>
                後、<strong>夏美、英真、久城</strong>のＫＧＢトリオも、通り一遍の悪役ではなく、ユーモアのある所が良かったし、<strong>朋</strong>のクラブダンサーは良い女だったし(^_^;)、<strong>高央りお</strong>の歌も良かったし、<strong>司祐輝</strong>はダンディだったし、<strong>朝澄けい、真飛聖</strong>はキレイだったし・・、一度きりの観劇だったこともあり、一瞬たりとも気の抜けない、<strong>見どころ満載</strong>の公演でした～。
              </p>
              <p>
                そして、<strong>小池先生</strong>！！&emsp;こーんな良い作品が、こんなに短い期間(東京あるけど)しか上演されないなんて、やっぱり勿体無いです～。<strong>これをサヨナラ公演にして欲しかったくらいです</strong>(^_^;)！！
              </p>
              <p>
                今日で、マリコさん見納めでした・・。<strong>最後に、超かっこ良い姿を私達の胸に残して、去っていくのね、貴方は</strong>(T_T)・・。
              </p>
              <p :class="textTitle">
                (満足度&emsp;★★★★★<span class="text-gray-400"></span>)
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
