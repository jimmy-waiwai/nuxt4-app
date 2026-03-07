<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            飛鳥　裕
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/06/29 up
            </p>
            <p>
              もともと長い雪組ファンだったので、<strong>ながさん(飛鳥裕)</strong>もずっと見てきました。<br>
              どちらかというと、<strong>ダンサー</strong>のイメージでしたね。ショーで、<strong>もさくさん(平みち)</strong>のバックで踊っていた<strong>「ザ・レビュー・スコープ」</strong>など、なんとなく覚えています。
            </p>
            <p>しかし最近、やはり芝居なども頼もしくなったな～、と思います。<strong>「Icarus」</strong>の<strong>父親</strong>など、重要な役でしたがながさんで良かったと思いましたし、<strong>「再会」全国ツアー</strong>の<strong>銀行頭取</strong>役も落ち着いた演技で良かったです。</p>
            <p>最近の<strong>「春麗～」</strong>の<strong>北の方</strong>役も、女役だったのに、違和感がありませんでしたよね。</p>
            <p>
              CSの「組長の系譜」を見た時のJIMMY母娘一致の感想。<strong>「私が組子だったら、組長はながさんが良いよね(^_^;)。」</strong><br>
              いや～、実際は知らないですよ。でも、優しい雰囲気で、悩みごとも聞いてくれそう(^_^;)。<br>
              そういえば、何かの公演で雪組のスターが一緒に観劇していた際、群がるファンに対して「すみません・・」としっかり遮っていたのが、組長らしくてかっこ良かったなぁ～。(曖昧な記憶ですみません・・。)
            </p>
            <p>昔の雪組を知っているながさん、これからもがんばって下さいね(*^｡^*)。</p>
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
