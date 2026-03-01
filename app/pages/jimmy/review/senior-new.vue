<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'moon',
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
            シニョール・ドン・ファン
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              月組大劇場新人公演・4/22
            </p>
            <p><strong>月組新人公演「シニョール ドン・ファン」</strong>観てきました！</p>
            <p>
              レオ・ヴィスコンティの<strong>北翔海莉</strong>。トップスターの<strong>紫吹淳の為に作られたようなこの役</strong>は、新人には(いや、新人でなくても他人には^_^;)難しいだろうと思っていましたが、学年の割には大人びているイメージがあり、「ガイズ～」新公のネイサンを堂々と見せてくれた北翔なら、それなりに悠々とやってしまうのではないか？&emsp;と思っていました。<br>
              しかし<strong>さすがの北翔も若かった</strong>(^_^;)。今回ばかりは、さすがにそう思いました。
            </p>
            <p>
              出だしの記者会見、椅子に座り、サングラスをかけ、低めの良い声でゆったりと話す様子に「おぉっ？！」と思いましたが、サングラスを取ると、見た目は意外な程可愛い。<br>
              髪型は大和悠河のようだと思いましたが、良く似合っていましたし、それも印象が可愛らしくなった一因だと思います。<br>
              まだ研6になったばかりの、しかも中卒の男役さんで、今回が初主役だと思えば、いかにも、いいえ十分しっかりしたものだと思いますが、<strong>予想していたよりは新人らしい舞台だったな</strong>、と思いました。
            </p>
            <p>
              おそらくネイサンの時のように、姿形やしぐさから作らず、台本から感じる気持ちを素直に演じようとしたのではないかな、と思います。芝居からそれが随所に感じられましたし、そう思ってみれば、宝塚らしい甘い二枚目振りではありました。
            </p>
            <p>
              しかし、女性と会話している様子など、誠実そうでとてもドン・ファンには見えませんでしたし(^_^;)、天才少年(また出た・・)でもない限り、あの可愛らしさで世界のトップ・デザイナーというのもあり得ないような気がしました。
            </p>
            <p>
              しかし紫吹を真似て、思いきり形から濃～い男役像を造形しなかったのは、若手の割に、大人の役や、悪役、立ち役の多い北翔としては、ひょっとして将来の為の作戦なのでは？&emsp;という気も、してならないです(^_^;)。北翔自身の作戦ではないにしても、今はそう演っておけば？&emsp;みたいなアドバイスがあったとか・・。<br>
              だから、紫吹を見習って、もっと濃く！&emsp;もっと大人に！&emsp;というのが、今の北翔に良い事なのか・・？&emsp;とも思います。
            </p>
            <p>
              後は、前から感じてはいましたが、<strong>声が良い</strong>のが最大の武器ですね。無理なく男役の声が出ていて気持ち良いですし、今回はとうとうと響く<strong>歌声</strong>にも聞き惚れました。ダンスもしっかり踊れていますし、これからの活躍が楽しみで仕方ありません。
            </p>
            <p>
              お洒落な衣装の数々の着こなしはまだまだ。紫吹のすごさを感じました。化粧なども合わせ、自分をかっこ良く見せようとする意識が欲しいな、というのが、私から見れば最大の課題でしょうか。
            </p>
            <p>
              とりあえず、今はそんな目先の工夫よりも、持っている素材だけで見せている感じ。<strong>何となくまだベストは出し切っていない、目の色が変わっていない</strong>、そんな気がします。<br>
              しかし衣装はモタモタ、髪はクシャクシャでも(^_^;)、その姿と声に、ワクワクするものが見えるんですよね～。今回色々反省しているでしょうし、東京になったら、また変わるかもしれない気がします。
            </p>
            <p>
              長くなりましたm(__)m。後はかけ足でいきます～。<br>
              ジルの<strong>紫城るい</strong>は、悪からず・・。個性のある声が、少し気になりました。<br>
              ロドルフォの<strong>真野すがた</strong>は、背が高くてかっこ良い。歌やお芝居も上手くなってきていると思いますが、もう一息がんばって欲しいです。<br>
              セルジィオは話題の姉妹共演となった<strong>彩那音</strong>。歌はお姉さんより上手いかな(^_^;)。キレイだけれど、ちょっと存在感が薄い。
            </p>
            <p>
              ジョゼッペの<strong>青樹泉</strong>は、パワーは霧矢大夢にかないませんが、まずまず上手くて余裕があって、芝居を締めている感がありました。<br>
              スティーブの<strong>夏芽凛</strong>は、登場から声が良くて好印象。今まで良く知らなかったのですが、上手い人のようです。<br>
              ローサは<strong>城咲あい</strong>。スタイルの良い彼女の、ゴージャスな衣装姿が見られるのが楽しみの一つでしたが(^_^;)、期待通り素敵でした。台詞もしっかり話せていて良かったです。
            </p>
            <p>
              フィリッポの<strong>白鳥かすが</strong>は愛嬌のある見た目が、役に良く合っていると思いました(^_^;)。<br>
              パトリシアの<strong>椎名葵</strong>は、黒人系に変えたビジュアルが良く似合っていて、ムードが出ていました。芝居も上手かったです。
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★<span class="text-gray-400">★★</span>)
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
