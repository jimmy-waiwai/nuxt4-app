<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            宝塚大劇場新人公演「メランコリック・ジゴロ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              立見席までぎっしり埋まった観客の熱気の中行われた花組新人公演は、前々から楽しみにしていた期待を裏切らないすばらしい公演だった。
            </p>
            <p>
              ダニエルの匠ひびき。本人の後の挨拶にもあったように、こんなに多くのセリフを聞いたのも初めてだったが、男役らしい良い声でセリフが聞き取りやすく、また歌も「スパルタカス」のサビヌスの時にくらべると数段うまくなっていた。また大人っぽい二枚目で、ダンスが得意な分、一つ一つの動きがきまっていてかっこいい。
            </p>
            <p>
              フェリシアの月影瞳は、既に多くの公演でヒロインを演じているだけの事はあって、安心して見ていられるし、美しい人なのだが、少し暗いのが気になる。前回の「心の旅路」の時も思ったのだが、もう少し明るく若々しい所を見せれば、更に良くなるのでは。
            </p>
            <p>
              スタンの夏城令は良く演っていたが、魅力的な役の割に全体に平凡に感じられた。もう少しダニエルやマチウを丸め込む程の大きさが欲しかったし、時々セリフが聞き辛い所がある。更に努力してほしい。
            </p>
            <p>
              マチウの姿月あさとは、本役の愛華みれよりも思い切った三枚目振りで、髪形や大きな体を生かしたしぐさに工夫が見られ大いに笑わせた。だがやはり前回に比べて役不足に感じるし、歌も聞きたかった。私はダニエルを姿月、スタンを匠にした方が、個性に合っておもしろかったのではないかと思う。
            </p>
            <p>
              バロットの初風緑も、本役の真琴つばさよりずっとオーバーな役作りで、のびのびと演じているのが気持ちいい。あとフォンダリの香織ゆたか、ロジェの伊織直加、ベルチェの貴月あゆむが目立った。娘役は月影以外今一歩、娘役の豊富な星組から良い娘役を組替えさせては。
            </p>
            <p>
              全体的に大きな失敗もなく、端役の人まで色々と役作りに工夫しているのが見られ、活気あるレベルの高い新人公演だった。この公演によって人気と共に、実力のあるところも見せた匠の今後の活躍を期待したい。
            </p>
            <p>
              最後に思い切った配役をつくり幅広くチャンスを与える為の新人公演二回制、そして各組の力の差を無くす為の大幅な組替えを是非実現させてください。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              この頃の新公は面白かったなぁ(^_^;)。ずんちゃん(姿月あさと)の「お坊ちゃま風」マチウをプロローグで見た瞬間、立見席でひっくり返った(^_^;)のが、強烈な思い出です。チャーリー(匠ひびき)もかっこ良かった(^_^;)。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
  </div>
</template>

<style scoped></style>
