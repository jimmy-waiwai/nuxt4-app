<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'gallery',
});

// レイアウトから提供された 'pageTheme' を受け取る
const themeRaw = inject('jimmyColor', null);

// 2. computed を使って安全に中身を取り出す
// .value が存在しない場合（default）のフォールバックを用意する
const themeConfig = computed(() => {
  return (
    themeRaw?.value || {
      bgimg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
      bgcolor: 'bg-slate-200',
      bar: 'bg-slate-400',
      map: 'bg-slate-500',
      barborder: 'border-slate-500',
      texttitle: 'text-slate-600',
      textlink: 'text-slate-500',
    }
  );
});
</script>

<template>
  <div>
    <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
      <div class="w-48 flex-none pb-16 hidden lg:block">
        <JimmyMenu />
      </div>
      <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
        <div class="pt-8 lg:pt-32">
          <div
            class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4 text-center"
          >
            <p>
              <img
                src="/images/jimmy/gallery/gypsy.gif"
                alt="汐美真帆"
                class="block mx-auto"
              >
            </p>
            <p>
              「ル・ボレロ・ルージュ」よりケロちゃん(汐美真帆)のつもりです。<br>
              新幹線に飛び乗って駆け付けた、思い出の代役公演の姿を再現しました。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyGalleryList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyGalleryList />
    </div>
  </div>
</template>

<style scoped></style>
