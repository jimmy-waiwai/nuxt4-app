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
            星奈 優里
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/07/22 up
            </p>
            <p>初めて認識したのは<strong>「紫禁城の落日」新人公演の浩</strong>(本役・白城あやか)。キレイだし、上手いと思いました。</p>
            <p>その後、新公、バウホール共、数々のヒロインを経験しましたが、純名里沙の花組トップ就任による、月影瞳の星組移動により、雪組へとスライド(と言ってしまっても良いだろう・・)。この時点で、学年下の花總まりが既にトップの状態だったから、もうだめかと思われました。</p>
            <p>でも、雪組でぐんぐん魅力を増して、とうとうマリコさん(麻路さき)の相手役として、星組へ復帰。</p>
            <p>いくらトップと互角の魅力があっても、娘役のトップ就任は運とタイミングが必要。私も、組替えが決まるまでは、こうしてユリちゃん(星奈)がトップになって活躍できるとは、(願ってましたが)思いもしませんでした。本当に、良かったですよね(^_^;)。</p>
            <p><strong>今ではすっかり頼もしいトップ娘役として、舞台を引っ張っている</strong>、と言っても良いでしょう。</p>
            <p>何と言っても、<strong>スタイルと、動きが、美しいですよね～</strong>(^_^;)。</p>
            <p>今回のショー<strong>「ヘミングウェイ・レヴュー」の「イタリア」</strong>なんて、シンプルな衣装がすごくカッコ良いし、動きがキレイだし、突然悪魔の様に変身してしまう所の、恐さ、妖しさなんかも(^_^;)、もうピッタリです！！</p>
            <p>芝居でのベストは<strong>「ＪＦＫ」のマリリン・モンロー</strong>(^_^;)。あの背中の芝居といい、派手な外見といい、ハマッてましたよね～(^_^;)。</p>
            <p>ショーでは、前述のイタリアも良かったし、<strong>「マ・ベル・エトワール」コットンクラブの歌手</strong>とか、<strong>「ダル・レイクの恋」フィナーレの踊り曼陀羅</strong>とか・・、<strong>大体いつもかっこ良いので決めにくい</strong>のですが(^_^;)。</p>
            <p>大人っぽくて、スタイルが良くて、お似合いのコンビだったマリコさんとのコンビが2作で終わってしまうのは残念ですが、<strong>ちょっとそこらの可愛いだけの娘役(^_^;)には真似できない、ダンス力と、スタイルの良さ、色気は貴重です！！</strong>　まだまだ、活躍して欲しいですね。</p>
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
