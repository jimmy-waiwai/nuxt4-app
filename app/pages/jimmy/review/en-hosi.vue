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
              星組 エンカレッジ コンサート
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                星組・バウホール公演・・10/6～8
              </p>
              <p>
                <strong>月組「エンカレッジ・コンサート」</strong
                >観てきました。<br />
                プログラムご紹介しますね。
              </p>
              <p>
                <strong>第一部</strong><br />
                1．WUNDERBAR&emsp;全員<br />
                2．LAST DANCE&emsp;高宮千夏<br />
                3．トレア ドール&emsp;涼紫央<br />
                4．心はいつも&emsp;涼乃かつき<br />
                5．Ever Green&emsp;水城レナ<br />
                6．鏡の中の女の子&emsp;星風エレナ＋コーラス<br />
                7．命をあげよう&emsp;千琴ひめか<br />
                8．私だけに&emsp;琴まりえ<br />
                9．The Last Night Of The World&emsp;毬丘智美・高央りお<br />
                10．川霧の橋&emsp;嶺恵斗<br />
                11．梅の想い&emsp;毬乃ゆい<br />
                12．木漏れ日の中で～春名残りの桜&emsp;全員<br />
                13．花に散り 雪に散り&emsp;祐穂さとる<br />
                14．花夢幻&emsp;鳴海じゅん<br />
                15．彷徨のレクイエム&emsp;高央りお＋コーラス<br />
                16．To all the girls I've loved before&emsp;真飛聖＋コーラス<br />
                17．Over The Rainbow&emsp;毬丘智美<br />
                18．世界の終わる日まで&emsp;朝澄けい
              </p>
              <p>
                <strong>第二部</strong><br />
                1．星に願いを&emsp;全員<br />
                2．躍りあかそう&emsp;星風エレナ<br />
                3．シェルブールの雨傘&emsp;涼乃かつき<br />
                4．All Ask Of You&emsp;琴まりえ＋朝澄けい<br />
                5．I know him so well&emsp;嶺恵斗＋コーラス<br />
                6．Alone Again&emsp;祐穂さとる<br />
                7．スペインの花&emsp;鳴海じゅん・高宮千夏<br />
                8．This is the moment&emsp;水城レナ<br />
                9．かわいい坊や&emsp;千琴ひめか<br />
                10．宝石の歌&emsp;毬乃ゆい<br />
                11．熱愛のボレロ&emsp;涼紫央＋コーラス<br />
                12．MACARTHUR PARK&emsp;高宮千夏<br />
                13．TO LOVE YOU MORE&emsp;高央りお<br />
                14．ALL BY MYSELF&emsp;朝澄けい＋コーラス<br />
                15．Don't Cry For Me Argentina&emsp;毬丘智美＋コーラス<br />
                16．明日にかける夢&emsp;真飛聖＋コーラス<br />
                17．愛の旅立ち&emsp;鳴海じゅん<br />
                18．すべての山の頂をめざして&emsp;全員
              </p>
              <p>
                今回も運良く千秋楽を、同じような席で観る事ができました！&emsp;いつまでこのくじ運が持つのでしょうか・・宙組まで制覇したいものです(^_^;)。
              </p>
              <p>
                星組編の特徴と言えば、何と言っても<strong>トークに「お笑い」要素が強かった</strong>事が挙げられます(^_^;)。<br />
                緊張感と謙虚さが印象的だった初回の花組、ほのぼのと温かかった雪組、エンターテイメント性が高くプロっぽかった月組、MCで楽しませてくれる(楽しんでいる？)星組。ただ歌いついでいくだけの公演なのに、組の特徴が出るものだと感心しました。<br />
                あと、<strong>吉崎先生の椅子</strong>が、ちょっとお洒落になっていました(見逃しませんよ^_^;)。
              </p>
              <p>
                全体では、組長役の<strong>毬丘</strong>が、とても温かみのある口調でしっかりと締めてくれていて、その他のMCは、今や名物漫才コンビとなった<strong>朝澄＆真飛</strong>をはじめ、<strong>高央、涼</strong>など。また、その他出演者全員も、<strong>思い思いに発声練習などをしながらMCに茶々を入れに来る</strong>、といった形で楽しませてくれました(^_^;)。<br />
                前の回では「涼がキザだ」という話題で盛り上がったそう。今回は「キザなら負けない」という事で<strong>鳴海</strong>にスポットが当たり、<strong>涼</strong>も「負けないわ！」と、二人に間には妙な火花が。<br />
                そして次の朝澄＆真飛のMCの時には、出演者全員と共に登場した鳴海と涼が、上手下手奥の台の上にそれぞれ立って、二人でずーっと<strong>キザ対決</strong>をし続けていて、MC中の朝澄＆真飛を通り越して大絶賛されていました(^_^;)。
              </p>
              <p>
                歌も皆とても上手かったです。中では本格的なオペラを聞かせてくれた<strong>千琴</strong>、地声で迫力たっぷりと歌い上げていた<strong>高宮</strong>が、ちょっと他にはない実力の持ち主。大切にして欲しいです。<strong>毬丘</strong>も良い。
              </p>
              <p>
                男役では<strong>鳴海</strong>。この人、もう5cm背が高かったらトップスターだと思うんですけれど・・(^_^;)。
              </p>
              <p>
                ナンバーも、割と知っている宝塚の歌が多くて嬉しかったです。<br />
                特に、鳴海の<strong>「花夢幻」</strong>は、一路真輝が歌った数多くの歌の中でも、大好きな歌なんですよ～。鳴海の方が人間っぽいと言うか、男らしい歌い方だと思いましたね。
              </p>
              <p>
                他では<strong>朝澄</strong>。一幕ラストは「ジュビレーション！」より「世界の終わる日まで」、二幕は「ナルシス・ノアール」より「ALL
                BY
                MYSELF」ですから、星組ファン泣かせですよね～(^_^;)。欲があるのかないのか、薄～い印象があっただけに、<strong>男役らしい曲を選んで熱唱してくれた</strong>のが新鮮で嬉しかったです。
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
