<script setup>
definePageMeta({
  title: 'スターの小部屋／６月第２回',
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
            スターの小部屋／６月第２回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/06/22 up)
            </p>
            <p>バウ<strong>「心中恋の大和路」</strong>より<strong>こうちゃん(汐風幸)</strong>と<strong>みりちゃん(貴咲美里)</strong>のトーク。バックでおそらく練習している<strong>未来優希</strong>の歌声がバンバン聞こえてくるのが、ちょっと得した気分（^_^;）。舞台の様子はチラッと映りましたが、お稽古風景も見たかったなぁ。<strong>ケロちゃん(汐美真帆)</strong>もちょっとぐらい<strong>インタビューしてよー</strong>（^_^;）。</p>
            <p><strong>「ＷＳＳ」新公</strong>より。<strong>叶千佳</strong>とか、<strong>花瀬みずか</strong>とか、何か、まだまだ若いよねー（^_^;）。かわいいなぁ。いつも弟分的な<strong>大和悠河</strong>が、随分お兄さんっぽく見えました（^_^;）。<strong>大空祐飛</strong>の「気合入れるときはバンダナ」の話を聞いてから、歌劇５月号のポートを見たら、笑えます（^_^;）。</p>
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
