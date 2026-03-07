<script setup>
definePageMeta({
  title: '雪組公演のポスター',
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
            雪組公演のポスター
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/07/06 up)
            </p>
            <p>雪組公演のポスター見ました?</p>
            <p>「ぶっ・・」<strong>笑っている場合ではありません</strong>(^_^;)。ますます客が逃げそうですぅぅぅ～。<strong>どーしてくれるんだ！！中村一徳先生～</strong>(T_T)。</p>
            <p>しかも、「主な出演者」に、またまたケロちゃん(汐美真帆)が入ってませんでした！！</p>
            <p>今回も役柄は良さそうなのに～。もう、どういうこと～？？？。</p>
            <p>ふふっ、でも～、<strong>この待遇の悪さ(^_^;)が、ファン心を熱くするのよねっ！！ </strong>ふ、ふ、ふ・・。←恐い・・。</p>
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
