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
              ALL ABOUT RIKA
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宝塚バウホール公演・11/3～11/7
              </p>
              <p>
                幕開けから飛び上がるように立ち上がるファンの皆様に乗せられて、<strong>歌うは踊るは、大盛り上がりのオープニング</strong>。みきちゃん(真矢みき)の武道館はすごかったらしいけれど、<strong>地元で、あのバウホールで</strong>、宝塚ファンをあそこまで乗せたりかちゃん(紫吹)ってすごいです(^_^;)。<br />
                りかちゃん自身の<strong>パワーやカリスマ</strong>もさることながら、いかに<strong>りかちゃんの復帰をファンが待ち望んでいたか</strong>、そんなファンの熱い思いを感じるオープニングでした。
              </p>
              <p>
                このコンサート、演出は<strong>小池先生</strong>とあって、内容も良いものばかりでした。
              </p>
              <p>
                まずは上記のノリノリのオープニング。それから貴重な少女時代のバレエ映像公開もアリのトーク。そして黒エンビでのタンゴシーン。<strong>独特の動き、醸し出すムードは圧巻！</strong>&emsp;早く大劇場でこんなダンスシーンが観たいと思わずにはいられないものでした。
              </p>
              <p>
                二幕は「白鳥の湖」を使ったバレエシーン。トウシューズなんてずーっと履いていなかっただろうに、ちゃんと立てているのはさすがですね。全身白の、羽を使った衣裳も良く着こなしていてキレイ。<strong>ハンターでなくても「はぁ～」と見とれてしまう魅力</strong>がありました。
              </p>
              <p>
                正直な所、最近の舞台でりかちゃんを見とれてしまう位キレイだと思った事はなかったので(^_^;)、そう思える事に自分でも驚くのですが、<strong>今回の舞台のりかちゃんはホントにキレイ</strong>でしたね。休養でいくぶん美貌を取り戻したのかもしれません。←失礼ですみません(^_^;)。
              </p>
              <p>
                「スターの小部屋」で東京公演の様子を映像で観た時は、ドレス姿等を観て、さすがにちょっと太られたかな・・と思っていたのですが(^_^;)、今回の舞台では<strong>スタイルもばっちり</strong>でした。宝塚公演までにかなり痩せたのではないでしょうか。
              </p>
              <p>
                ドレスのサイズが合わなくなっているようで、肩の片方が落ちていたのは、そういうデザインではないはず。最初から肩を落として着こなしていたのではないかと思いますが、それがまたセクシーさ倍増で(^_^;)、迫力あって強烈でしたね(^_^;)。<strong>肩のラインがキレイ</strong>なのにも見とれてしまいました。もう外国の男性ダンサーくらいでないと、太刀打ちできないような見事な女役姿でしたね。
              </p>
              <p>
                次に、そんな素晴らしいスタイルが隠され、本来の男役姿で出てきた時には、<strong>「男役って・・罪～。」</strong>な～んて思ってしまいましたよ(^_^;)。
              </p>
              <p>
                クラブの場面は周りの男役のスーツや、歌手メンバーのドレスもステキでした(多分新調ではないと思うけれど)。衣装も<strong>有村淳</strong>なんですよね。良いスタッフです。
              </p>
              <p>
                バックメンバーも雪組の良い所が取り揃えられていて嬉しいし、りかちゃんは雪組にはいないタイプなので、<strong>彼女達も良い経験になるだろうな～</strong>、と思います。<strong>天希かおり</strong>が痩せて、随分シャープに、かっこ良くなっていましたね。
              </p>
              <p>
                後、今回の舞台全体に、<strong>りかちゃんの繊細さ、脆さ</strong>を今までになく感じました。細い手足、病み上がりという事で、先入観もあるのかもしれません。
              </p>
              <p>
                二幕最後のナンバーでは<strong>ギリギリの線までの気の高まり</strong>が痛々しい程で、演技かもしれないけれど、こんなに全力投球して大丈夫？&emsp;と少し心配になりました。
              </p>
              <p>
                でも<strong>既に二番手にしておくのは惜しいくらいの充実</strong>を感じたのも事実。<strong>何とか元気に、十分な体調でトップが勤められて、その舞台が楽しめたら良いな・・</strong>、と、そんなりかちゃんの姿を見ながら、考えていました。
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
