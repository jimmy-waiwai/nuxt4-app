<script setup>
definePageMeta({
  title: 'スターの小部屋／8月第2回',
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
            スターの小部屋／8月第2回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/08/24 up)
            </p>
            <p>まず<strong>「浅茅が宿/ラ・ヴィール」よりいしちゃん(轟悠)とぐんちゃん(月影瞳)</strong>のトーク。</p>
            <p>雪組のごんたくれ三男坊(?)だったいしちゃんも(^_^;)、すっかり落ち着いたお姉さんになってしまって・・、ぐんちゃんものびのびしているようで、<strong>良いですよね～、このコンビ</strong>(^_^;)。</p>
            <p>舞台の様子も、ＪＩＭＭＹがうるさく言っているケロちゃんの<strong>「ベサメムーチョ」</strong>も、<strong>DANCE JAZZINの歌の場面</strong>も映って、嬉しかったですわ～。</p>
            <p><strong>こんなんです。雪組公演。良かったら観に行って下さい～。</strong>←広報担当(^_^;)。</p>
            <p>次に<strong>千ほさち退団発表</strong>。現代っ子ねって感じですか？</p>
            <p>そして、<strong>月組大劇場制作発表</strong>。何か、まみちゃん(真琴つばさ)、つるんとしてて(^_^;)、キレイでした～。</p>
            <p>次に<strong>「ブエノスアイレスの風」よりりかちゃん(紫吹淳)と西條三恵と叶千佳</strong>のトーク。りかちゃーん、<strong>おじさん</strong>なんて、言わないで～(^_^;)。でも、本当に<strong>大先輩とヒヨッ子</strong>、という雰囲気で、<strong>りかちゃんも上級生になったんだな～</strong>、と思いました～(^_^;)。</p>
            <p>次に<strong>マリコさん(麻路さき)の大劇場サヨナラ</strong>。<strong>本当に盛り沢山の充実したショーだったんですね～</strong>。これだけ見せて頂ければ、マリコさんファンも満足なのではないでしょうか？もう、マリコさんの舞台は最初から全部観た、って感じなんで、感慨深いです。<strong>立派に期待通り頂点に立って、堂々と男役を極めたマリコさん</strong>。やっぱりすごいですよね～。長～い歴史を感じます・・。古き良き時代の終わりと、<strong>苦しい新時代の始まり</strong>(^_^;)を感じますね、今。</p>
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
