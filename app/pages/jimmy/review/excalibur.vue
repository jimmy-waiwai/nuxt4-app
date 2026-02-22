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
              エクスカリバー／シトラスの風
            </h2>
            <div
              class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            >
              <p class="text-right" :class="textTitle">
                宙組・大劇場公演・３／２７～５／１１
              </p>
              <p>
                「エクスカリバー」は全くのお伽噺(^_^;)。物足りないとの意見も耳にしますが、私は華やかで、明るくて、楽しいので<strong>満足度４</strong>(^_^;)。結構好きです、こんな作品(^_^;)。
              </p>
              <p>
                内容はいたって簡単なので、美しさに浸れない人には、退屈になるかもしれません(^_^;)。主役のジェームズは、ずんちゃん(姿月あさと)そのもの(^_^;)。のんびりと森で育った青年が、皆に盛り立てられて、その国の王座につく様は、いかにもトップ披露らしい設定で、現在のずんちゃんの姿と重なります。
              </p>
              <p>
                ショーも素直に、主演陣の華やかさを生かした作品。ドキッとするようなカッコ良さは控えめですが、今回はこれで良しとしましょう(^_^;)。場面では、やはり<strong>「明日へのエナジー」での迫力がすごい</strong>ですね。後、「ノスタルジア」の場面で唯一、ちょっと大人っぽい場面が見られたのが嬉しいです。それにしても、最近岡田先生のショーは再現場面が多くて、<strong>ちょっとお手軽すぎる</strong>様な気がしますよ。ロマンチックレビュー・シリーズ、大好きだったんだけどなぁ・・。
              </p>
              <p>
                ずんちゃんは、コスチュームが映え、「宝塚のトップスターはこうでなくっちゃね！」という輝きに溢れています。危惧した気後れや萎縮は感じられず、<strong>のびのびと明るいトップスター振りに素直に感動</strong>しました。ただし、相変わらずの舌っ足らずな台詞には、まだまだ改善の余地あり。ここを「可愛い」と取るか、「下手だ」と取るかが、好き嫌いの分かれ道かもしれません(^_^;)。もちろん私は、「そんな所も可愛い」と喜んでしまう、おバカなファンです(^_^;)。
              </p>
              <p>
                花ちゃん(花總まり)はキレイで、上手くて、文句ありません。ショー「花占い」でのハジけ具合は可愛いくて、動きも良いし、素晴らしいですよね。最近すごーく痩せちゃっているのが心配ですが。個人的には、大好きな花ちゃんと、ずんちゃんとの<strong>「有り得なかった」ゴールデンコンビ実現に、大感謝</strong>です。なるべく長く、このコンビで色々な作品が見たいです。
              </p>
              <p>
                <strong>和央ようか、湖月わたる</strong
                >も華やかで、一回り頼もしさが増したような気がします。やはりずんちゃんと三人で並んだ姿は壮観ですねぇ。並んだ姿を見て、「やっぱり和央さんが一番背が高いかなぁ」と思ったのは私だけでしょうか？
                和央さんは、かなり三枚目に味付けされた悪役だったのですが、その点でのインパクトは今一歩。黒髪とコスチュームのスマートさはかなり良い感じですが。クリストファーをのるさん(稔幸)がしたら、かなり面白そう(^_^;)、なんて思わず妄想してしまいました(^_^;)。湖月さんも特別すごい！
                という気は今回はしませんでした。でも、まだまだ大化けしそうな予感はします。
              </p>
              <p>
                助演陣では、<strong>スッシー君(寿つかさ)の活躍</strong>が嬉しいですね。「花占い」の場面に出ていたのは「何で？」という気がしますが(^_^;)。それから<strong>希佳</strong>の美しいダンス、これで見納めとは残念です。その他、さすが各組よりスペシャリスト達が集まっているだけあって、この辺りの見ごたえは十分。勿体無いくらいです。
              </p>
              <p>
                反面、新人たちはあまり目につきませんでした。朝海ひかる、夢輝のあもあまり活躍する場がなかったのは残念。これからに期待しましょう。後は、新人公演で是非良い人材を見つけてきたいと思います(^_^;)。
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
