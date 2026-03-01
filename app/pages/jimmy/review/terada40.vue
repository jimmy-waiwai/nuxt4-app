<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'default',
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
            寺田瀧雄作曲家生活40周年記念コンサート
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              宝塚大劇場・3/3
            </p>
            <p>超豪華メンバーによる寺田先生のコンサート。本当に懐かしさ一杯で楽しかったです。</p>
            <p>
              今回私的に、一番驚き、是非見たいと思っていたのが<strong>神奈美帆</strong>でした。予想もしなかった<strong>平みち</strong>との同時退団には思わず涙した程、ショックだったんですよ～(^_^;)。以降結婚して全く芸能活動はしていなかったので、とにかく驚きました。実際の舞台はとにかく緊張しているのは感じられましたが、めちゃくちゃ可愛かったです！&emsp;平とのデュエットは懐かしくて、手放しで嬉しい。平も久しぶりでしたが、「うす紫の恋」の懐かしさもさることながら、ショーの「そして今」が嬉しかったですね～。長い足も健在でした(^_^;)。
            </p>
            <p>
              ショーと言えば、<strong>大浦みずき</strong>！&emsp;「ジタン デ ジタン」「ダンス
              ウィズ
              ミー」と今すぐ戻って欲しいと思えるかっこ良さでした。その点では<strong>杜けあき</strong>も同様。髪もショートカットだったので、男役のかっこ良さが未だに十分漂っていました。デュエットした<strong>大鳥れい</strong>も嬉しそうでしたよ(^_^;)。
            </p>
            <p>
              歌は何と言っても<strong>峰さを理</strong>。代表作の「花風吹」ももちろんですが、「我が愛は山の彼方に」「エルアモール」は再演の際に思い出して仕方なかった位、みねちゃんの歌の印象が強かったので、又聞けて嬉しかったです。やっぱり峰の方が良いと思いました(^_^;)。
            </p>
            <p>
              そしてやっぱり<strong>麻実れい</strong>！！&emsp;「纏しぐれ」も見始めた初期の作品で、懐かしすぎて思わず母と顔を見合わせて喜んでしまいましたが(^_^;)、何と言っても「心の人オスカル」。「オスカルが結婚？」から「たとえオスカルを殺してでも」までの台詞付きで・・これがまたクサくてかっこ良くてシビレました～(^_^;)。今の現役生とは全然違います。濃いと言われる汐美真帆なんて、可愛いもんです～(^_^;)。
            </p>
            <p>
              ・・と現役時代の記憶のあるOGがやはり一番懐かしくて嬉しかったですが、コーナーとしては、<strong>羽田健太郎</strong>のピアノによる「愛あればこそ」が素晴らしく、そこからつながる初演ベルばらスター総出演のメドレーがやはり格別でした。下手銀橋から<strong>榛名由梨</strong>がアンドレのパートで「愛あればこそ」を歌いだすと、上手から<strong>安奈淳</strong>が出てきてオスカルのパートをデュエットしたのを見られたのは、とっても貴重な気がして、感動的でした。
            </p>
            <p>
              現役は花組スターが、二部の始めに出てきました。中では<strong>匠ひびき</strong>が歌った<strong>「パラダイス トロピカーナ」</strong>が嬉しかったです。TV放映されなくて、初めておこずかいでCD買った思い出のショーなんですよ(^_^;)。聞いていても一路さんの歌声が聞こえてきたりしましたが(^_^;)、思っていたよりはちゃんと歌っていてくれて良かったです。一路さんと言えば、思い出深い<strong>「花夢幻」</strong>を田代美代子さんに歌われてしまったのはファンとしはちょっと悲しかったです(^_^;)。その他一路さんに歌って欲しい歌は沢山ありました。でも、麻実れい、平みち、杜けあきと、神奈美帆を含めて私が見始めてからの歴代雪組トップが出演していたのは、<strong>私にはかなり嬉しいメンバー</strong>と言えますね。
            </p>
            <p>
              <strong>愛華みれ</strong>もがんばっていましたが・・せめて実際公演した「夜明けの序曲」位はもう少ししっかり歌って欲しかったなぁ～(^_^;)。
            </p>
            <p>
              思い出の作品、大好きな名曲が一杯詰まったコンサートで、内容は涙ぐむ程感激できる筈のものだったのですが、あの事件があったせいで(ご存じない方は流して下さい)、ちょっとどこか冷めてしまう気持ちがあったのが、本当の・・本音の本音です。真実の程は分からないし、素晴らしい才能ある先生だとは思っているのですけれどね。すっかり何もなかったのような華々しさがね・・。
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★★<span class="text-gray-400">★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyReviewList />
    </div>
    
  </div>
</template>

<style scoped></style>
