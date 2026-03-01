<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'snow',
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
            送られなかった手紙
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              雪組バウホール公演・1/31～2/9
            </p>
            <p>
              まずお詫びを。<strong>始めの15分程、遅刻して見逃してしまいました</strong>・・本当に、ごめんなさい！！<br>
              一度しか観られない公演で、<strong>好きな太田先生の作品</strong>なのに・・と、自分でも悔しいです(^_^;)。<br>
              しかし、物語の方はそれでも十分に見応えがあり、面白かったです。期間がもっとあれば、もう一度観たいと思いました。
            </p>
            <p>
              確か、<strong>最初はコメディだと発表されていた</strong>ような気がするのですが・・。<strong>壮一帆</strong>主演のバウが二回とも太田先生で、しかもコメディっていうのはどうかと思っていたので、シリアスに変わって良かったです。<br>
              久しぶりに太田先生らしい見応えのある新作が見られて、まだまだ健在で良かった、またこんな作品が観たいと思いました。
            </p>
            <p>
              まず出演している雪組若手全体に感じた事なのですが、<strong>熱意が足りない</strong>ような気がしました。<br>
              プログラムの太田先生談に<strong>「ロシア物は『遙かなる旅路の果てに』を書いて以来です」</strong>と書かれていたので、なるほどと思ったのですが、その<strong>作品中に出ていた歌</strong>や「<strong>ヒトロフカ」</strong>の地名、その場面が展開されていたのが懐かしかったです。<br>
              大好きな作品で、それと比べてはいけないと思いますが、<strong>その作品や歌、「ヒトロフカ」の場面にしても、熱意が違う。</strong>盛り上がりがないのが、若手中心のバウ作品とは言え、残念でした。
            </p>
            <p>
              同じくプログラムに<strong>「与えられた役を品格をもって演じること、役の位をだすことを、まだ少しむつかしいのですが、あえて挑戦してもらうことにして」</strong>と書かれているので、その指導のもと、全体的に<strong>「お品」良く</strong>演じる方向で、作られていったのかもしれないですね。
            </p>
            <p>
              主役の<strong>ポリス</strong>にしても静かな青年と、書く詩とのギャップが激しい人だったのかもしれません。<br>
              しかし、本当は名門の貴族でありながら、女性に手が早く、友達から借金をしたりして、奔放に生きているどうしようもない青年として描かれていたのではないでしょうか？&emsp;それでも書く詩は素晴らしく、世間では人気があった。そこに名医であるセルゲイ(一樹千尋)は嫉妬を感じたのではないでしょうか？<br>
              その<strong>奔放さがない</strong>のが、何か役と壮自身とがズレているような気がして、仕方ありませんでした。
            </p>
            <p>
              持ち味が違うのもあると思います。<br>
              壮なら、誠実に女性を愛し、革命へと身を投じた<strong>ワシリィ伯爵(天希かおり)</strong>の役の方が、合うような気がしました。
            </p>
            <p>
              今雪組で最も歌劇団の抜擢を受けている若手と言える壮ですが、<strong>その魅力とは何だろう？</strong>&emsp;という事を常に意識しながら観ていました。やはりそのスマートさかな、と思います。すっきりしていてキレイですよね。<br>
              しかし歌もダンスも下手ではないけれど、それほど上手くもない。芝居も淡々としていて、それほどの説得力もない。正直これからの雪組を担う若手として、それほど大抜擢を受ける程の人材だろうか？&emsp;とは個人的に思います。「キレイな若手の一人」なら何も言いませんが、<strong>今、恵まれているからこそ</strong>、敢えて言いたいです。
            </p>
            <p>
              初ヒロインの<strong>晴華みどり</strong>。今までの舞台から上手い人だと思っていましたが、期待通り。とても良かったです。これからにも期待したい娘役さんですね。<br>
              <strong>千雅てる子、一樹千尋、箙かおる</strong>のベテラン勢は適材適所。<strong>天希</strong>は久しぶりに二枚目な役で、良く似合っていました。<strong>森央かずみ</strong>はめずらしく落ち着いた役でしたが、上級生らしく温かくて問題なし。
            </p>
            <p>
              友人の三人組(<strong>麻愛めぐる・天勢いづる・貴船尚</strong>)は雪組自慢のちっちゃい実力派たちで(^_^;)、歌にダンスにも大活躍。安心して楽しめます。<br>
              <strong>聖れい</strong>はこのメンバーならもっと良い役がついて欲しい所。
            </p>
            <p>
              休演復帰の<strong>神月茜</strong>が、皇太子らしい存在感があって歌も良い。<br>
              しかし<strong>あの</strong>(星組全国ツアーで湖月わたるが歌っていた)<strong>「ジョーカー」のナンバーに、ピンクの照明</strong>は・・(^_^;)？&emsp;太田先生にはめずらしい茶目っ気なのか、やはり知識があれば分かる所以のある事なのでしょうか・・？
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★<span class="text-gray-400">★★</span>)
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
