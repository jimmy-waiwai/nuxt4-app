<script setup>
definePageMeta({
  title: '宝塚ＨＰお便りコーナー、事前登録制へ',
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
            宝塚ＨＰお便りコーナー、事前登録制へ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/02/18 up)
            </p>
            <p>投稿時間の短縮、という形で収拾したかと思われた宝塚ＨＰのお便りコーナー問題。いよいよ<strong>事前登録制度</strong>導入を始めとする大改革を行うようです。会員制は私も改善策として考えていたことで、身元が割れているとあまり変な事は書けませんし、投稿する側としても、安心感があって良いと思います。</p>
            <p>デメリットもありますよ。まず初心者の新鮮な感想は聞けなくなるでしょう。後、「公演関係」がなくなって、各組の伝言板に編入されますよね。真面目な公演評も、ファンモードの公演評も、同じ欄に並ぶのは、読む人にとってはちょっと不便かな、と思います。</p>
            <p>私、各組の公演評を書いているのですが、全組に顔を出しても良いのでしょうかね～(^_^;)？また、TCAの感想等は、どうすれば良いのだろう(^_^;)？</p>
            <p>でも、いずれにしても今のお便りコーナーのままでは、大いに問題ありますので、ここは<strong>前向きに協力したい</strong>と思っています。廃止されるのは、やっぱり困るもの。</p>
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
