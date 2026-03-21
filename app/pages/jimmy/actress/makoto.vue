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
            真琴 つばさ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/28 up
            </p>
            <p>いや～、若手時代の事を考えると、<strong>本当に立派なトップスターになりましたよね～</strong>（^_^;）。お見事です！！</p>
            <p><strong>下級生の頃</strong>は、肩幅といい（^_^;）、ちょっとニヒルな雰囲気といい、<strong>本当に男らしい男役でした。「白扇花集」</strong>で、さっちゃん(詩乃優花)を肩に乗せたりなんかした時も（^_^;）、<strong>「さっすがマミちゃん(真琴)！」</strong>って思ってましたもの（^_^;）。</p>
            <p>
              だから、<strong>月組に組替え</strong>後、<strong>「マミさんがスカーレットを演る」</strong>と聞いた時にはびっくりしましたね（^_^;）。さらに<strong>「ME
                AND MY GIRL」のジャッキー</strong>に至っては、<strong>「マミさんがウエディングドレスを？！&emsp;ひえぇぇぇ～」</strong>って感じで、想像しただけで、かなりの間、笑いには不自由しませんでしたよ(失礼^_^;)。
            </p>
            <p>でも、結果的に、この経験がマミさんを大きく変えてしまいましたね。肩の力が抜けて、<strong>すっかり正統派の二枚目さん</strong>になってしまいました。</p>
            <p>印象に残る役は<strong>「ヴェネチアの紋章」新公のアルヴィーゼ</strong>。新公卒業の土壇場でようやく回ってきた主役を、ナーちゃん(大浦みずき)にそっくりではありましたが、立派に勤めて、<strong>「イケるぞ、マミちゃん」</strong>と皆に思わせた舞台でした。</p>
            <p>あと、バウ<strong>「ル・グラン・モーヌ」</strong>は、色濃いイメージを払拭する純白の二枚目振りに感心。逆に<strong>「ローン・ウルフ」</strong>はまさにピッタリの役で（^_^;）、面白かったです。</p>
            <p>ベストは<strong>「ＣＡＮＣＡＮ」のヴィクトール</strong>。洒落ていて、地位もお金もある余裕の裏に、チラッと見える純情さが素晴らしく魅力的で、<strong>「マミさんかっこ良い～」とハマれるに十分</strong>な人物でした（^_^;）。</p>
            <p>しかし、トップになってからは、<strong>「EL DORADO」</strong>といい、<strong>「WEST SIDE STORY」</strong>といい、話題作で、観客も良く入ったけど、<strong>全然マミさんを生かせていない</strong>作品で、はっきり言って、<strong>マミさんを見た気がしません！</strong></p>
            <p>随分正統派にはなってしまいましたが、マミさんの本領はやっぱり<strong>ちょっと影のある大人の役</strong>のはず。そんな役、早く見たいなぁ・・。</p>
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
