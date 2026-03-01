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
            宝塚大劇場公演「エールの残照」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              夏の月組大劇場公演。久しぶりに千秋楽を見る機会に恵まれ、折からの猛暑に超満員の観客の熱気、そして出演者の熱演による熱い熱い舞台に大満足だった。
            </p>
            <p>
              「エールの残照」は谷村新司の主題歌やアイルランド民謡が、悲しさを感動的に盛り上げ、いつまでも心に残る秀作だ。特にラストシーンは素晴らしく、何度見ても涙が出てしまう。ただマイケルが地下室で育たなければならなかった理由、ロージーが一人で古城へ向かった理由等は少々希薄で、もう一歩の説得力が欲しかった。
            </p>
            <p>
              「ＴＡＫＡＲＡＺＵＫＡ・オーレ！」は注目の植田神爾初のショー作品。もっと羽根や宝石が氾濫する豪華なレビューを期待していたのだが、ラスベガスからのスタッフに因ってか意外とスッキリとした印象。しかしさすが観客のニーズを心得た氏ならではの、理屈抜きに楽しめるショーで、次々と繰り広げられる楽しい場面の数々に、あっという間に時間が過ぎてしまう感じだった。コントの場面は、公演の始めの頃は出演者も慣れていない様で何か馴染めなかったが、日を追うごとに自然で、アドリブ連続の楽しい場面になった。
            </p>
            <p>
              「底の深い川ほど静かに流れる」のセリフは、トップ三作目になり落ち着いた舞台を見せる天海祐希に、そのまま当てはまるようだ。シャムロック伯爵では持ち前の包容力で溢れるやさしさを見せ、ショーではあらゆるジャンルの場面に対応できるオールマイティの力を見せるようになってきた。あとは一刻も早く、歌にも安定感を見せて欲しい。
            </p>
            <p>
              久世星佳も好調。ダニエルは正に彼女にピッタリの役で、ドラマを引っ張る好演だ。ショーではどうしても地味になってしまうが、実力と独自の魅力で見せ、安定感がある。
            </p>
            <p>
              麻乃佳世も、ロージーの理想と幸福の間で揺れる心を繊細に見せ危なげない。ショーでも大活躍で、娘役部門は彼女の独壇場だ。
            </p>
            <p>
              真琴つばさと若央りさが抜けている為、姿月あさとに三番手的な役柄が回り、今回も確実にチャンスを掴んだと言えるだろう。「夜霧のモンマルトル」は歴代に負けない快唱だ。
            </p>
            <p>
              蘭玲花は「ＢＬＵＦＦ」のアイリーンでのパンチの効いた演技が印象的で注目していた娘役だし、美城まり、花園ゆかりと共に「エールの残照」で好演していただけに、今回で退団とは本当に残念。千秋楽の挨拶等で、改めて宝塚の暖かさに感動した。月組、これからも頑張れ！
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              あぁ、天海祐希好きだったんですよ・・。これ見たら分かるでしょ？
              もう、何も言うまい(^_^;)。ずんちゃん(姿月あさと)の「夜霧のモンマルトル」は本当に素晴らしかった！
              客席でシビレながら聞いていたのを、思い出しますね。
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
