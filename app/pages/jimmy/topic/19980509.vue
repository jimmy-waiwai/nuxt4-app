<script setup>
definePageMeta({
  title: 'スターの小部屋／５月第１回',
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
            スターの小部屋／５月第１回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/05/09 up)
            </p>
            <p>ＷＯＷＯＷ「スターの小部屋」大好きなんですよ。できれば、これから毎回書こうと思います(^_^;)。</p>
            <p>さて、まず<strong>「ディーン」</strong>よりは、絵麻緒ゆう、美椰エリカ、秋園美緒、妃里梨江のトーク。<strong>美椰エリカがすごーく良くしゃべる</strong>のが面白かった(^_^;)。それを静かに見守る<strong>ぶんちゃん(絵麻緒ゆう)</strong>は、昔を思うと(^_^;)、随分落ち着いてきましたよね。</p>
            <p>続いて面白かったのが<strong>朝澄けい＆真飛聖のトーク</strong>。朝澄のホワーンとしたお人柄と、真飛の端正な外見に似合わぬ面白い所が、興味深々でした(^_^;)。真飛は「ダルレーク」の新公ジャスビルが好評だったそうで、<strong>これなら面白かっただろうなー、と想像できるに十分なトーク</strong>でした(^_^;)。<strong>これ、５年後見たら、きっと面白いぞ</strong>(^_^;)。</p>
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
