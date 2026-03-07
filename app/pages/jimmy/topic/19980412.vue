<script setup>
definePageMeta({
  title: '麻路さき退団',
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
            麻路さき退団
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/04/12 up)
            </p>
            <p>何か退団ネタが続いて(^_^;)、寂しい限りです。</p>
            <p>ミキちゃん(真矢みき)、マリコさん(麻路さき)の退団で、私にとっては完全に<strong>一時代の終わり</strong>を感じます。宝塚を見始めて、イチロさんファンになった頃には、ミキちゃんもマリコさんもそこそこ注目されていました。いわば、同じ時代の人という感じがするんですよね。</p>
            <p>後の愛華みれ、真琴つばさ、轟悠、稔幸になってくると、もう初舞台から見ているので(^_^;)、私の中では新世代なんです(^_^;)。</p>
            <p>マリコさんの舞台、大好きでした。歌えないのが致命的な弱点でしたが、マリコさんには、<strong>それでもトップになるしかないっ</strong>、という圧倒的な華やかさがありましたよね。</p>
            <p>それにしても、植田作品とは・・、マリコさんらしいわ(^_^;)。その華やかさと力強さを生かして、植田作品に真っ正面から取り組んで欲しいですね。きっと良い舞台になると思いますよ。</p>
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
