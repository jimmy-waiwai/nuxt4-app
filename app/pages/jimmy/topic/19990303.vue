<script setup>
definePageMeta({
  title: '祝！ケロちゃん(汐美真帆)すらっと茶モデル！！',
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
            祝！ケロちゃん(汐美真帆)すらっと茶モデル！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/03/03 up)
            </p>
            <p>いやー、近頃、<strong>お祝事(?)が多くて</strong>、嬉しいですね～（^_^;）。</p>
            <p>・・と言っても、前からこのページにお越し下さっている方は、覚えておられるかもしれませんが、この<strong>すらっと茶モデル</strong>もずーっと前から「ケロちゃん出ないかな～」なんて書き込みながら、<strong>狙ってた</strong>んですよね～（^_^;）。</p>
            <p>近ごろはどんどんモデルが下級生化していくので、もうすっかり出ないんだと思ってましたよ（^_^;）。</p>
            <p>今月宝塚に行かれる皆様、花の道には、<strong>大きなケロちゃんのすらっと茶の看板</strong>があるはず！！<strong>記念撮影</strong>をお忘れなくねっ（^_^;）。</p>
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
