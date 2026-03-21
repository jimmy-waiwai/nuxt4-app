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
            貴城 けい
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>ケロちゃん(汐美真帆)応援派としては、正直、苦しいのですが、実はかしげちゃん(貴城けい)、結構好きなんです（^_^;）。</p>
            <p>男役臭さはまだありませんが、キレイで、そこそこ歌えて、文句ないですよね。主演レベルに観客動員力が低い雪組において（^_^;）、<strong>ケロちゃん＆かしげちゃんのアイドル性</strong>に、私はかなり期待しております（^_^;）。<strong>やっぱり大好きな雪組には盛り上がって欲しいもの</strong>。</p>
            <p>今までのベストはやっぱりバウ<strong>「Icarus」のアーノルド</strong>ですね。<strong>「仮面のロマネスク」新公のヴァルモン</strong>もうっとりする美しさでした（^_^;）。ショーでは、どうしても<strong>ケロちゃんと同時に出てくる</strong>（^_^;）ので、かしげちゃんを見る頻度が低い。ごめんね、かしげちゃん（^_^;）。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
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
