<script setup>
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
  <h4
    class="font-bold block p-1 border-t-4 mb-1"
    :class="[themeConfig.texttitle, themeConfig.barborder]"
  >
    CONTRIBUTIONの記事一覧
  </h4>
  <nav class="mb-16">
    <NuxtLink
      to="/jimmy/contribution/66kyosokyoku7"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「宝塚狂想曲7」汐美真帆</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/65blood"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「血と砂」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/64koe"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">植田理事長への「声」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/63platinum"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">汐美真帆ディナーショー「Platinum」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/62kyosokyoku"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「宝塚狂想曲3」汐美真帆</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/61dayori"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「表紙の人」汐美真帆</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/60change"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">組替え(檀、汐美など)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/59excalibur"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「エクスカリバー」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/58icarus"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「Icarus」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/57syunoufu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「春櫻賦」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/56yoakeno"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「夜明けの天使たち」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/55lets"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「Let's JAZZ」元旦テレビ放送より</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/54ghost"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「真夜中のゴースト」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/53baron"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「バロンの末裔」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/52anaji"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「アナジ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/51ueda"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">植田理事長就任</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/50ichiro"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">一路真輝退団</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/49elisabeth"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「エリザベート」(雪組)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/48change"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">組替え(香寿、紫吹など)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/47freerace"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">フリーレース</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/46akanesasu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「あかねさす紫の花」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/45jfk"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「ＪＦＫ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/44jyunjyou"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「殉情」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/43amami"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">天海祐希退団</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/42ketumatuno"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「結末のかなた」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/41kokkyononai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「国境のない地図」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/40lastdance"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「LAST DANCE」より</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/39hanshin"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">阪神大震災</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/38korudoba"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「哀しみのコルドバ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/37yukinozyo"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「雪之丞変化」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/36shingaisya"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚クリエイティブアーツ</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/35moeru"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「燃える愛の翼」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/34undokai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大運動会</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/33fuyuno"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「冬の嵐、ペテルブルグに死す」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/32wanted"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「ＷＡＮＴＥＤ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/31casanova"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「カサノヴァ・夢のかたみ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/30eire"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「エールの残照」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/29eighty"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">八十周年に寄せて</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/28eire"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「エールの残照」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/27butler"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「風と共に去りぬ」４人のバトラー</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/26kaze"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「風と共に去りぬ」(雪組)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/25bj"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「ブラック・ジャック」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/24takekurabe"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「たけくらべ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/23wakakihino"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「若き日の唄は忘れじ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/22saran"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「サラン・愛」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/21hutaridakeno"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「二人だけの戦場」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/20kazetotomoni"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「風と共に去りぬ」(月組)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/19lightand"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ドラマシティ公演「ライト＆シャドウ」(星組)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/18bourbon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「ブルボンの封印」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/17yumeno10cent"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「夢の１０セント銀貨」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/16bourbon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「ブルボンの封印」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/15ticket2"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">チケット(パート２)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/14million"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「ミリオン・ドリームズ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/13million"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「花扇抄」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/12film"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「FILM MAKING」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/11beicity"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「ベイ・シティ・ブルース」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/10ticket1"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">チケット(パート１)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/09utakata"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「うたかたの恋」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/08tengokuto"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「天国と地獄」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/07tmp"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">９３年・ＴＭＰ音楽祭</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/06tengokuto"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「天国と地獄」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/05change"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">組替え(真琴、姿月など)</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/04legrand"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「ル・グラン・モーヌ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/03melancholic"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場新人公演「メランコリック・ジゴロ」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/02saturday"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚バウホール公演「サタディナイト・ロマンス」</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/contribution/01melancholic"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大劇場公演「メランコリック・ジゴロ」</span>
    </NuxtLink>
  </nav>
</template>
