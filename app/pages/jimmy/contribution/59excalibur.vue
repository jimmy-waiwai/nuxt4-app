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
            宝塚大劇場公演「エクスカリバー」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              姿月あさとトップ披露、宙組の披露、さらに平成十年度初舞台生の披露を兼ねた、注目の春の大劇場公演を観た。
            </p>
            <p>
              香港公演や、その他イベントを見逃した私にとって、姿月のトップスター姿を見るのは初めて。前々からトップスターになるべき素質と技量を兼ね備えていると認知はしていたものの、驚くほどの抜擢の速さで、あっという間に宝塚の第五の組、宙組のトップスターとして上り詰めた。周囲の今までにない注目と期待を一身に受けている状況に、力を発揮出来るのかと些か心配ではあったが、いざトップスターとして舞台に立つ姿月は、非常にのびやか。全く世間の心配などどこ吹く風とばかりの、若さと健康的な明るさに満ちた姿に、まずはホッとした。久し振りの華やかで、堂々としたトップスターの誕生に、「こんなトップスターを待っていた」と、感慨しきり。これからの舞台が楽しみだ。
            </p>
            <p>
              「エクスカリバー」は、プログラムの小池先生の言にもあったように、全くシンプルなお伽噺。物足りないとの見方もあるだろうが、私は、華やかで、明るくて、楽しくて、大満足。姿月、花總まり、和央ようか、湖月わたるという、かつてない大柄で、見栄えのするメンバーを得たからこその、美しく、底抜けに楽しいお伽の世界を、素直に楽しんだ。
            </p>
            <p>
              「シトラスの風」は「明日へのエレジー」の章でのコーラスが迫力満点で見事。「ノスタルジア」の章では、姿月、花總、和央が、短いながら息詰まるような三角関係を見せ、今後のこの三人で、このような大人っぽいドラマが見たいと、期待が募る。
            </p>
            <p>
              花總は期待通りの大活躍。今回はショー「花占い」の章等で、茶目っ気たっぷりの面も見せ、その万能振りはお見事。和央は悪役的役所ながら、三枚目の要素が強く、面白い。黒っぽいコスチュームも似合っている。湖月が幕開けの登場から華やかさをアピール。
            </p>
            <p>
              大峯、出雲の若い組長、副組長を始め、真中、夏河、希、美々、祐輝、陵、寿、と各組から実力派を取り揃えただけあって、助演陣の頼もしさは無類。反面、新人が男役、娘役共に、目立たない。特に娘役は花總の独壇場で、早急に充実を図って欲しい。
            </p>
            <p>
              とにかく姿月、花總という「有り得なかった」ゴールデンコンビを実現してくれた歌劇団に感謝。このコンビがなるべく長く続いて欲しい・・なんて、今の宙組には早すぎる心配だろうか。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              ずんちゃんへのファンモードを一気に復活させてくれた公演でした(^_^;)。
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
