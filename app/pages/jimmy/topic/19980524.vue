<script setup>
definePageMeta({
  title: 'スターの小部屋／５月第２回',
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
            スターの小部屋／５月第２回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/05/24 up)
            </p>
            <p>「SPEAKEASY／スナイパー」より<strong>ミキちゃん(真矢みき)、タモさん(愛華みれ)、チャーリー(匠ひびき)のトーク</strong>。特に評判の悪いショーに対しても「良い作品だ」と信じこんでいる３人の姿に心打たれたファンも多いのでは？</p>
            <p>今回は、若手好きＪＩＭＭＹのお気に入りコーナー<strong>「フレッシャーズ」</strong>が２つもありました（^_^;）。</p>
            <p>
              まずは、<strong>未来優希と立樹遙の雪組研６コンビのトーク</strong>。特に<strong>立樹遙</strong>は我が家では「<strong>ヒトデＡちゃん</strong>(byラ・ジュネス！)」と呼ばれて親しまれているので（^_^;）、嬉しかったです。どうせ「風共」の話が出たんだから、<strong>ウィリー演ります</strong>って、アピールしなきゃ！
              とテレビ前でじりじりしていました。<strong>未来優希</strong>も舞台での貫禄ある姿とは全然違い、オフはやっぱり下級生だなぁ、という初々しさで（^_^;）、面白かったです。
            </p>
            <p>対して、<strong>霧矢大夢と鳴海じゅん月組研５コンビ</strong>は、初舞台からトークしている優等生だけあって（^_^;）、ずっと自然に話してる気がしました。どっちが上級生だ？、全く（^_^;）。トーク中にチラッと映った<strong>「ハゥ・トゥ・サクシード」新公のフィンチ</strong>(霧矢)が、良かったです（^_^;）。フィンチのバレエジャンプ、噂通りの素晴らしさでした。</p>
            <p>でも確か、未来優希もトップ卒業だったよね・・。やはり成績と<strong>トークの上手さ</strong>は関係ないか。←当たり前・・。</p>
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
