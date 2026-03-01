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
            宝塚バウホール公演「夜明けの天使たち」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              彩輝直バウホール初主演作「夜明けの天使たち」を、新人荻田浩一の地元初作品という事もあり、興味津々で観劇した。
            </p>
            <p>
              面白かった。非常に良く考えられた見ごたえある作品だった。登場人物の心理を哲学的に深く考えた台詞は正塚路線か。しかもミュージカルナンバーも適度に散りばめられており、バランスが良い。西部を舞台にしているのも目新しい。最近出た新人の処女作の中では最も上質の作品に仕上がっていたと思う。これは、湖月わたる主演の東京初演を観る事ができなかったのが、非常に残念に感じられた。非常時とはいえ、初主演作品を本拠地で公演できなかった湖月は気の毒である。
            </p>
            <p>
              無法者たちの住む町に似合わぬ「バラの香りのするお坊ちゃま」という設定は、ソフトな持ち味の彩輝にピッタリ。その初主演彩輝は、幕開けのデュエットからいかにも主役らしい華やかさに溢れ、見とれてしまう。物語でも明らかに他の人々とは違う優しい雰囲気を無理なく醸し出し、運命に逆らえず、苦しみながらも過ちを繰り返す青年を、時に涙さえ見せる熱演で見せた。
            </p>
            <p>
              音羽椋の賞金稼ぎも、強烈な個性とパワーを感じさせる彼女ならではの役柄。最近の新人公演での活躍を見ていないのが残念だが、実力的にはまだまだながら、全身から溢れ出す気合の様なものが感じられ、とにかく目を引き付けられる。最近見なかったタイプのホープだ。妃里梨江のインディアンとの混血の娘も、エキゾチックな独特の容姿を生かしていると言え、台詞の声が美しく、このままいけば間違いなくトップになれそう。羽純るいは、囚われの令嬢という危うさをもう少し表現して欲しかったが、数多くの歌を堂々と歌いこなしており、場面を盛り上げた。
            </p>
            <p>
              他では、朝澄けいが、今回はフィナーレナンバーまで与えられる活躍を見せ、しかも期待に十分に答える出来栄えで有望ぶりを再認識。保安官の司祐輝が、下級生ながら温かい人物を表現しており魅力的だった。もう少し二枚目の役も見てみたい。夏美ようが久しぶりに危険な香りのする男を演じて、本領発揮しているのも嬉しい。
            </p>
            <p>
              若手中心の役者での公演になってしまったのが惜しいと思われるくらい、内容の濃い面白い作品だった。次回荻田作品を楽しみに待ちたい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              良かったです。次回荻田作品が楽しみですね。
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
