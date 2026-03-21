<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            汐美 真帆
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>ＪＩＭＭＹ一番のご贔屓、ケロちゃんでございます（^_^;）。</p>
            <p>ケロちゃんを始めて認識したのは<strong>「忠臣蔵」新人公演</strong>。読売り役(本役・和央ようか)だったケロちゃんは、登場からいきなりの銀橋ソロを、堂々と歌いきり、元気一杯に駆け抜けていったのでした（^_^;）。すごいインパクトがあって、当時研２で名前が売れていなかった事から、客席がパンフレットをめくる音でしばらくザワついていたのが、強烈な印象として残っています。</p>
            <p>
              しかし、何と言っても雪組は<strong>一路真輝中心に世界が回って</strong>おりましたので（^_^;）、なかなか隅にまで目が届かない（^_^;）。だから、本格的にハマったのはイチロさんが退団してからです。ハマったきっかけは、その少し前のショー<strong>「マ・ベル・エトワール」のミラクルダンサー</strong>。ゆきちゃん(高嶺ふぶき)が「マイ・ウェイ」を歌うバックで踊るダンサーだったのですが、並み居る雪組ホープ達の中でも、<strong>一際ワイルドでかっこ良かった</strong>！
              以来、俄然注目し始め、イチロさん退団後にどっぷりとハマりました。いわば、<strong>退団の寂しさから救ってくれたのがケロちゃん</strong>という訳です（^_^;）。同じイチロさんファンだったそうだし、年齢も近いし、勝手に親近感も湧いてます（^_^;）。
            </p>
            <p>演技派みたいに書かれがちだけど、私はショーでの<strong>キザったケロちゃん</strong>が好き（^_^;）。上手いとか良く書かれているけど、そんなに器用な方ではないと思います。魅力があるんですよね、とにかく。</p>
            <p>でも、この前のバウ<strong>「Icarus」の作家役</strong>は良かったですね。温かい演技を持ち味とするケロちゃんの真骨頂を見た気がしました。芝居ではこれがベストですね。ショーでは<strong>「レ・シェルバン」のヤングジゴロと(その後の場面の)ジゴロ</strong>。ＪＩＭＭＹお気に入りの、キザったケロちゃんです（^_^;）。</p>
            <p>結局新公主役が回ってこなかったのは、<strong>時期と組の巡り合わせが悪かった</strong>としか思えませんね（^_^;）。でも、その後の本公演でも予想以上の活躍を見せてくれているし、大人っぽさを持っているだけに、今後どんな男役になってくれるか、非常に楽しみ。皆さんも、雪組をご覧になった際には、<strong>ケロちゃんにご注目あれ</strong>。</p>

            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/05/26 up
            </p>
            <p>
              そんな訳で、きっかけがショーでの<strong>「フェロちゃん</strong>(←フェロモンからまみさん(真琴つばさ)命名)<strong>」っぷり</strong>だったので、<strong>実は芝居が好きだった</strong>というのは、後から気づいた「おまけ」のようなものでした（^_^;）。<br>
              でも芝居好きはショーにも表われていて、<strong>ハートのある舞台姿、そこから醸し出されるムード</strong>のようなものがあって、それが良かったんでしようね。<br>
              反対に、それまで気にした事もなかった<strong>「台詞の上手い下手」</strong>が、他の公演でも気になるようになってしまったのは、ケロちゃんの影響かもしれません（^_^;）。
            </p>
            <p>
              <strong>月組組替え後の活躍</strong>は素晴らしいものがありました。特に<strong>東京「ル・ボレロ・ルージュ」</strong>、<strong>全国ツアー「うたかたの恋」</strong>、<strong>博多「LUNA／BLUE
                MOON BLUE」</strong>等、何度か巡ってきた<strong>代役公演での飛躍</strong>が印象深いです。
            </p>
            <p>
              <strong>バウ主演</strong>はもっと早く回ってくると思っていました。本当は組替え1年後くらいにパッと来ても良かったのではないかと思うのですが、<strong>そうは上手くいかないか・・と控えめに見積もっても</strong>（^_^;）、<strong>丸1年は待たされた</strong>と言って良いと思います。<br>
              待たされたおかげで、<strong>それが目標</strong>みたいになってしまいました。やれると決まった時には、<strong>「何が何でもそれで満足しなければ！」</strong>という気分にまで追い込まれていました（^_^;）。
            </p>
            <p>
              実際、<strong>「血と砂」</strong>は非常に良かったと思います。<br>
              <strong>一人の男性の栄光と堕落をたっぷり演じているケロちゃんを見られた</strong>のは勿論、<strong>椎名葵</strong>ちゃんとの可愛いラブシーン、<strong>西條三恵</strong>ちゃんとの危険なラブシーンは<strong>「フェロちゃん」</strong>の本領発揮。<strong>大空祐飛</strong>ちゃんとの兄弟愛にも、ケロちゃんの<strong>温かい演技</strong>が生きていました。<br>
              さらに、<strong>白いマタドールの衣装</strong>で颯爽と登場してくれたし、<strong>プロローグやフィナーレも文句なくかっこ良かった</strong>し、当分齋藤先生には足を向けて寝られない（^_^;）、と思いましたよ。
            </p>
            <p>でも、もし「血と砂」が原作通り、ちゃんとファン・ガルラード一人が主役になっていたら、あれほど物語を詰め込まずに済んだでしょう。闘牛の世界や、絶頂期の高慢さ、ガラベエトオとの友情、負傷からの復活の過程をもっともっと見せられたでしょう。</p>
            <p>
              ・・でも、これだけ待って、W主演しか回ってこない所が、<strong>「ケロちゃん」</strong>なんですよね（^_^;）！！<br>
              最近私はそう納得する事にしています（^_^;）。
            </p>
            <p>
              月組を見回して、ケロちゃんの方が似合うのではないか？&emsp;という意見も多かった「LUNA」のブライアン、「ガイズ＆ドールズ」のネイサンも、回ってこないのが<strong>「ケロちゃん」</strong>なのです。<br>
              ついでにTCAに出られないのも、パーソナルブックが出ないのも、2年連続卓上カレンダー表紙(しかも今年は真飛聖ちゃんまで加わっている！)なのも、「グラフ」誌の表紙にならないのも、それが<strong>「ケロちゃん」</strong>だからなのです！&emsp;←だんだんヤケクソ。
            </p>
            <p>
              そして、何かスターさんにとっては些細な事が、やっとかなうと、大騒ぎで喜ぶのがケロちゃんファンなのです。<br>
              色々な事で、沢山大喜びさせて頂きましたよ～、ケロちゃん（^_^;）！
            </p>
            <p>
              とりあえず、<strong>「血と砂」</strong>が見られて、私は満足しました。<br>
              雪組で、お芝居好きで、安蘭けいちゃんの下で、ほのぼのがんばっていたケロちゃんを、<strong>「それでは勿体ない！」</strong>とここまで引き上げたのは、<strong>ファン(観客)の声</strong>が大きかったのではないかと思います。<br>
              千秋楽の日には<strong>「ここまでケロちゃんはやってくれたのだから、これから何があっても見守らなくてはならないな。」</strong>と思いました。
            </p>
            <p>
              ケロちゃんは相変わらず波乱万丈ですが（^_^;）、今は心穏やかに見守っていきたいな、と思っています。<br>
              ・・でも、「ガイズ」を観ると<strong>「ケロちゃんがネイサンなら・・」</strong>、「琥珀」を観ると<strong>「ルイなら・・」</strong>、「風共」を観ると<strong>「バトラーなら・・」</strong>、そして「プラハ」なら<strong>「ヘスなら・・（^_^;）」</strong>と想像してしまう私。<br>
              そして、今年の「おとめ」の好きな役に<strong>“「血と砂」のファン・ガルラード”</strong>と書かなかったケロちゃん。
            </p>
            <p>双方、心から穏やかに、満足できる日は訪れるのでしょうか？！</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★★)
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
