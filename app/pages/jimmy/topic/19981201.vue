<script setup>
definePageMeta({
  title: '12/1のずんちゃん(姿月あさと)トート',
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
            12/1のずんちゃん(姿月あさと)トート
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/01 up)
            </p>
            <p>衝撃のずんちゃんトート初見(11/14)から17日（^_^;）。再び宙組「エリザ」観て来ました！！</p>

            <p>予想通りずんちゃんトートは<strong>日々進化中</strong>のようです（^_^;）。</p>
            <p><strong>「男性的な攻めるトート」</strong>という基本コンセプトは変わりません。でも、あくまでも恐ろしく、一貫して「悪役」に見えた初見時よりも、<strong>「エリザベートを求めている度」が目に見えて強まり、感情のぐらつきの表現が豊かになっていました。</strong></p>
            <p>特に、シシィの居室の場。エリザベートに拒絶された時には、<strong>驚き、悔しさのようなものが、はっきりと見えました。</strong>そして部屋を出る際、ドアを荒々しく閉め、一瞬天を煽ぐ姿には<strong>切なささえ感じられました。</strong></p>
            <p>それから葬儀の場の後の「愛と死の輪舞」。<strong>ここで一気に、今まで押さえていたエリザベートへの思いを爆発させていますね。荒々しく悶える（^_^;）様が、ずんちゃんトートらしくて良いです。</strong></p>
            <p>今回のずんちゃんトートの見せ場となっているのは、この二場面だと思うのです。イチロバージョンの時は、特にポイントだとも思わなかったのですが・・。キャラクターが違うので、見せ場も違ってくるのでしょうね。</p>
            <p>そして、注目の最後（^_^;）、エリザベートがトートの胸に飛び込んだのを受けて、<strong>はっきりと感激していました</strong>（^_^;）。おいおい、初見時の私の驚きは一体・・（^_^;）。<strong>でもやはりここは感激してくれなくっちゃ、共感できないですよね</strong>（^_^;）。</p>
            <p>とにかく全身全霊で<strong>激しくエリザベートを求め続けるトート</strong>・・。死神にこんな表現は失礼かもしれませんが、めちゃ良い男だわ～(*^｡^*)。</p>
            <p>ようやく気持ちの余裕も見え、<strong>ムードが出てきたのも収穫</strong>。初見時、ひたすら恐く見えたのは、このような抜く部分がなかったからかも。</p>
            <p>一体ずんちゃんトートは、このままどこへ行ってしまうのか・・、行き着く先はどんなトートなのか・・。少なくとも、<strong>初見時の「悪役」で終わってしまう事はないような気がしてきました。</strong></p>
            <p>12/12にラスト見ます。又、報告しますので、お楽しみに（^_^;）。</p>
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
