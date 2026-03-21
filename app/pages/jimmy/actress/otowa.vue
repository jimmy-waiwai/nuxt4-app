<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            音羽&emsp;椋
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/07/24 up
            </p>
            <p>彼女も瀬奈じゅん共々<strong>花組下級生時代</strong>から、ラインダンスなんか、喜んで目で追ってました（^_^;）。</p>
            <p>まず始めに印象に残っているのが<strong>「ベイ・シティ・ブルース」カジノの場面でコインとか回収する人</strong>(な、なんて言うんだっけ?・・情けない（^_^;）)。かっこ良かったのですが、<strong>すでにただならぬ恐いオーラを発していて</strong>（^_^;）、<strong>「あの人が音羽椋っていうねん。恐いやろ?」</strong>と母に教えてあげたのが、強烈な思い出です（^_^;）。</p>
            <p>その後もバウ<strong>「アロー・アロー・キャメロット?」</strong>のチョイ役で、<strong>奴隷商人</strong>というのがあったのですが、<strong>ムチを振るいながら、威嚇しながら、通行する姿が、素晴らしく恐くて、ハマっていて</strong>、大笑いでした（^_^;）。</p>
            <p><strong>ダンスが素晴らしくて</strong>、早くから良い位置で踊っていたのですが、その時も、<strong>野心満々、ギラギラ</strong>して見えるのが、ちょっと・・、と思ってました。</p>
            <p>それが、ガラガラと崩れたのが、<strong>WOWOWスターの小部屋「二人だけが悪」新公のトーク時</strong>。びっくりする位、<strong>頼りなげな、可愛い人</strong>だったんです！！&emsp;今では有名ですが、当時はかなりのインパクトがありましたねー（^_^;）。もう<strong>「ひえ～、イ、イメージがぁ・・」</strong>とテレビ前で叫んでしまいましたもの（^_^;）。</p>
            <p>こういう面が、最近<strong>「夜明けの天使たち」</strong>や<strong>「皇帝」新公</strong>なんか見てると、出てますよね。<strong>強そうに見えて、時折頼りない表情を、チラッと見せるのが、母性本能をくすぐるって言うんですか（^_^;）？</strong>&emsp;おとこちゃんファンは、こういう所に惚れているのかしら？&emsp;なーんて、思いましたね。</p>
            <p>最近ナチュラルな若手が多い中、<strong>これだけ普段と舞台のイメージが違う人も珍しいです。見てて、何だかとっても楽しいです</strong>（^_^;）。</p>
            <p>今の所、<strong>「おっ、おとこちゃん、今日も怒ってる、怒ってる（^_^;）」</strong>と言いながら喜んで見ている状態ですが、<strong>いつか、その男らしさに殺される日が来るかもしれません</strong>（^_^;）。</p>
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
