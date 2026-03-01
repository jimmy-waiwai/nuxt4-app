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
            宝塚バウホール公演「サラン・愛」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              四組のトップスターによるバウホール公演が続いた後となった、花組公演「サラン・愛」は、いきなり紫吹淳初主演、中村一徳初演出という初ものづくしの公演で、大きな興味と期待をもって客席に着いた。
            </p>
            <p>
              中村一徳先生は「ベイ・シティ・ブルース」新人公演での適確な新場面の挿入などが印象的で、期待している演出家の一人だった。しかし今回は少し期待外れ。宝塚らしい夢々しい作品は大好きだが、あまりにも内容にオリジナリティが無く、お決まりの人物、状況設定には苦笑してしまった。歯の浮くようなセリフもあまり続くと冷めてしまう。失礼だがこのような作品が、ファンに喜ばれるのだと本気で思っておられるとしたら、作者は宝塚を所詮女子供の見るものだと随分なめられているのではないか、とさえ思ってしまった。花や木をふんだんに使ったセットや娘役の衣装は目新しく美しい。次回に期待したい。
            </p>
            <p>
              初主役の紫吹淳はコスチュームが良く似合い、立ち姿が美しく見とれるばかり。今回は徹底的な二枚目に正面から取り組んでおり、さすが抜擢されてきただけあって、実力のある所を見せつけた。苦手と思われた歌も気にならず、正統派の役所もできるようになった事を証明したと言えるだろう。
            </p>
            <p>
              千紘れいかも研二ながら、実力のある所を見せ抜擢に答えた。「ベイ・シティ・ブルース」での男役のカゲソロの印象しかなかった為か、やさしく美しい歌声には驚いた。これから洗練されて美しくなってくると、将来が益々楽しみだ。
            </p>
            <p>
              夏城令は悪役なのだから、演じようによってはもっとインパクトを残せたはずだが印象が薄い。伊織直加は、いわゆるおいしい役を男らしく演じてかっこ良い。萌水せりかが美しく、やさしさが良く出ていた。
            </p>
            <p>
              下級生の中には学芸会のようなセリフ回しの人もおり、若手にとって場数を踏む事がいかに大事であるかを改めて感じさせた。最近は新人公演も一回限りの上、バウ公演にも新人主演のものが少なくなっているのは寂しい限り。安全なトップや二番手主演の公演ばかりでなく、色々な新人たちがもっとこの劇場で活躍して欲しい。中村先生には随分酷評を書いてしまったが、新進演出家の舞台も大歓迎である。大劇場では見られないような冒険こそが、この劇場の意義であったはずだ。この公演のようなフレッシュな舞台がもっと増える事を望む。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              今思い出しても笑えるくらい、変な作品でした(^_^;)。でも、バウはもともと冒険する所だと思うので、失敗もＯＫです。「学芸会のようなセリフ回し」は、春野寿美礼の事です(^_^;)。今はすっかり上手くなっちゃってますが。
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
