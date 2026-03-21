<script setup>
definePageMeta({
  title: '梅田ペルソナ広告、さえちゃん(彩輝直)に！！',
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
            梅田ペルソナ広告、さえちゃん(彩輝直)に！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/06/28 up)
            </p>
            <p>ローカルな話題ですみません・・（^_^;）。</p>
            <p>いや、ペルソナのモデルがさえちゃんになったのは、ずっと前から知っていたんですよ。</p>
            <p>ただ、ずーっと長い間、<strong>阪急百貨店前</strong>の通路上方にあった、男役時代の金髪のイチロさんがモデルの<strong>巨大なパネル</strong>が、さえちゃんになっているのを発見して、ぐっと実感が沸きました(T_T)。</p>
            <p><strong>何か、寂しいです～、すごく。</strong></p>
            <p>麻実れい→一路真輝→彩輝直となったペルソナモデル。美人度でいくと、納得ものですが（^_^;）、前二人の偉大さを考えると、<strong>期待されてるんだなぁ、さえちゃん・・</strong>、て感じでしょうか（^_^;）。</p>
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
