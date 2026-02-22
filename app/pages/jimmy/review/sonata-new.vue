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
              愛のソナタ
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                月組・大劇場新人公演・・6/12
              </p>
              <p><strong>月組新人公演「愛のソナタ」</strong>観てきました。</p>
              <p>
                本公演を初めて東京で観た時から、<strong>「今の月組なら、オクタビアンは大和悠河でしょう～！」</strong>と思っていただけに、今回の新人公演はとても楽しみにしていました。
              </p>
              <p>
                期待通り、<strong>コスチュームが良く似合い、イメージにピッタリ</strong>。前回「ゼンダ城の虜」新人公演での悪役が意外と好評でしたが、<strong>私は絶対今回の大和の方が好き</strong>です。
              </p>
              <p>
                <strong>プロローグ</strong
                >は歌が相変わらずな為、意外と押しが弱くなってしまってハラハラ。場数を考えると個人的には許せないレベルです(^_^;)。
              </p>
              <p>
                続くオックス男爵の<strong>遼河はるひ</strong>も声量がなくて今一歩。歌のそれ程得意でない真琴つばさ＆紫吹淳の方がずーっと上手く感じました。
              </p>
              <p>
                しかし、「更に狂はじ」の時も思いましたが、芝居、特に<strong>恋心が入ると輝きだす</strong>んですよ～、大和は！
              </p>
              <p>
                良かったのはファニナル家での出会いから、7場でマリー・テレーズがセリ下がりした後の歌。<br />
                ゾフィーにはっきり惹かれているのが伝わり、<strong>「自分の勤めに戻らなくては・・」</strong>というとまどい振りが可愛らしい～！&emsp;歌でも、<strong>「初めて恋を知ったのボク～！」</strong>というオーラを発していて(^_^;)、そんなに上手さは変わらないのだろうけれど、ずっと魅力的に感じられました。ぱらの騎士の<strong>ピンクの衣装</strong>も素晴らしく似合っていましたね。
              </p>
              <p>
                後は冒頭の寝室の場面でのブラウス姿。少年っぽくて可愛かった～。衣装では、イーグル亭での白ブラウス姿も最高でした。
              </p>
              <p>
                細かい役作りも真琴とは明らかに変えていましたね。まぁ、それ位はしてくれないと困りますが・・(^_^;)。
              </p>
              <p>
                女装した時の、オックスとのやりとりの面白さはさすがに及びませんが、その分、<strong>素直なロマンスの良さ</strong>が出ていました。
              </p>
              <p>
                <strong>女装</strong
                >は相手役の遼河が大柄で男らしい為、釣り合いが良いのと、真琴でも可愛く見えてしまうあの衣装(すみませんっ)のおかげで、<strong>本当の女の子に見えてしまうギリギリの線</strong>になっていましたが、少年は保てていたと思います。それにしても、<strong>何をやっても可愛かった</strong>です～(^_^;)。
              </p>
              <p>本当、マズいのは歌だけです。あぁ～、惜しいなぁ・・。</p>
              <p>
                オックス男爵の<strong>遼河</strong>。この役は非常に難しいと思います。初の大役に四苦八苦・・といった感じでしたね。上にも書きましたが、大柄で男らしくて、大和との釣り合いが良いのが一番。発声が良ければ、遼河なりの迫力ある男爵を作る事もできると思うのですが、まだまだ経験不足だと思いました。
              </p>
              <p>
                見た目にコスチュームが今一歩似合わないのも辛い。これも今後もっとスッキリしてくれば、変わってくると思います。<br />
                舞台姿は日向薫を思い出させるだけに、組替えもありますし、恵まれた容姿が活かせるよう、これからがんばって欲しいです。
              </p>
              <p>
                ゾフィーの<strong>花瀬みずか</strong>。プロローグにソロで主題歌を歌っていたのは花瀬ならではの演出。その他も歌といい、台詞といい、檀れいよりはずっと声が良くて心地良いです。
              </p>
              <p>
                しかし「ゼンダ～」のド・モーバンの時にも公演評に書きましたが、表情が冷たいのが今回も気になりました。目の化粧がキツすぎるのではないでしょうか？&emsp;愛らしさ、柔らかさがなく、終始、冷めているように見えます。容姿は可愛らしい人だと思うのですが・・。
              </p>
              <p>
                マリー・テレーズの<strong>西條三恵</strong>は結構ハマるのでは？&emsp;と思っていただけに、大和より年上の愛人役に見えなかったのは意外でした。新人娘役としては、この役をあまり貫禄たっぷりにできてしまっても困るので(^_^;)、まぁ良いのではないかと思いますが・・。この役も新人がするには難しいですね。<br />
                ラストのゾフィーに託す辺りの、台詞の説得力は流石でした。
              </p>
              <p>
                マルガレーテの<strong>白羽ゆり</strong>は、やはり華やか。<br />
                ニクラウスの<strong>北翔海莉</strong>は、優しそうな人柄が表情に出ていて上品。歌も良いですが、もっと強く押せるようになって欲しいです。ヘルマンの<strong>真野すがた</strong>、オットーの<strong>良基天音</strong>はキレイだけれど、それも本役の二人の方が洗練されていますし(^_^;)、それ以上の発見はなかったです。三人とも色々アドリブに挑戦してくれていたのは嬉しい。
              </p>
              <p>
                ユーリの<strong>楠恵華</strong>は、噂のずーずー弁でなくなっていて良かった～(笑)。押しが弱いですが、カツラと銀縁の眼鏡でインテリっぽさを出していて、キレイでした。
              </p>
              <p>
                ベンヤミンの<strong>研ルイス</strong>はがんばって色気を出そうとしていましたね。なかなか面白そうな人の気がします(^_^;)。オルグの紫城るいは可愛くて良く似合っていました。
              </p>
              <p>
                今回のヒットはファニナルの<strong>京樹真那</strong>とリヒャルトの<strong>一色瑠加</strong>。京樹は上手いのは知っていましたが、組長の役ながら、本当に上手かったです。退団が惜しい！
              </p>
              <p>
                一色は可愛い素顔の割に、髭が似合っていてダンディーでした～。「ゼンダ～」のフリッツ役でも大人の男らしい魅力があったので、意外と立役の似合う人なのかもしれません。歌える筈ですし、次回の最後の新人公演ではもっと良い役がつくと良いな～、と思います。
              </p>
              <p>
                アンニーナの<strong>叶千佳</strong>も、落ち着いた演技で安心して観ていられました。星組で活躍して欲しいです。
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
