<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sonota',
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
            箙 かおる
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/09/30 up
            </p>
            <p>もともとターコさん(麻実れい)時代の雪組が初観劇。以降もイチロさん(一路真輝)ファンだったので、雪組の観劇が多く、チャルさん(箙ﾆ言えば、え と言えば、<strong>雪組の頃から良～く観ている</strong>気がします。</p>
            <p><strong>結構二枚目で、好き</strong>でしたね。今もそうですが（^_^;）。</p>
            <p>思いつく役といえば・・<strong>「ムッシュ・ド・パリ」</strong>とか(・・懐かしすぎる^_^;)。<strong>敵側の親衛隊長</strong>で、太田先生らしい戦いの口上を一人でまっ赤な衣装で、言っていましたね。やはり当時から悪役系が多かったかな。二役の<strong>軍曹さん</strong>も面白くて好きでした～。</p>
            <p>
              同公演のショーで、<strong>「ラ・パッション」</strong>っていうショーがあったのですが、そこに<strong>長靴下のピッピ</strong>っていう場面があって、男役が集団で、女の子していたんですよ。イチロさんとか、似合いそうでギャグにならない若手の男役はもちろん除外で（^_^;）。<br>
              中でも、<strong>「うぉぉぉ～！」</strong>とか言いながら、<strong>黄色いミニスカート</strong>(確か・・)でがんばっていたチャルさんは、一際面白かったなぁ～。
            </p>
            <p>あと、<strong>「スカイ・ハイ・スカイ」</strong>で、上級生ばかりで色っぽい鳥たち(もちろんドレス姿)が、歌を聞かせてくれる場面もあって、そこにもチャルさんは入っていましたね。あの場面は、当時子供だったのに結構好きでした。・・色気のある場面が好きな傾向は、昔からのようです（^_^;）。</p>
            <p> ・・なかなか真面目な話になりませんが（^_^;）、好きな役と言ったら何かなぁ？</p>
            <p>
              最近<strong>「エンカレッジ・コンサート」</strong>で再び聞かせてくれて話題にもしましたが、やはり<strong>「ショー・ボート」の黒人奴隷</strong>の役。聞かせてくれた<strong>「オールマン・リバー」</strong>はインパクトありましたね。<br>
              だから<strong>「Let's JAZZ」</strong>で再び聞かせてくれたのには、嬉しくて鳥肌が立ちました。
            </p>
            <p>
              当時は<strong>結構体格も良くて、迫力ある男役さんだった</strong>のですが、専科に行って少し経つと、<strong>突然随分痩せて、シャープな印象になった</strong>のには驚きました。<br>
              <strong>「グランドホテル」</strong>の<strong>プライジング</strong>も印象的ですね。
            </p>
            <p>最近では<strong>「フィガロ！」</strong>の<strong>伯爵</strong>役が上手かった～。</p>
            <p>
              痩せたのもそうですが、専科になってから、ガラッと意識が変わって、どんどん職人的に、実力を高めていった人だと思うんです。<br>
              一時期雪組の組長だった事もありましたが、多分、専科の方が楽しいと思っておられるのではないかなぁ？&emsp;その役だけに専念できて。
            </p>
            <p>とにかく専科の中ではまだまだ若手のチャルさん。これからも良い役が見たいですし、歌も聞きたいです！&emsp;がんばって下さいね～。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
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
