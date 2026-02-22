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
              SWITCH
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宝塚バウホール公演・・10/5～12
              </p>
              <p>
                <b>伊織直加、嘉月絵理、美穂圭子、湖月わたる</b
                >4人の75期コラボレーション<b>「SWITCH」</b>。面白かったです！
              </p>
              <p>
                一幕は犯人役と刑事役とを、伊織と湖月で「SWITCH」させるというお芝居。<br />
                観ている時はとても面白かったのですが、物語としては同じものが映画であったそうで・・都さんも書かれていましたが、私の母もTVで観たそうです。<br />
                そうなると、<b>「すごいじゃないの～、藤井先生！」</b>と思った作品も、<b>「月夜歌聲」疑惑とどこが違うのか？&emsp;同じではないのか？</b>&emsp;と思わないではないです。<br />
                違うのは、コンサートの一部として扱う今回と、二幕ものの一本の芝居として扱ってしまった「月夜」、という事くらいでしょうか。<br />
                せめて、プログラムに一言でも触れていれば・・と思いました。
              </p>
              <p>
                又、作品として観れば、牧師(嘉月)の<b>「善と悪とは紙一重・・」</b>というメッセージが、<b>悪役であるナルディ(伊織→湖月)にあまり共感する要素がない以上、今一歩心に届かない</b>所は気になりました。
              </p>
              <p>
                <b>伊織</b
                >は男役はそう言えば、「カステル・ミラージュ」以来でしょうか？&emsp;しかし、女役は観ていないせいか、影響は全く感じませんでした。<br />
                <b>湖月</b
                >との<b>ラストの乱闘シーン</b>は、お互い女性とは思えない迫力でびっくり。同期ならではかもしれません。
              </p>
              <p>
                <b>湖月</b
                >はどこが特別出演？&emsp;という位のがっぷり組む活躍。同じ立場にいる以上、<b>伊織を立てる為の名目上の苦肉の策</b>かな、と思いました。<br />
                伊織を立てていましたが、<b>光っていました</b>ね。特に、チンピラの多い伊織のキャラクターを真似たとしか思えない、後半のナルディの役作りに爆笑。<br />
                <b>上手いな～、良く分かっているな～</b>と思いました(^_^;)。
              </p>
              <p>
                脇役を一手に引き受ける一人5役の活躍で、物語を閉めてくれたのが<b>嘉月</b>。4人の出演者で成り立っているとは思えない広がりを、感じさせてくれました。
              </p>
              <p>
                <b>美穂</b
                >は相手役の女性。無理なく上品に徹して、刑事の愛妻役に説得力がありました。
              </p>
              <p>
                <b>二幕</b
                >はショー。75期初舞台の「春の踊り」より、<b>「はーるーのーおーどーりーはー」「ヨーイヤサー！」</b>の初々しくない(^_^;)声から始まったのには爆笑。懐かしい～。<br />
                「はーるーのーおーどーりーはー」の声は、美穂だと思っていたら、伊織だったらしいです(^_^;)。
              </p>
              <p>
                歌を聞かせるコンサートというより、本人たちも言っていましたが、まさしく<b>芝居とショーの二本立てを観たよう</b>。一人きりの場面か少なく、<b>美穂</b>がたっぷり良い歌を聞かせていても、誰かが隣で踊っていたりして、<b>人数の少なさを感じさせない充実感</b>がありました。
              </p>
              <p>
                <b>嘉月</b
                >は芝居、ショー共、女役も変化自在に披露。芝居の女役は色気があり、健気さも心を打ちました。<br />
                ショーの女役も予想以上に綺麗。月影瞳に似ているかな、と思いました(^_^;)。もともと顔の形は女役向きですよね～。
              </p>
              <p>
                <b>湖月</b
                >も存在感たっぷり。女役はいきなり恐かった・・(^_^;)。髪型がそのままだったせいですよね。<br />
                そのダンスはモダンダンサーのようでした。
              </p>
              <p>
                <b>伊織</b
                >は、美穂のハイヒールとソックス脱がせるし(^_^;)、湖月との男役同士のデュエットもあるし(^_^;)、サービス満点。<br />
                アンコールの時なども、一際感激している様子が、印象に残りました。
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
