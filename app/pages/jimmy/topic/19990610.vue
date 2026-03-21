<script setup>
definePageMeta({
  title: 'ビバ・タカラジェンヌ公開録音・ケロちゃん(汐美真帆)報告',
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
            ビバ・タカラジェンヌ公開録音・ケロちゃん(汐美真帆)報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/06/10 up)
            </p>
            <p>何だか、ケロちゃんネタが続き過ぎて、ここはケロちゃんのページなのでは？と誤解されそうな気がするのですが、公演中という事で（^_^;）。もうすぐ正気に戻る予定ですので(?)、もう少しおつき合い下さいませ（^_^;）。</p>
            <p><strong>ＡＭ神戸「ビバ・タカラジェンヌ」公開録音</strong>に、初めて参加してきました！出演は、<strong>紫吹淳、汐美真帆、霧矢大夢、西條三恵</strong>です。</p>
            <p>いや～、<strong>りかちゃん(紫吹)</strong>、恐いものなしの大暴走振りで、<strong>ノコさんもケロちゃん達もタジタジ</strong>（^_^;）。めちゃくちゃ面白かったですよ～。どこまで放送するんでしょうねぇ（^_^;）。</p>
            <p>ケロちゃんは、白の夏らしいカジュアルな服装で、髪はくしゃくしゃって感じ(表現が稚拙ですみません)。ちょっと儚気な雰囲気がとてもステキでした。</p>
            <p><strong>トーク</strong>は<strong>メール夫人</strong>の話題が主でした。ノコさんが<strong>「なるちゃん(成瀬こうき)のメール夫人は、はっきり言って笑いました。本人にも言ったんだけど（^_^;）。で、あなたはどうなるんだろうと思ってドキドキしながら見ていたら・・」</strong></p>
            <p>・・と、ここで、キレイだったと言ってくれるのかと期待したら、</p>
            <p><strong>「はっきり言って、笑いました（^_^;）。」</strong></p>
            <p>・・どないやねんっ（^_^;）！！</p>
            <p><strong>歌</strong>は、公開リハーサルと本番とで二回も聞く事ができてラッキーでした（^_^;）。曲は、何と<strong>「エリザベート」の「夜のボート」！！</strong>雪組初演の時、<strong>新公でフランツ</strong>を演じたからですね。</p>
            <p>もぅ、ホント<strong>切なそうに、歌う</strong>んですよ～。ステキでした～。歌った後の話題でも出ましたが、<strong>確かに目線の先に、エリザベートが見えましたね</strong>（^_^;）。私が、<strong>気分はエリザベート</strong>になって、心の中でケロちゃんとデュエットしていた事は、言うまでもありません（^_^;）。</p>
            <p>歌の分は13日放送、残りは20日です。どうぞ、お楽しみに！！</p>
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
