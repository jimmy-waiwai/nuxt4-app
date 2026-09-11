<script setup>
definePageMeta({
  layout: 'waiwai',
});
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://jimmy-waiwai.github.io/waiwai/waiwai/',
    },
  ],
});
</script>

<template>
  <div class="w-[90%] max-w-[840px] mx-auto">
    <h1
      class="text-fuchsia-600 font-bold
    "
    >
      宝塚歌劇団のファンによる&emsp;公演評投稿掲示板サイト&emsp;WAIWAI TAKARAZUKA
    </h1>
    <div class="mt-8">
      <h2 class="w-full block">
        <img
          src="/images/waiwai/title0208.gif"
          alt="「WAIWAI TAKARAZUKA」へようこそ!"
          class="mx-auto"
        >
      </h2>
      <p class="text-center mb-6 mt-[-40px]">
        「WAIWAI TAKARAZUKA」へようこそ!<br>
        ここは宝塚好きな方が「わいわい」語り合う会員制掲示板です。
      </p>
      <p class="text-center mb-6">
        ご覧になるのは自由です。右もしくは下のメニューからクリックしてどうぞご覧下さい！<br>
        この掲示板が、愛情あるファンの声がいっぱいの、活気あるものとなりますように・・。
      </p>
      <p class="text-center">
        JIMMYの公演評をまとめたページ<NuxtLink
          to="/jimmy"
          class="text-violet-700 underline hover:no-underline"
        >「JIMMY's Homepage（宝塚）」</NuxtLink>はこちらです。
      </p>
      <p class="text-center">
        最新の宝塚ブログページ<NuxtLink
          to="/takarazuka"
          class="text-violet-700 underline hover:no-underline"
        >「WAIWAI TAKARAZUKA（ブログ）」</NuxtLink>はこちらです。
      </p>
      <p class="text-center mb-6">
        JIMMYのお仕事ページ<NuxtLink
          to="/"
          class="text-violet-700 underline hover:no-underline"
        >「JIMMY's Homepage」</NuxtLink>はこちらです。
      </p>
      <p class="text-center mb-6">
        （2026年追記）移転、ファイル整理しながら軽く読み返しましたが、本当に暖かい書き込みが多くて、素晴らしいHPを運営していたんだなぁ・・と改めて感動しています。<br>
        メールアドレスなどの情報は削除しましたので、2000年～2006年くらいまでの短い期間ですが、ファンの公演評を知れる貴重な資料として、こっそり残すことをお許しくださると幸いです。<br>
        当時書き込みをしてくださった方、本当にありがとうございました！
      </p>
    </div>
    <div class="flex justify-center items-end my-4">
      <NuxtLink
        to="/waiwai/annai"
        class="m-8"
      >
        <h3 class="whitespace-nowrap">
          <img
            src="/images/waiwai/menu11.gif"
            alt=""
            class="inline"
          >
          <img
            src="/images/waiwai/menu12.gif"
            alt="About WAIWAI"
            class="inline"
          >
        </h3>
        <p class="ml-6 leading-6 text-violet-700 underline hover:no-underline">
          この掲示板について。<br>
          参加したい方もこちらへ。
        </p>
      </NuxtLink>
      <NuxtLink
        to="/waiwai/syokai"
        class="m-6"
      >
        <h3 class="whitespace-nowrap">
          <img
            src="/images/waiwai/menu21.gif"
            alt=""
            class="inline"
          >
          <img
            src="/images/waiwai/menu22.gif"
            alt="Introduction"
            class="inline"
          >
        </h3>
        <p class="ml-6 leading-6 text-violet-700 underline hover:no-underline">
          投稿者の<br>
          自己紹介です。
        </p>
      </NuxtLink>
    </div>
    <div>
      <h4 class="text-fuchsia-600 font-bold mb-2">
        花組&emsp;春野寿美礼&emsp;桜乃彩音&emsp;彩吹真央&emsp;真飛聖&emsp;愛音羽麗&emsp;他
      </h4>
      <div class="bg-white px-6 py-4 mb-8">
        <NuxtLink
          to="/waiwai/back/mindtrave"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          MIND TRAVELLER
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/phanhana"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ファントム
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/scout"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          スカウト
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/apparte"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          Appartement Cinema
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/rakuyo"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          落陽のパレルモ／ＡＳＩＡＮ&emsp;ＷＩＮＤＳ！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/marra"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          マラケシュ・紅の墓標／エンター・ザ・レビュー
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/kurawan"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          くらわんか
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/tennotu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          天の鼓
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/esperanza"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          La Esperanza／TAKARAZUKA舞夢
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/naked"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          NAKED CITY
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/applau"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          飛翔無限／天使の季節／アプローズ・タカラヅカ！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/nito"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          二都物語
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/nokaze"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          野風の笛／レヴュー誕生
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/humetu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          不滅の棘
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/elisa"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          エリザベート
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/tukino"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          月の燈影
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/kohaku"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          琥珀色の雨にぬれて／Cocktail
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/kanaria"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          カナリア
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/miche"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ミケランジェロ／VIVA!
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/manon"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          マノン
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ludwig"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ルートヴィヒ2世／Asian Sunrise
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/tom"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          トム・ジョーンズの華麗なる冒険
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/asaki"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          あさきゆめみし／ザ・ビューティーズ
        </NuxtLink>
      </div>
      <h4 class="text-fuchsia-600 font-bold mb-2">
        月組&emsp;瀬奈じゅん&emsp;彩乃かなみ&emsp;大空祐飛&emsp;霧矢大夢&emsp;遼河はるひ&emsp;他
      </h4>
      <div class="bg-white px-6 py-4 mb-8">
        <NuxtLink
          to="/waiwai/back/akatuki"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          暁のローマ／レ・ビジュー・ブリアン
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sofuren"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          想夫恋
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/jazzy"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ＪＡＺＺＹな妖精たち／ＲＥＶＵＥ&emsp;ＯＦ&emsp;ＤＲＥＡＭＳ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/bourbon"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          BourbonStreet Blues
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/elisatu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          エリザベート
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/asuka"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          飛鳥夕映え／タカラヅカ絢爛2
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/itosiki"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          愛しき人よ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/bara"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          薔薇の封印
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/namida"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          なみだ橋 えがお橋
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/senior"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          花の宝塚風土記／シニョール ドン・ファン
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/nagai"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          長い春の果てに／With a Song in my Heart
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/slap"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          SLAPSTICK
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/guys"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ガイズ＆ドールズ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/blood"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          血と砂
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/kaizoku"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          大海賊／Jazz Mania
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/practi"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          Practical Joke
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/imasu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          愛のソナタ／ESP! (東京は・いますみれ花咲く)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/zenda"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ゼンダ城の虜／Jazz Mania
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sarani"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          更に狂はじ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/luna"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          LUNA／BLUE MOON BLUE
        </NuxtLink>
      </div>
      <h4 class="text-fuchsia-600 font-bold mb-2">
        雪組&emsp;朝海ひかる&emsp;舞風りら&emsp;未来優希&emsp;水夏希&emsp;壮一帆&emsp;音月桂&emsp;他
      </h4>
      <div class="bg-white px-6 py-4 mb-8">
        <NuxtLink
          to="/waiwai/back/datensi"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          堕天使の涙／タランテラ！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/yarazu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          やらずの雨
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/beru06yu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ベルサイユのばら
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/daytime"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          DAYTIME HUSTLER
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/kirino"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          霧のミラノ／ワンダーランド
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sasurai"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          さすらいの果てに
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/nemure"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          睡れる月
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/aoitori"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          青い鳥を捜して／タカラヅカ・ドリーム・キングダム
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/anohi"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          あの日みた夢に
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/susano"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          スサノオ／タカラヅカ・グローリー！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/okura"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          送られなかった手紙
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/roman"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          Romance de Paris／レ・コラージュ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/america"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          アメリカン・パイ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/syunrei"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          春麗の淡き光に／Joyful!!
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/hop"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ホップ スコッチ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/onthe"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          追憶のバルセロナ／ON THE 5th
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/zyunzyo"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          殉情
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/aimoe"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          愛 燃える／Rose Garden
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/anna"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          アンナ・カレーニナ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/takeki"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          猛き黄金の国／パッサージュ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/tukiyo"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          月夜歌聲
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/gaisen"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          凱旋門／デパートメント・ストア
        </NuxtLink>
      </div>
      <h4 class="text-fuchsia-600 font-bold mb-2">
        星組&emsp;湖月わたる&emsp;白羽ゆり&emsp;安蘭けい&emsp;立樹遥&emsp;涼紫央&emsp;柚希礼音&emsp;他
      </h4>
      <div class="bg-white px-6 py-4 mb-8">
        <NuxtLink
          to="/waiwai/back/hcord"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ヘイズ・コード
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/aisuruni"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          愛するには短すぎる／ネオ・ダンディズム！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/fete"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          フェット・アンペリアル
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/beru06ho"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ベルサイユのばら
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ryuusei"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          龍星
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/nagasaki"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          長崎しぐれ坂／ソウル・オブ・シバ!!
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sorede"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          それでも船は行く
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/hanamau"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          花舞う長安／ロマンチカ宝塚'04
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/hanaiso"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          花のいそぎ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/1914ai"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          １９１４／愛・タカラヅカ絢爛
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/eienno"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          永遠の祈り
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ganryu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          巌流
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/okeni"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          王家に捧ぐ歌
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/garasu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ガラスの風景／バビロン
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/vinter"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ヴィンターガルテン
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/puraha"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          プラハの春／LUCKY STAR！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sazan"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          花の業平／サザンクロス・レビュー2
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ihatobu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          イーハトーヴ・夢
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/beruho"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ベルサイユのばら2001
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/hanano"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          花の業平／夢は世界を翔けめぐる
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/hanafu"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          花吹雪 恋吹雪
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ogon"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          黄金のファラオ／美麗猫
        </NuxtLink>
      </div>
      <h4 class="text-fuchsia-600 font-bold mb-2">
        宙組&emsp;貴城けい&emsp;紫城るい&emsp;大和悠河&emsp;蘭寿とむ&emsp;悠未ひろ&emsp;北翔海莉&emsp;他
      </h4>
      <div class="bg-white px-6 py-4 mb-8">
        <NuxtLink
          to="/waiwai/back/ryoma3"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          維新回天・竜馬伝！／ザ・クラシック
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/under"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          UNDERSTUDY
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/neversay"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          NEVER SAY GOODBYE
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/humekoi"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          不滅の恋人たちへ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/wwing"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          W-WING-
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/honou"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          炎にくちづけを／ネオ・ヴォヤージュ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/lepetit"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          Le Petit Jardin
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/stella"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ホテル ステラマリス／レヴュー伝説
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/phantom"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ファントム
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/boxman"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          BOXMAN
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/temp"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          白昼の稲妻／テンプテーション！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/satomi"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          里見八犬伝
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/youhei"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          傭兵ピエール／満天星大夜總会
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/seinaru"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          聖なる星の奇蹟
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/houou"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          鳳凰伝／ザ・ショー・ストッパー
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ageof"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          エイジ・オブ・イノセンス
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/casute"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          カステル・ミラージュ／ダンシング・スピリット！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/figaro"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          フィガロ！
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/beruso"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          ベルサイユのばら2001
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/bokyo"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          望郷は海を越えて／ミレニアム・チャレンジャー！
        </NuxtLink>
      </div>
      <h4 class="text-fuchsia-600 font-bold mb-2">
        専科&emsp;その他&emsp;複数組&emsp;特別公演&emsp;等
      </h4>
      <div class="bg-white px-6 py-4 mb-8">
        <NuxtLink
          to="/waiwai/back/sonota"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          その他の公演
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/seito"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          生徒評掲示板
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          雑談用掲示板
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/copa"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          コパカバーナ
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/enc2006"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          エンカレッジ コンサート(2006年)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/youngb"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          Young Bloods!!
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/ernest"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          Ernest in Love
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/lastparty"
          class="text-violet-700 underline hover:no-underline mr-6"
        >
          THE LAST PARTY
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center w-full p-4 flex-wrap mb-8">
      <p><strong class="text-rose-600 font-bold">このHPに書かれた文章の無断転載を禁じます。</strong></p>
      <p>「WAIWAI TAKARAZUKA」管理人 JIMMY</p>
      <p>Copyright 2000-2006. All rights reserved.</p>
    </div>
  </div>
</template>
