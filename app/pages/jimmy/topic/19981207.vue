<script setup>
definePageMeta({
  title: '11月のアクセス',
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
            11月のアクセス
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/07 up)
            </p>
            <p>プロバイダーから毎月、各ページのアクセス数の報告書が来るんです(^_^;)。折角ですので、少し皆様にも報告しちゃいますね(^_^;)。(カッコの中は、11月中のアクセス数)</p>
            <p style="FONT-WEIGHT:bold">
              ●「まずは公演」
            </p>
            <p>１．エリザベート(349)２．Endless Love(220)３．凍てついた明日(102)</p>
            <p>～かなり思い入れたっぷりに書いたお気に入りのエリザ公演評、沢山の方に読んで下さっているようで、嬉しいです(^_^;)。ご意見、お聞かせ下さいね。</p>
            <p style="FONT-WEIGHT:bold">
              ●「気になるこの人をチェック」
            </p>
            <p>組１．宙組(208)２．花組(200)３．雪組(181)</p>
            <p>～他の二組も僅差でした。こうして見ると、皆様どの組も均等に見て下さっているようで、嬉しいです。</p>
            <p>生徒１．檀れい(116)２．樹里咲穂(107)３．姿月あさと(106)</p>
            <p>～檀ちゃんの注目度の高さが伺えま(^_^;)。ずんちゃんの分は４月に書いたものなのですが、いまだに沢山の方が見て下さっているなんて、嬉しいです(^_^;)。</p>
            <p style="FONT-WEIGHT:bold">
              ●「ＪＩＭＭＹの投稿文大公開」
            </p>
            <p>１．エクスカリバー(79)２．組替え(檀、汐美など)(54)３．エリザベート(雪組)(40)</p>
            <p>～今回しみじみ思いましたが、ずんちゃんファン結構来て下さってますね(^_^;)？！ワイワイコーナーにも来てね、気づかないから(^_^;)。雪組エリザはとても気合いを入れて書いたものなんですよ。これだけの方に読んで頂けて、ボツも報われました(^_^;)。</p>
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
