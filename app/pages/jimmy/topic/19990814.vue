<script setup>
definePageMeta({
  title: '夏休みファン感謝デー／チャーリー(匠ひびき)報告',
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
            夏休みファン感謝デー／チャーリー(匠ひびき)報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/08/14 up)
            </p>
            <p>突然の企画でご存じない方もいらっしゃったと思いますが、8/14～17まで<strong>「夏休みファン感謝デー」</strong>という事で、スターによるサイン色紙の当たる抽選会がありました。</p>
            <p>下に書いた通り、急遽もう一度観に行くことに決めた私、<strong>「どうせならチャーリーが出る日に観に行こう！」</strong>という訳で、くじ引きチャーリー、見て参りましたよ(^_^;)！</p>
            <p>芝居終演後、組長、副組長が緞帳前に登場。挨拶の後、戦場の場面の軍服姿のチャーリーが出てきました。</p>
            <p>「カールという男爵役をさせて頂いています。カールは新しい女性を見つける為にフリオにタンゴを教えてもらいます。しかし、時代は既にチャールストン・・。カールは新しい女性を見つけられそうにありません・・。<strong>だから・・皆さんが・・私の心の・・恋人になって下さい・・</strong>。」←記憶を頼りに書いているので、この通りではありません。こんな、内容だったと思って下さい(^_^;)。</p>
            <p>きゃ～、なるなる(*^｡^*)！！とＪＩＭＭＹ心の中で大喜び！！</p>
            <p>客席はお盆休み中ですっかり観光地状態。しかもお子様も多い昼の部の公演で・・このキザな挨拶・・。もぅ～、ステキ～(^_^;)。</p>
            <p>その後もにこやかに色々な話をしつつ、ガンガンくじを引いて、さっさと引っ込んでしまいました(^_^;)。←ショーの準備があるので、当然です。</p>
            <p>結局サインは当たりませんでしたが、ちょっぴりお得な公演でした(^_^;)。席、まだ余ってますし、良ければ是非行ってみて下さいませ(^_^;)。他の人の挨拶も良ければ教えて下さいね。</p>
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
