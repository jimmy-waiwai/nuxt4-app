<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            彩輝&emsp;直
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/07/24 up
            </p>
            <p>実力がもう少しあれば、見た目はあれだけ<strong>飛び抜けて可愛い</strong>のですから（^_^;）、<strong>もっともっと早くにスターになれていたはず</strong>。でも、星組への組替え以降、何が変わったのか、ぐんとポジションがアップして、<strong>今やすっかり路線に乗ってしまった</strong>感がありますね。</p>
            <p>もともと私は見た目の良い人に弱いので（^_^;）、<strong>好きなタイプ</strong>ではあったのですが、いつまで経っても実力が伴わないので(ゴメン)、月組の頃は、どうも成瀬こうき達後輩に、押されがちでしたね。</p>
            <p>でも、<strong>「二人だけが悪」新公</strong>なんかも、「かっこ良いな～」なんて、<strong>ミーハーモード</strong>で、うっとり見ていたんですよ(<strong>トート</strong>(「エリザベート」より)が見られなかったのは、写真がすごーくキレイだっただけに、残念！！)。<strong>好きなんだけど、トップになるのはまずいんじゃないの？</strong>&emsp;っていう感じ(分かる？)でした。</p>
            <p>今までのベストはやはり、<strong>「夜明けの天使たち」のジョシュア</strong>ですよね。<strong>も、もう妖しかった～、危なかった～（^_^;）、い、いいのかしら、あんなの見ちゃって？！</strong>&emsp;っていうドキドキする美しさでしたね。もう、歌が下手だとか、台詞がはっきりしないとか、そんな部分も全部ひっくるめて、<strong>周囲がほっとけないような、もろい少年像ができていて、すばらしく魅力的</strong>でした。</p>
            <p>そういえば<strong>「誠の群像」の加納君</strong>も<strong>そっち系</strong>だったし(どっちだ（^_^;）?)・・、それ以降、はっきり、さえちゃん(彩輝)の魅力を見つけましたよ！！</p>
            <p><strong>さえちゃんって・・、さえちゃんって・・、とってもエッチです！！&emsp;そこがいーんです（^_^;）。</strong></p>
            <p>そう思って見ると、今回の<strong>「ヘミングウェイ・レビュー」のヘルズ・エンジェル</strong>もとっても妖しいぞ。おとこちゃん(音羽)が近くにいるから「夜明け」がチラつくのも確かだけど（^_^;）、<strong>白猫の扮装でマリコさんの膝の上に抱かれながら、フェイドアウトする寸前にみせるニヤッとした微笑み</strong>なんて、ちょっとゾクッとしますねー。</p>
            <p>しかし、<strong>「ダル・レークの恋」のラジオン</strong>のような役を、基本的技術で見せられないのが、やっぱりつらい。トップになるなら、もう少しなんとかしてくれないと、困ります。</p>
            <p>でも、<strong>「きれいだな～」とドキドキしながら、喜んで見ている自分</strong>です（^_^;）。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
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
