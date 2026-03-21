<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            真汐&emsp;薪
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/07/31 up
            </p>
            <p>
              初舞台から<strong>司祐輝</strong>に秘かに(?)注目し、ずっと成長を応援していたのが思いの外面白かったので、<strong>毎年初舞台時のお気に入りさんを決めよう</strong>と思い立ち、HPを作ってからはそこで発表しているんです。<br>
              それを思いついた1997年、<strong>再開後初のお気に入りさん</strong>が真汐薪君です。
            </p>
            <p>ラインダンスをしている時、コムちゃんを思い出させるような、<strong>お人形のようなきれいな顔</strong>だと思いました。今見ると、素顔は似ていないし、体格も全然違うのですが（^_^;）、お人形のようにきれい、という点では遠くないような気もします。</p>
            <p>
              最近の「プラハの春」では、ねったん(夢輝のあ)演じる<strong>ヘスの部下</strong>役。<br>
              新公では学年も上がってきたせいか、最近、美しいのに結構渋い役をしています（^_^;）。あまり活躍は見た事がないので何とも言えないですが、今までの注目の結果、あんまり実力派でないのは確かです(おいおい)。
            </p>
            <p>
              でも、<strong>きれいで目立つ</strong>のも確か。その点、<strong>さすが私、お目が高い♪</strong>&emsp;と満足しています（^_^;）。<br>
              何か、もうちょっと、その美しさを生かした良い役を見てみたいですね。せっかくここまでがんばってくれているのですから。
            </p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyActressList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyActressList />
    </div>
  </div>
</template>

<style scoped></style>
