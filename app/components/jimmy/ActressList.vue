<script setup>
// レイアウトから提供された 'pageTheme' を受け取る
const themeRaw = inject('jimmyColor', null);

// 2. computed を使って安全に中身を取り出す
// .value が存在しない場合（default）のフォールバックを用意する
const themeConfig = computed(() => {
  return themeRaw?.value || {
    bgimg: 'bg-[url(/images/jimmy/actress/sonota.gif)]',
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
    ACTRESSの記事一覧
  </h4>
  <nav class="mb-16">
    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/hanagumi"
    >
      <span :class="themeConfig.textlink">花　　　組</span>
    </NuxtLink>
    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/natumi"
    >
      <span :class="themeConfig.textlink">夏美　よう</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/haruno"
    >
      <span :class="themeConfig.textlink">春野寿美礼</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/kazumi"
    >
      <span :class="themeConfig.textlink">花純　風香</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/matobu"
    >
      <span :class="themeConfig.textlink">真飛　　聖</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/maisiro"
    >
      <span :class="themeConfig.textlink">舞城のどか</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/misuzu"
    >
      <span :class="themeConfig.textlink">未涼　亜希</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/kiryu"
    >
      <span :class="themeConfig.textlink">桐生　園加</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/touno"
    >
      <span :class="themeConfig.textlink">遠野あすか</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/sakura"
    >
      <span :class="themeConfig.textlink">桜　　一花</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/tukigumi"
    >
      <span :class="themeConfig.textlink">月　　　組</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/natukawa"
    >
      <span :class="themeConfig.textlink">夏河　ゆら</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/sena"
    >
      <span :class="themeConfig.textlink">瀬奈じゅん</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/ozora"
    >
      <span :class="themeConfig.textlink">大空　祐飛</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/kosino"
    >
      <span :class="themeConfig.textlink">越乃リュウ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/issiki"
    >
      <span :class="themeConfig.textlink">一色　瑠加</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/ayano"
    >
      <span :class="themeConfig.textlink">彩乃かなみ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/shina"
    >
      <span :class="themeConfig.textlink">椎名　　葵</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/hokusyo"
    >
      <span :class="themeConfig.textlink">北翔　海莉</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/sirosaki"
    >
      <span :class="themeConfig.textlink">城咲　あい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/siratori"
    >
      <span :class="themeConfig.textlink">白鳥かすが</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/ayazuki"
    >
      <span :class="themeConfig.textlink">綾月　せり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/ryu"
    >
      <span :class="themeConfig.textlink">龍　　真咲</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/atuki"
    >
      <span :class="themeConfig.textlink">麻月れんか</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/enoki"
    >
      <span :class="themeConfig.textlink">榎　　登也</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/yukigumi"
    >
      <span :class="themeConfig.textlink">雪　　　組</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/asuka"
    >
      <span :class="themeConfig.textlink">飛鳥　　裕</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/miho"
    >
      <span :class="themeConfig.textlink">美穂　圭子</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/asami"
    >
      <span :class="themeConfig.textlink">朝海ひかる</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/takashiro"
    >
      <span :class="themeConfig.textlink">貴城　けい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/mizu"
    >
      <span :class="themeConfig.textlink">水　　夏希</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/matika"
    >
      <span :class="themeConfig.textlink">麻愛めぐる</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/otozuki"
    >
      <span :class="themeConfig.textlink">音月　　桂</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/ouki"
    >
      <span :class="themeConfig.textlink">凰稀かなめ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/ozuki"
    >
      <span :class="themeConfig.textlink">緒月　遠麻</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/hosigumi"
    >
      <span :class="themeConfig.textlink">星　　　組</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/ema"
    >
      <span :class="themeConfig.textlink">英真なおき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/kozuki"
    >
      <span :class="themeConfig.textlink">湖月わたる</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/aran"
    >
      <span :class="themeConfig.textlink">安蘭　けい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/tatuki"
    >
      <span :class="themeConfig.textlink">立樹　　遙</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/oma"
    >
      <span :class="themeConfig.textlink">大真みらん</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/sirahane"
    >
      <span :class="themeConfig.textlink">白羽　ゆり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/yuzuki"
    >
      <span :class="themeConfig.textlink">柚希　礼音</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/minami"
    >
      <span :class="themeConfig.textlink">南海　まり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/hizuki"
    >
      <span :class="themeConfig.textlink">陽月　　華</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/soragumi"
    >
      <span :class="themeConfig.textlink">宙　　　組</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/wao"
    >
      <span :class="themeConfig.textlink">和央ようか</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/hanafusa"
    >
      <span :class="themeConfig.textlink">花總　まり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/yamato"
    >
      <span :class="themeConfig.textlink">大和　悠河</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/nanaho"
    >
      <span :class="themeConfig.textlink">七帆ひかる</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/toki"
    >
      <span :class="themeConfig.textlink">十輝いりす</span>
    </NuxtLink>

    <p>専　　　科</p>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/ebira"
    >
      <span :class="themeConfig.textlink">箙　かおる</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/izumo"
    >
      <span :class="themeConfig.textlink">出雲　　綾</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/todoroki"
    >
      <span :class="themeConfig.textlink">轟　　　悠</span>
    </NuxtLink>

    <p>演　出　家</p>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/koike"
    >
      <span :class="themeConfig.textlink">小池修一郎</span>
    </NuxtLink>

    <p>退　団　者</p>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/hatukaze"
    >
      <span :class="themeConfig.textlink">初風　　緑</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/mashio"
    >
      <span :class="themeConfig.textlink">真汐　　薪</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kibune"
    >
      <span :class="themeConfig.textlink">貴船　　尚</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/dan"
    >
      <span :class="themeConfig.textlink">檀　　れい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/mine"
    >
      <span :class="themeConfig.textlink">嶺　　恵斗</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/jyuri"
    >
      <span :class="themeConfig.textlink">樹里　咲穂</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/ayaki"
    >
      <span :class="themeConfig.textlink">彩輝　　直</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/anzyo"
    >
      <span :class="themeConfig.textlink">安城　志紀</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/takayagi"
    >
      <span :class="themeConfig.textlink">貴柳みどり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/maki"
    >
      <span :class="themeConfig.textlink">真木　　薫</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shiomi"
    >
      <span :class="themeConfig.textlink">汐美　真帆</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/hayami"
    >
      <span :class="themeConfig.textlink">速水　リキ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shibuki"
    >
      <span :class="themeConfig.textlink">紫吹　　淳</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shiokaze"
    >
      <span :class="themeConfig.textlink">汐風　　幸</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/iori"
    >
      <span :class="themeConfig.textlink">伊織　直加</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/tubaki"
    >
      <span :class="themeConfig.textlink">椿　火呂花</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kouzyu"
    >
      <span :class="themeConfig.textlink">香寿たつき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/yumeki"
    >
      <span :class="themeConfig.textlink">夢輝　のあ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/asazumi"
    >
      <span :class="themeConfig.textlink">朝澄　けい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/otori"
    >
      <span :class="themeConfig.textlink">大鳥　れい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kuon"
    >
      <span :class="themeConfig.textlink">久遠　麻耶</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/emao"
    >
      <span :class="themeConfig.textlink">絵麻緒ゆう</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/naruse"
    >
      <span :class="themeConfig.textlink">成瀬こうき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/takumi"
    >
      <span :class="themeConfig.textlink">匠　ひびき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/tukikage"
    >
      <span :class="themeConfig.textlink">月影　　瞳</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/aika"
    >
      <span :class="themeConfig.textlink">愛華　みれ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/hosina"
    >
      <span :class="themeConfig.textlink">星奈　優里</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/minoru"
    >
      <span :class="themeConfig.textlink">稔　　　幸</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/makoto"
    >
      <span :class="themeConfig.textlink">真琴つばさ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kisaki"
    >
      <span :class="themeConfig.textlink">貴咲　美里</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/tihiro"
    >
      <span :class="themeConfig.textlink">千紘れいか</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/tukasa"
    >
      <span :class="themeConfig.textlink">司　　祐輝</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/otowa"
    >
      <span :class="themeConfig.textlink">音羽　　椋</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shizuki"
    >
      <span :class="themeConfig.textlink">姿月あさと</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kazahana"
    >
      <span :class="themeConfig.textlink">風花　　舞</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/asaji"
    >
      <span :class="themeConfig.textlink">麻路　さき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/sen"
    >
      <span :class="themeConfig.textlink">千　ほさち</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/maya"
    >
      <span :class="themeConfig.textlink">真矢　みき</span>
    </NuxtLink>
  </nav>
</template>
