<script setup>
definePageMeta({
  title: '宝塚ビデオシアター「稔幸・春雷の時」',
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
            宝塚ビデオシアター「稔幸・春雷の時」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/02/21 up)
            </p>
            <p>今回も観てきました。宝塚ビデオシアター(^_^;)。公演初の日曜日だったせいか、<strong>大入り満員</strong>でびっくりでしたよ(^_^;)。こんなの初めて。</p>
            <p>素顔の<strong>のるさん(稔)</strong>はちゃんと挨拶を覚えていないようで(^_^;)、ニコニコしながらたどたどしく話しているのが、何だか楽しかったです(^_^;)。</p>
            <p>「メイフラワー」新公の映像を期待したのですが、今回はナシ。次回に期待しましょう。貴重品としては<strong>「アポロンの迷宮」新公、バウ「サタディナイト・ロマンス」</strong>等がありました。懐かしいです～。他、<strong>「ジーザス・ディアマンテ」の妖女、「ラ・カンタータ」のレ・ガールス</strong>では、見事な脚線美が放映され、<strong>客席がざわめいて</strong>ました(^_^;)。</p>
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
