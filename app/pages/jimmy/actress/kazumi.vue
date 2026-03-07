<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            花純 風香
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/06/30 up
            </p>
            <p>花純を初めて認識したのは、もちろん<strong>「ノバ・ボサ・ノバ」のビーナス</strong>。娘役にしては体格良いですが(^_^;)、ダイナミックな動きと現地顔負け(?)の黒塗り、パワーがあって大好きでした。</p>
            <p>
              麻愛と同期で成績も良い花純。<strong>「殉情」のおよし</strong>など、最近は芝居でも安定した上手さを見せてくれていますが、やはり良いのはダンス。<br>
              <strong>「ON THE 5th」</strong>では、かなり位置も良い所で踊っていて、動きの良さが私の目を引きました。<br>
              相変わらずちょっと体格良いですが(^_^;)、その<strong>体をいっぱい使って、のびのび踊っている</strong>のが気持ち良くて、彼女のダンス、大好きです。
            </p>
            <p>麻愛共々、これからますます雪組で活躍して欲しい、貴重な娘役さんです。</p>
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
