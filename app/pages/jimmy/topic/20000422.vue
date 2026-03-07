<script setup>
definePageMeta({
  title: '「タカラヅカ狂想曲3」に寄稿しました',
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
            「タカラヅカ狂想曲3」に寄稿しました
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/04/22 up)
            </p>
            <p><strong>赤岩友美子さん著、「タカラヅカ狂想曲」part3</strong>が4/30に発売になります。その中の第4部、フレッシュ男役スターのコーナーは、各組の若手男役のファンがそれぞれのスターについて書いているのですが、その中の・・何と<strong>「汐美真帆」の欄</strong>を(^_^;)、担当させて頂きました(^_^;)。</p>
            <p>本についての詳しい情報は、やうこさんのＨＰ(With YU)の中にあります。ユキタケダさんによる表紙のイラストも載っています(相変わらず、すっごく特徴を捉えていて・・楽しいです)。</p>
            <p />
            <p>http://www.venus.dti.ne.jp/￣yoko3/osirase.htm(リンク切れているのではずしました。)</p>
            <p>実際依頼が来たのは昨年末なんですよ。「FC活動をしている訳でもないのに・・、私で良いのかしら？」と三秒位悩みましたが(^_^;)、<strong>ノビノビとケロちゃんをアピールできる舞台が向こうから用意されているのに、他の方に譲りたくないわ～</strong>、という事で(^_^;)、私なりに、精一杯書かせて頂きました。</p>
            <p>書いたのは今年の正月で、その後<strong>プログラムで1ページ写真になるとか、月組公演の大活躍とか、ディナーショーがあること等、全然知らない私</strong>が書いています。・・かえって良かったかも。今書いたら、もっと狂信的になっていたかもしれないから(^_^;)。</p>
            <p>他のファンの方にも読んで頂きたいので、なるべく読みやすく、軽く、楽しい文章を目指しました。よろしければご覧下さいね。このHPの表紙のような感じのイラストも載せて頂いています。</p>
            <p>他の若手担当の方がどんな事を書いておられるか全然知らないのですが・・、私の文が浮いていないかどうか心配です(^_^;)。</p>
            <p><strong>このHPの読者の方に、日頃の感謝を込めて、掲載書を一冊プレゼント</strong>したいと思います。次の私に関する超難問に、一番早く全問正解された方にプレゼントします。(プレゼントは終了しました。参加して下さった皆様、ありがとうございました！)</p>
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
