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
    barborder: 'border-slate-600',
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
    TOPICSの記事一覧
  </h4>
  <nav class="mb-16">
    <NuxtLink
      to="/jimmy/topic/20041230"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃん報告ファイナル!</span>
      <span class="text-sm block text-slate-500">2004/12/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20041103"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2004/11/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20040821"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組博多座公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2004/08/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20040505"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">今年の初舞台生</span>
      <span class="text-sm block text-slate-500">2004/05/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20040302"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2004/03/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20031229"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組バウホール公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2003/12/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20030511"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">今年の初舞台生</span>
      <span class="text-sm block text-slate-500">2003/05/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20030430"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組全国ツアー公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2003/04/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20030430b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組全国ツアー公演岡っち(嶺恵斗)報告</span>
      <span class="text-sm block text-slate-500">2003/04/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20020825"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2002/08/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20020721"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組全国ツアー公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2002/07/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20020526"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">今年の初舞台生</span>
      <span class="text-sm block text-slate-500">2002/05/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20020117"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2002/01/17</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20011230"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">2001年度を振り返って</span>
      <span class="text-sm block text-slate-500">2001/12/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20011117"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「血と砂」日本青年館公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/11/17</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20011031"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組バウホール公演「血と砂」ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/10/31</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010908"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組東京公演「大海賊／JAZZ Mania」ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/09/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010910"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「お便りコーナー廃止について」～公式HPへの投稿</span>
      <span class="text-sm block text-slate-500">2001/09/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010602"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">TCA音楽祭ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/06/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010521"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/05/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010516"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">組替え発表！</span>
      <span class="text-sm block text-slate-500">2001/05/16</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010516b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">今年の初舞台生</span>
      <span class="text-sm block text-slate-500">2001/05/16</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010311"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組ドラマシティ公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/03/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20010104"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組東京公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2001/01/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20001231"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">2000年度を振り返って</span>
      <span class="text-sm block text-slate-500">2000/12/31</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20001029"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃんお茶会報告</span>
      <span class="text-sm block text-slate-500">2000/10/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20001001"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2000/10/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000903"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">TCAスペシャルケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2000/09/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000816"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">博多座公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2000/08/16</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000715"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃん博多公演でハリー役！</span>
      <span class="text-sm block text-slate-500">2000/07/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000715b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ベルリン公演生中継観ました</span>
      <span class="text-sm block text-slate-500">2000/07/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000626"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組東京公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2000/06/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000601"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">新しい専科制度の導入と組替えについて</span>
      <span class="text-sm block text-slate-500">2000/06/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000514"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ビデオシアター「愛華みれ・華の宴」Salon de Takarazuka 報告</span>
      <span class="text-sm block text-slate-500">2000/05/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000514b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">今年の初舞台生</span>
      <span class="text-sm block text-slate-500">2000/05/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000422"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「タカラヅカ狂想曲part3」に寄稿しました</span>
      <span class="text-sm block text-slate-500">2000/04/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000402"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組見納め報告</span>
      <span class="text-sm block text-slate-500">2000/04/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000402b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">真琴つばさビデオシアター観ました</span>
      <span class="text-sm block text-slate-500">2000/04/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000325"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組公演代役報告</span>
      <span class="text-sm block text-slate-500">2000/03/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000320"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「あさきゆめみし」BS版見ました</span>
      <span class="text-sm block text-slate-500">2000/03/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000304"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃんお茶会報告</span>
      <span class="text-sm block text-slate-500">2000/03/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000220"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">2000/02/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000208"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ずんちゃん(姿月あさと)見納め報告</span>
      <span class="text-sm block text-slate-500">2000/02/08</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000124"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">23日ずんちゃんサヨナラ公演中間報告</span>
      <span class="text-sm block text-slate-500">2000/01/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000123"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ビデオシアター「姿月あさと・ラストソングは時をこえて」</span>
      <span class="text-sm block text-slate-500">2000/01/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/20000123b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">99年度を振り返って</span>
      <span class="text-sm block text-slate-500">2000/01/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19991215"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組新潟公演・ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1999/12/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19991120"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「銀の狼」投票結果で妄想</span>
      <span class="text-sm block text-slate-500">1999/11/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19991031"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">中国公演生中継を見て～ケロちゃん中心～</span>
      <span class="text-sm block text-slate-500">1999/10/31</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19991024"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「スターの小部屋」報告</span>
      <span class="text-sm block text-slate-500">1999/10/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19991011"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">来年の公演スケジュール発表</span>
      <span class="text-sm block text-slate-500">1999/10/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990914"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ずんちゃん退団</span>
      <span class="text-sm block text-slate-500">1999/09/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990905"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">新潟への期待</span>
      <span class="text-sm block text-slate-500">1999/09/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990814"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">夏休みファン感謝デー，チャーリー(匠ひびき)報告</span>
      <span class="text-sm block text-slate-500">1999/08/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990813"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花組初日報告</span>
      <span class="text-sm block text-slate-500">1999/08/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990718"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「ブエノスアイレスの風」ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1999/07/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990626"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宙組初見報告</span>
      <span class="text-sm block text-slate-500">1999/06/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990613"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場最前列報告！！</span>
      <span class="text-sm block text-slate-500">1999/06/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990610"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ビバ・タカラジェンヌ公開録音・ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1999/06/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990606"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃんお茶会報告</span>
      <span class="text-sm block text-slate-500">1999/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990606b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ビデオシアター「真琴つばさ・ビート＆ハート」</span>
      <span class="text-sm block text-slate-500">1999/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990606c"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">５月のアクセス</span>
      <span class="text-sm block text-slate-500">1999/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990530"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ＴＣＡ音楽祭ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1999/05/30</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990517"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組大劇場公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1999/05/17</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990505"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">４月のアクセス</span>
      <span class="text-sm block text-slate-500">1999/05/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990429"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「ブエノスアイレスの風」神戸公演並び報告</span>
      <span class="text-sm block text-slate-500">1999/04/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990425"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">今年の初舞台生</span>
      <span class="text-sm block text-slate-500">1999/04/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990425b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ビデオシアター「轟悠・緑の風」</span>
      <span class="text-sm block text-slate-500">1999/04/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990407"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">一路真輝＝エリザベート！！</span>
      <span class="text-sm block text-slate-500">1999/04/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990407b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">３月のアクセス</span>
      <span class="text-sm block text-slate-500">1999/04/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990329"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">全国ツアーＩＮ広島・ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1999/03/29</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990314"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花組バウ千秋楽報告</span>
      <span class="text-sm block text-slate-500">1999/03/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990310"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">２月のアクセス</span>
      <span class="text-sm block text-slate-500">1999/03/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990304"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">田中マリコ著「宝塚あいうえお図鑑」</span>
      <span class="text-sm block text-slate-500">1999/03/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990303"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">祝！ケロちゃんすらっと茶モデル！！</span>
      <span class="text-sm block text-slate-500">1999/03/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990221"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ビデオシアター「稔幸・春雷の時」</span>
      <span class="text-sm block text-slate-500">1999/02/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990218"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ＨＰお便りコーナー、事前登録制へ</span>
      <span class="text-sm block text-slate-500">1999/02/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990218b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">チケットがお求めやすくなりました～？！</span>
      <span class="text-sm block text-slate-500">1999/02/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990206"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">１月のアクセス</span>
      <span class="text-sm block text-slate-500">1999/02/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990207"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">研一組配属決まりましたね</span>
      <span class="text-sm block text-slate-500">1999/02/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990204"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">祝・ケロちゃん初表紙！！</span>
      <span class="text-sm block text-slate-500">1999/02/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990128"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「銀の狼」配役考えてみました</span>
      <span class="text-sm block text-slate-500">1999/01/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990121"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">がんばれ雪組若手！！</span>
      <span class="text-sm block text-slate-500">1999/01/21</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990120"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">はじめてのおっかけ</span>
      <span class="text-sm block text-slate-500">1999/01/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990110"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">実は・・チャーリーに感動しました</span>
      <span class="text-sm block text-slate-500">1999/01/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990110b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚ビデオシアター「愛華みれ・伝説のプロローグ」</span>
      <span class="text-sm block text-slate-500">1999/01/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990110c"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「夜明けの序曲」のツボ</span>
      <span class="text-sm block text-slate-500">1999/01/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990110d"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">12月のアクセス</span>
      <span class="text-sm block text-slate-500">1999/01/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990102"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">９８年度を振り返って</span>
      <span class="text-sm block text-slate-500">1999/01/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19990102b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">元旦大劇場生中継報告</span>
      <span class="text-sm block text-slate-500">1999/01/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981223"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「レビュースペシャル'98」ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1998/12/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981220"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組「WEST SIDE STORY」配役出てましたね</span>
      <span class="text-sm block text-slate-500">1998/12/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981220b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「銀の狼」キャスト考えてみよう！！</span>
      <span class="text-sm block text-slate-500">1998/12/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981207"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">11月のアクセス</span>
      <span class="text-sm block text-slate-500">1998/12/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981207b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「日本の唄」見ました</span>
      <span class="text-sm block text-slate-500">1998/12/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981205c"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">たにちゃん(大和悠河)としゃべっちゃった</span>
      <span class="text-sm block text-slate-500">1998/12/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981205b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ビデオシアター「姿月あさと・花總まり群青の宇宙へ」</span>
      <span class="text-sm block text-slate-500">1998/12/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981205c"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋12月第一回</span>
      <span class="text-sm block text-slate-500">1998/12/05</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981201"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">12/1のずんちゃんトート</span>
      <span class="text-sm block text-slate-500">1998/12/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981128"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋11月第二回</span>
      <span class="text-sm block text-slate-500">1998/11/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981115"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ずんちゃんトートに殺されました</span>
      <span class="text-sm block text-slate-500">1998/11/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981115b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">りんごちゃん(早乙女幸)退団・・。</span>
      <span class="text-sm block text-slate-500">1998/11/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981115c"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋みきちゃん(真矢みき)スペシャル見ました</span>
      <span class="text-sm block text-slate-500">1998/11/15</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981104"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">来年の公演ラインナップ発表！！</span>
      <span class="text-sm block text-slate-500">1998/11/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981023"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ゆうこちゃん(風花舞)のバウ、玉砕(T_T)！！</span>
      <span class="text-sm block text-slate-500">1998/10/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981023b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋10月第一回</span>
      <span class="text-sm block text-slate-500">1998/10/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981013"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋10月第1回</span>
      <span class="text-sm block text-slate-500">1998/10/13</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981011"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">雪組バウホール公演ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1998/10/11</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981004"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">月組公演での邪念</span>
      <span class="text-sm block text-slate-500">1998/10/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19981002"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">組替え雑感～今後を言いたい放題</span>
      <span class="text-sm block text-slate-500">1998/10/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980920"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋9月第二回</span>
      <span class="text-sm block text-slate-500">1998/09/20</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980907"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">見たゾ、竹の塚歌劇団！！</span>
      <span class="text-sm block text-slate-500">1998/09/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980906"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ハガキ読んでもらっちゃった</span>
      <span class="text-sm block text-slate-500">1998/09/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980906b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋9月第一回</span>
      <span class="text-sm block text-slate-500">1998/09/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980904"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃんのサイン当たりました！！</span>
      <span class="text-sm block text-slate-500">1998/09/04</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980825"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">いしちゃん(轟悠)バウで一人芝居？？</span>
      <span class="text-sm block text-slate-500">1998/08/25</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980824"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃんお茶会報告</span>
      <span class="text-sm block text-slate-500">1998/08/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980824b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「ビバ・タカラジェンヌ」ケロちゃん出演</span>
      <span class="text-sm block text-slate-500">1998/08/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980824c"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋8月第2回</span>
      <span class="text-sm block text-slate-500">1998/08/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980818"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宝塚大変？！</span>
      <span class="text-sm block text-slate-500">1998/08/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980807"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">雪組初日ケロちゃん報告</span>
      <span class="text-sm block text-slate-500">1998/08/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980807b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">千ほさち退団！！</span>
      <span class="text-sm block text-slate-500">1998/08/07</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980803"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">ケロちゃん「ビバ」に出演！！</span>
      <span class="text-sm block text-slate-500">1998/08/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980801"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋8月第1回</span>
      <span class="text-sm block text-slate-500">1998/08/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980724"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「すみれの花咲く頃」IN 武道館</span>
      <span class="text-sm block text-slate-500">1998/07/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980718"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋7月第二週</span>
      <span class="text-sm block text-slate-500">1998/07/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980717"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「グラフ」の表紙見ました?</span>
      <span class="text-sm block text-slate-500">1998/07/17</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980714"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">星組新公見ました</span>
      <span class="text-sm block text-slate-500">1998/07/14</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980710"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「歌劇」誌より理事長の発言について</span>
      <span class="text-sm block text-slate-500">1998/07/10</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980706"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">雪組公演のポスター</span>
      <span class="text-sm block text-slate-500">1998/07/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980706b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋7月第1回</span>
      <span class="text-sm block text-slate-500">1998/07/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980702"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">バウ公演、今年後半のラインナップ</span>
      <span class="text-sm block text-slate-500">1998/07/02</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980628"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">梅田ペルソナ広告、さえちゃん(彩輝直)に</span>
      <span class="text-sm block text-slate-500">1998/06/28</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980626"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">バウ公演、今年後半のラインナップに関する噂</span>
      <span class="text-sm block text-slate-500">1998/06/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980622"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「心中恋の大和路」東上決定！！</span>
      <span class="text-sm block text-slate-500">1998/06/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980622b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋６月第２回</span>
      <span class="text-sm block text-slate-500">1998/06/22</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980618"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">「宙組特集本」読みました</span>
      <span class="text-sm block text-slate-500">1998/06/18</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980606"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋６月第１回</span>
      <span class="text-sm block text-slate-500">1998/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980606b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">雪組バウ初日観ました</span>
      <span class="text-sm block text-slate-500">1998/06/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980603"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">花組新公観ました</span>
      <span class="text-sm block text-slate-500">1998/06/03</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980526"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">風花舞退団</span>
      <span class="text-sm block text-slate-500">1998/05/26</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980524"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋５月第２回</span>
      <span class="text-sm block text-slate-500">1998/05/24</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980509"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">スターの小部屋５月第１回</span>
      <span class="text-sm block text-slate-500">1998/05/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980509b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">音羽椋休演？！</span>
      <span class="text-sm block text-slate-500">1998/05/09</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980501"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">バウホール公演実況ビデオ発売！</span>
      <span class="text-sm block text-slate-500">1998/05/01</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980423"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">瀬奈じゅん新公主役？！</span>
      <span class="text-sm block text-slate-500">1998/04/23</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980412"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">麻路さき退団</span>
      <span class="text-sm block text-slate-500">1998/04/12</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980406"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">詩乃優花退団</span>
      <span class="text-sm block text-slate-500">1998/04/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980406b"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">宙組公演初舞台生</span>
      <span class="text-sm block text-slate-500">1998/04/06</span>
    </NuxtLink>
    <NuxtLink
      to="/jimmy/topic/19980328"
      class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
    >
      <span :class="themeConfig.textlink">大劇場「エクスカリバー」見ました</span>
      <span class="text-sm block text-slate-500">1998/03/28</span>
    </NuxtLink>
  </nav>
</template>
