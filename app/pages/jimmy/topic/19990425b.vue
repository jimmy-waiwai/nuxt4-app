<script setup>
definePageMeta({
  title: '宝塚ビデオシアター「轟悠・緑の風」',
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
            宝塚ビデオシアター「轟悠・緑の風」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/04/25 up)
            </p>
            <p>今回も見てきましたビデオ・シアター。ちょっと公開作品数が少なくて、手を抜いているナ・・と思ったりもしましたが（^_^;）、<strong>「ベルサイユのばら」新公のオスカル、「黄昏色のハーフムーン」新公のフィリップ、「華麗なるギャツビー」新公のギャツビー、バウ「恋人たちの神話」</strong>などが貴重映像として、割とたっぷり公開されていたのはおいしかったです。特に「ベルばら」は、オスカルが<strong>たかちゃん(和央ようか)</strong>なので、笑えますよ（^_^;）。二人ともとってもキレイですが（^_^;）。気になる方は、是非どうぞ。</p>
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
