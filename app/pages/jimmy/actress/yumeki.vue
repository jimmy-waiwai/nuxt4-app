<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            夢輝 のあ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>初認識はバウ<strong>「アリスの招待状」のボーイ役</strong>。ソロがあったのですが、とても上手で、歌の上手い人なんだなあというのが第一印象です。その後は新公でも活躍していたし、「レ・シェルバン」ではヤングジゴロの一員だったし、<strong>当時私の自慢の雪組実力派若手軍団の一人</strong>として、喜んで見ていました。</p>
            <p>宙組への組替えが決まり、陣容を見てみると<strong>「ねったん(夢輝)が新公主役しかあり得ない」</strong>とびっくり。主役をするようなイメージはなかったんですよ（^_^;）。でも、その<strong>「エクスカリバー」新公</strong>では予想以上にキレイに決めてくれて、かなり見直しました。</p>
            <p>ねったんは<strong>歌える</strong>のももちろんですが、何と言っても<strong>スタイルのバランスと姿勢が良い</strong>ですよね。<strong>「すっきり、キリリ」</strong>という感じでしょうか（^_^;）。そんな個性を生かしてさわやかな所が、本公演でももっと見られるようになると、面白くなってくると思います。</p>
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
