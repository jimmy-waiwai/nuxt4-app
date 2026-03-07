<script setup>
definePageMeta({
  title: '雪組バウホール公演ケロちゃん報告',
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
            雪組バウホール公演ケロちゃん報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/10/11 up)
            </p>
            <p>雪組バウ見てきました！！</p>
            <p><strong>「ダ～リン～」「ハニ～」チュ、チュ、チュッ(*^｡^*)！！</strong></p>
            <p>きゃ～、いや～ん、も～、ケロちゃんったらっ(^_^;)！！</p>
            <p>いや～、すっごくステキでしたよ～、レイモンド様！！</p>
            <p>クライド(香寿たつき)の刑務所仲間で、彼に悪事を持ちかけ、共に罪を重ねるのですが・・。</p>
            <p>相手役は現在ＨＰの表紙になっている(^_^;)<strong>「ベサメ」の森央かずみ</strong>！！この二人が、上記の熱々振りなんです(^_^;)。髪型はちょっと濡れた感じのオールバックで、ちょっとサイドが乱れ気味(^_^;)。スーツにソフト帽子を着こなしたステキなお姿なのですが、このまま<strong>ノー天気なおちゃらけカップル</strong>で終わるのか？と思いきや・・。</p>
            <p><strong>いや～、惚れました、再び！！どんどん深みにハマっていく自分が恐いわ(^_^;)！！</strong></p>
            <p>公演評は近日アップしますので、もう少々お待ち下さいませ(^_^;)。</p>
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
