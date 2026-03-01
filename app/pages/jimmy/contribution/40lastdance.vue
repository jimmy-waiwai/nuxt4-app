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
            花組バウホール公演「LAST DANCE」より
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              大劇場再開に先駆けて、思いがけず宝塚を観る機会に恵まれた。安寿ミラのサヨナラバウホール公演「ＬＡＳＴ ＤＡＮＣＥ」は、今乗りに乗っている正塚先生の作品で、しかも超豪華な出演陣とあって、文句無く楽しめる上質の舞台であった。
            </p>
            <p>
              しかしいつも思うのだ。ただでさえトップスターのサヨナラバウホール公演はチケット入手が困難なのに、どうしてこんなに期間が短いのか、どうしてこんなに出演者を豪華にするのか、と。もちろん期間に関しては、東京公演その他のスケジュールの都合というものがあろう。それなら当然、歌劇団は数少ないチケットに、安寿、森奈みはるの最後の姿を見たい多くのファンが殺到する事を想像できたはずである。しかし、歌劇団はそれに対して対策をとるどころか、さらに愛華みれ、海峡ひろき、匠ひびき、純名里沙ら人気スターを投入し、数少ないチケットにさらに多くの人々が殺到するように仕向けている(としか思えない)のである。実際、私達が行ったプレイガイドでの「ＬＡＳＴ ＤＡＮＣＥ」チケットの入手倍率は約十五倍で、今回の舞台を私達が見られたのは奇跡に近い。本当に安寿の最後の姿を見たかったどれほど多くの人々が、無念の涙を飲んだのであろうか。
            </p>
            <p>
              二年前、涼風真世のサヨナラバウホール公演「ロスト・エンジェル」の時も、スターを総動員させてパニックになり、同様の憤りを感じた。しかし、昨年の「ＳＨＩＯＮ」は、出演者も少なく、公演期間も比較的長めに配慮され、内容も正に紫苑ゆうの全てを見せるもので、ファンのニーズに答えた、サヨナラとして非常に満足のいく公演であったと言えるだろう。「ＬＡＳＴ ＤＡＮＣＥ」は素晴らしい作品ではあったが、作品の優劣の問題ではなく、人気絶頂のトップスターのサヨナラ公演として、あまりにも心無い公演だったと言えるのではないか。
            </p>
            <p>
              限られた時間に燃え尽きなければならない宝塚のトップスターの、二度と無いサヨナラ公演である。できる限りの誠意と温かさをもって満足できるものにするのが歌劇団の義務であろう。少し前の話だが、紫苑の大劇場サヨナラ公演の千秋楽には、学生の団体が二階席を占めており、歌劇団の無神経さには本当に腹が立った。いつもの公演にも増して、サヨナラ公演はそのスターに愛情を持ち、長年見守り続けたファンの為にセッティングして欲しい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              これね、本当に問題アリだと思いますね。シメさん(紫苑ゆう)のサヨナラ千秋楽に学生の団体が２階にズラリといた、というのも、この目で見た事実です。退屈そうな学生達の横で、立見で涙している私達ファンの光景は、異常なものがありました。最近、サヨナラの千秋楽は見ていないので分かりませんが、どうなんでしょう？
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
