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
            宝塚大劇場新人公演「ベイ・シティ・ブルース」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              私にとって今最も興味があるのは、第七十三期の男役達だ。その中の一人、匠ひびきの最後の新人公演が、超満員の観客の熱気の中行われ、期待を裏切らない素晴らしい舞台を見せてくれた。
            </p>
            <p>
              主演の匠には今回とにかく頼もしさを感じた。今までの新人公演でも主役級の役を何度も演じてきたが、何故かそのスター性、華やかさの割には控えめな印象が残った。だが今回、大人の男ハーヴェイJrを、落ち着いて堂々と演じていた匠を見て、「主役を演って当然の人材」だと確信した。何よりも数多くのスーツをスッキリと着こなしたかっこ良さが群を抜いていたし、特に今回はダンスや歌での(特に第十場のオリヴィアを思う歌では)感情表現が豊かで、ハーヴェイの繊細な心が伝わってきて感動的だった。その上全体的に余裕が感じられ、舞台の上で主役として存在するのに、何の違和感も感じられなかったのは大きな成長だ。これからも臆する事なく、堂々と自分をアピールしていって欲しい。
            </p>
            <p>
              オリヴィアの月影瞳も今回が今までで一番良かったように思う。元々大人っぽい雰囲気のある人で、その為か今まで暗く感じる事が多かったが、今回の役にはその個性が良く合っていて素敵だった。第十三場Ｃのソロは特に素晴らしく心に残った。
            </p>
            <p>
              レオナードの夏城令も今まで多くの役を演じてきただけあって安心して見ていられた。しかし惜しいのは歌で、まだ不安が残る。尚一層の努力を。
            </p>
            <p>
              上手い人という印象のあったホールデンの初風緑が、今回以外と平淡に終わってしまって印象が薄く残念。ファルコの伊織直加以下、春野寿美礼、朝海ひかる、音羽涼、瀬奈じゅんのブラス一家が容姿が美しく、大柄で人数が増えた所為もあり、本役以上に迫力があった。他ではクラークの香織ゆたか、ダイアナの渚あき、グロリアの妃宮玲子が上手で目立った。
            </p>
            <p>
              前回星組新人公演の絵麻緒ゆうといい、今回の匠といい、今抜擢に答え、大きく成長した感がある。これからの本公演でも頑張って欲しい。そして、次回の月組姿月あさと、年末の雪組有未れおの新人公演での活躍にも期待。最後に同じ七十三期の天海祐希のトップ披露公演も今から待ち遠しい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              そう、この頃、７３期のファンだったんです(^_^;)。新公で主役する頃が、一番面白いんですよね(^_^;)。今見るとブラス一家は、なかなか豪華ですね(^_^;)。当時も、注目の人たちだったので、喜んで見ていた記憶があります。でも、何といっても、主役のチャーリー(匠ひびき)のかっこ良さに殺されました(^_^;)。チャーリー主演の新公は人気ありましたよ。
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
