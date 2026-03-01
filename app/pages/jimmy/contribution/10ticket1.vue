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
            チケット(パート１)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>皆さんはどう思われているのか。最近のチケット販売、入手について。</p>
            <p>
              劇団がファンクラブを公認していないのは知っているが、ここ数年ファンクラブと思われる人々が、チケットをロビーで捌いているのが目立って増えており、劇団職員もこれに見て見ぬ振りをしている様に思える。前売開始日の度に大勢の人が行列を作り、一日掛かりでチケットを入手したのに、観劇当日多くのチケットを売り捌いている人々を見ると、何故要らないチケットまで買い占めるのだろうと本当に腹が立つ。要らないチケットを買う人が減っただけでも、随分楽に一般の人がチケットを入手できる筈である。
            </p>
            <p>
              「ベルバラ」から続いたイベントの数々も一段落し、落ち着き始めた感のある宝塚だが、未だ殆どの公演のチケットが発売と同時に売り切れてしまう状態である。売れないチケットでは無いのだ、皆が欲しがっているチケットなのである。私にはファンクラブがチケットを買い占めるのは、「私達の応援しているスター(組)は人気があって、出演する公演のチケットはすぐ売り切れてしまう。」と見栄を張る為だとしか思えないのだ。しかし、「捌きの多く出ている公演」＝「ファンが見る気のしない公演」＝「スターの力不足」と私達が思っているということも是非知って欲しいのである。宝塚のファンクラブの行儀良さは誇れる事である。ただこの点のみ考え直して欲しい。他にチケットを買い占める理由があるのなら、ファンクラブの方の意見も聞きたい。
            </p>
            <p>
              また劇団側も捌きを黙認せず、一度買ったチケットに責任を持たせ、厳しく取り締まって欲しい。ファンクラブが買い占め、結局誰も座らなかった席のチケットも、初めて見る人が座る席のチケットも同じ値段だと思わずに、宝塚の発展に対する価値が全く違うという事を考えて欲しい。
            </p>
            <p>
              これも宝塚のチケットを入手しやすくして欲しいと思うからこその意見である。又ファンクラブの方も、一般のファンと同様に苦労して行列を作り、チケットを入手しているという事も知っている。ただとにかく余分に買い占め捌く事、そして宝塚がそれが堂々と出来る状態にしている事だけはすぐに改善して欲しい。よろしくお願いします。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              これはすごく反響があったので、思い出深い投稿文です。今やすっかり制度化してしまった「さばき」ですが・・、どうなんでしょうかねぇ、全く。
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
