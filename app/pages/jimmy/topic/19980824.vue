<script setup>
definePageMeta({
  title: 'ケロちゃんお茶会報告',
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
            ケロちゃんお茶会報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/08/24 up)
            </p>
            <p>ケロちゃんのお茶会行って参りました！！</p>
            <p>白(ちょっとクリーム色っぽかったかな・・)のシャツに身を包んだケロちゃんは、<strong>舞台での男らしい姿</strong>（^_^;）とは裏腹の、<strong>華奢で、色白の、きれいなお姉さん</strong>でしたわ～(*^｡^*)。</p>
            <p>以前、初参加なのに、いきなりテーブル対抗のゲームに勝ち抜き、2ショット写真を撮ってもらったＪＩＭＭＹは、その時ファンの方々に「こんなに良い事はめったにないのよ！」と言われていたこともあり（^_^;）、あまり期待せずに、おとなしく(?)テーブルに座っておりました。</p>
            <p>で、案の定、今回はゲームの方はさっぱりで、おいしい目にはあえませんでした（^_^;）。ちょっと残念。でも、ゲームそっちのけで、ケロちゃんに見とれていたせいかもしれない・・（^_^;）。</p>
            <p>そして、お茶会も終盤にさしかかり、ケロちゃんから歌のプレゼントがありました。「ラブ・ジェネレーション」の主題歌だった「幸福の結末」です。</p>
            <p>歌いながらテーブルの間を廻るケロちゃん、うっとりと見とれている（^_^;）ＪＩＭＭＹの前で、止まりました！！</p>
            <p><strong>「今夜君は僕のもの～」(と、ＪＩＭＭＹの顔を見て歌う！！)</strong></p>
            <p>・・殺されてしまいました（^_^;）。</p>
            <p>もう、これだけでも、十分満足です～(*^｡^*)。</p>
            <p>おもわず、<strong>「はい、どうぞ・・」</strong>と心の中で呟くＪＩＭＭＹでした・・。←バカ（^_^;）。</p>
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
