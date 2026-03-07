<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            遠野あすか
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/04/30 up
            </p>

            <p>
              <strong>あすかちゃん(遠野あすか)</strong>、いきま～す!
            </p>

            <p>
              初認識はもちろん、ドラマシティ公演<strong>「Crossroad」</strong>。研2になったばかりでのヒロイン抜擢でしたが、正塚先生らしい等身大ヒロイン役でしたし、悪くはなかったと思います。ただ、見た目が個性的で、<strong>これからキレイになるのかな～?</strong>　という所でした。<br>
              その印象が変わったのは、<strong>「砂漠の黒薔薇」新人公演</strong>。ヒロインのマリヤーナ姫のあすかちゃんは、その頃よりも随分スッキリして、スタイルが良く、とても華やかでキレイだと思いました。
            </p>

            <p>
              以降は、割と安心して、いつも期待を持って見ていますし、その期待を裏切られる事もなかったと思います。<br>
              外部出演<strong>「シンデレラ」</strong>のタイトルロールに抜擢されたのも納得ですし、実際の出来にも十分満足でした。<br>
              以降は、<strong>「NAKED CITY」</strong>のデイジー、<strong>「La Esperanza」</strong>のフラスキータ、<strong>「マラケシュ・紅の墓標」</strong>のイヴェット・・と、並べてみると、華やかな役続きですね。<strong>ちょっと突っ張った美人</strong>(フラスキータはそうでもないけれど)、という役所がとても似合うし、見ていてかっこ良くて好きです。
            </p>

            <p>
              今、とてもキレイになって輝いているし、早くトップになって欲しいと思う娘役さんの一人ですね。<br>
              彼女の華やかさと奔放さを、そのまま包み込めるくらいの度量のある男役さんと、組んで欲しいです。
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
