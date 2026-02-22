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
              <p class="text-right" :class="textTitle">梅田コマ・・8/3～31</p>
              <p>
                梅田コマで<strong>東宝「エリザベート」</strong>観てきました。
              </p>
              <p>
                あまり宝塚以外の舞台は観ない方なので(単に金と暇がないから^_^;)、詳しくは書けないのですが、記念に感想を。<br />
                でも、他の舞台も観だすと、もうちょっと他にも走りたい気がしますね～、最近。特に大劇場公演、つまんない作品多いし、チケット取れないし。
              </p>
              <p>
                昨年6月に、東京帝国劇場で初演された時に観て以来、一年以上。今回は8月11日と25日の二回観ることができました。<br />
                大阪公演では山口祐一郎がトートを演じるのがラストの3日間のみ、とあって、東京と合わせて結局山口トートを一度も観られなかったのは残念でした。そうと分かっていたら、東京の時は狙って山口トートを選んだのに・・(^_^;)。
              </p>
              <p>
                <strong>全体にすごく良くなっていました</strong
                >ね。自分も東宝版の「エリザ～」にようやく慣れたみたいで、<strong>三回目くらいでようやく、違和感なく、宝塚とは別の作品として楽しめた</strong>ような気がします(抜けるのが大変^_^;)。
              </p>
              <p>
                <strong>一路真輝</strong
                >のシシィは、他の人から評判を聞いていた通り、少女時代の演技も自然に可愛く見えました。歌も、初演の時は「夜のボート」以外はイマイチ消化不良な所もあったのですが、全部良くなっていて、一路さんらしい迫力も出ていて、三度目の観劇の時には、久しぶりに一路さんの歌を心から堪能できた気がしました＼(^o^)／。
              </p>
              <p>
                衣装は、初演の時は二幕冒頭の青いドレスがキリッとして似合っているな、と思ったのですが、今回はどの衣装も満足で、美しくなっているような気がしました。特に長～い髪のカツラは・・初演の時も使われていたかな？&emsp;良く似合っていて、キレイに見えました。
              </p>
              <p>
                トートの<strong>内野聖陽</strong>、フランツの<strong>鈴木綜馬</strong>、ルキーニの<strong>高嶋政宏</strong>もさらに良くなっていたし、ゾフィーの初風諄も初演の時は声量に不満があったのですが、すごく迫力が出ていて、やっとさすがアントワネット様だと思えましたね(^_^;)。ルドルフの<strong>井上芳雄</strong>も大人っぽくなって、頼もしくなっていてびっくり。若者は成長するのが早いですね～(っておばちゃまか、私は？)。<br />
                25日に観た<strong>子ルドルフ</strong>は、すっごくちっちゃな子供でびっくりしました(名前忘れちゃってごめんなさい～^_^;)。上手でしたよ。
              </p>
              <p>
                <strong
                  >宝塚のエリザベートが、美化されていてやはり好きだ～</strong
                >、と思う気持ちもありますが、東宝版で、<strong>エリザベート主演だから、良く分かるな～</strong>、と思う所もあります。
              </p>
              <p>
                新聞評にも書いていましたが、今、満足なエリザベートを宝塚で上演するのは、メンバー的にどの組でも無理だと思います。<br />
                そんなに面白い話ではないと思うんですよ。一本物で、暗い所や苦しい所もあるし。やっぱり良いのは<strong>数々のナンバー</strong>であって、<strong>それを聞かせてくれないと、もたない作品</strong>だと改めて思いました。
              </p>
              <p>
                25日は一階席に座れたのですが、公演も終盤のせいか、拍手にも熱気があって、アンコールには<strong>総スタンディング</strong>になって、皆でノリノリで拍手できたり、<strong>「一路さ～ん！」って手を振ったり</strong>できて、嬉しかったです(*^｡^*)。こうなると、千秋楽も観たかったなぁ～。
              </p>
              <p>
                一路さん、これだけのものを見せてくれたら、これからも舞台で、女優として十分に活躍できそうですよね。何か、やっと自信をもって、安心してこれからを楽しみにできるような、そんな気がします。
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
