<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            大和 悠河
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>現在最も歌劇団が押している、期待のホープ。当然風当たりは強いけど、私は認めてしまっています(^_^;)。華やかだし、そこそこ上手いので、逆らえません(^_^;)。</p>
            <p>始めに意識して見たのは<strong>「FAKE LOVE」のマイケル</strong>くらいかな。抜擢のされ方だけでなく、<strong>見た目や声までも天海祐希にそっくり</strong>なのにはびっくりしました(^_^;)。</p>
            <p>そして昨年バウ<strong>「ワン・モア・タイム！」</strong>ではもうダブル主演。公演自体は「きっとヤン(安寿ミラ)＆ミキ(真矢みき)コンビなら、もっと面白かっただろうなぁ」(残念ながら初演は見逃しているんです)という出来でしたが、<strong>大和悠河が、既に主役してもおかしくないスター性の持ち主であることだけは</strong>、良く分かりました(^_^;)。元々、成瀬こうきを本来主役でないローズバットにして、格下の大和悠河を無理矢理ルイスにし、ダブル主演とすること自体に、<strong>かなりの寒さ</strong>を感じる公演となってしまったのが、可哀相でしたけどね。</p>
            <p>このような、歌劇団にありがちな<strong>「無理矢理抜擢」攻撃</strong>(^_^;)を受けているのが心配ですが、<strong>結構のびのびと演っているように見える</strong>ので、このまま素直に実力を付けていって欲しいです。</p>
            <p><strong>「ウエストサイド・ストーリー」</strong>では、少年の中の一人として群集に混じっていましたが、そうなると、やはり一際目立ちますね。</p>
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
