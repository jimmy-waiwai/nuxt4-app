<script setup>
definePageMeta({
  title: '田中マリコ著「宝塚あいうえお図鑑」',
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
            田中マリコ著「宝塚あいうえお図鑑」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/03/04 up)
            </p>
            <p>今まで田中マリコさんは<strong>「あまり私とは好みが合わないな」</strong>と思っていた人の一人だったのですが（^_^;）、「あ」から「ん」まである項目の中の「け」の欄が<strong>「ケロケロケロッピー」</strong>と題して、<strong>ケロちゃん(汐美真帆)の事が書かれてあった</strong>ので、思わず買ってしまいましたよ（^_^;）。さすがのＪＩＭＭＹもびっくりする位（^_^;）、バッサバッサとスター達が批評されていく中(でも、今回は不思議と真正面から反論したくなるような所もなく、全体的に共感できる所が多かった)、ケロちゃんは<strong>「結構、気になる存在～」</strong>と書いて下さっていて、嬉しかったです～。ちょっと内容に、ファンのＪＩＭＭＹに言わせれば、つっこみたい所が沢山あるんだけど（^_^;）、<strong>「宝塚のニュアンスがある」</strong>と評してくれた大筋は的を得ていますね。</p>
            <p>一番面白かったのが、あとがきの<strong>「ジェンヌ・ロス」</strong>についての記述。スターの退団がいかにファンにショックを与えるか、そんなファンにしか分からない気持ちをきっちり書いてくれていて、共感できましたね。私はＦＣには入ってなかったけど、ずーっとイチロファンでしたから、「エリザ」の公演中なんて、<strong>トート閣下に殉教死</strong>する人が出ても不思議じゃない、って信じられる位、<strong>何だか切羽詰まった気分</strong>でしたよ（^_^;）。それに、病気になる程ではなかったにしても、<strong>退団直後の雪組公演を見るのは寂しかった</strong>ものです。当時は<strong>「これからは、ずんちゃん(姿月あさと)やケロちゃんを楽しみにがんぱろう！」</strong>なんて、健気に気持ちを立て直そうとしたものでした。←それが今じゃぁ・・（^_^;）。</p>
            <p>ここに来て下さっている方にも、過去に「本命」スターの退団を見送った事があり、今は一人に片寄らずに幅広く宝塚を見ていきたい、っていう人、結構多いんですよね。</p>
            <p>ＪＩＭＭＹがケロちゃん一人に片寄らず、何とか一線を引いておこうと<strong>これでも</strong>しているのは（^_^;）、<strong>この「ジェンヌ・ロス」のつらさが良く分っているから。なるべく落ち込まず、長くファンを続けたいからなのよ～。</strong>なんて、改めて考えてしまいました（^_^;）。良かったら、その部分だけでも読んでみて下さい（^_^;）。</p>
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
