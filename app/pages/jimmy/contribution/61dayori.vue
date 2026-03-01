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
            「表紙の人」汐美真帆
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「お芝居が大好き！」。ケロちゃんの舞台を見ていると、そんな彼女の熱い思いが伝わってきます。特にバウホール公演「Icarus」の作家役、「心中・恋の大和路」の八右衛門役は、そんなケロちゃんならではの、心のこもった演技が感動を呼びました。ケロちゃんの舞台は、オフでの優しい人柄が滲み出た様な、温かい血を、いつも感じさせてくれます。
            </p>
            <p>
              といっても、ショーでは、キザなダンスでファンの目を釘付け！ 月組への組替後初公演となった、東京公演「ル・ボレロ・ルージュ」は、紫吹淳さんの休演により、初日から「ブルー・ローズ」のザ・マン、「ジプシーイン・ブラック」のジプシーＡなどの代役を勤めるという、波乱の幕開けとなりましたが、ケロちゃんはそんなプレッシャーを見事にはね除け、スポットライトに負けない華やかさをアピールしてくれました。
            </p>
            <p>ただ今絶好調！ 「旬」の汐美真帆に、皆様どうぞご注目あれ！</p>
            <p />
            <p :class="themeConfig.texttitle">
              いつもと違うこの文体・・。なんか・・、めちゃくちゃ恥ずかしいですっ(^_^;)。予想つくでしょうが、代役公演観た直後に書きました。盛り上がってますね、私(^_^;)。
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
