<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            城咲&emsp;あい
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/05/18 up
            </p>
            <p>
              彼女を初認識したのは<strong>バウ「血と砂」</strong>。<strong>プルミタスの少年時代をしている子</strong>と、<strong>ソルーナさん(磯野千尋)の愛人役をしているスラリとした美女</strong>とが、同一人物だと知ったのは、通い倒した公演のかなり終盤になってから（^_^;）。<br>
              顔を覚えると、砂の化身として踊っている<strong>ベージュのドレス姿と、動きの美しさ</strong>も目に止まり、<strong>「花ちゃん(花總まり)のようにスタイルが良くて綺麗な人だな～」</strong>と、すっかり気になる娘役さんに成長していました。
            </p><p>
              続く<strong>「ガイズ＆ドールズ」</strong>ではいきなりロケットのセンターに抜擢されていましたが、見た目は「血と砂」の方が印象が良かったです。<br>
              <strong>新公で初ヒロイン</strong>。えみくらちゃん(映美くらら)とはかなり印象の違う、大人っぽいサラでしたが、私は好きでした。<br>
              そして、そんなスタイルの良さや見た目だけでなく、結構<strong>歌も台詞も出来ているじゃない？</strong>&emsp;と思えたのも収穫でしたね。
            </p>
            <p>
              今回の<strong>「シニョール・ドン・ファン」</strong>では、りかちゃんの相手役の一人、<strong>カトリーヌ</strong>に抜擢されています。大人っぽい役柄で、あいちゃんに合っている事もあり、とても良いと思います。ぜひ見てみて下さいね。<br>
              <strong>新公のローサ</strong>も良かったです。見た目の雰囲気と、それに負ける事なく、伸び伸びと芝居ができていて、声も出せている所が、気持ち良いですね。
            </p>
            <p>最近「歌劇」誌のマドンナのコーナーにも入っていたし（^_^;）、かなり注目の娘役さんになってきているよう。これからが楽しみです。</p>
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
