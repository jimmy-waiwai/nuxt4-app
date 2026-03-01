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
            宝塚大劇場公演「Let's JAZZ」元旦テレビ放送より
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              良い舞台は必ず評判を呼ぶ。雪組大劇場公演「ＬＥＴ‘Ｓ
              ＪＡＺＺ」は、元旦にＴＶ放送があり、その楽しさが全国の人々に伝わったのか、２日にはかなりの立見も出る大入りとなっていた。そこで一言。
            </p>
            <p>
              公演ビデオ発売により近公演のＴＶ放送が無くなってしまって久しく、現在外に向けられた宣伝はポスターくらいのものである。しかし、オリジナル作品の上演を原則としている宝塚において、タイトルのみのポスターによる宣伝効果は低い(だからといって、知名度の高い海外ミュージカルばかり上演するのは方向違いである)。又、トップスター交代劇が続き、名前だけで客を呼べる大スターが存在しないことを考えても、ポスターによる宣伝効果は低いと考えられる。
            </p>
            <p>
              長年宝塚を見続けているが、色々な改革があったものの、宝塚の舞台の質は年々向上していると思う。それなのに最近特に地元宝塚で客足減が起こっているのは、一向に舞台の良さを外へアピール出来ていないからに他ならない。
            </p>
            <p>
              最近の公演ビデオはファンの声を反映して徐々に購入価値のあるのものになってきているが、これらはあくまでも既成のファン向けの商品であり、一般人が購入する事はまずない。又、現在放送されているｗｏｗｏｗによる公演の再放送や「宝塚スターの小部屋」についても同様で、あくまでもターゲットは既成のファンであり、一般人への公演の宣伝になるとは考え難い。
            </p>
            <p>
              現在の舞台を見せなくては。悲しい事だが、前述の相次ぐトップスターの交代劇と、五組化に伴う大改革により宝塚から遠ざかってしまったファンが少なからずいることも否定できない。しかし改革に弊害は付き物で、それは愁うべきものではない。それよりも、これらの人々が再び宝塚の舞台の魅力に取りつかれるのに、ＴＶ放送は絶好の機会になるであろう。宝塚自体に人気がなくては、劇団入魂の関連グッズ販売も先細りである。その大事な事を忘れる事無く、目先の利益に囚われず、宣伝媒体として、ＴＶ放送を復活させて欲しい。それもＢＳ２やｗｏｗｏｗではなく、ＮＨＫ、民放への開放を。できれば関西テレビ「宝塚花の指定席」のような番組を復活させ、地元ファンを取り戻して欲しい。良いものを公演しているのに、空席が多いのでは悔しいではないか。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              ＮＨＫ、民放での近公演の放映、実現してほしいですね。
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
