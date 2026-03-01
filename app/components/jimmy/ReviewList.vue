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
    REVIEWの記事一覧
  </h4>
  <nav class="mb-16">
    <NuxtLink
      to="/jimmy/review/hanamauto"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花舞う長安／ロマンチカ宝塚'04・東京公演</span>
      <span class="text-sm block text-slate-500">2004/12/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tennotu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">天の鼓</span>
      <span class="text-sm block text-slate-500">2004/12/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/nettai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">熱帯夜話</span>
      <span class="text-sm block text-slate-500">2004/12/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/aoitori"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> 青い鳥を捜して／タカラヅカ・ドリーム・キングダム </span>
      <span class="text-sm block text-slate-500">2004/12/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/goodfellow"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Good Bye,Good Guy,Good Fellow</span>
      <span class="text-sm block text-slate-500">2004/11/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/buyo2004"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚舞踊会</span>
      <span class="text-sm block text-slate-500">2004/10/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanamau"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花舞う長安／ロマンチカ宝塚'04</span>
      <span class="text-sm block text-slate-500">2004/10/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/enkarezun"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Angels in Harmony</span>
      <span class="text-sm block text-slate-500">2004/10/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/esperanza"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">La Esperanza／TAKARAZUKA舞夢</span>
      <span class="text-sm block text-slate-500">2004/09/19</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/anohi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">あの日みた夢に</span>
      <span class="text-sm block text-slate-500">2004/09/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanamauha"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花舞う長安／ロマンチカ宝塚'04・博多座公演</span>
      <span class="text-sm block text-slate-500">2004/08/13～14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanaiso"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花のいそぎ</span>
      <span class="text-sm block text-slate-500">2004/08/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/asukanew"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">飛鳥夕映え・新人公演</span>
      <span class="text-sm block text-slate-500">2004/07/27</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/asuka"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">飛鳥夕映え／タカラヅカ絢爛2</span>
      <span class="text-sm block text-slate-500">2004/07/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/naked"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">NAKED CITY</span>
      <span class="text-sm block text-slate-500">2004/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/phantom"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ファントム</span>
      <span class="text-sm block text-slate-500">2004/05/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/itosiki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">愛しき人よ</span>
      <span class="text-sm block text-slate-500">2004/04/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/susanonew"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スサノオ・新人公演</span>
      <span class="text-sm block text-slate-500">2004/04/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/susano"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スサノオ／タカラヅカ・グローリー！</span>
      <span class="text-sm block text-slate-500">2004/04/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tanuki2004"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">桜吹雪狸御殿／ボンジュール・タカラジェンヌ</span>
      <span class="text-sm block text-slate-500">2004/04/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/boxman"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">BOXMAN</span>
      <span class="text-sm block text-slate-500">2004/03/27</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/1914ai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">１９１４／愛・タカラヅカ絢爛</span>
      <span class="text-sm block text-slate-500">2004/02/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/okurare"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">送られなかった手紙</span>
      <span class="text-sm block text-slate-500">2004/02/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/romance-nago"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Romance de Paris／中日公演</span>
      <span class="text-sm block text-slate-500">2004/01/31～02/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hisyo"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> 飛翔無限／天使の季節／アプローズ・タカラヅカ！ </span>
      <span class="text-sm block text-slate-500">
        2004/01/11(追加・01/12 &amp; 01/18 &amp; 02/11)
      </span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/eienno"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">永遠の祈り</span>
      <span class="text-sm block text-slate-500">2003/12/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/barano"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">薔薇の封印</span>
      <span class="text-sm block text-slate-500">2003/12/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/ganryu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">巌流</span>
      <span class="text-sm block text-slate-500">2003/12/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/cinderella"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">シンデレラ</span>
      <span class="text-sm block text-slate-500">2003/11/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hakutyu-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">白昼の稲妻／新人公演</span>
      <span class="text-sm block text-slate-500">2003/10/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/nito"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">二都物語</span>
      <span class="text-sm block text-slate-500">2003/10/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hakutyu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">白昼の稲妻／テンプテーション！</span>
      <span class="text-sm block text-slate-500">2003/10/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/namida"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">なみだ橋 えがお橋</span>
      <span class="text-sm block text-slate-500">2003/09/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/romance-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Romance de Paris／新人公演</span>
      <span class="text-sm block text-slate-500">2003/09/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/romance"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Romance de Paris／レ・コラージュ</span>
      <span class="text-sm block text-slate-500">2003/08/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kissme"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">キス・ミー・ケイト(番外)</span>
      <span class="text-sm block text-slate-500">2003/08/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/satomi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">里見八犬伝</span>
      <span class="text-sm block text-slate-500">2003/08/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/okeni"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">王家に捧ぐ歌</span>
      <span class="text-sm block text-slate-500">2003/07/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/nokaze"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">野風の笛／レヴュー誕生</span>
      <span class="text-sm block text-slate-500">2003/07/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/america"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">アメリカン・パイ</span>
      <span class="text-sm block text-slate-500">2003/06/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/dieren"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> 蝶・恋／サザンクロス・レビュー3・全国ツアー公演 </span>
      <span class="text-sm block text-slate-500">2003/04/25～26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/senior-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">シニョール ドン・ファン・新人公演</span>
      <span class="text-sm block text-slate-500">2003/04/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/senior"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花の宝塚風土記／シニョール ドン・ファン</span>
      <span class="text-sm block text-slate-500">2003/04/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/youhei"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">傭兵ピエール／満天星大夜總会</span>
      <span class="text-sm block text-slate-500">2003/03/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hana-koi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">おーい春風さん／恋天狗(花組)</span>
      <span class="text-sm block text-slate-500">2003/03/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/humetu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">不滅の棘</span>
      <span class="text-sm block text-slate-500">2003/03/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/youhei-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">傭兵ピエール・新人公演</span>
      <span class="text-sm block text-slate-500">2003/03/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/yuki-koi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">春ふたたび／恋天狗(雪組) </span>
      <span class="text-sm block text-slate-500">2003/03/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tuki-koi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">春ふたたび／恋天狗(月組)</span>
      <span class="text-sm block text-slate-500">2003/02/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hosi-koi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">恋天狗／おーい春風さん(星組)</span>
      <span class="text-sm block text-slate-500">2003/01/19</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/syunrei"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">春麗の淡き光に／Joyful!!</span>
      <span class="text-sm block text-slate-500">2003/01/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sora-oi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">おーい春風さん／春ふたたび(宙組)</span>
      <span class="text-sm block text-slate-500">2003/01/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/garasu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ガラスの風景／バビロン</span>
      <span class="text-sm block text-slate-500">2002/12/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/seinaru"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">聖なる星の奇蹟</span>
      <span class="text-sm block text-slate-500">2002/12/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/garasu-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ガラスの風景・新人公演</span>
      <span class="text-sm block text-slate-500">2002/12/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/akiko"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">アキコ・カンダ レッスン発表会</span>
      <span class="text-sm block text-slate-500">2002/11/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/saikai-tour"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">再会／華麗なる千拍子 2002・全国ツアー公演</span>
      <span class="text-sm block text-slate-500">2002/11/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hop"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ホップスコッチ</span>
      <span class="text-sm block text-slate-500">2002/10/27</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/elisa-hana"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">エリザベート(花組)</span>
      <span class="text-sm block text-slate-500">2002/10/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/nihon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">日本の美を愛でる</span>
      <span class="text-sm block text-slate-500">2002/10/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/switch"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">SWITCH</span>
      <span class="text-sm block text-slate-500">2002/10/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/vinter"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ヴィンターガルテン</span>
      <span class="text-sm block text-slate-500">2002/09/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/nagai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">長い春の果てに／With a Song in my Heart</span>
      <span class="text-sm block text-slate-500">2002/09/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/en-senka"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">専科「エンカレッジ・コンサート」</span>
      <span class="text-sm block text-slate-500">2002/08/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tukino"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月の燈影</span>
      <span class="text-sm block text-slate-500">2002/08/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/houou"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">鳳凰伝／ザ・ショー・ストッパー</span>
      <span class="text-sm block text-slate-500">2002/07/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/saran"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">サラン・愛／JAZZ Mania・全国ツアー公演</span>
      <span class="text-sm block text-slate-500">2002/07/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/slap"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">SLAPSTICK</span>
      <span class="text-sm block text-slate-500">2002/06/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tuioku"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">追憶のバルセロナ／ON THE 5th</span>
      <span class="text-sm block text-slate-500">2002/06/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/imyme"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">初風緑コンサート「愛・舞・魅」</span>
      <span class="text-sm block text-slate-500">2002/05/19</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/age"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">エイジ・オブ・イノセンス</span>
      <span class="text-sm block text-slate-500">2002/05/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/casute-tour"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">
        カステル・ミラージュ／ダンシング・スピリット！・全国ツアー公演
      </span>
      <span class="text-sm block text-slate-500">2002/04/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/diamond"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ダイアモンド・アイズ</span>
      <span class="text-sm block text-slate-500">2002/04/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kaze"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">風と共に去りぬ・日生劇場公演</span>
      <span class="text-sm block text-slate-500">2002/04/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/praha"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">プラハの春／LUCKY STAR!</span>
      <span class="text-sm block text-slate-500">2002/04/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/zyunzyou"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">殉情</span>
      <span class="text-sm block text-slate-500">2002/03/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kohaku"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">琥珀色の雨にぬれて／Cocktail</span>
      <span class="text-sm block text-slate-500">2002/03/09&amp;10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanano-nagoya"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花の業平／サザンクロス・レビュー2・中日公演</span>
      <span class="text-sm block text-slate-500">2002/02/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/guys-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ガイズ＆ドールズ・新人公演</span>
      <span class="text-sm block text-slate-500">2001/12/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/en-sora"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宙組「エンカレッジ・コンサート」</span>
      <span class="text-sm block text-slate-500">2002/01/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/guys"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ガイズ＆ドールズ</span>
      <span class="text-sm block text-slate-500">2002/01/01～02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/diva"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外) 一路真輝リサイタル・DIVA 2001</span>
      <span class="text-sm block text-slate-500">2001/12/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kanaria"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">カナリア</span>
      <span class="text-sm block text-slate-500">2001/12/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/casute-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">カステル・ミラージュ・新人公演</span>
      <span class="text-sm block text-slate-500">2001/12/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/dawn"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外) 姿月あさと・Dawn</span>
      <span class="text-sm block text-slate-500">2001/11/27</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/overmoon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Over The Moon－月影瞳クロニクル－</span>
      <span class="text-sm block text-slate-500">2001/11/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/casute"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> カステル・ミラージュ／ダンシング・スピリット！ </span>
      <span class="text-sm block text-slate-500">2001/11/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/aimoe-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">愛 燃える・新人公演</span>
      <span class="text-sm block text-slate-500">2001/10/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/blood"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">血と砂</span>
      <span class="text-sm block text-slate-500">2001/10/20～21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/en-hosi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組 エンカレッジ・コンサート</span>
      <span class="text-sm block text-slate-500">2001/10/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/aimoe"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">愛 燃える／Rose Garden</span>
      <span class="text-sm block text-slate-500">2001/10/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/figaro"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">フィガロ！</span>
      <span class="text-sm block text-slate-500">2001/09/16</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kaizoku"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">大海賊／JAZZ Mania・東京公演</span>
      <span class="text-sm block text-slate-500">2001/09/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/beruho-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ベルサイユのばら 2001(星組)・新人公演</span>
      <span class="text-sm block text-slate-500">2001/09/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/elisa-to2001"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外)エリザベート・梅田コマ劇場</span>
      <span class="text-sm block text-slate-500">2001/08/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/beruho"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ベルサイユのばら2001(星組)</span>
      <span class="text-sm block text-slate-500">2001/08/19</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/anna"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">アンナ・カレーニナ</span>
      <span class="text-sm block text-slate-500">2001/08/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/miche-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ミケランジェロ・新人公演</span>
      <span class="text-sm block text-slate-500">2001/07/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/miche"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ミケランジェロ／VIVA!</span>
      <span class="text-sm block text-slate-500">2001/07/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/en-tuki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組 エンカレッジ コンサート</span>
      <span class="text-sm block text-slate-500">2001/07/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sonata"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">愛のソナタ／ESP!</span>
      <span class="text-sm block text-slate-500">2001/07/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/ihatobu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">イーハトーヴ 夢</span>
      <span class="text-sm block text-slate-500">2001/06/17</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sonata-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">愛のソナタ・新人公演</span>
      <span class="text-sm block text-slate-500">2001/06/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tca2001"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">TCAスペシャル2001</span>
      <span class="text-sm block text-slate-500">2001/06/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/manon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">マノン</span>
      <span class="text-sm block text-slate-500">2001/05/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/beruso-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ベルサイユのばら 2001 (宙組)・新人公演</span>
      <span class="text-sm block text-slate-500">2001/04/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tanuki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外)桜祭り狸御殿・梅田コマ劇場</span>
      <span class="text-sm block text-slate-500">2001/04/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/en-yuki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">雪組 エンカレッジ コンサート</span>
      <span class="text-sm block text-slate-500">2001/04/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/beruso"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ベルサイユのばら 2001 (宙組)</span>
      <span class="text-sm block text-slate-500">2001/04/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/practi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Practical Joke</span>
      <span class="text-sm block text-slate-500">2001/03/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/takeki-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">猛き黄金の国・新人公演</span>
      <span class="text-sm block text-slate-500">2001/01/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/takeki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">猛き黄金の国／パッサージュ</span>
      <span class="text-sm block text-slate-500">2001/02/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanano-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花の業平・新人公演</span>
      <span class="text-sm block text-slate-500">2001/01/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/en-hana"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花組 エンカレッジ コンサート</span>
      <span class="text-sm block text-slate-500">2001/01/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanano"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花の業平／夢は世界を翔けめぐる</span>
      <span class="text-sm block text-slate-500">2001/01/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/imasu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">いますみれ花咲く／愛のソナタ</span>
      <span class="text-sm block text-slate-500">2001/01/02～03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tukiyo"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月夜歌聲</span>
      <span class="text-sm block text-slate-500">2000/12/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/ludwig-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ルートヴィヒ2世・新人公演</span>
      <span class="text-sm block text-slate-500">2000/11/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/ludwig"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ルートヴィヒ2世／Asian Sunrise</span>
      <span class="text-sm block text-slate-500">2000/11/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/rika"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ALL ABOUT RIKA</span>
      <span class="text-sm block text-slate-500">2000/11/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/hanafu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花吹雪 恋吹雪</span>
      <span class="text-sm block text-slate-500">2000/10/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/zenda-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ゼンダ城の虜・新人公演</span>
      <span class="text-sm block text-slate-500">2000/10/17</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/zenda"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ゼンダ城の虜／JAZZ Mania</span>
      <span class="text-sm block text-slate-500">2000/10/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tom"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">トム・ジョーンズの華麗なる冒険</span>
      <span class="text-sm block text-slate-500">2000/09/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/bokyo-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">望郷は海を越えて・新人公演</span>
      <span class="text-sm block text-slate-500">2000/09/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tca2000"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ＴＣＡ音楽祭2000</span>
      <span class="text-sm block text-slate-500">2000/09/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/bokyo"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> 望郷は海を越えて／ミレニアム・チャレンジャー！ </span>
      <span class="text-sm block text-slate-500">2000/08/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sarani"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">更に狂はじ</span>
      <span class="text-sm block text-slate-500">2000/08/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/luna-ha"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">LUNA／BLUE MOON BLUE・博多座公演</span>
      <span class="text-sm block text-slate-500">2000/08/12～13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/gaisen"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">デパートメント・ストア／凱旋門</span>
      <span class="text-sm block text-slate-500">2000/07/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/luna-to"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">LUNA／BLUE MOON BLUE・東京公演</span>
      <span class="text-sm block text-slate-500">2000/06/24～25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/elisa-to"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外)エリザベート・帝国劇場</span>
      <span class="text-sm block text-slate-500">2000/06/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sizuki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">姿月あさと Convention Live「Evolution」</span>
      <span class="text-sm block text-slate-500">2000/06/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/freedom"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">FREEDOM</span>
      <span class="text-sm block text-slate-500">2000/06/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/ogon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">黄金のファラオ／美麗猫</span>
      <span class="text-sm block text-slate-500">2000/05/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sasara"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ささら笹舟</span>
      <span class="text-sm block text-slate-500">2000/05/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/asaki"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">あさきゆめみし／ザ・ビューティーズ！</span>
      <span class="text-sm block text-slate-500">2000/04/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/platinum"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">汐美真帆ディナーショー「Platinum」</span>
      <span class="text-sm block text-slate-500">2000/04/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/loveinsu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Love Insuranse</span>
      <span class="text-sm block text-slate-500">2000/03/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/seijya"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">聖者の横顔</span>
      <span class="text-sm block text-slate-500">2000/03/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/terada40"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">寺田瀧雄作曲家生活40周年記念コンサート</span>
      <span class="text-sm block text-slate-500">2000/03/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/luna"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">LUNA／BLUE MOON BLUE</span>
      <span class="text-sm block text-slate-500">2000/02/27</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/huyumono2"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">冬物語</span>
      <span class="text-sm block text-slate-500">2000/01/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sabaku-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">砂漠の黒薔薇・新人公演</span>
      <span class="text-sm block text-slate-500">2000/01/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sabaku"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">砂漠の黒薔薇／GRORIOUS!!</span>
      <span class="text-sm block text-slate-500">2000/01/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/provence"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">プロヴァンスの碧い空</span>
      <span class="text-sm block text-slate-500">99/12/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/utakata-east"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> うたかたの恋／ブラボー・タカラヅカ！全国ツアー公演 </span>
      <span class="text-sm block text-slate-500">99/12/11～12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/epiphany"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">エピファニー</span>
      <span class="text-sm block text-slate-500">99/12/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sime"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">紫苑ゆう First &amp; Last Recital</span>
      <span class="text-sm block text-slate-500">99/12/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/bacchus"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">バッカスと呼ばれた男／華麗なる千拍子'99</span>
      <span class="text-sm block text-slate-500">99/11/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kyogen"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">第三回・宝塚狂言の会</span>
      <span class="text-sm block text-slate-500">99/10/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/wagaai-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">我が愛は山の彼方に・新人公演</span>
      <span class="text-sm block text-slate-500">99/10/19</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/wagaai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">我が愛は山の彼方に／グレート・センチュリー</span>
      <span class="text-sm block text-slate-500">99/10/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/sayitagain"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">SAY IT AGAIN</span>
      <span class="text-sm block text-slate-500">99/09/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tempest"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">TEMPEST</span>
      <span class="text-sm block text-slate-500">99/09/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tango"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">タンゴ・アルゼンチーノ／ザ・レビュー'99</span>
      <span class="text-sm block text-slate-500">99/08/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/yume"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">夢・シェイクスピア</span>
      <span class="text-sm block text-slate-500">99/08/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/is99"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外)一路真輝ｺﾝｻｰﾄ「is Second」</span>
      <span class="text-sm block text-slate-500">99/07/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/jyuuniya"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">十二夜</span>
      <span class="text-sm block text-slate-500">99/07/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/buenosu2"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ブエノスアイレスの風・神戸特別公演</span>
      <span class="text-sm block text-slate-500">99/07/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/gekijyo-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">激情・新人公演</span>
      <span class="text-sm block text-slate-500">99/07/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/gekijyo"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">激情／ザ・レビュー'99</span>
      <span class="text-sm block text-slate-500">99/07/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/romeo"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ロミオとジュリエット'99</span>
      <span class="text-sm block text-slate-500">99/06/27</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/three"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">The Wonder Three</span>
      <span class="text-sm block text-slate-500">99/06/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tca99"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">'99ＴＣＡ音楽祭</span>
      <span class="text-sm block text-slate-500">99/05/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/rasen"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">螺旋のオルフェ／ノバ・ボサ・ノバ</span>
      <span class="text-sm block text-slate-500">99/05/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/crossroad"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Crossroad</span>
      <span class="text-sm block text-slate-500">99/05/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/saikai"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">再会／ノバ・ボサ・ノバ</span>
      <span class="text-sm block text-slate-500">99/04/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/utakata"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink"> うたかたの恋／ミリオン・ドリームズ・全国ツアー公演 </span>
      <span class="text-sm block text-slate-500">99/03/27～28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/karasawagi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">から騒ぎ</span>
      <span class="text-sm block text-slate-500">99/03/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/huyumono"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">冬物語</span>
      <span class="text-sm block text-slate-500">99/03/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/west-ho"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">WEST SIDE STORY</span>
      <span class="text-sm block text-slate-500">99/02/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/yoake"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">夜明けの序曲</span>
      <span class="text-sm block text-slate-500">99/01/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kuroi-to"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">黒い瞳／ル・ボレロ・ルージュ・東京公演</span>
      <span class="text-sm block text-slate-500">99/01/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/seiya"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">聖夜物語</span>
      <span class="text-sm block text-slate-500">98/12/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/revuesp98"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">レビュースペシャル'98</span>
      <span class="text-sm block text-slate-500">98/12/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/shinderera"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">シンデレラ・ロック</span>
      <span class="text-sm block text-slate-500">98/12/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/endless"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Endress Love</span>
      <span class="text-sm block text-slate-500">98/11/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/elisabeth"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">エリザベート</span>
      <span class="text-sm block text-slate-500">98/11/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/itetuita"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">凍てついた明日</span>
      <span class="text-sm block text-slate-500">98/10/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kuroi-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">黒い瞳・新人公演</span>
      <span class="text-sm block text-slate-500">98/10/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/thefiction"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">The Fiction</span>
      <span class="text-sm block text-slate-500">98/09/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kuroihitomi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">黒い瞳／ル・ボレロ・ルージュ</span>
      <span class="text-sm block text-slate-500">98/10/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/bauboyajyu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">バウ・ボヤージュ！</span>
      <span class="text-sm block text-slate-500">98/09/16</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/icon"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">イコンの誘惑</span>
      <span class="text-sm block text-slate-500">98/09/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/asaji-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">浅茅が宿・新人公演</span>
      <span class="text-sm block text-slate-500">98/08/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/asajigayado"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">浅茅が宿／ラヴィール</span>
      <span class="text-sm block text-slate-500">98/08/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/buenosuaires"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ブエノスアイレスの風</span>
      <span class="text-sm block text-slate-500">98/08/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/kingandi"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外)王様と私</span>
      <span class="text-sm block text-slate-500">98/07/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/koutei-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">皇帝・新人公演</span>
      <span class="text-sm block text-slate-500">98/07/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/koutei"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">皇帝／ヘミングウェイ・レビュー</span>
      <span class="text-sm block text-slate-500">98/07/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/shinzyu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">心中恋の大和路</span>
      <span class="text-sm block text-slate-500">98/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/speakeasy-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">SPEAKEASY新人公演</span>
      <span class="text-sm block text-slate-500">98/06/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/speakeasy"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">SPEAKEASY／スナイパー</span>
      <span class="text-sm block text-slate-500">98/05/19</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/is"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">(番外)一路真輝ﾌｧｰｽﾄｺﾝｻｰﾄ「is」</span>
      <span class="text-sm block text-slate-500">98/05/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/tca98"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">'98ＴＣＡ音楽祭</span>
      <span class="text-sm block text-slate-500">98/05/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/dean"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ディーン</span>
      <span class="text-sm block text-slate-500">98/05/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/excalibur-new"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">エクスカリバー新人公演</span>
      <span class="text-sm block text-slate-500">98/04/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/excalibur"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">エクスカリバー／シトラスの風</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/veronique"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ヴェロニック</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/icarus"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">Icarus</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/westside"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">WEST SIDE STORY</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/review/syunouhu"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">春櫻賦／Let's JAZZ</span>
    </NuxtLink>
  </nav>
</template>
