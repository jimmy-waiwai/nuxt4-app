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
            宝塚大劇場新人公演「エールの残照」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「一体どうなるの？」とロンドン公演の配役を見た時から心配だったのが今回の月組新人公演「エールの残照」。風花舞、祐輝薫、樹里咲穂、彩輝直、成瀬こうきといったいつもの主要なメンバーが大量に抜けたのがその心配の原因だが、驚くほどまとまった安定感のある舞台を見せ、月組の底力を見た思いがした。
            </p>
            <p>
              早くから次々と大役を与えられてきた汐風幸も、いよいよこれが最後の新人公演になった。登場から驚くほど落ち着いており、さすがにセリフが自然で「グランドホテル」での好演を思い出す。最後のロージーを抱きかかえて銀橋を渡るシーンも本役同様にこなし、客席からは驚きと感動の拍手が送られていた。 水月静も原語での歌を良く歌いこなし、危なげない。一紗まひろのセリフも聞きやすい。とにかく汐風、水月、一紗共に安定感の面では本役に迫るものがあるように思われたが、一人ひとりの個性や強さに欠ける。結果、舞台全体にまとまりを感じたものの、迫力に欠けたのではないだろうか。
            </p>
            <p>
              ロージーには研三の苑宮令奈が抜擢された。セリフを丁寧に言うあまりテンポが遅くなるものの、全体には堂々としており安心して見ていられた。
            </p>
            <p>
              シャンカール中尉の華月あやは第二場のダンスを南城ひかりと受け持ち、華やかな容姿が一際目立つが、セリフの声が出ておらず残念。マイケルの大空祐飛は本役に負けぬ好演。本役でマイケルをしている大鷹つばさは義勇軍の一員をしており、キリッとした容姿でこのような役の方が似合っているように思えた。他、戦闘員では名城あおいが良かった。
            </p>
            <p>
              家来の高翔みず希、花園ゆかり、華路ゆうき、総督の美郷真也、シン国王の嘉月絵理が上手く、舞台を支えている。舞台を支えるに十分な脇役が多いのも、これからの月組にとっては頼もしい限り。まほろば遊、逢原せりかのコンビも良かった。千ほさち、水夏希の美しさも目立つ。
            </p>
            <p>
              演出(加藤誠)では、第三場のシャムロックの登場が舞台正面からになる等の工夫がみられ効果的だった。随分沢山の名を挙げたが、それだけ隅々まで活躍の場があり、人数の少なさを感じさせない程、皆好演していたと言えるだろう。メンバーがそろった時の月組に益々期待できる。
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
