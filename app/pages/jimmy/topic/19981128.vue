<script setup>
definePageMeta({
  title: 'スターの小部屋/11月第二回',
  layout: 'jimmy',
  team: 'topics',
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
            スターの小部屋/11月第二回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/11/28 up)
            </p>
            <p><strong>●「エリザベート」より、ずんちゃん(姿月あさと)と花ちゃん(花總まり)のトーク</strong></p>
            <p>ずんちゃんが<strong>花ちゃんのエリザベートのファン</strong>だった、という話、お愛想ではなく、本当に本当だったんですね～(^_^;)。「近くで見られて嬉しい」と語るずんちゃん・・、<strong>それにしては、エリザベートに対して、恐かったぞ～</strong>(^_^;)。「死とはいっても、感情がない訳ではないと思う」というずんちゃんの話と、私が実際舞台で感じた「ずんちゃんトート＝めちゃかっこ良い悪役」論とは、ちょっぴりズレを感じましたが、それも予想通り(^_^;)。どうも、<strong>本人の作戦ではなく、出てしまったキャラクター</strong>のような気がするんですよね(^_^;)。</p>
            <p><strong>●花組地方公演より、タモさん(愛華みれ)とチャーリー(匠ひびき)のトーク</strong></p>
            <p><strong>トップスターのタモさんと二番手のチャーリーを初めて見ました～</strong>！！感慨深いですね～(^_^;)。</p>
            <p>二人ともキレイだけど、とっても細くないですか？そんなに「サザン～」はキツイのでしょうか(^_^;)？地方で、美味しいもの、沢山食べてきて下さいね(^_^;)。<strong>二人ともすごく張り切っているようで、新生花組、とっても楽しみになってきました～</strong>(^_^;)。</p>
            <p><strong>●「皇帝」新公より音羽椋、朝澄けい、真飛聖のトーク</strong></p>
            <p>本公演時に秋園美緒のトークがあったので、羽純るいがメンバーに入るのかな・・、と思ってましたが、このメンバーで来ますか(^_^;)。出ましたね(^_^;)～、<strong>舞台とは別人28号のおとこちゃん</strong>(音羽)。頼りなげで・・、笑ってしまいます(^_^;)。新公での挨拶も、かわいいっ(^_^;)。</p>
            <p><strong>●マリコさん(麻路)のラストデイ</strong></p>
            <p>千秋楽での<strong>ますます堂々としたマリコさんの男役姿</strong>・・、あ～、ありがとうございます～ＷＯＷＯＷ様！！<strong>最後まで、かっこ良いまま、通されたんですね～、マリコさん素晴らしいです～。</strong></p>
            <p>退団の挨拶で「嫁に行きます」宣言をされたんですね、びっくり！！一生残る映像の前で言ってしまったからには(^_^;)、絶対幸せになって下さいね！！</p>
            <p><strong>●月組バウホール予告</strong></p>
            <p><strong>タニちゃん(大和悠河)楽しそう！！</strong>良いですね～。若手中心の植田景子先生のバウ、とっても楽しみにしているんですよ(^_^;)。</p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyTopicsList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyTopicsList />
    </div>
  </div>
</template>

<style scoped></style>
