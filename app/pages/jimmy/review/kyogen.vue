<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'default',
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
            第三回・宝塚狂言の会～茂山忠三郎レッスン発表会
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              宝塚バウホール・10/23～24
            </p>
            <p>宝塚狂言の会、第三回にして、初めて観る事ができました。</p>
            <p>
              学生の頃一度授業で観た事があり、それも面白かったのですが、<strong>大好きなタカラジェンヌが演るというだけで、狂言ってこんなに面白くなるのか</strong>、と思いましたよ(^_^;)。台詞など若干わかりやすく変えてくれているのではないかと思うのですが(自信はないけど、多分。)、狂言特有の面白さが十分に伝わってきて楽しめました。花組若手の台詞もたっぷり聞けたし、<strong>下手なバウ公演より見応えあるかも</strong>(^_^;)。これで3,000円はお得だと思いました。
            </p>
            <p>
              出演者の方も、日本物や大芝居系に縁の薄い(「夜明け～」等もあったけど・・散々だったし・・。^_^;)花組だけに、苦しい公演になるのではないかと予想していましたが、全然そんなことなくて、下級生まで良い声を聞かせてくれたのが嬉しかったです。
            </p>
            <p>
              中では「しびり」の<strong>愛音羽麗</strong>。さすが成績が良かっただけあって、可愛いだけでなく上手いんだ、と初めて思いました(^_^;)。声が良かったし、しぐさも可愛かったです。
            </p>
            <p>
              「二人袴」は演目的にも一番面白くて、弟の<strong>瀬奈じゅん</strong>が派手な着物も似合っていて素顔でも一際華やか。声も良く、「冬物語」の歌舞伎で成長したのかな～、と思いました(^_^;)。このまま瀬奈を埋もらせてしまうのは惜しいですよ～。
            </p>
            <p>
              「文荷」は<strong>蘭寿とむ</strong>と<strong>壮一帆</strong>の同期のかけあいが息が合っていて面白かったですね。蘭寿は「蝸牛」でも良い声を聞かせてくれていました。
            </p>
            <p>
              そのラストの「過牛」でいよいよメインの<strong>匠ひびき</strong>登場。こういう分野は一番の苦手ではないかと思うのですが、台詞等はちょっと危なっかしい所も・・、でもその「危なっかしい」のが既に彼女の持ち味(魅力？)な気も・・(^_^;)。とにかく、<strong>あのキザの似合う匠が「でんでんむしむし・・」と踊っているだけで、めちゃくちゃ可笑しい。</strong>ダンサーだけに、<strong>かたつむりのポーズだろうが、何だろうが、かっこ良くキマって</strong>しまうんですよね(^_^;)。これが又、笑えました(^_^;)。主人の<strong>大鳥れい</strong>も堂々とした声で、娘役にしておくのは勿体ない位(^_^;)。
            </p>
            <p>
              ・・とこれだけしか挙げないのが申し訳ない位、全員、良かったです。これを機会に花組芝居が変わるといいな・・(^_^;)。すごく、良い経験になったのではないかと思うので、今回のメンバーの、これからの芝居での飛躍を期待したいです。
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★<span class="text-gray-400">★★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyReviewList />
    </div>
    
  </div>
</template>

<style scoped></style>
