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
            貴咲 美里
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>初認識はパウ初ヒロインだった<strong>「風に吹かれて」</strong>。素直にかわいらしくて、歌が上手くて良いな、と思いました。その後もバウに新公にと大活躍。でも、ちゃんと出来ているので私は応援派でした。</p>
            <p>最近ちょっと太ってしまって(^_^;)、美貌が褪せているのは確かに私も不満です(^_^;)。でも<strong>「嵐が丘」のキャシー</strong>や、<strong>「ノバ・ボサ・ノバ」のラービオス</strong>に見られるように、かわいいだけでなく、<strong>かなり迫力を出せる</strong>所、それに、<strong>おおらかな持ち味</strong>がとても好きなんです。</p>
            <p>私は<strong>ずんちゃん(姿月あさと)の次の相手役はみりちゃん(貴咲)が良いな</strong>ーと思っているんですよ。ずんちゃんなら大柄なみりちゃんにも対応できるし(^_^;)、持ち味がピッタリ(^_^;)。ぜひがんばってキレイになって頂いて(^_^;)、実現すると良いな。雪組としては、はなちゃん(花總まり)に引き続いてみりちゃんまで持っていかれるのは困ると思いますが(^_^;)。</p>
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
