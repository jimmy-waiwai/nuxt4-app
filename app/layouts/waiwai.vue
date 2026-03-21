<script setup>
useHead({
  title: 'WAIWAI TAKARAZUKA -宝塚歌劇公演評サイト-',
  meta: [
    {
      name: 'description',
      content:
        '宝塚ファンがWAIWAI(ワイワイ)語り合う会員制掲示板です。',
    },
  ],
});
</script>

<template>
  <div
    class="noto-sans font-light bg-[url(/images/waiwai/back0208.gif)] leading-8 flex flex-wrap justify-between items-start"
  >
    <div class="w-full lg:w-[80%]">
      <slot />
    </div>
    <div class="w-full lg:w-[20%] flex flex-col justify-center leading-6 p-4">
      <h4 class="w-full block">
        <img
          src="/images/waiwai/hidariue.gif"
          alt="WAIWAI TAKARAZUKA"
          class="mx-auto"
        >
      </h4>
      <h5 class="w-full block">
        <img
          src="/images/waiwai/open.gif"
          alt="OPEN!"
          class="mx-auto p-2"
        >
      </h5>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/hcord"
          class="text-violet-700 underline hover:no-underline"
        >
          ヘイズ・コード(星組)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/mindtrave"
          class="text-violet-700 underline hover:no-underline"
        >
          MIND TRAVELLER(花組)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ryoma3"
          class="text-violet-700 underline hover:no-underline"
        >
          維新回天・竜馬伝！／ザ・クラシック(宙組)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/datensi"
          class="text-violet-700 underline hover:no-underline"
        >
          堕天使の涙／タランテラ！(雪組)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/aisuruni"
          class="text-violet-700 underline hover:no-underline"
        >
          愛するには短すぎる／ネオ・ダンディズム！(星組)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/sonota"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          その他の公演
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sonota2"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (2)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sonota3"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (3)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/sonota4"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (4)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/seito"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          生徒評掲示板
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/seito2"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (2)
        </NuxtLink>
      </div>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/voice"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          雑談用掲示板
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice2"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (2)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice3"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (3)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice4"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (4)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice5"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (5)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice6"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (6)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice7"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (7)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice8"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (8)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice9"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (9)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice10"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (10)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice11"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (11)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice12"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (12)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice13"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (13)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice14"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (14)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice15"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (15)
        </NuxtLink>
        <NuxtLink
          to="/waiwai/back/voice16"
          class="text-violet-700 underline hover:no-underline mr-4"
        >
          (16)
        </NuxtLink>
      </div>

      <h5 class="w-full block">
        <img
          src="/images/waiwai/backnumber.gif"
          alt="BACK NUMBER"
          class="mx-auto p-2"
        >
      </h5>
      <h6 class="text-center p-2 mb-2">
        ◆2006年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/under"
          class="text-violet-700 underline hover:no-underline"
        >
          UNDERSTUDY(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/phanhana"
          class="text-violet-700 underline hover:no-underline"
        >
          ファントム(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/copa"
          class="text-violet-700 underline hover:no-underline"
        >
          コパカバーナ(星・宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/yarazu"
          class="text-violet-700 underline hover:no-underline"
        >
          やらずの雨(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/fete"
          class="text-violet-700 underline hover:no-underline"
        >
          フェット・アンペリアル(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/akatuki"
          class="text-violet-700 underline hover:no-underline"
        >
          暁のローマ／レ・ビジュー・ブリアン(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/scout"
          class="text-violet-700 underline hover:no-underline"
        >
          スカウト(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/neversay"
          class="text-violet-700 underline hover:no-underline"
        >
          NEVER SAY GOODBYE(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/enc2006"
          class="text-violet-700 underline hover:no-underline"
        >
          エンカレッジ コンサート(2006年)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/apparte"
          class="text-violet-700 underline hover:no-underline"
        >
          Appartement Cinema(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/youngb"
          class="text-violet-700 underline hover:no-underline"
        >
          Young Bloods!!
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/beru06yu"
          class="text-violet-700 underline hover:no-underline"
        >
          ベルサイユのばら(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/sofuren"
          class="text-violet-700 underline hover:no-underline"
        >
          想夫恋(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/humekoi"
          class="text-violet-700 underline hover:no-underline"
        >
          不滅の恋人たちへ(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/beru06ho"
          class="text-violet-700 underline hover:no-underline"
        >
          ベルサイユのばら(星組)
        </NuxtLink>
      </div>
      <h6 class="text-center p-2 mb-2">
        ◆2005年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/wwing"
          class="text-violet-700 underline hover:no-underline"
        >
          W-WING-(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/rakuyo"
          class="text-violet-700 underline hover:no-underline"
        >
          落陽のパレルモ／ＡＳＩＡＮ&emsp;ＷＩＮＤＳ！(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/daytime"
          class="text-violet-700 underline hover:no-underline"
        >
          DAYTIME HUSTLER(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ryuusei"
          class="text-violet-700 underline hover:no-underline"
        >
          龍星(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/jazzy"
          class="text-violet-700 underline hover:no-underline"
        >
          ＪＡＺＺＹな妖精たち／ＲＥＶＵＥ&emsp;ＯＦ&emsp;ＤＲＥＡＭＳ(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/honou"
          class="text-violet-700 underline hover:no-underline"
        >
          炎にくちづけを／ネオ・ヴォヤージュ(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ernest"
          class="text-violet-700 underline hover:no-underline"
        >
          Ernest in Love(月／花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/bourbon"
          class="text-violet-700 underline hover:no-underline"
        >
          BourbonStreet Blues(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/kirino"
          class="text-violet-700 underline hover:no-underline"
        >
          霧のミラノ／ワンダーランド(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/lepetit"
          class="text-violet-700 underline hover:no-underline"
        >
          Le Petit Jardin(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/nagasaki"
          class="text-violet-700 underline hover:no-underline"
        >
          長崎しぐれ坂／ソウル・オブ・シバ!!(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/sasurai"
          class="text-violet-700 underline hover:no-underline"
        >
          さすらいの果てに(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/marra"
          class="text-violet-700 underline hover:no-underline"
        >
          マラケシュ・紅の墓標／エンター・ザ・レビュー
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/nemure"
          class="text-violet-700 underline hover:no-underline"
        >
          睡れる月(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/sorede"
          class="text-violet-700 underline hover:no-underline"
        >
          それでも船は行く(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/elisatu"
          class="text-violet-700 underline hover:no-underline"
        >
          エリザベート(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/kurawan"
          class="text-violet-700 underline hover:no-underline"
        >
          くらわんか(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/stella"
          class="text-violet-700 underline hover:no-underline"
        >
          ホテル ステラマリス／レヴュー伝説(宙組)
        </NuxtLink>
      </div>

      <h6 class="text-center p-2 mb-2">
        ◆2004年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/tennotu"
          class="text-violet-700 underline hover:no-underline"
        >
          天の鼓(花組)">天の鼓(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/aoitori"
          class="text-violet-700 underline hover:no-underline"
        >
          青い鳥を捜して／タカラヅカ・ドリーム・キングダム(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/hanamau"
          class="text-violet-700 underline hover:no-underline"
        >
          花舞う長安／ロマンチカ宝塚'04(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/lastparty"
          class="text-violet-700 underline hover:no-underline"
        >
          THE LAST PARTY(宙/月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/anohi"
          class="text-violet-700 underline hover:no-underline"
        >
          あの日みた夢に(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/esperanza"
          class="text-violet-700 underline hover:no-underline"
        >
          La Esperanza／TAKARAZUKA舞夢(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/hanaiso"
          class="text-violet-700 underline hover:no-underline"
        >
          花のいそぎ(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/asuka"
          class="text-violet-700 underline hover:no-underline"
        >
          飛鳥夕映え／タカラヅカ絢爛2(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/naked"
          class="text-violet-700 underline hover:no-underline"
        >
          NAKED CITY(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/phantom"
          class="text-violet-700 underline hover:no-underline"
        >
          ファントム(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/itosiki"
          class="text-violet-700 underline hover:no-underline"
        >
          愛しき人よ(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/susano"
          class="text-violet-700 underline hover:no-underline"
        >
          スサノオ／タカラヅカ・グローリー！(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/boxman"
          class="text-violet-700 underline hover:no-underline"
        >
          BOXMAN(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/1914ai"
          class="text-violet-700 underline hover:no-underline"
        >
          １９１４／愛・タカラヅカ絢爛(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/okura"
          class="text-violet-700 underline hover:no-underline"
        >
          送られなかった手紙(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/applau"
          class="text-violet-700 underline hover:no-underline"
        >
          飛翔無限／天使の季節／アプローズ・タカラヅカ！(花組)
        </NuxtLink>
      </div>

      <h6 class="text-center p-2 mb-2">
        ◆2003年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/eienno"
          class="text-violet-700 underline hover:no-underline"
        >
          永遠の祈り(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ganryu"
          class="text-violet-700 underline hover:no-underline"
        >
          巌&emsp;流(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/bara"
          class="text-violet-700 underline hover:no-underline"
        >
          薔薇の封印(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/nito"
          class="text-violet-700 underline hover:no-underline"
        >
          二都物語(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/temp"
          class="text-violet-700 underline hover:no-underline"
        >
          白昼の稲妻／テンプテーション！(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/namida"
          class="text-violet-700 underline hover:no-underline"
        >
          なみだ橋 えがお橋(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/roman"
          class="text-violet-700 underline hover:no-underline"
        >
          Romance de Paris／レ・コラージュ(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/satomi"
          class="text-violet-700 underline hover:no-underline"
        >
          里見八犬伝(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/okeni"
          class="text-violet-700 underline hover:no-underline"
        >
          王家に捧ぐ歌(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/america"
          class="text-violet-700 underline hover:no-underline"
        >
          アメリカン・パイ(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/nokaze"
          class="text-violet-700 underline hover:no-underline"
        >
          野風の笛／レヴュー誕生(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/senior"
          class="text-violet-700 underline hover:no-underline"
        >
          花の宝塚風土記／シニョール ドン・ファン(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/humetu"
          class="text-violet-700 underline hover:no-underline"
        >
          不滅の棘(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/youhei"
          class="text-violet-700 underline hover:no-underline"
        >
          傭兵ピエール／満天星大夜總会(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/syunrei"
          class="text-violet-700 underline hover:no-underline"
        >
          春麗の淡き光に／Joyful!!(雪組)
        </NuxtLink>
      </div>

      <h6 class="text-center p-2 mb-2">
        ◆2002年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/seinaru"
          class="text-violet-700 underline hover:no-underline"
        >
          聖なる星の奇蹟(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/garasu"
          class="text-violet-700 underline hover:no-underline"
        >
          ガラスの風景／バビロン(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/hop"
          class="text-violet-700 underline hover:no-underline"
        >
          ホップ スコッチ(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/elisa"
          class="text-violet-700 underline hover:no-underline"
        >
          エリザベート(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/vinter"
          class="text-violet-700 underline hover:no-underline"
        >
          ヴィンターガルテン(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/nagai"
          class="text-violet-700 underline hover:no-underline"
        >
          長い春の果てに／With a Song in my Heart(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/tukino"
          class="text-violet-700 underline hover:no-underline"
        >
          月の燈影(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/houou"
          class="text-violet-700 underline hover:no-underline"
        >
          鳳凰伝／ザ・ショー・ストッパー(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/slap"
          class="text-violet-700 underline hover:no-underline"
        >
          SLAPSTICK(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/onthe"
          class="text-violet-700 underline hover:no-underline"
        >
          追憶のバルセロナ／ON THE 5th(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ageof"
          class="text-violet-700 underline hover:no-underline"
        >
          エイジ・オブ・イノセンス(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/puraha"
          class="text-violet-700 underline hover:no-underline"
        >
          プラハの春／LUCKY STAR！(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/zyunzyo"
          class="text-violet-700 underline hover:no-underline"
        >
          殉&emsp;情(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/kohaku"
          class="text-violet-700 underline hover:no-underline"
        >
          琥珀色の雨にぬれて／Cocktail(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/guys"
          class="text-violet-700 underline hover:no-underline"
        >
          ガイズ＆ドールズ(月組)
        </NuxtLink>
      </div>

      <h6 class="text-center p-2 mb-2">
        ◆2001年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/kanaria"
          class="text-violet-700 underline hover:no-underline"
        >
          カナリア(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/sazan"
          class="text-violet-700 underline hover:no-underline"
        >
          花の業平／サザンクロス・レビュー2(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/casute"
          class="text-violet-700 underline hover:no-underline"
        >
          カステル・ミラージュ／ダンシング・スピリット！(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/blood"
          class="text-violet-700 underline hover:no-underline"
        >
          血と砂(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/aimoe"
          class="text-violet-700 underline hover:no-underline"
        >
          愛 燃える／Rose Garden(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/miche"
          class="text-violet-700 underline hover:no-underline"
        >
          ミケランジェロ／VIVA!(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/figaro"
          class="text-violet-700 underline hover:no-underline"
        >
          フィガロ！(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/anna"
          class="text-violet-700 underline hover:no-underline"
        >
          アンナ・カレーニナ(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/kaizoku"
          class="text-violet-700 underline hover:no-underline"
        >
          大海賊／Jazz Mania(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ihatobu"
          class="text-violet-700 underline hover:no-underline"
        >
          イーハトーヴ・夢(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/takeki"
          class="text-violet-700 underline hover:no-underline"
        >
          猛き黄金の国／パッサージュ(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/manon"
          class="text-violet-700 underline hover:no-underline"
        >
          マノン(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/beruso"
          class="text-violet-700 underline hover:no-underline"
        >
          ベルサイユのばら(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/beruho"
          class="text-violet-700 underline hover:no-underline"
        >
          ベルサイユのばら(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/practi"
          class="text-violet-700 underline hover:no-underline"
        >
          Practical Joke(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/imasu"
          class="text-violet-700 underline hover:no-underline"
        >
          愛のソナタ／ESP! (東京は・いますみれ花咲く)(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/hanano"
          class="text-violet-700 underline hover:no-underline"
        >
          花の業平／夢は世界を翔けめぐる(星組)
        </NuxtLink>
      </div>

      <h6 class="text-center p-2 mb-2">
        ◆2000年初演分◆
      </h6>
      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/tukiyo"
          class="text-violet-700 underline hover:no-underline"
        >
          月夜歌聲(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ludwig"
          class="text-violet-700 underline hover:no-underline"
        >
          ルートヴィヒ2世／Asian Sunrise(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/hanafu"
          class="text-violet-700 underline hover:no-underline"
        >
          花吹雪 恋吹雪(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/zenda"
          class="text-violet-700 underline hover:no-underline"
        >
          ゼンダ城の虜／Jazz Mania(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/tom"
          class="text-violet-700 underline hover:no-underline"
        >
          トム・ジョーンズの華麗なる冒険(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/bokyo"
          class="text-violet-700 underline hover:no-underline"
        >
          望郷は海を越えて／ミレニアム・チャレンジャー！(宙組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/sarani"
          class="text-violet-700 underline hover:no-underline"
        >
          更に狂はじ(月組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/gaisen"
          class="text-violet-700 underline hover:no-underline"
        >
          凱旋門／デパートメント・ストア(雪組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/ogon"
          class="text-violet-700 underline hover:no-underline"
        >
          黄金のファラオ／美麗猫(星組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/asaki"
          class="text-violet-700 underline hover:no-underline"
        >
          あさきゆめみし／ザ・ビューティーズ(花組)
        </NuxtLink>
      </div>

      <div class="bg-white px-4 py-2 mb-2">
        <NuxtLink
          to="/waiwai/back/luna"
          class="text-violet-700 underline hover:no-underline"
        >
          LUNA／BLUE MOON BLUE(月組)
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
