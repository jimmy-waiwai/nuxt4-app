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
            天海祐希退団
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              天海祐希が退団する──。トップになった時から危惧されてきた早期退団、正にその通りになってしまった。
            </p>
            <p>
              このニュースを聞いて、とても素直に退団を惜しむ気にはなれない。やはり天海は宝塚に愛着の薄い人物だったのだ。そうではないと信じていた。早期退団の噂が流れても、いつかは歴史に残る大スターとしての自覚を持って、舞台で堂々と輝いてくれる日が来ると思っていた。しかし、そんな希望の交じった予想は見事に覆されたのだ。
            </p>
            <p>「どうして貴方は宝塚を受けたのですか？」</p>
            <p>
              今、彼女にそう尋ねたい。人並み外れた素質と容姿で、今までの宝塚の通例を次々と打ち破り、人々の注目を一身に集めた彼女。そして今、大震災の影響で以前ほどの勢いを失った宝塚に、再び勢いを盛り返さなければならない正に今、その役目を担うに最も重要な立場にある彼女が、いち早くその役目から降りてしまったのだ。本人が望むと望まぬとに関わらず、選ばれた者として、今こそ気概を見せる時ではなかったか。彼女には失望すら感じる。これは私だけではないはずだ。
            </p>
            <p>
              結局、真に評価を得るスターとは、素質ばかりではないのかもしれない。天海がトップになった時点で、正直言って久世星佳がトップになる日が来るとは思いもよらなかった。しかし、彼女のような人こそ多くの人々に愛されるスターになるのだろう。私はもともと素質ある若手が抜擢されていくのを見るのが好きで、天海の抜擢にも終始賛成派だった。そして、今の宝塚が抜擢に対して消極的で、これからは各組で高学年のトップスター就任が続くだろう事に不安を感じてもいたのだ。しかし、早期の抜擢が良いのか悪いのか、今では良く分からない。ただ今でも望み、夢見ているのは、宝塚を堂々と背負って立つ大スターの誕生である。
            </p>
            <p>
              「ＭＥ ＡＮＤ ＭＹ
              ＧＩＲＬ」。十数年間宝塚を見てきた中で、最も好きな作品、そして最も再演して欲しかった作品で、再演のニュースを聞いた時には飛び上がる程嬉しかった。とにかく今は天海の退団の事は忘れて、この名作を十分に楽しみたい。そして、新しい月組への期待に思いを馳せたい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              天海祐希はファンにとっては問題も多い人物でしたが、とにかく舞台は華やかで良かったので、ずっと応援していたんですよ。今は、この時程、怒り狂ってはおりませんが(^_^;)、「ミーマイ」の舞台も全然良くなかったし、完璧に冷めてます(^_^;)。
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
