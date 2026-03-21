<script setup>
definePageMeta({
  title: 'りんごちゃん(早乙女幸)退団・・。',
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
            りんごちゃん(早乙女幸)退団・・。
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/11/15 up)
            </p>
            <p>今回の雪組組長・副組長人事を聞いた時から、当然予想はしていましたが・・。又、<strong>どうしてこんなに急に辞めちゃうんでしょう？</strong>絶対最近の退団、変だよ！！</p>
            <p><strong>イチロさん(一路真輝)のバウホール初主演「黒いチューリップ」</strong>での<strong>相手役</strong>がりんごちゃんでした。それ以降、ずーっと雪組の芝居で、重要なポジションを占めていました。ショーの群舞の時など、<strong>必ずといって良い程、袖からりんごちゃんの威勢のよいかけ声が聞こえてきましたよね</strong>（^_^;）。そんな<strong>雪組カラーの大きな要素の一人</strong>だったりんごちゃんが去ってしまうのは、言いたくないけど、どんどん<strong>大好きだった頃の雪組のカラーが薄れていくような気がして</strong>、寂しくてたまりません。</p>
            <p>せめて、<strong>大劇場公演時に、意識して、見送りたかったな・・</strong>、千秋楽も見に行ったのに・・、挨拶も聞きたかったよ～、りんごちゃん(T_T)。</p>
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
