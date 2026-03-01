<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'cosmos',
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
            Crossroad
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              宙組・ドラマシティ公演・５／２～１２
            </p>
            <p>
              一幕が終わった時点では、ちょっと退屈かな・・？&emsp;と心配しましたが、<strong>さすが正塚先生！&emsp;期待を裏切りませんね</strong>。やっぱり感動作で、不覚にも涙、涙でした(^_^;)。
            </p>
            <p>
              プログラムの正塚先生談より<strong>「出演者ありきから始まった」</strong>結果、主演の<strong>和央ようか</strong>に当てられたのは、<strong>アルフォンソ</strong>という、ジプシーに育てられ、街に出てきたばかりの無口な男。ヌボーっとした大きさが、役にすごく合っていました(^_^;)。<strong>デュシャン(樹里咲穂)</strong>に出会ってしまった為に、散々な目にあってしまうのですが、<strong>ぼんやりとついて行ってしまっているだけのようで、周りにしっかりと、頼もしさや優しさを感じさせている</strong>辺り、正塚先生が考えている「ワイルドで素朴でピュア」な和央らしいかっこ良さが出せていたと思います。<strong>人込みに紛れて「お前の事が嫌いじゃない・・」とボソっと言う不器用さ</strong>も、いかにも和央らしくて可愛い(^_^;)。こんな魅力があったんだな～、と、<strong>今まであったようでなかった新しい面</strong>が見られた気がしました。
            </p>
            <p>
              上記の「涙」させられてしまった原因が、<strong>樹里</strong>なんです～(^_^;)。いや～、もう、すごく良かったです！！&emsp;どうしようもなくダメなヒモ男の役なんですが(^_^;)、<strong>持ち前のカラっとした明るさと楽しさ</strong>が役にピッタリで、<strong>ちゃんとシモオン(久路あかり)やヘレナ(遠野あすか)をつかまえられるだけの魅力</strong>もありました。最後に素直にアルフォンソに謝る所、そしてシモオンに来てほしいと、「惚れている」と、アルフォンソにすがる所なんて、<strong>キュ～ンと来てしまいました</strong>(^_^;)。これだけヒモ男を上手く演じられるタカラジェンヌって・・、ちょっと凄いです(^_^;)。
            </p>
            <p>
              宙組って、姿月あさとにしても、湖月わたるにしても、アルフォンソタイプだと思うんですよ。これからも<strong>芝居ではかなり樹里が目立つだろうな</strong>、と期待が持てました。
            </p>
            <p>
              <strong>ヘレナの遠野</strong>は素直な台詞で安心して見ていられました。目鼻立ちがはっきりしていますね。これからどうキレイになっていくか楽しみです。
            </p>
            <p>
              <strong>シモオンの久路</strong>もしっかりと大人の女性が似合っていて、感心しました。
            </p>
            <p>
              後は、<strong>ジプシー仲間の城華阿月</strong>がきっぷの良さを、<strong>達つかさ</strong>が包容力を感じさせて良いコンビ。ダンスにも活躍していました。
            </p>
            <p>
              が、全体的に、若手も含めて<strong>二の線で楽しませてくれる要素が少なくて</strong>(^_^;)、その点ちょっと寂しかったです。フィナーレのダンスはすごくかっこ良かったですが、本編で<strong>歌のソロが少なかったのも寂しい</strong>ですね。ドラマシティ用の作品だから、これでも良いのかもしれませんが・・。そろそろ大劇場で、もっと娯楽性に富んだ正塚作品も観てみたいです。
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
