<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            宝塚バウホール公演「ＷＡＮＴＥＤ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              正塚晴彦演出、久世星佳主演で面白くない訳が無い！ そんな私を含めた人々の期待を反映してか、連日超満員の観客を集める月組バウホール公演「ＷＡＮＴＥＤ」。シリアスな話ということだったが、意外と明るくカラッとした仕上がりで、気軽に楽しめる秀作だ。
            </p>
            <p>
              男同士の友情、ヒロインの性格等いささか「二人だけの戦場」を思い出させる所はあるものの、今回も「遺跡」という思わぬ題材を取り上げ、独自の作品を作り出す才能に感心。そして特筆すべきは装置の美しさ。白で統一されたセット、闇の中で光る遺跡等、舞台を効果的に盛り上げていた。
            </p>
            <p>
              メンバーは将来楽しみな若手中心で、全体的に伸び伸びとした自由な雰囲気。今回長となった主演の久世も、その中で肩の力を抜いた余裕の演技を見せる。しかし、いかんせん単純な笑いの場面が多く、暗黒街で育った人間の心の荒みや追われることの恐怖、ティナへの思い等を、存分に表現する場が少なかったのは残念。演技派の久世だからこそ、もっと心の底まで感じられるような、彼女が役作りに苦しむような作品をと願うのは贅沢か。ラストの盛り上がりが素晴らしかっただけに、見せ場がそこのみとは少々物足りない。
            </p>
            <p>
              風花舞は動きが美しく、おおらかさを体一杯に表現しており見ていて気持ちが良い。また「たけくらべ」を経て心の微妙な動きも見られる様になり、特に十九場は久世と共に心に迫る感動的な場面となった。
            </p>
            <p>
              姿月あさとも「エールの残照」のラッセル准将を経て男役の強さが増し、暗黒街の男をかっこ良く見せている。出番は少ないが、ニコルが心を許せるただ一人の親友としての存在感があり、ラストは親友をどうしても打てない心の弱さをむしろ喜ぶように、爽快に見せたのが印象的だった。
            </p>
            <p>
              他では、オルタンスの夏河ゆらが肝っ玉母さんを堂々と演じ、その迫力にびっくり。エミリオの美郷真也も下級生とは思えない安定した演技で期待に応えた。成瀬こうきに久しぶりに良い役が付き好演。これからの活躍が楽しみ。イザベルの美原志帆も魅力的で、もっと活躍して欲しい人だ。鷹悠貴、嘉月絵理、一紗まひろも既に安心して見ていられるし、樹里咲穂も人の良さを感じさせ爽やか。祐輝薫の伸びやかなダンスも目に付いた。
            </p>
            <p>
              上級生の不在を感じさせない、安定した上質の舞台だった。久世以下若手メンバーに、大きな拍手を送りたい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              正塚＆久世のゴールデンコンビ復活！
              という期待の大きさに対しては、意外とお手軽な作品になってしまったのが残念でした。今思えば、夏河ゆらの怪演はこれから始まったような気がします(^_^;)。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
    
  </div>
</template>

<style scoped></style>
