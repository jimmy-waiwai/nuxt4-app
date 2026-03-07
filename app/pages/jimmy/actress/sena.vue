<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            瀬奈 じゅん
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>彼女は初舞台の頃から、<strong>顔では完全に目立ってました</strong>。私の周りでは(^_^;)。だから、ラインダンスしてる頃から、結構目で追ってましたね。</p>
            <p>現在、花組は水夏希、眉月凰の組替えで、競争が激しく、瀬奈にとって最後の新公になる次公演、主役が回ってくるかは非常に危うい(^_^;)。でも、私なら彼女を押しますね。見た目が良くて、温かさがあって、魅力的です。</p>
            <p>今までのベストは<strong>「失われた楽園」新公のレスリー</strong>かな、これで「結構歌えるんじゃないの？」と、ますます期待を持ちました。</p>
            <p>今年「宝塚グラフ」で同期紹介を彼女が連載していますが、<strong>文章も上手い</strong>よね(^_^;)。頭の良さを感じます。これからが楽しみな男役さんです。</p>

            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/05/29 up
            </p>
            <p>上の生徒評、7年前の書き込みだけあって、ネタも懐かしい～(笑)。</p>
            <p>
              ここで話題にした最後の新公、<strong>「SPEAKEASY」</strong>で主演ゲットしたのはご存じの通り。<br>
              すっごい、楽しみにしていました。<strong>1ヶ月前から指折り数える位の勢い</strong>で、楽しみにしていました。<br>
              私の中で、あさこちゃんファン度が、一番盛り上がっていた時期だと思います(^_^;)。
            </p>
            <p>
              実際のその新公、ゴルチェのスーツを着こなしたあさこちゃんは、とても格好良く、夢中で観ていたのですが、ただ、見た目、割と男らしいではないですか。そこが好みだったんですけれど、意外と中身は線が細い、声も高いんだな～、と、その公演を観た事によって、初めて気づきました。<br>
              この公演評、今読んでも我ながらなかなか良い線ついているので(^_^;)、よろしければ読みに来て下さい。
            </p>
            <p>
              以降、ちょっと冷静になり、<strong>割と好きな男役さん、見た目は最高に好みな男役さん</strong>(^_^;)だと思って観ていました。見た目、<strong>昔はずんちゃん(姿月あさと)に似ていると思っていた</strong>んですよ。包容力がある所も。<br>
              そう思ってずんちゃんから流れてファンになった方、昔は結構いたんじゃないかな。<br>
              本人まみさん(真琴つばさ)好きだったのは、有名な話ですよね。コンサートの<strong>「SENA!」</strong>は観ていないのですが、ポスターや映像から、そんな彼女の志向が見えるような気がします。<br>
              そんな持ち味と志向がミックスされているのが、今の彼女なのではないでしょうか。
            </p>
            <p>
              次に来たのが、ごく最近の月組特出<strong>「タカラヅカ絢爛2」</strong>。話題にしたので覚えておられる方もいるかもしれない、かの<strong>「墓場で酒場」</strong>の場面です。<strong>かっこ良かった～。人気があるのも分かるぞ～。ちくしょう～。参った～。</strong>と思いました(^_^;)。<br>
              花組ではチャーリー(匠ひびき)が好きだったので、あまりショーでしっかりあさこちゃんのダンスを観ていなかったのかもしれません。知らない間に、しっかり花組で、男役のかっこ良いダンスを身につけていてくれたんだな、と。遅まきながら気づきました。<br>
              ショーではこれがベスト。その時話題にもしましたが、個人的には<strong>この場面をサヨナラショーに加えてくれても可</strong>(^_^;)。<br>
              芝居は何かな～。<strong>「二都物語」</strong>かな。好きな作品ですし。声のひょろひょろ感も気にならなかったし。衣装も良く似合ってかっこ良かったですし。
            </p>
            <p>
              今日、トップ披露公演<strong>「Ernest in Love」</strong>の一般前売の電話かけをしました。<br>
              明るく楽しそうなポスター。彩乃かなみ、霧矢大夢、城咲あい、と実力派揃いの共演者。何だか上手くいきそう。<br>
              これからの彼女率いる月組の舞台、とても楽しみにしています。
            </p>
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
