<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            CONTRIBUTION
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「歌劇」誌「高声低声」やその他書籍、雑誌に投稿した文章を、ボツを含めてこっそり公開します。<br>
              本文の末尾に書いてあるコメントは、このＨＰにアップする際、足したものです。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
  </div>
</template>

<style scoped></style>
