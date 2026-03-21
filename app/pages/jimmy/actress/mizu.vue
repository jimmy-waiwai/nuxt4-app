<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            水&emsp;夏希
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>初舞台時で成績三番。しかもあのすっきりしたお顔！&emsp;という事で、始めからスター候補だと思っていました。バウ「結末のかなた」でもキレイで目につきましたが、何故か公称169cmにしては背が低く見えたんですよね。今の舞台を見ていると、十分背が高く見えるのですが、なぜなんでしょう（^_^;）？&emsp;周りに背が高い人が多かったのかな。</p>
            <p>話は逸れますが、「宝塚おとめ」に書いている身長って、168cmなら多少嘘でも許せるけれど(実際嘘だと思う人が何人もいる)、169cmなら、ちょっと人よりは高いんだぞ、っていう主張が見えるので、嘘ならずうずうしい、と思うところありません？&emsp;私はそうなんですが（^_^;）。</p>
            <p>
              ・・というちょっと申し訳ない印象から始まってしまったのですが（^_^;）、新公での活躍を見ていても、なかなか堂々としたもので、安心して見ていられます。特に、宝塚の男役にピッタリのすっきりとした姿は、既に完成の粋に近いような気もします（^_^;）。が、「Endless
              Love」を見ている限り、まだまだ芝居などでは可愛らしい所も見えますね。でも、その点での充実も時間の問題でしょう。
            </p>
            <p>もうすぐバウ初主演「ロミオとジュリエット'99」ですね。大人っぽい容姿のみずさん(水)には、ロミオは結構挑戦役になるのではないでしょうか。かなみちゃん(彩乃かなみ)共々フレッシュな舞台を期待したいです。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyActressList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyActressList />
    </div>
  </div>
</template>

<style scoped></style>
