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
            エンカレッジ・スペシャルコンサート「Angels in Harmony」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              宝塚バウホール・9/30～10/5
            </p>
            <p>
              エンカレッジ・スペシャルコンサート「Angels in Harmony」、10/3に観てきました！<br>姿月あさとと樹里咲穂が中心となれば、良いに決まっていると分かっていましたが、予想通りに素晴らしかったです。
            </p>
            <p>
              他は宙組若手選抜メンバー。これが声を聞くのも初めての超若手も多かったのですが、全員上手かったです。3年近く前の宙組「エンカレ」の時には宙組が一番場慣れしていないと言うか(笑)、弱い気がしたのですが、当時よりも若手が多いにもかかわらず、全体的に底上げされたように感じました。姿月や樹里と並んで歌うという影響も、きっとあるんじゃないかと思います。
            </p>
            <p>
              中ではまず和音美桜。上手い人なのは知っていましたが、「Don't Cry For Me
              Argentina」始め、どの曲も堂々としたものでした。「ウエストサイド・ストーリー」外部出演のマリア役、良い人選なのではないでしょうか。<br>そして長の天羽珠紀。「星から降る金」(モーツアルト!)の選曲には驚きましたが、これも上手かった。前回エンカレよりも良かった気がします。<br>そして「愛の旅立ち」を歌った真木薫も、秘かに前回エンカレより上手くなっていたのが嬉しい。キレイな男役さんだけに、このまま埋もれて終わらないんじゃないか？&emsp;という期待を持ちました。<br>「世界の終わる日まで」の遙海おおらも期待通りの良い声。「アイーダの信念」を娘役らしい高い声で歌った葉室ちあ理も、初舞台の時に感じた通りの良い声でした。<br>新人の真央あきとと暁郷の「激情」もなかなか。真央は可愛らしい二枚目で、暁は男役らしく個性的。二人とも男役としても楽しみです。<br>他の娘役(花露すみか・妃宮さくら・白峰さゆり)は、まるまる一曲のソロがなかったので、はっきりとは分からなかったのですが、悪くなかったと思います。できるなら、全員一曲ずつ聞きたかったです。
            </p>
            <p>
              宝塚化粧の現役生の中、一人薄化粧だった姿月。それでも誰よりもかっこ良く、圧倒的な存在感、歌唱力でした。<br>さらりと歌を聞かせ、バウホール500人の観客をいとも簡単に熱狂させ、総立ちにさせてしまう実力。<br>この人が今宝塚にいてくれたら、どんなに良かっただろう・・と、またまたまたまた(笑)姿月を観る度に、今だにせつなくなってしまいます。<br>今回は宝塚で、男役の歌を歌ってくれたから、余計ですね。
            </p>
            <p>
              樹里は特に歌手というイメージはなかったのですが、そのオールマイティの実力は、歌のみの公演であっても十分、唸らせてくれるものがありました。
            </p>
            <p>
              「闇が広がる」のシャレにならない心地よさ。「明日へのエナジー」に立ち上がって手を打ち参加した楽しさ。「未来へ」のコーラスに「あの頃は良かった～」としみじみ・・。<br>夢のような・・でも決して現在の宝塚ではありえない、特別な公演でした。
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
