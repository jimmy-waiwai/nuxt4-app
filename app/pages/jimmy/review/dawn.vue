<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'default',
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
            姿月あさと・Dawn
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              シアター・ドラマシティ・・11/25～29
            </p>
            <p>シアター・ドラマシティで<strong>「Dawn」</strong>観てきました。</p>
            <p>
              まず、<strong>ずんちゃん(姿月あさと)でどんな舞台を作るか</strong>、から始まった作品ですね。プログラムでも書かれていますが。<br>
              <strong>ピュアな笑顔の少年</strong>を通して、現代社会の中で見失いそうになる大切なものが上手く伝えられていて、共感できました。<br>
              <strong>力強いモダンダンスで訴える演出</strong>は、いかにも<strong>謝先生</strong>。<strong>台詞は哲学的で考えさせられるものが多く</strong>、いかにも<strong>荻田先生</strong>。それが良いです。
            </p>
            <p>
              <strong>長尾まや(蘭香レア)</strong>ちゃん、スタイルが良くて抜群にキレイ。ダンスも文句なしでした。少し台詞も聞けましたが、自然で良かったですよ。これから十分に活躍できるのではないでしょうか。
            </p>
            <p>
              ずんちゃんは、退団後の初コンサート以来、久しぶりに生で観ましたが、相変わらずキレイでした。歌声の良さは感動的。<br>
              ずんちゃんという素材の良さを知り尽くしたスタッフのお膳立ての上に、<strong>そっと、全く背伸びせずに乗っているだけ</strong>。そんな印象でした。舌足らずな台詞さえ、少年役に生かされています。積極的にアピールしなくても、それで魅力がありました。
            </p>
            <p>
              こんなに少年役がまだ違和感ないのに。キレイなのに。あんなに歌えるのに。<br>
              彼女が宝塚で、男役を演る気が全くないのが残念・・。<br>
              とっくに忘れたはずの事が、再び思われてなりませんでした。きっと宝塚ファンで、ずんちゃんファンだった、私のような人だけでしょうね。
            </p>
            <p>
              彼女は今回、舞台に立っていますが、<strong>舞台がやりたいのでしょうか？</strong><br>
              できる人ではあります。やる気になれば、もっと良い舞台をこれからどんどん見せる事ができる人です。<br>
              でも、これからのそんな活躍を、期待できるような気はしませんでした。
            </p>
            <p>
              現代に生きる女性、ダイアン役で見せる<strong>白のスーツ姿</strong>。<strong>ロウソクの炎に照らされる様子</strong>は本当に素敵でした。<br>
              あーあ、ホントに切ないですねぇ～。観るのではなかった、と思う位です(^_^;)。
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
