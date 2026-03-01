<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'moon',
});

// レイアウトから提供された 'pageTheme' を受け取る
const themeRaw = inject('jimmyColor', null);

// 2. computed を使って安全に中身を取り出す
// .value が存在しない場合（default）のフォールバックを用意する
const themeConfig = computed(() => {
  return themeRaw?.value || {
    bgimg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
    bgcolor: 'bg-slate-200',
    bar: 'bg-slate-400',
    map: 'bg-slate-500',
    barborder: 'border-slate-500',
    texttitle: 'text-slate-600',
    textlink: 'text-slate-500',
  };
});
</script>

<template>
  <div>
    <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
      <div class="w-48 flex-none pb-16 hidden lg:block">
        <JimmyMenu />
      </div>
      <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
        <div class="pt-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
            :class="themeConfig.texttitle"
          >
            シンデレラ･ロック
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              月組バウホール公演・１１／２８～１２／８
            </p>
            <p>
              植田景子先生の処女作「Icarus」にハマりまくった私(^_^;)。その先生の第二作目とあって、とっても楽しみにしていました。今回は<strong>大和悠河を始めとする若手中心の「シンデレラ」男の子バージョン</strong>・・、<strong>そう聞いただけでも面白そう・・！</strong>&emsp;そんな大きすぎる期待を一生懸命押さえながら(^_^;)、客席につきました。
            </p>
            <p>
              今回も、とーっても面白かったです！！&emsp;増々ファンになりました(^_^;)、植田景子先生！！
            </p>
            <p>
              「Icarus」はメッセージの一杯詰まったとても考えさせられる作品でしたが、今回のメッセージは<strong>「Dreams come true !」</strong>一本。後は明るく、軽く楽しめる、でも、しっかり<strong>このメッセージが心に残る</strong>作品でした。
            </p>
            <p>
              宝塚って、現代物、特にロックをやらせると、どうしても<strong>ダサくなりがち</strong>じゃないですか(^_^;)。でも、今回は<strong>衣装</strong>も良く、カジュアルもオーディションの時の衣装も、大和にとても似合っていました。歌う際の<strong>照明</strong>も雰囲気を良く出していたと思います。かなり<strong>高い所で歌わせた</strong>のも、カリスマ性が感じられて効果的かも(^_^;)。ただし芝居の方まで、高い所ですることが多かったのは、少し見づらくて残念でしたが。
            </p>
            <p>
              <strong>「Dreams come true !」と言い切れる若さ</strong>、そしてその言葉通り夢を叶える男の子。今、<strong>このシドが大和以上に似合う人はいないでしょう</strong>。大和は、それ程ピッタリの役を、のびのびと全力投球で演じていて<strong>爽やか</strong>。ルックスも性格も超
              Very
              GOOD!&emsp;皆から好かれるシドそのままの大和には、ドニー＆アレクシスでなくても<strong>「かっこ良すぎるよなぁ」と言うしかありません</strong>(^_^;)。
            </p>
            <p>
              その他月組<strong>若手たちもそれぞれ上手</strong>で、前回「黒い瞳」新人公演の時には、少し若手のレベルが低いかなぁ・・と思っただけに、かなり見直しました(^_^;)。特に、キーポイントとなる人物を何役も演じた<strong>越乃リュウ</strong>が、大劇場に引き続き好調ですね(^_^;)。レンタルショップのオーナーなんて、いかにもいそうなキャラクターで・・、笑わせて頂きました(^_^;)。後は<strong>霧矢大夢</strong>がやはり上手いです。<strong>楠恵華</strong>も夢輝のあ系のキリッとした二枚目で(^_^;)、有望だと思いました。この二人を敵役に終わらさせず、しっかり自分を見つめ直してハッピーエンドにしてくれたのが嬉しかったです、植田先生(^_^;)。
            </p>
            <p>
              そして<strong>西條三恵</strong>。とても上手でした！&emsp;彼女は良いです！！&emsp;スターの地位を手に入れながら、本当にしたい事はこれじゃない・・と悩み続けるマドンナは、「Icarus」のクレアを思い出させます(^_^;)。<strong>とても共感できる魅力的な女の子でした</strong>。後は、見た目がもう少しスッキリすると、申し分ないのだけれど・・(^_^;)。
            </p>
            <p>
              <strong>未沙のえる</strong>の余裕のサポート、<strong>嘉月絵理</strong>の迫力も見事！&emsp;<strong>美郷真也、苑宮令奈</strong>も手堅い。<strong>湖泉きらら</strong>もいかにもキティちゃん、って感じで、可愛かったです(^_^;)。
            </p>
            <p>
              <strong>作品と出演者のピッタリハマった佳作</strong>です。まだチケットが余っているようですが、一見の価値アリですよ！！
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★★<span class="text-gray-400">★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyReviewList />
    </div>
    
  </div>
</template>

<style scoped></style>
