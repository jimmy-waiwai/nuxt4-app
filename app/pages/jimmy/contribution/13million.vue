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
            宝塚大劇場公演「花扇抄」「ミリオン・ドリームズ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              天海祐希のトップ昇格、真琴つばさ、姿月あさとの組替えによって、一体どんな組が出来上がるのか？。そんな興味と期待を持って新生月組公演を見た。
            </p>
            <p>
              「花扇抄」は月組にとって久し振りの日本物ショーという事だったが、思ったよりも皆化粧が上手く、とにかく美しさが際立っていた。又、風と波、筆と紙は迫力があって印象に残る。
            </p>
            <p>
              「扉のこちら」はセリフと歌、ダンスが重なる所が「グランドホテル」と似ていて、全体的に洒落た雰囲気。三十分と短い作品だがさりげなく、しっかりと心に残る秀作だ。
            </p>
            <p>
              「ミリオン・ドリームズ」はバラエティに富んでいて、理屈抜きに楽しめる。特にレッドベレー、ダークドリームの場面では、天海の今までにない男らしさ、かっこ良さを見た思いがした。ただ中詰めの第十五場だけが無理に付けたかの様で、衣装、振り付け共に古臭い感じがする。
            </p>
            <p>
              「近年稀に見るスピード出世」でトップに踊りでた天海だが、所々に歌の弱さを感じたものの、危惧していた研七でトップという事による不自然さは、不思議と全く感じる事がなかった。大劇場に映える大柄な美しさが、まさに「中央に立つべき人」を感じさせ、一人で舞台の中央で歌っている天海を見て「本当に何という人だろう」と目を見張る思いがした。確かに研七でのトップは早いかもしれない。でも、天海を見ていると、「この人よりトップにふさわしい人はいない。」と思わずにはいられない。
            </p>
            <p>
              久世星佳はやはり「扉のこちら」のベン・プライスが良かった。ショーでも天海を支える役所として活躍しており、若央りさと共に天海のトップによって、却って今までより若々しく見えた。
            </p>
            <p>
              真琴は花組の時よりも、歌が格段に上手くなっていて驚いた。シャープな美しさに加え頼もしさが増し、今後が益々楽しみだ。
            </p>
            <p>
              姿月の歌唱力は想像以上だ。華やかな容姿も申し分なく、何故今まで本公演で目立った活躍の場が与えられなかったのかと残念な気さえした。
            </p>
            <p>
              突然の涼風の退団、組替え、若いトップの誕生で月組は全く新しい組に生まれ変わったが、まるでこのポジションになるのが尤も妥当であったかのような自然さがあった。このメンバーならどんな作品でも合いそうな気がする。これからの月組が楽しみだ。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              今の情勢では難しいでしょうが、やっぱりトップは若いうちにしてほしい！と思います(^_^;)。美しさが全然ちがうもの。
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
