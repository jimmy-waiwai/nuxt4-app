<script setup>
definePageMeta({
  title: '実は・・チャーリー(匠ひびき)に感動しました（^_^;）',
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
            実は・・チャーリー(匠ひびき)に感動しました（^_^;）
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/10 up)
            </p>
            <p>一体一日にいくつトピックスを書くつもりなんでしょうか・・私・・（^_^;）。</p>
            <p>実は・・パレードの<strong>チャーリーの大きな羽</strong>に、感動しました。<strong>涙出そうでした</strong>よ（^_^;）。何を今更・・、と言われそうですが（^_^;）。小さい頃(?)から応援してたんで・・。<strong>母心モードが入ってしまっている自分</strong>を、今日はっきりと自覚しました（^_^;）。</p>
            <p>フィナーレのラテンの場面では、<strong>「ラ・ノーバ！」の豹の場面の音楽</strong>が使われていました。昔、チャーリーがりかちゃん(紫吹淳)の代役で(・・・。)センターで踊った<strong>思い出の曲</strong>で・・、懐かしいです～。</p>
            <p>それにしても、フィナーレのダンス・・。全体的に<strong>足を上げる振りが多かった</strong>よね～、<strong>羽山先生</strong>～（^_^;）。もう、足で頭を打ちそうな位、気持ち良く足の上がる<strong>チャーリーが目立つ目立つ</strong>・・（^_^;）。<strong>確信犯ですか？</strong>先生（^_^;）。</p>
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
