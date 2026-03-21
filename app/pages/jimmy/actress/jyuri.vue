<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sonota',
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
            樹里 咲穂
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/10/24 up
            </p>
            <p>そんな方、多いと思いますが、<strong>私も最近じゅり(樹里)さん、大好きなんですよ～</strong>（^_^;）。</p>
            <p>新人の頃から、まあまあ新公など良い役で目立っていたのですが、どうも美しいなるちゃん(成瀬こうき)や、さえちゃん(彩輝直)に目がいきがちで（^_^;）、「上手いんだけど、ちょっと華やかさが足りないかな～」と思っていました。</p>
            <p>それがすっかり変わったのが<strong>「バロンの末裔」の新公</strong>。まみさん(真琴つばさ)の役だったのですが、<strong>プロローグの登場の時の笑顔で、ぱっと舞台が明るくなったのがすごく印象的でした</strong>。<strong>なんか華やかになってきて、良くなったな～</strong>、と思いましたね。私の中で、じゅりさん値がなるちゃん値を越えた瞬間でした(今はどちらも良いけど（^_^;）)。</p>
            <p>そして、<strong>アニタ</strong>ですよね～（^_^;）。<strong>「WEST SIDE STORY」</strong>の公演自体は、配役が役者に合っていなくて嫌い(おいおい)だったのですが、そんな中、主な配役の中で、唯一すばらしい出来だったのが彼女のアニタでした。<strong>男役ならではの押し出しの強さ</strong>、素晴らしかったですね。</p>
            <p>そしてその後の<strong>「ブエノスアイレスの風」のリカルド</strong>。これも<strong>ニの線で、すごくかっこ良かった</strong>です。今までのベストですね。</p>
            <p><strong>宙組</strong>では確実に、<strong>湖月わたるの次のポジション</strong>で活躍することになるでしょう。でも、姿月あさと、和央ようか、湖月、樹里と、それぞれの学年差はたった一年で詰まっています。上の三人とは売り所(?)が全く違うので、<strong>芝居などでは実力のある所がきっと目立つと思います</strong>。上手く今の華やかさを失わずに、活躍していって欲しいですね。</p>
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
