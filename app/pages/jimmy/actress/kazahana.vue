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
            風花　舞
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/26 up
            </p>
            <p>初めて認識したのは、もちろん初舞台の<strong>「ベルサイユのばら」戴冠式のバレエ</strong>です。</p>
            <p>あと、<strong>ニューヨーク公演</strong>でちょっと芯で踊っている場面がありましたよね。あれも<strong>上手くて感心</strong>しました(チラッと画面で見ただけですが)。</p>
            <p><strong>「グランドホテル」新公のフラムシェン</strong>も良かったですね。当時の感覚からすると、正統派路線からはかけ離れたパンチ力と、ドライな所があったので、評判は賛否両論でしたが、私はかっこ良くて、大好きでした。</p>
            <p>おとなしい役所は苦手かなと思っていたのですが、<strong>「風と共に去りぬ」新公のメラニー</strong>も感心する出来映えで、上手い人だなぁ、と私の中で、ますます評価が高くなりました(^_^;)。</p>
            <p>
              芝居でのベストは<strong>「ＣＡＮＣＡＮ」のピスタッシュ</strong>。清純なお姫様も、情感のある芝居もこなせる実力派ですが、<strong>何といってもキビキビした気持ち良い役が良い</strong>です！！
              最近あまり見られないのが残念ですね。
            </p>
            <p>書き遅れましたが、勿論ショーでの爽快さも抜群ですよね(^_^;)！！</p>
            <p>印象的なシーンは、<strong>「ミリオン・ドリームズ」のドリーム・ダンサー</strong>とか、<strong>「グランド・ベル・フォリー」のル・ジャズ・ブランシュ</strong>とか、<strong>「Alas」のタンゴクラブ</strong>とか。やっぱり、<strong>かっこ良く、パシッと決めているときのゆうこちゃん</strong>(風花舞)が最高ですよね～。</p>
            <p>次公演で、いよいよ退団ですね。</p>
            <p>意外と大劇場公演では当たり役が少ない気がするので、今度の役、良い役であって欲しいです。久しぶりのショーにも期待です(^_^;)。</p>
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
