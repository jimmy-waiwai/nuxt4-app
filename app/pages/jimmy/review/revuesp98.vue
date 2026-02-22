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
              レビュースペシャル'98
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                大劇場・１２／２３～１２／２５
              </p>
              <p>
                まず第一部は、<strong>香港公演でのレビュー</strong>より、抜粋して構成。私は<strong>このショーを生で観た事がなかった</strong>ので、とても楽しみにしていたのですが・・、<strong>あまり良い作品とは言えない</strong>ですね～(^_^;)。海外向け作品なので、スターの使い方がファン好みでないのは仕方がないとしても(^_^;)、一場面が長くて、盛り上がりに欠ける構成で、<strong>これを香港に持っていったのか</strong>と、正直驚きました・・。
              </p>
              <p>宙組の皆がはりきっていて、とても好感は持てましたが・・。</p>
              <p>
                中では、ラストの<strong>タップの場面</strong>が一番盛り上がっていて、<strong>ずんちゃん(姿月あさと)</strong>も歌にダンスに迫力があって、良かったです。他では<strong>湖月わたる</strong>のイキイキしたダンスが目についたのと、<strong>朝海ひかる</strong>の女役が素晴らしくキレイだったのが印象的でした。
              </p>
              <p>
                それに、やはり４５分は<strong>あまりにも短い</strong>のではないでしょうか？
              </p>
              <p>&emsp;</p>
              <p>
                第二部は<strong>他組のゲストを交えてのショー</strong>でしたが、各組ごとに別れたコーナーで、それぞれの組でトークコーナーもあったので、<strong>実質ショー部分が本当に少なくて残念</strong>。２３日は星組と月組が出ていましたが、星組の<strong>ぶんちゃん(絵麻緒ゆう)</strong>、月組の<strong>まみさん(真琴つばさ)、ゆうこちゃん(風花舞)</strong>以外は、<strong>ショーをしに来たんだか、トークをしに来たんだか(^_^;)？</strong>&emsp;っていう程度の出番でがっかりでした。
              </p>
              <p>
                中ではやはり<strong>まみさん</strong>が、登場と同時にパッと空気を変える貫禄があり、トークも遊び心いっぱいで、<strong>さすがトップ</strong>だと唸らされました。トークは<strong>英真なおき</strong>率いる星組も、さすがの面白さでしたね(^_^;)。他では、<strong>秋園美緒、美椰エリカ、美々杏里、鈴奈沙也</strong>が、素晴らしい歌声を聞かせてくれたのも嬉しかったです。
              </p>
              <p>
                見どころはラストの<strong>宙組、月組トップコンビのデュエット</strong>でしょうか。<strong>ずんちゃん＆はなちゃん(花總まり)</strong>コンビは甘～く、<strong>クリスマスに独り身の女性が見るには刺激が強すぎるラブラブモード</strong>(^_^;)。続いて登場の<strong>まみさん＆ゆうこちゃん</strong>コンビは、<strong>すっかり気心の知れた仲良しコンビ</strong>、っていうムードだと感じたのですが、いかがでしょうか(^_^;)？&emsp;一瞬互いの相手役を入れ替える振りもあったりして、面白かったです。
              </p>
              <p>
                フィナーレは、客席より二番手以下出演者がローソク型の灯を手に、並んで歌いながら登場。<strong>クリスマスムードいっぱいの厳かな雰囲気</strong>に包まれました。
              </p>
              <p>&emsp;</p>
              <p>
                <strong>が(^_^;)、</strong
                >いくら３日限りの特別ショーとはいえ、<strong>あまりにもお手軽すぎる内容</strong>だったと思います。ＴＣＡと同じ通常料金で上演しているのですから、来年からはもう少し、中身の濃い構成にして頂きたいです。物理的にこれ以上の負担をかけられない、というのであれば、<strong>無理してこのイベントをする必要がないのではないか</strong>、とさえ思いました。
              </p>
              <p>
                ２４日には沢山のさばきが出ていた事からみても、ファンの思いは同じではないでしょうか。
              </p>
              <p>苦言失礼しました(^_^;)。</p>
              <p :class="textTitle">
                (満足度&emsp;★★<span class="text-gray-400">★★★</span>)
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
