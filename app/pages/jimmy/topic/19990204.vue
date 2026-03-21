<script setup>
definePageMeta({
  title: '祝・ケロちゃん(汐美真帆)初表紙！！',
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
            祝・ケロちゃん(汐美真帆)初表紙！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/02/04 up)
            </p>
            <p><strong>やっと廻ってきたか</strong>、という気はしますが（^_^;）、とにかく<strong>ケロちゃん、初表紙、おめでとうございます！！</strong></p>
            <p>何と今月号からリニューアルされて、「歌劇」誌と同じサイズになった「だより」。<strong>記念すべき第一号の表紙がケロちゃん</strong>だなんて、何だか嬉しいですね(何でも良いように取る人→私)。当然写真のサイズも大きくて、ケロちゃんキレイに写っていて・・、嬉しいです～。中身は「歌劇」誌と同じになってしまってますので、ひたすら表紙ばかり、うっとりと見てしまいました（^_^;）。</p>
            <p>
              もうひとつのお楽しみ<strong>「表紙の人」</strong>は残念ながらボツってしまいましたが（^_^;）、こっそり公開させて頂きますね。<a
                href="../contribution/61dayori.html"
                target="_blank"
              >こちら</a>をご覧下さいませ。
            </p>
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
