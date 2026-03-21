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
            湖月 わたる
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/11/28 up
            </p>
            <p>母が良く、音楽学校の頃(もちろん初舞台の後、それがわたる君(湖月)だと分ったのですが)、<strong>電車の中で見かけた</strong>、と言っていた縁(?)で、わたる君も初めから知っていました。</p>
            <p><strong>ラインダンス</strong>でもいつも中央付近で、<strong>近くにいた神田智と二人、星組ラインダンスでのお楽しみでした</strong>ね（^_^;）。その頃では、<strong>「白夜伝説」新公のジェントル・ロビン</strong>とか、<strong>「うたかたの恋」新公のブラッドフィッシュ</strong>とか、すごく溌溂としていて、目がキラキラと輝いていて、良いな～、と思ったのを覚えています。</p>
            <p>今でも、<strong>「シトラスの風」そよ風と私の場のダンサー</strong>なんて、すごく張り切っていて、爽やかで（^_^;）、こういう所がわたる君の一番の魅力だな、と思います。</p>
            <p>ベストは<strong>「カサノヴァ～夢のかたみ～」新公のカサノヴァ</strong>。ヴァイオリン弾きとして出た瞬間、すごーく愛嬌があって、かわいくて、<strong>思わず周りの女役の人と一緒に「キャー(*^｡^*)」と叫びたくなる華やかさ</strong>がありました（^_^;）。アイドルっぽかった、というのでしょうか、シメさん(紫苑ゆう)のムード満点のカサノヴァとは全然違う魅力があって、とても印象に残っています。</p>
            <p>最近は、わたる君の良い所を見た気がしないんですよ（^_^;）。あまり活躍もしていないですよね。<strong>バウホールで初主演作を見られなかった</strong>のが痛いです。来年やっとこちらでの初主演が決定している事ですし、楽しみにしています（^_^;）。</p>
            <p>バウ「ドリアングレイの肖像」のヘンリーとか、<strong>大人っぽい役でも、ちょっと良いな、と思った事もありますし</strong>（^_^;）、もう三番手ではありますが、どんな男役になっていくのか、<strong>まだまだ未知数な気がします</strong>。これからが楽しみな男役さんです。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
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
