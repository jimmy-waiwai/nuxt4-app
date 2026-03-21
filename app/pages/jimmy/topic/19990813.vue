<script setup>
definePageMeta({
  title: '花組初日報告',
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
            花組初日報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/08/13 up)
            </p>
            <p>花組初日、二階のてっぺんで観てきました！！</p>
            <p><strong>花組ファンの皆様、ご安心下さい！！</strong>期待通り、良い作品でした！良かった～（^_^;）。</p>
            <p>特に<strong>チャーリー(匠ひびき)</strong>ファンの皆様、<strong>長い、長～い我慢の時代は終わりました</strong>よ(ファンの人はそんな事思ってないかな・・。)！やっと、やーっと(しつこい・・。)、文句なく素敵なチャーリーが見られました！男爵も良かったし、何といっても<strong>ショーのジゴロ！</strong>期待していましたが（^_^;）、かっこ良かった～(*^｡^*)。衣装は紫のスーツでしたよ。</p>
            <p>もっと書きたい事はいっぱいあるのですが、あんまり面白かったので、明日又観に行くことにしました（^_^;）。公演評はもうしばらくお待ち下さいませ。</p>
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
