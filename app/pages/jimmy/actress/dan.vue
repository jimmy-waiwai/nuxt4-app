<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            檀&emsp;れい
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/10/24 up
            </p>
            <p>いや～、私、彼女のファンでしたが（^_^;）、トップになってしまうとは思いませんでしたね～（^_^;）。</p>
            <p><strong>初舞台生の顔写真</strong>の段階で、とっても綺麗な人だな～、と思っていました。でも、成績が最下位だったんですよ！！&emsp;<strong>娘役で、これでは話にならないわ</strong>、と思って、そのまま捨ておいてしまっていたんです（^_^;）。</p>
            <p>で、舞台で始めて認識したのが<strong>「バロンの末裔」の新公シャーロット</strong>。本役のゆらちゃん(夏河ゆら)がちょっとギャグに走り過ぎていてあまり好きではなかった所を、うまく押さえて、しかも他では娘役らしからぬ<strong>思い切りの良い演技</strong>で、<strong>綺麗なだけじゃなく、けっこう上手いじゃない</strong>、とかなり感心しました。それから注目していたのですが、雪組に組替えとなったのは嬉しかったですね。認められたんだな、と思って（^_^;）。</p>
            <p>そして<strong>「Icarus」のクレア</strong>。だんちゃんのピッタリの<strong>大美人の役</strong>で（^_^;）、<strong>とってもステキでした</strong>（^_^;）。と、これだけ注目していたのに、トップになるとは思ってなかったんですよ（^_^;）。<strong>ゆらちゃんみたいな、かっこ良い女役になってくれたらな～</strong>、くらいにしか思ってなかったんです。</p>
            <p>それから、最後の最後での<strong>新公ヒロイン</strong>、そしてニュースで彼女を取り上げ<strong>「もうすぐ発表予定の組替えで、誰かが大抜擢されるかも」</strong>という報道があったのを見て、始めて<strong>彼女がトップになってしまうかもしれない可能性</strong>を感じました。新公当日の<strong>落雷</strong>も、今思えば、彼女のスター誕生の瞬間に相応しい、とってもドラマチックな事件の気がしませんか（^_^;）。</p>
            <p>はっきり言って、基本的技術にはまだまだ難ありですが、<strong>勘と度胸の良さで、きっと素敵なトップさんになってくれると思いますよ。まみさん(真琴つばさ)とは美形どうしで・・、良いではないですか</strong>（^_^;）。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
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
