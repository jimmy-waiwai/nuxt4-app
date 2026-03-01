<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'introduction',
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
            タカラヅカファンに100の質問
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2002/08/18 up)
            </p>
            <table
              cellpadding="3"
              class="mx-auto my-4"
            >
              <tbody>
                <tr>
                  <td
                    colspan="2"
                    :class="barColor"
                    class="text-white text-center px-4 py-2"
                  >
                    001→020
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    1
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    お名前と生年月日(または年齢)、観劇歴を教えてください。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    JIMMY。197×年4月16日生まれ。19年。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    2
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    初めて観た公演は何ですか？(テレビ・ビデオでもかまいません)
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「ブルー・ジャスミン」1983年雪組。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    3
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ハマるきっかけになった公演は何ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    6年生の時に観た「はばたけ黄金の翼よ」かな。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    4
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファン人生における「初恋の人」はどなたですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    厳密に言えばターコさん(麻実れい)。<br>
                    でも、「初恋の人」と言うべきはイチロさん(一路真輝)だと思う。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    5
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    観劇は大劇場メインですか？東宝劇場メインですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    大劇場。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    6
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファンとしての自分の長所と短所をあげてください。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    長所は幅広く観ている事。短所はその割に何でも喜んで観ていない所(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    7
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ご贔屓男役さんを教えてください。複数可。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    今はケロちゃん(汐美真帆)、まやちゃん(久遠麻耶)、岡っち(嶺恵斗)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    8
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ご贔屓娘役さんを教えてください。複数可。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    花ちゃん(花總まり)、かなみちゃん(彩乃かなみ)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    9
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    好きな芝居作品は？３個くらいまでなら複数可。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「エリザベート」(雪組)！芝居じゃないかな・・。<br>
                    オリジナルだったら、「遙かなる旅路の果てに」。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    10
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    好きなショー作品は？３個くらいまでなら複数可。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「Cocktail」「マ・ベル・エトワール」「ジャンクション24」
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    11
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    今まで観た中でいちばん「チケット代返してよ！」と思った作品は？実名でどうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    駄作でもチケット代くらいは楽しみを見つけて観ている(^_^;)。<br>
                    でも、最近のTCAはチケット代に見合わない内容だと思う。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    12
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファンとして「戻れないところまで来ちゃったな」と思った瞬間は？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    大劇場が近いのに、東京まで観に行っちゃった時。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    13
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファン人生における最大の自慢は？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    あるけど内緒(*^｡^*)。<br>
                    言える範囲なら、おかげさまでWAIWAIが結構賑わっていて、<br>
                    私の書く公演評を楽しみにして下さっている方がいること。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    14
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファン人生における最大の懺悔は？言える範囲でどうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ・・ないなぁ。親に言えない事はしてません(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    15
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    あなたにとってのベストバウ作品(ドラマシティ作品)は何ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「血と砂」！
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    16
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    いわゆる路線外で、大好きな生徒さんはどなたですか？複数可。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    その言葉は好きではない・・。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    17
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    お好みの「おじさま系上級生」を教えてください。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    はっちさん(夏美よう)、チャルさん(箙かおる)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    18
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    お好みの「お姉さま系上級生」を教えてください。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    こもちゃん(美原志帆)、かずみちゃん(森央かずみ)、ポッポさん(貴柳みどり)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    19
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    再演してほしい芝居はありますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    配役が良ければ、「遙かなる旅路の果てに」。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    20
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    再演してほしいショーはありますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「ザ・レビュー・スコープ」。タンゴのシーンをケロちゃん(汐美真帆)で観たい。
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    :class="barColor"
                    class="text-white text-center px-4 py-2"
                  >
                    021→040
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    21
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ご贔屓以外で今いちばん気になる生徒さんは誰ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    鳳翔大。どうなるかな？と思って。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    22
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    観劇は友達と？ひとりで？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    どちらもあるけれど、最近はひとりで行っても、<br>
                    誰か友達と遭遇している気がする(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    23
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    劇場に行ったときに絶対食べるものってありますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ない。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    24
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    入り・出待ちってどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    苦手。待つのがしんどいと思う時点で、向いてないんだと思う。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    25
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    お茶会は好きですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    観劇ほど好きではないけど、ご贔屓さんのは行きたいと思う。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    26
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    FCの会服について一言どうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    あんまり着たくない(ごめんなさい)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    27
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「歌劇」について何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「高声低声」ではお世話になりました。またいつか書きたいです。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    28
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「宝塚GRAPH」について何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    篠山紀信さんの表紙PHOTO、良くなってきましたよね。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    29
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    キャトルレーヴはよく使う？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    使う。大劇場に行ったら、大抵行く。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    30
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    キャトルレーヴにあったらいいな、と思うグッズは何ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    さあ？舞台スチールにはもう少しこだわりが欲しい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    31
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚アンって行ったことありますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ある。たまーに。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    32
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    部屋を占領するビデオやプログラム、いつもどうしてますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    困っている。専用の部屋を作って、キレイに整理したい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    33
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    いわゆる「７１期四天王」(愛華・真琴・轟・稔)、あなたのイチオシは？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    いしちゃん(轟悠)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    34
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    次に専科入りする生徒さんを予想してみてください。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    誰も行かないで欲しい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    35
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    若手演出家の先生方。植田景子・大野拓史・児玉明子・斎藤吉正・藤井大介、あなたのイチオシは？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    齋藤先生。植田景子先生。(イチオシなのに2人ですみません・・)
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    36
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「あの時退団しなければ今頃は…」と思う生徒さんっていますよね？それは誰？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    大輝ゆうさん。今の宝塚なら十分にトップになれたよ・・。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    37
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    着てみたい衣装ってありますよね？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「血と砂」でケロちゃんが着ていた白マタドールの衣装！！<br>
                    (何か意味が違う・・？)
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    38
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚で舞台化してほしい原作モノ(小説・映画・歴史上の人物etc)はありますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    小池先生で、フランケンシュタイン。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    39
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    その原作、頭の中では既にキャスト案ができあがってたり？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ずんちゃん(姿月あさと)で作ってもらうのが夢だったんだけれど、<br>
                    退めちゃったので、わたる君(湖月わたる)で。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    40
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    アドリブは好き？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    上手ければ(笑)。
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    :class="barColor"
                    class="text-white text-center px-4 py-2"
                  >
                    041→060
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    41
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    あなたにとってのベスト植田紳爾作品はなんですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「風と共に去りぬ」。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    42
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「ベルサイユのばら」再演について何かご意見を。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    もう少し、時期と配役を考えて、自分の作品にこだわりを持って下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    43
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「風と共に去りぬ」の再演ってどう思いますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    同上。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    44
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    小池作品について何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    好きです。宝塚を見捨てないでね・・(;_;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    45
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「エリザベート」は何組バージョンが好きですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    断然雪組。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    46
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    今は亡き喜多弘先生の振付ってどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    好き～、また観たい～、さびしいよぉっ(;_;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    47
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    荻田作品は好きですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    好きです。がんばって下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    48
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    石田作品はどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    好きです。負けないで下さい(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    49
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ダンサーと言えば誰ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    チャーリー(匠ひびき)。昔ならなつめさん(大浦みずき)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    50
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    歌手と言えば誰ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    イチロさん(一路真輝)、ずんちゃん(姿月あさと)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    51
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    役者と言えば誰ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ケロちゃん(汐美真帆)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    52
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ついつい見てしまうお気に入りビデオは何ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    沢山ありますが、意外な所では(^_^;)、<br>
                    月組の中国公演生中継の「ブラボー・タカラヅカ！」。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    53
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    では逆に、２度と見ちゃいけない封印ビデオは？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ？気に入らない公演は、封印しなくても見ないし(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    54
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    紫吹淳さんはおしゃれだと思いますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    思います。あれだけスタイル良かったら、似合ってますよ。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    55
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    娘役さんのギャル系ファッションについてご意見をどうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    舞台に悪いように影響がなかったら、全然OKです。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    56
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    オフの真飛聖さんについて何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    何それ(笑)？素顔は女の子らしいって事かしら？<br>
                    これも舞台に関係ないので、全然OKです。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    57
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ダブルれいをどう思いますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    どうって・・(笑)。どっちもそこそこ好きよ。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    58
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    花總まりさんについて何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    がんばれるまで、がんばれ(笑)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    59
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    彩輝直さんについて何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    トップになるなら、もうちょっと上手くなって下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    60
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    大和悠河さんについて何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    一刻も早く、トップになって下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    :class="barColor"
                    class="text-white text-center px-4 py-2"
                  >
                    061→080
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    61
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    路線男役の条件って何でしょうね？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    今は人気。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    62
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    路線娘役の条件って何でしょうね？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    容姿と実力。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    63
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    シューマッハーの中では誰がお好き？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    もちろんケロちゃん(汐美真帆)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    64
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    オサあさコンビはどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    良いと思う。これからが楽しみ。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    65
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ノルブン派？ノルユリ派？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ノルユリ派。ノルブンに思い入れはない。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    66
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    星組の人事異動(別名全とっかえ)について何かコメントを。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    星組ファンの気持ちは分かるけれど、雪組も似たようなものよ。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    67
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    水夏希さんはどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    今の所、あまり良いとは思えない。これから化けるのだろうか？
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    68
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    この人の芸名カッコイイ！と思うのは？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    うーん。北翔海莉とか・・。久遠麻耶も素敵な名前だと思う。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    69
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    では逆に、「今からでも芸名の改名を！」と思うのは？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    春野寿美礼は昔思った・・(笑)。後、研ルイスとか・・。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    70
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「その舞台化粧今すぐどうにかしてください！」と思う人っていますよね？それは誰？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    のぞみちゃん(楠恵華)。<br>
                    良く分からないけれど、もう少しキレイになれるような気がしてならない。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    71
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    旧雪組三兄弟ってなんだったんでしょうね？一言どうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    まーったく、思い入れなし。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    72
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    あなたにとってのベストエトワールはどなた？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    じゅんちゃん(純名里沙)の初舞台エトワール。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    73
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「現役時代を見たかった！」と思うOGさんはいますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    汀夏子さん、鳳蘭さん、安奈淳さん。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    74
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    黒エンビが今いちばん似合うのは誰だと思いますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    退めたけどチャーリー(匠ひびき)。その前ならまりこさん(麻路さき)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    75
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「男役の色気」って何でしょうね？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    宝塚の舞台を観てみて下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    76
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    あなたにとっての宝塚ベストヒーローはどの作品のどのキャラクター？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    「エリザベート」のトート。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    77
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    では、ベストヒロインはどの作品のどのキャラクター？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    何だろう？やっぱりエリザベートかな。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    78
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「宝塚スターの小部屋」はどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    好きです。がんばって下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    79
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    公式サイトに一言どうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    WAIWAIのような公演評サイトを、公式で運営して欲しい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    80
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ２派？８派？知らないなんて言わせません。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    どちらも知っているけれど、どちら派でもない。
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    :class="barColor"
                    class="text-white text-center px-4 py-2"
                  >
                    081→100
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    81
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    そこで思わずネットバトルに参戦してしまったり？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    それはない。WAIWAIで手一杯。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    82
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    いわゆる「妄想系」について一言どうぞ。知らないとは言わせません。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    聞いた事あるけれど、見た事はないです。アドレス教えて下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    83
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    歌えない、踊れない、芝居ができない、一番いただけないと思うのは？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    難しいなぁ・・。どれもいただけないけれど、<br>
                    それを補って余りあるものがあれば、許せる事もある(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    84
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    プレミアつきのチケットに手を出したことはありますか？言える範囲でどうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    自分のチケットはない。母の為にオークションで落とした事はある。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    85
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚の歌が入ってるカラオケがありますよね？歌った感想は？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    面白い。また行きたい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    86
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    観劇友達は多い方ですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    HPの規模の割には、多くないかもしれない。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    87
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    オサあさに代わって額に描きこむ「さっ」の謎を解いてください。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    ？本当に意味が分からない(;_;)。誰か教えて下さい。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    88
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「宝塚→ビアン虎の穴」と連想する非ヅカファンに一言どうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    私は違います(笑)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    89
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファンだということを会社や学校でカミングアウト済み？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    済み。でないと、私の休日の行動、説明できない(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    90
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    全くのドシロウトさんに「宝塚ってどうよ？」と言われたら何て切り返す？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    観てみる？
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    91
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    恋人・夫(もしくはあなたが今好きな人)はあなたが宝塚ファンだと知ってますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    いまはいないけれど、昔の彼氏には皆言っていた。<br>
                    でないと、私の生活、説明できないから(^_^;)。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    92
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚に対して「萌え～」って言うのはアリですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    アリでしょう。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    93
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「痛いファン」ってどんな人でしょうね？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    誰かに思い入れがあって、公平に観られない、っていうのは別に普通。<br>
                    ストーカーしたりはダメ。痛いでしょう。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    94
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    ピンクハウスを着ている宝塚ファンはどうですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    好きなら良いんじゃない？
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    95
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    男性の宝塚ファンをどう思いますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    これも全然OK。もっと増えたら良いのに。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    96
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    「オールドファン」の定義って何だと思いますか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    長年観ている人？年齢は関係ないですよね。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    97
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファンとして絶対にしてはいけないことって何でしょうね？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    自分の生活に影響が出る程の応援活動。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    98
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    宝塚ファンをやめるとしたらどんなときですか？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    もういつやめても不思議じゃない。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    99
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    もし、自分に娘が生まれたら宝塚に入れたい？
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    入れたくない。
                  </td>
                </tr>
                <tr>
                  <td
                    :class="[bgColor, textTitle]"
                    class="text-center px-4 py-2"
                  >
                    100
                  </td>
                  <td
                    :class="[bgColor, textTitle]"
                    class="px-4 py-2"
                  >
                    最後の質問。あなたにとって宝塚とは？「夢の世界」以外のお答えをどうぞ。
                  </td>
                </tr>
                <tr>
                  <td :class="bgColor" />
                  <td
                    :class="themeConfig.textlink"
                    class="bg-rose-50 text-right px-4 py-2"
                  >
                    趣味。
                  </td>
                </tr>
              </tbody>
            </table>
            <p>・・おぉっとクールに終わってしまいました(^_^;)。</p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyIntroductionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyIntroductionList />
    </div>
  </div>
</template>

<style scoped></style>
