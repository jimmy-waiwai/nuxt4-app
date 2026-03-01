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
            紫苑ゆう&emsp;First &amp; Last Recital
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              宝塚大劇場・１２／４
            </p>
            <p>幕が上がると、<strong>「宝塚の紫苑ゆう」そのままのしめさん</strong>がいました。</p>
            <p>
              金髪、お決まりの型のリーゼント。衣装も、黒地にスパンコールのついた、宝塚の衣装部が作ったに違いない(^_^;)男役の形。面差しも驚く程現役の頃と変わらない姿で、しめさんは大階段の中央に立っていました！
            </p>
            <p>
              客席の悲鳴のようなざわめき・・感激で涙が出ました。「好きなスターの一人」という程度のファンではありましたが、懐かしくって、嬉しくって・・自分でも意外でした。
            </p>
            <p>
              内容は代表作のメドレーを主とした、本人も言っていたように「サヨナラショーの豪華版」といった内容。それを当時の台詞付きで歌ってくれるのですから、ファンにはたまりません(^_^;)。表情とか、決めの動きとか、そのまま演ってくれるんですよ！&emsp;歌われた全ての作品を観ているので、当時の舞台が蘇ってきました。
            </p>
            <p>
              共演してくれた<strong>あやかちゃん(白城)</strong>も、すぐにでも現役に戻って欲しいと思う位の宝塚の娘役姿で、「うたかたの恋」や「ワンナイト・ミラージュ」のミルキーウェイのデュエットを再現してくれるなど、予想以上の大サービスで嬉しかったです！(一週間後に月組「うたかたの恋」を観に行く予定の身としては、直前に「元祖」(しめさんも再演なんですが)を観てしまったようで、複雑な気分でした^_^;)
            </p>
            <p>
              宝塚を誰よりも愛しているから、退団後は舞台に立たないといっていたしめさん。<strong>「何処に行った？&emsp;頑ななまでの君のポリシーは！」</strong>とプログラムの本人のメッセージにも書かれていたように、このリサイタルを開くのには相当の葛藤があったそう。私も観るまでは、またしめさんが観られるという喜びと共に、「どうして？」という気持ちもありました。
            </p>
            <p>
              でも<strong>今日の舞台を観ると、全てが納得できます。しめさんが退団時と変わらぬ愛を今でも持ち続けていてくれている事。しめさんの舞台は宝塚以外にはありえないだろう事が。</strong>「時代背景といい、役の雰囲気といい、なぜ私が現役の時にまわって来なかった？！」と冗談めかして、「エリザベート」トートまで見せてくれたりして、本人がやりたい事、ファンが観たい物は、全て盛り込んだであろう全力の舞台であっただけに、これが本当に「First
              &amp; Last Recital」になるかもしれないな、と思いました。
            </p>
            <p>
              <strong>「いいじゃないか。それで幸せになれる人がこの世に一人でも居るのなら」</strong>これもプログラムにあった言葉ですが、<strong>阪神大震災のチャリティ</strong>である事による救済と共に、<strong>しめさんの姿が見たいというファンの心</strong>も、今回の舞台でしめさんは救ってくれました。客席には勉強の為にきっと大勢の現役生徒が観に来るだろうという予想を覆し、客席には生徒は全く(永遠のしめさんファン・のるさん(稔幸)だけいましたが^_^;)いませんでした。ソデや花道で観ていたそうです。これも一人でも多くのファンに・・というしめさんの意志によるもの。<strong>これだけ宝塚とファンを思ってくれるスターのファンは幸せもの</strong>ですね(^_^;)。
            </p>
            <p>
              少なくとも私にとっては、しめさんの男役の美学が壊れるどころか、<strong>ますます良い思い出として昇華できた</strong>今回の舞台でした。しめさん、ありがとう！！
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★★★<span class="text-gray-400" />)
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
