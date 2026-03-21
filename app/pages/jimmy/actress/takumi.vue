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
            匠 ひびき
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>彼女は結構応援歴長いんです（^_^;）。初めて意識したのは<strong>「ヴェネチアの紋章」新人公演のヴィットリオ</strong>(本役・真矢みき)。母が目を付けていて（^_^;）、教えてもらったのですが、カッコ良くて、声も良くて、いいなー、と思ったんです。<strong>目がイチロさんに、ちょっと似ている</strong>所も、心動かされました（^_^;）。</p>
            <p>後、決め手は<strong>「ジャンクション・２４」のチャーリー</strong>。あの<strong>跳躍</strong>に惚れました（^_^;）。その後「スパルタカス」の新人公演もファンモードで見てました。フィナーレの歌を思いっきりハズして、ずっこけた思い出もありますが（^_^;）。</p>
            <p><strong>硬派な少年ぽさと、シャープなダンス</strong>が魅力で、特にダンス場面でのカッコ良さでは、他の追随を許さないものがあると思います。同じダンサーでも、りかちゃん(紫吹淳)とは全然タイプが違います。</p>
            <p>すごく良いものを持っているだけに、最近ちょっと精彩がないのが残念ですが、まだまだこれから大化けすると私は期待しております。</p>

            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/04/30 up
            </p>
            <p>
              <strong>「硬派な少年ぽさと、シャープなダンスが魅力」</strong>なのは変わりませんね。<br>
              大化け・・したと言えば、今のサヨナラ公演になってやっと・・とも見えますが、<strong>結局チャーリー自身は、特に変わっていないのではないかな</strong>、と思います。<br>
              <strong>最大に魅力が生かされたのが、「琥珀色の雨にぬれて／Cocktail」だった</strong>のではないかな、と。
            </p>
            <p>
              やっぱり<strong>トップになって、ダンスの花組にならなければ、輝かなかった人</strong>なのかな、と思います。<br>
              専科として、二番手として、芝居を支えるような人でないのは明らかです（^_^;）。<br>
              反対に、ダンス中心のショー、<strong>「Cocktail」</strong>のチャーリーは、二番手の頃が嘘のように、頼もしかった。<br>
              若手の頃のチャーリーが良かったのは、<strong>トップスターがダンサーで、ショーがダンス中心で、チャーリーの良さが発揮されていたから</strong>、とも言えるのではないでしょうか。<br>
              <strong>ダンスで見せるあの魅力は、他人には代え難い</strong>です。
            </p>
            <p>
              更に<strong>「琥珀」のクロード</strong>は純粋な青年で、これまた他人には代え難い魅力を発揮してくれました。<br>
              芝居の点でも、出来ない役もありますが、<strong>トップとして役をちゃんと当ててくれれば、いくらでもまだまだできる作品があった</strong>と思います。<br>
              つくづく、<strong>トップとしての期間が短かったのが残念</strong>です。もっと若いうちに、長くできていれば、ショーの楽しさ、チャーリーの美しさ、可愛い魅力で、花組の人気も増したでしょうに・・。
            </p>
            <p>
              本当に、大劇場の「琥珀＆Cocktail」を観ると、<strong>もっともっとこの体制の花組で、公演が観たかった</strong>と思いました。<br>
              でも、とりあえず、<strong>「Cocktail」を観られて良かった</strong>です。やはりこのショーは、チャーリーのトップがこれ一作だったからこそ実現した、奇跡の作品でしょう。なかなか、私の中で、このショーを越える作品は出ないと思います。
            </p>
            <p><strong>自分の中での金字塔と言える</strong>ショーが、やっとできました。きっと、これから先、<strong>「Cocktail」</strong>は何度も何度も繰り返して、ビデオで観る事でしょう。</p>
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
