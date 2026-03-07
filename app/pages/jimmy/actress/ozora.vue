<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            大空 祐飛
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/10/24
            </p>
            <p><strong>目が良いですよね～、何か色っぽくて</strong>(^_^;)。弱いです、ああいう類の目に(^_^;)。</p>
            <p>始めて認識したのは多分<strong>「エールの残照」の新公のマイケル</strong>。本役が同期の大鷹つばさだったのですが、<strong>断然大空の方が良い</strong>と思いました(ファンの方、すみません)。<strong>大柄で素直に綺麗な人だな</strong>、というのが第一印象です。</p>
            <p>今までのベストは<strong>「ワン・モア・タイム！」のリトル・チェン</strong>(^_^;)。<strong>可愛かったんです～、とっても</strong>(^_^;)。惚れました、あの時は完璧に(^_^;)。</p>
            <p>今回の公演でも、<strong>姿の美しさとムードの良さで、ついつい目が引き付けられます。</strong>「ブエノスアイレスの風」や「黒い瞳」新公など、まだまだ歌や台詞の声に迫力がないですが、その点で唸らせてくれる時が来たら、面白くなってくるんじゃないかな～、と期待して待っています(^_^;)。</p>
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
