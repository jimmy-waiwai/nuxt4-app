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
      <span :class="themeConfig.textlink">花&emsp;&emsp;&emsp;組</span>
    </NuxtLink>
    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/natumi"
    >
      <span :class="themeConfig.textlink">夏美&emsp;よう</span>
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
      <span :class="themeConfig.textlink">花純&emsp;風香</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/matobu"
    >
      <span :class="themeConfig.textlink">真飛&emsp;&emsp;聖</span>
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
      <span :class="themeConfig.textlink">未涼&emsp;亜希</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-pink-600"
      to="/jimmy/actress/kiryu"
    >
      <span :class="themeConfig.textlink">桐生&emsp;園加</span>
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
      <span :class="themeConfig.textlink">桜&emsp;&emsp;一花</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/tukigumi"
    >
      <span :class="themeConfig.textlink">月&emsp;&emsp;&emsp;組</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/natukawa"
    >
      <span :class="themeConfig.textlink">夏河&emsp;ゆら</span>
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
      <span :class="themeConfig.textlink">大空&emsp;祐飛</span>
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
      <span :class="themeConfig.textlink">一色&emsp;瑠加</span>
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
      <span :class="themeConfig.textlink">椎名&emsp;&emsp;葵</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/hokusyo"
    >
      <span :class="themeConfig.textlink">北翔&emsp;海莉</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/sirosaki"
    >
      <span :class="themeConfig.textlink">城咲&emsp;あい</span>
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
      <span :class="themeConfig.textlink">綾月&emsp;せり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-yellow-600"
      to="/jimmy/actress/ryu"
    >
      <span :class="themeConfig.textlink">龍&emsp;&emsp;真咲</span>
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
      <span :class="themeConfig.textlink">榎&emsp;&emsp;登也</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/yukigumi"
    >
      <span :class="themeConfig.textlink">雪&emsp;&emsp;&emsp;組</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/asuka"
    >
      <span :class="themeConfig.textlink">飛鳥&emsp;&emsp;裕</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/miho"
    >
      <span :class="themeConfig.textlink">美穂&emsp;圭子</span>
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
      <span :class="themeConfig.textlink">貴城&emsp;けい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-green-600"
      to="/jimmy/actress/mizu"
    >
      <span :class="themeConfig.textlink">水&emsp;&emsp;夏希</span>
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
      <span :class="themeConfig.textlink">音月&emsp;&emsp;桂</span>
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
      <span :class="themeConfig.textlink">緒月&emsp;遠麻</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/hosigumi"
    >
      <span :class="themeConfig.textlink">星&emsp;&emsp;&emsp;組</span>
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
      <span :class="themeConfig.textlink">安蘭&emsp;けい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/tatuki"
    >
      <span :class="themeConfig.textlink">立樹&emsp;&emsp;遙</span>
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
      <span :class="themeConfig.textlink">白羽&emsp;ゆり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/yuzuki"
    >
      <span :class="themeConfig.textlink">柚希&emsp;礼音</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/minami"
    >
      <span :class="themeConfig.textlink">南海&emsp;まり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-sky-600"
      to="/jimmy/actress/hizuki"
    >
      <span :class="themeConfig.textlink">陽月&emsp;&emsp;華</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/soragumi"
    >
      <span :class="themeConfig.textlink">宙&emsp;&emsp;&emsp;組</span>
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
      <span :class="themeConfig.textlink">花總&emsp;まり</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-purple-600"
      to="/jimmy/actress/yamato"
    >
      <span :class="themeConfig.textlink">大和&emsp;悠河</span>
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

    <p>専&emsp;&emsp;&emsp;科</p>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/ebira"
    >
      <span :class="themeConfig.textlink">箙&emsp;かおる</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/izumo"
    >
      <span :class="themeConfig.textlink">出雲&emsp;&emsp;綾</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/todoroki"
    >
      <span :class="themeConfig.textlink">轟&emsp;&emsp;&emsp;悠</span>
    </NuxtLink>

    <p>演&emsp;出&emsp;家</p>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/koike"
    >
      <span :class="themeConfig.textlink">小池修一郎</span>
    </NuxtLink>

    <p>退&emsp;団&emsp;者</p>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/hatukaze"
    >
      <span :class="themeConfig.textlink">初風&emsp;&emsp;緑</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/mashio"
    >
      <span :class="themeConfig.textlink">真汐&emsp;&emsp;薪</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kibune"
    >
      <span :class="themeConfig.textlink">貴船&emsp;&emsp;尚</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/dan"
    >
      <span :class="themeConfig.textlink">檀&emsp;&emsp;れい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/mine"
    >
      <span :class="themeConfig.textlink">嶺&emsp;&emsp;恵斗</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/jyuri"
    >
      <span :class="themeConfig.textlink">樹里&emsp;咲穂</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/ayaki"
    >
      <span :class="themeConfig.textlink">彩輝&emsp;&emsp;直</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/anzyo"
    >
      <span :class="themeConfig.textlink">安城&emsp;志紀</span>
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
      <span :class="themeConfig.textlink">真木&emsp;&emsp;薫</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shiomi"
    >
      <span :class="themeConfig.textlink">汐美&emsp;真帆</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/hayami"
    >
      <span :class="themeConfig.textlink">速水&emsp;リキ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shibuki"
    >
      <span :class="themeConfig.textlink">紫吹&emsp;&emsp;淳</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/shiokaze"
    >
      <span :class="themeConfig.textlink">汐風&emsp;&emsp;幸</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/iori"
    >
      <span :class="themeConfig.textlink">伊織&emsp;直加</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/tubaki"
    >
      <span :class="themeConfig.textlink">椿&emsp;火呂花</span>
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
      <span :class="themeConfig.textlink">夢輝&emsp;のあ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/asazumi"
    >
      <span :class="themeConfig.textlink">朝澄&emsp;けい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/otori"
    >
      <span :class="themeConfig.textlink">大鳥&emsp;れい</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/kuon"
    >
      <span :class="themeConfig.textlink">久遠&emsp;麻耶</span>
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
      <span :class="themeConfig.textlink">匠&emsp;ひびき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/tukikage"
    >
      <span :class="themeConfig.textlink">月影&emsp;&emsp;瞳</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/aika"
    >
      <span :class="themeConfig.textlink">愛華&emsp;みれ</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/hosina"
    >
      <span :class="themeConfig.textlink">星奈&emsp;優里</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/minoru"
    >
      <span :class="themeConfig.textlink">稔&emsp;&emsp;&emsp;幸</span>
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
      <span :class="themeConfig.textlink">貴咲&emsp;美里</span>
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
      <span :class="themeConfig.textlink">司&emsp;&emsp;祐輝</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/otowa"
    >
      <span :class="themeConfig.textlink">音羽&emsp;&emsp;椋</span>
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
      <span :class="themeConfig.textlink">風花&emsp;&emsp;舞</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/asaji"
    >
      <span :class="themeConfig.textlink">麻路&emsp;さき</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/sen"
    >
      <span :class="themeConfig.textlink">千&emsp;ほさち</span>
    </NuxtLink>

    <NuxtLink
      class="block mb-2 hover:underline p-2 bg-opacity-20 bg-slate-500"
      to="/jimmy/actress/maya"
    >
      <span :class="themeConfig.textlink">真矢&emsp;みき</span>
    </NuxtLink>
  </nav>
</template>
