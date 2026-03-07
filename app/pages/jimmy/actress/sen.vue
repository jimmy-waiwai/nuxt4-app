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
            千 ほさち
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/26 up
            </p>
            <p>今は<strong>「晴れのち曇り」状態</strong>です。私の中では(^_^;)。</p>
            <p><strong>初舞台時の写真を見た時点</strong>で、成績も３番だったし、すごーくキレイだし、<strong>間違いなくトップ候補</strong>だと思ってました。</p>
            <p>初めて舞台上で確認したのは、<strong>「エールの残照」新公のメイド</strong>役。キレイでした。</p>
            <p>初の大役<strong>「結末のかなた」の大鳥不二子</strong>は、大のお気に入りのずんちゃん(姿月あさと)の相手役という事もあり、随分期待して見ましたが、台詞が下手なのに閉口しました(^_^;)。</p>
            <p>ミキちゃん(真矢みき)の相手役としての第一作<strong>「失われた楽園」のリア</strong>は良かったです。台詞も気にならなかったし、役柄もほさっちゃんにピッタリでしたよね。</p>
            <p><strong>「サザンクロス・レビュー」</strong>の方も、ハジケっ振りが、<strong>もう「ブラボー」</strong>って感じで、大好きでした(^_^;)。</p>
            <p>頭にデッカイ鳥を付けて踊るバカバカしさが、何かキュートで(^_^;)、以前ミキちゃんと組んでいた(？)<strong>華陽子</strong>を思い出させる雰囲気もあり(ようこちゃんは、ここまでハジケてませんでしたが(^_^;))、なかなか合うんではないか？　と思いました。</p>
            <p>いや、<strong>今も良いコンビだとは思います</strong>よ。</p>
            <p>でも、その後<strong>「ザッツ・レビュー」「ＳＰＥＡＫＥＡＳＹ」</strong>と<strong>一向に台詞の声が良くならない</strong>のが残念です。面白さで通すのもそろそろ限界じゃないでしょうか。</p>
            <p>あのハジケっ振りは好きだけど、そろそろ、実力をつけて欲しいですね。</p>
            <p>と言っても、<strong>台詞以外の歌やダンスは悪くない</strong>と思うんだけど。</p>
            <p>それに、何と言ってもあの<strong>美貌</strong>ですから、あれで台詞の声さえ良くなれば、<strong>ちょっとすごい娘役になれる</strong>と思うんですよね～。</p>
            <p>勿体無い～。何とかしてくれ、ほさっちゃん(^_^;)。</p>
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
