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
            月&emsp;&emsp;組
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/11/04 up
            </p>
            <p>トップは<strong>真琴つばさ</strong>、二番手は<strong>紫吹淳</strong>。このコンビの人気がすごくて、今の月組公演を支えてますね。<strong>りかちゃん(紫吹)</strong>の個性が強いので、どうしても<strong>まみさん(真琴)</strong>が純白の二枚目になりがちだけど・・、<strong>若手の頃のような影のある雰囲気もまた、見てみたいですわ～</strong>。三番手は<strong>初風緑</strong>。歌が随分上手くなりましたよね。後はショーでどれだけ華やさを出せるか、ですね。</p>
            <p>トップは<strong>檀れい</strong>が返り咲き。驚きましたが、とても嬉しいです。大劇場に先駆けて、トップ披露が地方「うたかたの恋」のマリーとは！！&emsp;これまたかなりのプレッシャーでしょうが、是非がんばって頂きたいですね～。実力にはまだまだ不安ありですが、<strong>美人の檀ちゃんが、トップとしてキレイな衣装を着て活躍すると思うだけで</strong>、美しい人大好きなＪＩＭＭＹは、胸が踊ります（^_^;）。</p>
            <p>続くは<strong>汐美真帆</strong>、と言いたい所だけど（^_^;）、やはり<strong>大和悠河</strong>がこれからもばく進しそうな情勢ですね。すでに(Ｗ主演含めて)三作目のバウ主演が決まっています。<strong>ケロちゃん(汐美)</strong>は、これからの活躍を見てみないと全然分かりませんが・・、ブレイク狙ってます（^_^;）、って私が狙った所でどうだと言うのだ（^_^;）。後は<strong>霧矢大夢、大空祐飛</strong>が活躍していますが、大和を越える程のインパクトはまだないですね。</p>
            <p>続いて注目している若手男役は・・、非常に少なくて残念なんですが（^_^;）、大柄で華やかな<strong>遼河はるひ</strong>と、可愛らしい<strong>紫城るい</strong>くらいかな。娘役は、<strong>花瀬みずか、西條三恵、叶千佳</strong>に注目。上手さで西條、可愛さで叶、全体的な安定感で花瀬でしょうか。今の所、甲乙付け難いですね。</p>
            <p>後は、<strong>千紘れいか、夏河ゆら、美原志帆、水沢葉月</strong>と色それぞれのお姉様方が豪華で良い（^_^;）。彼女達が活躍するダンスシーンなんか、見たいですね（^_^;）。<strong>千紘</strong>は檀と同期で、つらい所かも知れませんが、<strong>トップになるならりかちゃんと一番合う気がする</strong>ので、月組でがんばっていて欲しいです。</p>
            <p>他では、<strong>越乃リュウ</strong>がぐーんと見た目もアップして、かなり気に入ってます。それから<strong>真山葉瑠</strong>は、もっと活躍して欲しいですよね。又、<strong>嘉月絵里</strong>も上手いし、歌では<strong>星野瞳</strong>。組長の<strong>立ともみ</strong>も好きです。<strong>鳴海じゅん</strong>も可愛くて良いですね（^_^;）。</p>
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
