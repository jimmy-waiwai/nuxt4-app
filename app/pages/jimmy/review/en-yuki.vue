<script setup>
const teamProps = ref({ team: "snow" });
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
              雪組 エンカレッジ コンサート
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                雪組・バウホール公演・・4/13～15
              </p>
              <p>
                <strong>雪組「エンカレッジ・コンサート」</strong>観てきました。
              </p>
              <p>
                各組の歌手たちを奨励する目的のこのショーも、花組に引き続き二度目。今回も観ていて非常に気持ちの良い、楽しい公演でした。
              </p>
              <p>プログラムご紹介しますね。</p>
              <p>第一部</p>
              <p>
                １．WUNDERBAR&emsp;全員<br />
                ２．未来へ&emsp;音月桂<br />
                ３．アランチャ&emsp;貴船尚<br />
                ４．夢人&emsp;麻樹ゆめみ<br />
                ５．タヒチの歌&emsp;澪うらら<br />
                ６．愛！&emsp;すがた香<br />
                ７．夜霧のモンマルトル&emsp;玲有希<br />
                ８．万朶の桜&emsp;安城志紀<br />
                ９．小さな花がひらいた～もう涙とはおさらばさ&emsp;全員<br />
                10．サウンド・オブ・ミュージック&emsp;舞坂ゆき子<br />
                11．ジュテーム&emsp;天勢いづる<br />
                12．愛の歌&emsp;愛耀子<br />
                13．もののふの詩&emsp;未来優希<br />
                14．夜のボート&emsp;美郷真也・美穂圭子<br />
                15．私だけに&emsp;紺野まひる<br />
                16．花風吹&emsp;貴城けい
              </p>
              <p>第二部</p>
              <p>
                １．スマイル&emsp;全員<br />
                ２．This is the moment&emsp;未来優希<br />
                ３．I've got you under my skin&emsp;天勢いづる<br />
                ４．スター・ダスト&emsp;貴船尚<br />
                ５．サマー・タイム&emsp;すがた香<br />
                ６．Ombra,mai,fu&emsp;澪うらら<br />
                ７．This moment&emsp;愛耀子<br />
                ８．いつかくる日の夢&emsp;貴城けい・紺野まひる<br />
                ９．踊りあかそう&emsp;麻樹ゆめみ<br />
                10．見上げてごらん夜の星を&emsp;舞坂ゆき子<br />
                11．アベ・マリア&emsp;玲有希<br />
                12．月夜歌聲&emsp;音月桂(麻樹ゆめみ)<br />
                13．Time to say goodbye&emsp;安城志紀<br />
                14．Think of me&emsp;紺野まひる(未来優希)<br />
                15．At the Grand Hotel&emsp;美郷真也<br />
                16．I DREAMED A DREAM&emsp;美穂圭子<br />
                17．そして今は&emsp;貴城けい<br />
                18．Climb Ev'ry Mountain&emsp;全員
              </p>
              <p>
                全体の印象としては、隠れた職人達が大活躍だった花組に対して、雪組は素直に<strong>本公演で活躍している人が上手かった</strong>、という感じ。<strong>美穂圭子、未来優希、すがた香</strong>が文句なく素晴らしかったです。「WUNDERBAR」「Climb
                Ev'ry
                Mountain」の<strong>コーラスが素晴らしかった</strong>のも雪組らしいかな。何か、<strong>ほんわか</strong>していましたね。花組の方が緊張感がすごかった気がします。組のカラーか、3回目と5回目の違いでしょうか(^_^;)。
              </p>
              <p>
                ナンバーでは美穂と美郷の「夜のボート」、美郷の「At the Grand
                Hotel」が聞けたのが嬉しかったなぁ。<strong>美郷</strong>も上手いんですね～。芝居の印象が強かっただけに、感心しました。
              </p>
              <p>
                選曲は花組の方が全体的にファンモード入っている人が多くて(^_^;)、宝塚好きの私には聞いていて嬉しい曲が多かったです。
              </p>
              <p>
                中では<strong>貴城</strong>が「紫子」から「花風吹」、「リラの壁の囚人たち」から「いつかくる日の夢」、「そして今は」を歌ってくれたのがファン泣かせで嬉しかった(^_^;)。「花風吹」は色気があってイメージピッタリですね。本人が歌った、って事は演りたい役なのでしょうか？&emsp;実現すると良いな～、と思いました。
              </p>
              <p>
                貴城と紺野の立ち位置が、学年よりはセンター寄りだったのが、全くの香盤順だった花組とは違う所。衣装は同じでしたが。<strong>コンサートの内容を考えると、香盤順のままの方が好感が持てて良かったのにな</strong>、と思いました。そんな事しなくても、貴城は一人美しさが際立って、目立っていましたもの(^_^;)。
              </p>
              <p>
                <strong>紺野</strong
                >は本公演で歌った時の印象よりも、ずっと上手く感じました。実力ある人なんですよね～。
              </p>
              <p>
                若手では<strong>麻樹ゆめみ</strong>。声自体がとてもキレイで、声量もあって、ラクラク歌っているようでびっくりしました。近い内に本公演で歌が聴けるだろうと思います。
              </p>
              <p>
                また、花組の真丘奈央に引き続き、今回は男役の<strong>安城志紀</strong>が「Time
                to say
                goodbye」をソプラノで歌っていましたが、今すぐドレスを着せて本公演で歌わせてあげたい位、良かったです。
              </p>
              <p>
                ・・と名前を挙げだすと、挙げなかった人が下手だったのかと思われそうで気が引けるんですよね(^_^;)。皆、本当に上手かったですよ。それにこのコンサートは経験の場、というニュアンスで良いのではないかと思うんですよ。難曲であっても、歌いたい歌にチャレンジして欲しいです。実際、普段聞けない人の歌が聴けるだけで、ファンにはとても嬉しいものです。
              </p>
              <p>
                あとはトップバッターだった<strong>音月桂</strong>が、緊張していたのが意外でしたね。あの新公での落ち着きっぷりはどこへ行ったのでしょう(^_^;)。曲は「未来へ」。「エクスカリバー」は初舞台公演だったんですよね。二部は「月夜歌聲」で、湖月わたるが歌っていた時から良いな～、と思っていた歌だったので嬉しかったです。
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
