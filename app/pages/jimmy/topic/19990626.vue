<script setup>
definePageMeta({
  title: '宙組初見報告',
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
            宙組初見報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/06/26 up)
            </p>
            <p>宙組、立見で、とりあえず観てきました！！</p>
            <p><strong>ホセ、めちゃくちゃかっこ良いです～</strong>。きゃ～(*^｡^*)。</p>
            <p>そして、<strong>あのラブシーンは何～</strong>(^_^;)！！</p>
            <p>てな感じで、報告の事はすっかり忘れ、<strong>ずんちゃん(姿月あさと)＆はなちゃん(花總まり)</strong>にひたすらウットリでした(^_^;)。公演評は、ちょっと待ってね。</p>
            <p>一つだけ・・。ショーでずんちゃん、あの一路さんが「微笑みの国」で歌った<strong>「君こそ我が心のすべて」を少しだけ歌うんですよ！</strong><strong>あまりにびっくりして・・懐かしすぎて・・腰が抜けそうでした！</strong></p>
            <p><strong>「君こそ我が心のすべて」と言えば、一路さんがサヨナラショーで一番に歌った程の名曲。前回の「最後のダンス」といい、どうして、一路さんの十八番(?)ばかり歌うのか・・、ずんちゃん(^_^;)。</strong></p>
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
