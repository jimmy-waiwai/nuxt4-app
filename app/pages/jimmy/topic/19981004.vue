<script setup>
definePageMeta({
  title: '月組公演での邪念(^_^;)',
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
            月組公演での邪念(^_^;)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/10/04 up)
            </p>
            <p>今日さらっと月組公演評をアップさせて頂きましたが、組替え発表により突然<strong>「東京にはケロちゃん(汐美真帆)が出る公演」</strong>となってしまったこの公演(^_^;)。<strong>当然、邪念が入る、入る</strong>(^_^;)。</p>
            <p>ショーでは樹里咲穂や成瀬こうきの出ている位置を見ては「あそこにケロちゃんが入ったら・・」と思わず妄想で、<strong>衣装をケロちゃんに着せてみたりなんかして</strong>(^_^;)・・、気が早いですよね、ごめんなさい(^_^;)。</p>
            <p>物語の方は、キャラクター的に樹里さんの役だろうなぁ・・。<strong>西條三恵ちゃんというかわいい相手役までいるおいしい役で、保重さんよりは何倍もお得ですよ</strong>(^_^;)。</p>
            <p>来年の正月、ＪＩＭＭＹ初東上の可能性、大です(^_^;)。</p>
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
