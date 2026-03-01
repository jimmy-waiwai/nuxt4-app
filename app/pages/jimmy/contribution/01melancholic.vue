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
            宝塚大劇場公演「メランコリック・ジゴロ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              前売券を買っていたが、待ちきれなくて、花組公演初日を当日、立見券で見た。立見をする時いつも思うのだが、立見をする人に対する係員の対応がいかにも「見せてやっている」という感じで、なぜかこちらの片身が狭くなる。もう少し理解がほしい。
            </p>
            <p>
              さて公演の内容だが、これが良かった。大作、話題作り、ゲスト出演などもたまには良いが、私は普段の芝居とショーの二本立ての公演が最も好きだ。
            </p>
            <p>
              「メランコリック・ジゴロ」は、「小さな笑い」が一杯詰まったコメディで、「実に…」を連発するフォンダリ、すごまれると息苦しくなるマチウ、いっぱつ野郎のバロット、ずっと靴擦れのロジェなど、各々の役に細かく個性がついていて面白い。
            </p>
            <p>
              安寿と真矢のコンビ振りは最高。お互いのキャラクターにぴったりの役柄で気持ち良く演じていた。森奈は素直に演じていたが個性がなく、少し物足りない。華はとにかくかわいくて、魅力的だった。愛華と真琴は普段の二枚目を捨てた徹底的な三枚目で大いに客席を笑わせた。今回紫吹が休演で残念だったが、若手では匠と姿月が目立っていた。匠は前回公演を抜けていた分心配したが、「ラ・ノーバ」での豹Ａのダンスは代役とは思えないほど素晴らしかった。姿月は芝居のジゴロ役でのスーツ姿が一際目を引き、甘い二枚目。歌える人なのにソロがなかったのは残念。夏城はショーで一場面紫吹の代役をしていたが、明らかに緊張しているのが見え、落ち着いた真琴とのコンビがアンバランスに見えた。
            </p>
            <p>
              安寿は良く歌っていたが、あんなに曲数が多くては少々うんざりする。他の人にももっと歌う機会を与えてほしい。また、ショーでの衣装はもっとシンプルな方が良いと思う。現代的な曲を使ったショーなのに、古臭い感じがする。フィナーレでのパンタロン型ズボンはいい加減止めてほしい。
            </p>
            <p>色々苦言を呈したが、全体的には気軽に楽しめる良い作品で、次回見るのが楽しみだ。</p>
            <p />
            <p :class="themeConfig.texttitle">
              ずんちゃん(姿月あさと)とチャーリー(匠ひびき)が好きなのが分かるよね(^_^;)。特にずんちゃんの芝居でのサーモンピンクのスーツが可愛かったんですよ(^_^;)。歌に関しても、押す、押す(^_^;)。
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
