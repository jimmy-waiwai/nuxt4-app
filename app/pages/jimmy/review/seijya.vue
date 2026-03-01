<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'star',
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
            聖者の横顔
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              星組バウホール公演・3/4～19
            </p>
            <p>
              面白かったです。<strong>荻田作品</strong>という事で、難しいかも・・一回で理解できるかしら？&emsp;等と思っていたのですが、今回は事前に全くあらすじを知らなかった私でも十分に理解できる話で、作品の出来上がりは、今までで一番良かったのではないかと思いました。荻田先生も見せ方のバランスが手に入ってきたのでは？(エラそうですみません)&emsp;しかも決してお手軽な作品という訳ではなく、荻田先生らしい緻密な人物や背景の設定は健在で、役の人物一人一人の思いに共感できる所があって、見応えがありました。又、イタリアを舞台に、ビジュアル面でのかっこ良さもちゃんと追求された舞台であったのが嬉しかったです。
            </p>
            <p>
              主人公ルーカの<strong>彩輝直</strong>。荻田先生との相性はやはり良いようですね。心の不安定さ、皆が放っておけない魅力が良く出ていました。スーツも良く似合っていて、ラブシーンも多くて、とにかくかっこ良い。今回はあまり病的にフラフラする事なく、淡々と演じていたのが、男役としては形良く収まっていて良かったのではないかと思いました。ただ、彩輝に関して言わなければならないのは、とにかく実力をつけて欲しいという事のみ。せめて歌だけでももう少し良くなれば、もっと人気も出る筈。容姿、魅力に関しては十分良いものを持っているのですが、歌になると途端にテンションが下がってしまうようでは、所詮大劇場で万人受けするスターにはなれないと思います。今回の舞台は良かったですが、今の状態では、なぜこんなに連続して良い役が回ってきているのかという事自体に疑問があるというのが本音です。
            </p>
            <p>
              フランチェスカの<strong>妃里梨江</strong>。美しく、彩輝直とのシーンにドキドキする緊迫感が出ていたのが良かったです。この人も歌がもう少し良くなると、もっと皆に認められる娘役になれると思うのですが。抜きん出た美貌の持ち主だけに、これからに期待しています。
            </p>
            <p>
              ジェンナーロの<strong>朝澄けい</strong>。彼の遺書(日記)を読むという主筋の中で現れる幻影で、透明感のある姿が役にピッタリでした。清々しい二枚目振りで、冒頭の歌う姿などに、彼女の主演作が見られるのもそう遠くない話なのではないかと思わせる華がありました。後は、歌にもっと声量が欲しいです。
            </p>
            <p>
              <strong>朋舞花</strong>がルーカのパトロンという非常に良い役で、洗練された動きでそれらしさを出していて良かったです。ジュリオの<strong>萬あきら</strong>も、相変わらずムードがあってかっこ良い。二人の心中場面は「螺旋のオルフェ」を思い出させる危険で美しい場面で、迫力ありました。その他<strong>矢代鴻、京三紗、邦なつき、一樹千尋、夏美よう</strong>と適材適所。<strong>大洋あゆ夢、朝宮真由、美椰エリカ</strong>も上手くて、危なげなく物語自体を楽しむ事ができました。
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
