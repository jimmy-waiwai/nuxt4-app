<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            貴船&emsp;尚
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/07/09 up
            </p>

            <p>
              <strong>きぶなおちゃん(貴船尚)</strong>、いきま～す！<br>
              今月の生徒評は、最新の雪組公演<strong>「霧のミラノ／ワンダーランド」</strong>を観て決めよう！&emsp;という事で、まず選ばせて頂いたのがきぶなおちゃん。<br>
              ちょっと痩せたのかな？&emsp;スッキリして男らしくなったのも良いですし、芝居も親しみやすいキャラクターに磨きがかかって、とても気持ちよく、目立っていました。
            </p>

            <p>
              きぶなおちゃんの初認識は・・おそらく<strong>「エンカレッジ・コンサート」</strong>。<br>
              「アランチャ」「スター・ダスト」という選曲が、かりんちょさん(杜けあき)好きなのかな?&emsp;と思いました。<br>
              確か「スター・ダスト」は原語で歌っていて、<strong>結構キザだった</strong>印象が・・（^_^;）。
            </p>

            <p>
              続いて本公演では、<strong>「猛き黄金の国」</strong>。場違いな討ち入り扮装で出てくるギャグ役は、当時雪組人気の脇役みやこちゃん(風早優)・・かと思っていたら、良く見たら違っていた！&emsp;・・すごく似ている子がいるね～、というのが、私たちの周りで話題になりました。<br>
              以来、<strong>こ(子)みやこちゃん</strong>と、・・先週まで呼んでおりました・・（^_^;）。<br>
              でも、もう、みやこちゃんが退団して随分経ちますものね～。今日からきぶなおちゃんと呼びますね、はい（^_^;）。
            </p>

            <p>
              みやこちゃんに似ていて、若手の頃から、そういうお笑い系、役者系の役が良くついていましたが、最初の頃は「エンカレ」での二枚目な選曲を見ていましたし、実際役に対してのアプローチも大人しめで、<strong>「どうなのかな～？&emsp;本当はこういう役を演りたい訳ではないのではないかな～？」</strong>と思いながら観ていました。<br>
              しかし、そのうち自覚が出たのか、楽しくなってきたのか、<strong>どんどん上手くなってきました</strong>ね。最近は、見る度に、自然に舞台で呼吸ができるようになっているのを感じます。<br>
              「エンカレ」で証明した通り、<strong>実はこっそり歌える</strong>（^_^;）のも強いですよね。「睡れる月」の<strong>宇迦斯</strong>も頼もしかったです。
            </p>

            <p>
              <strong>今や貴重な雪組芝居のムードメーカー</strong>だと思います。雪組にはやっぱり、こういう人が一人はいて欲しい！<br>
              まだ研8のきぶなおちゃんですから、これからの活躍をますます楽しみにしています！
            </p>

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
