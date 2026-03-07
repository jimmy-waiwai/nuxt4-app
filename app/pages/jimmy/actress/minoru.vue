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
            稔　　幸
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/07/18 up
            </p>
            <p>私がこんなに新公にハマるきっかけとなったのが、<strong>のるさん(稔)の初主演「メイフラワー」</strong>でした。</p>
            <p>知り合いから、チケット当日でも売っているし(今は違うが、当時はそんな時代だった)、新公面白いから一度見に行ってみたら(大昔に一路真輝主演の「三つのワルツ」だけ見に行ったことがあったのですが、それ以降はなかった)、と言われて、見に行ったんです。</p>
            <p>
              本当に、あっさり1階席が買えたんですよ(^_^;)。私も今ほど、若手まで詳しくなかったので(^_^;)、<strong>主演なのに「稔幸」って誰?
                という状態</strong>での観劇でした。
            </p>
            <p><strong>もう、すごく良かったんです！！　これが。</strong></p>
            <p>最初銀橋の中央でスポットライトを浴びる瞬間から、<strong>キラキラ輝いていました！！</strong></p>
            <p>のるさんにとっても、1期上にいた大輝ゆうが次からは当然新公主役だと思われていたのに「ベルばら」で退団、<strong>それまでろくに活躍したこともなかったのに、突然回ってきたチャンスでした。</strong></p>
            <p>何か<strong>スター誕生の歴史的瞬間</strong>に立ち会ってしまったような、そんな感動的な舞台でした。</p>
            <p>何と言っても、<strong>スタイルの良さ、動きの美しさ</strong>が抜群ですよね。</p>
            <p><strong>「ナルシス・ノアール」</strong>で銀橋で歌っていた<strong>「魅惑のサンバ」</strong>ののるさん、溌溂として元気一杯で、大好きだったなぁ(^_^;)。</p>
            <p>何か、<strong>明るくって、元気で、さわやかな</strong>のるさんが好きなんですー(^_^;)。</p>
            <p>反対に、「皇帝」の公演評でも書いたけど、「(かすれ声で)オクタヴィアッッ・・」に象徴されるような、<strong>濃い～のるさん</strong>、これがちょっと苦手(^_^;)。ファンにはここが良いらしいけど(ウチの母がそうだ(^_^;))。</p>
            <p>何か、「やってる、やってる」みたいな感じで、<strong>ウヒョウヒョ喜んで見ている自分</strong>はいるんだけど(^_^;)、基本的には、あまり良いとは思わないんですよね。</p>
            <p>あと、のるさんと言えば、<strong>コメディ！！　もう、大好きなんです</strong>(^_^;)。以前ＴＭＰでやっていた<strong>「風共」の妖しいアシュレ</strong>なんて、最高でした(^_^;)。</p>
            <p>今回のショーの<strong>「男の時代」</strong>は<strong>ウケ</strong>でしたが(^_^;)、<strong>トップになったら</strong>、自分が中心でハチャメチャに暴れまわるような、<strong>無茶苦茶なコメディを是非一発お願いしたい</strong>(^_^;)。のるさん以上に、面白くできる人は、そういませんよー(^_^;)。</p>
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
