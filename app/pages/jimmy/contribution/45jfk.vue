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
            雪組大劇場公演「ＪＦＫ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「初めての人に宝塚を紹介するなら、やはりいつも上質の舞台を見せる雪組公演を。」常々そう思っていた私は、今回の雪組公演に初めて友人三人を誘ってみた。
            </p>
            <p>
              「ＪＦＫ」は暗殺された事であまりにも有名なケネディ大統領の半生を描いた作品。しかし悲劇性は強調されず、あくまでも明るく軽く、彼のヒーロー性を強調した仕上がり。重い芝居の続いた雪組としては又、新しい面を見られた様で楽しい。取っ付き難い政治の話をミュージカルにする手法は流石小池先生で、しかもそれを芝居達者な雪組陣が上手くこなしている。ただ、幻想の中ででも、もう少しはっきりとＪＦＫが撃たれるというリアクションが見られた方が良かったのでは。
            </p>
            <p>
              「バロック千一夜」はバロックの装置に黒塗りの出演者という変わった取り合わせが斬新。絢爛豪華な中にも肉体的な逞しさと色気が感じられて面白い。ここ数年ショーの比率が極端に低い雪組だが、ダンスシーンでの迫力も十分で、こちらの方も新しい雪組の魅力を引き出したと言える秀作だ。特にアフリカーナに始まる後半部は、構成、音楽、共に出色のボレロを始め、あまりの迫力に息つく暇も無い程。パレードの衣装も良い。
            </p>
            <p>
              一路真輝は持ち前の爽やかさで、ＪＦＫを誰からも愛されずにはいられなかったヒーローとして表現。余裕たっぷりの演技が良い。ショーではやはりボレロの場面でのラルゴが圧巻。ダンスも随分上達している。
            </p>
            <p>
              花總まりはレストランの場面での仕草などからアメリカ人を上手く表現。前々から感じていたが、芝居での切れ味も中々のものだ。高嶺ふぶきはもう少し声を上ずらせる癖に注意して欲しいが、アフリカーナでの気迫が凄い。轟悠のキング牧師には何と友人三人共が絶賛。存在感十分で目が離せない。
            </p>
            <p>
              香寿たつきはいつもの安定した演技で唸らせ、ショーでも大活躍。和央ようかも銀橋でのソロでその華やかさを印象付けた。星奈優里のモンローは今公演最大の収穫。ダンスの多いショーという事で、香寿、和央、星奈は随分出番が増えた。その他「ＪＦＫ」のＰＴボートのメンバー、黒人メンバーの迫力ある演技とダンスは特筆しておきたい。
            </p>
            <p>
              「又観に行く？」の問いに三人共がＧＯサイン。思い切って薦めてみて本当に良かった・改めて自信を持って、初めての人に宝塚を観せるなら今の雪組をお薦めしたいが、如何であろうか。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              今の雪組の実力は、ちょっと他とは違うぞっ(^_^;)！
              という自身が溢れております(^_^;)。めちゃ私事が入っておりますが、これは実話です(^_^;)。
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
