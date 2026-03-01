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
            ９３年・ＴＭＰ音楽祭
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              今年の「ＴＭＰ音楽祭」は昨年、一昨年のすばらしかった公演と比べて、私にとってかなり不満の残るものであった。
            </p>
            <p>
              まず誰もが期待したのは、これが大劇場最後の舞台になる涼風真世の歌だろう。昨年の杜けあきのように、迫力ある歌を聞かせてもらえるものと期待していたのだが、全体的には大きな印象を与えるに至らなかった。紫苑ゆうにも、いつものあの気迫がないように思われた。最後の歌に昨年公演「ワンナイト・ミラージュ」で既に歌った曲をもってきたのはどういう訳だろうか？。安寿ミラはトップになって、もう二度目のＴＭＰだというのにまだ自信がなさそうに一歩引いている感じがするのが気にかかる。返ってトップの中で最もキャリアの浅い一路真輝、そして二番手の真矢みき、天海祐希の方がのびのびと輝いて見えた。一路の歌唱力は他を圧倒している。麻路さきはもう疑いのない次期トップなのだから、もう少し歌えるように努力してほしい。
            </p>
            <p>
              他では轟悠、稔幸、愛華みれ、真琴つばさの同期グループが随所で活躍しているのが印象的。真琴の組替えによって、それぞれが四組に分かれた事になり、今やこの四人は宝塚での大きな看板の一つになっているようだ。娘役では雪組に組替えの花總まりが、一路とデュエットしており、なかなかお似合い。
            </p>
            <p>
              今回のメンバーは、ダンサー中心に選んでいるとプログラムに書かれているにも拘わらず、内容は相変わらず歌中心でダンスは殆ど無い。これが全体の歌の弱さをさらけ出す結果になってしまっているのは明らかだ。私としては今まで通りの歌中心の構成の方に賛成で、その為にももっと歌える人を優先してほしい。同期の匠ひびき、絵麻緒ゆうには、それぞれ一曲ずつ歌わせているにもかかわらず、歌える姿月あさとには一曲どころか一小節もソロが与えられなかったのにはがっかりだ。他にも、神田智、有未れおと本公演でもソロの経験の有る人が一小節も一人で歌っておらず、以下の下級生には全員すこしずつ歌う機会があった。小さな事かもしれないが、ＴＭＰの配役は、未来の宝塚を予見する意味でもファンとしては気になる所である。もう少し考えた役決めをしてほしい。
            </p>
            <p>
              ＴＭＰ音楽祭は、ファンが楽しみにしている年に一度のお祭りである。もう少し楽しく盛り上がる様に、出演者も構成される方々も来年はお願いしたい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              かなり偏っている上に、怒り入ってますね(^_^;)。今読むとちょっと恥ずかしいです(^_^;)。でもＴＭＰ(現ＴＣＡ)の配役は、現在の歌劇団の考え方が見えるので、興味深いものなんです。よーく考えて、構成して欲しいですね。
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
