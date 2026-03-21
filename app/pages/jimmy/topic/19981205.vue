<script setup>
definePageMeta({
  title: 'たにちゃん(大和悠河)としゃべっちゃった(*^｡^*)',
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
            たにちゃん(大和悠河)としゃべっちゃった(*^｡^*)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/05 up)
            </p>
            <p>バウ<strong>「シンデレラ・ロック」</strong>をご覧になった方なら、もう想像がつくでしょう（^_^;）。そう、<strong>あの場面</strong>の事です（^_^;）。</p>
            <p>王子様ルックで客席の前を通過するシド君(大和)。ふとＪＩＭＭＹと目が合いました（^_^;）。</p>
            <p><strong>シ「楽しんでますか？」</strong></p>
            <p>と、ＪＩＭＭＹにマイクを向ける！</p>
            <p>Ｊ「・・はい。」</p>
            <p><strong>シ「はい？！」</strong></p>
            <p>Ｊ「・・・。」</p>
            <p>くぅ～。<strong>こんなときに限って、気の効いたギャグの一つも出てこない自分が悔しいっ！！</strong></p>
            <p>↑別にギャグを求められている訳ではないと思うけど（^_^;）。</p>
            <p>という事で、つかの間、<strong>たにちゃんと向かい合ってお話(?)</strong>できて、とってもラッキーなＪＩＭＭＹでした(*^｡^*)。<strong>アップで見ても、たにちゃん、とってもキレイだったわ～。</strong></p>
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
