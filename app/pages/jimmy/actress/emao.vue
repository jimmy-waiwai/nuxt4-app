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
            絵麻緒 ゆう
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/07/22 up
            </p>
            <p>ぶんちゃん(絵麻緒)は結構下級生から活躍しているので、もっと前から色々見ているはずなんですが（^_^;）、初めて認識したのは<strong>「メイフラワー」新人公演のロバート</strong>。「稔幸」の欄に書いた通り、のるさん(稔)の大出世作なんですが、私は、<strong>ぶんちゃんの美しさにも釘付け</strong>でした（^_^;）。</p>
            <p>後、<strong>「白夜伝説」新公のオーディン</strong>とか、<strong>「うたかたの恋」新公のルドルフ</strong>とか、コスチュームがとっても似合っていて、キレイでしたー（^_^;）。</p>
            <p>特に「うたかた」では男らしさや頼もしさも感じられて、<strong>私の中では今までのベスト</strong>かも・・。</p>
            <p>あれから随分経つのに、まだとっても可愛い所がありますよね。<strong>何か、あの頃よりも可愛くなっているかも</strong>・・（^_^;）。なかなか貴重な持ち味ですよね（^_^;）。<strong>もうちょっと頼もしいところも見せてくれないと、苦しいんじゃないか</strong>とも思いますが（^_^;）。</p>
            <p><strong>「誠の群像」の沖田総司</strong>の無邪気な明るさとか、<strong>「ディーン」</strong>の傷付きやすい少年ぽさとか、上手いだけでなく、こういうのがぶんちゃんの魅力なんだな、と思わせる所がありましたね。</p>
            <p><strong>「殉情」の佐助</strong>も忘れ難いです。</p>
            <p>ショーでも、顔をしかめてキザっている時よりも（^_^;）、<strong>無邪気に「ニコッ」と笑ったぶんちゃんに、弱い私</strong>です（^_^;）。</p>
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
