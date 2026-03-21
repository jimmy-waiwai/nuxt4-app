<script setup>
definePageMeta({
  title: 'ビデオシアター「姿月あさと・花總まり群青の宇宙へ」',
  layout: 'jimmy',
  team: 'topics',
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
            ビデオシアター「姿月あさと・花總まり群青の宇宙へ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/05 up)
            </p>
            <p>会場までかなり遠い上、スクリーンの前にパイプ椅子が並べてあるだけの殺風景な会場、おまけに料金が400円もかかるので(最初は300円だったのに！)、あまり盛況とはいえない<strong>「宝塚ビデオシアター」</strong>ですが、歌劇団所有の映像だけあって、<strong>なかなか貴重なものも多く、ファンなら一見の価値アリと思ってます</strong>。私は喜んで、大抵のものは見ていますよ（^_^;）。</p>
            <p>まず、ずんちゃん(姿月)で今回飛び出したのは、<strong>「スパルタカス」新公のバロマー</strong>！！懐かしい～、見に行ったんですよ～、私！！まだ脇役をしていた時代で、これも悪役なのですが、私は既にずんちゃん中心で見てました（^_^;）。そして、<strong>「メランコリック・ジゴロ」新公マチウ</strong>！！このマチウは今でもかなりお気に入りの一品です（^_^;）。あまりの可愛さに、立見しながらコケてしまった衝撃が忘れられません（^_^;）。さらに<strong>「ミリオン・ドリームズ」新公プロローグの黒エンビ</strong>～！！念願の新公初主役とあって、めちゃくちゃ気合いの入った公演でした～。あぁ～、これだけ<strong>ＪＩＭＭＹのツボにくる思い出の舞台</strong>を再び見せて頂けるなんて・・、ありがとう、ビデオシアター・・。</p>
            <p>更に、花ちゃん(花總)では、懐かしい<strong>「うたかたの恋」新公のマリー</strong>を始め、<strong>「白夜伝説」のミーミル、「コート・ダジュール」のラインダンス、「二人だけの戦場」のライラ</strong>と、これもＪＩＭＭＹお気に入りの花ちゃんばかりで・・、今回はかなり満足な内容でした。</p>
            <p>ずんちゃんや花ちゃんのファンに最近なった方は、是非見てみて下さいね。その頃から二人共とてもキレイなので、ＪＩＭＭＹが目を付けるのも、もっともだと思って頂けるのではないでしょうか（^_^;）。さらに新公の映像には、<strong>リカちゃん(紫吹淳)、チャーリー(匠ひびき)、ぶんちゃん(絵麻緒ゆう)も映ってました</strong>ので、興味のある方はどうぞ（^_^;）。←宣伝している様だ・・（^_^;）。</p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyTopicsList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyTopicsList />
    </div>
  </div>
</template>

<style scoped></style>
