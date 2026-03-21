<script setup>
definePageMeta({
  title: 'ハガキ読んでもらっちゃった(*^｡^*)',
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
            ハガキ読んでもらっちゃった(*^｡^*)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/09/06 up)
            </p>
            <p>先日お知らせした通り、<strong>「ビバ・タカラジェンヌ」</strong>で<strong>ケロちゃんのサイン</strong>を当てた私（^_^;）。当選者の発表で私のハガキ読んでくれないかしら～、と思っていたら、<strong>狙い通り読んで頂けました</strong>（^_^;）。</p>
            <p>「宝塚を見始めて15年の私が、今一番気になる男役が汐美真帆さん。「心中恋の大和路」の八右衛門の演技には私も大感激したので、ノコさんがそのことを話題にしてくださって、とっても嬉しかった」・・って読んで下さいました（^_^;）～。<strong>いえ～い！！</strong></p>
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
