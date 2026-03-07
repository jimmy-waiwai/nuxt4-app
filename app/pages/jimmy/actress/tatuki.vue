<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            立樹　遥
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/09/16 up
            </p>
            <p>雪組公演を一番良く見る私にとって(^_^;)、<strong>ラインダンスで常に中央付近で、一際華やかな顔立で目に付いていたのがしいちゃん</strong>(立樹)でした。で、何となく名前を覚えていた所、どかーんと来たのが<strong>「ラ・ジュネス」のヒトデ役</strong>(^_^;)。「あっ、あの人だ～」と母に教えた所、母もすっかり気に入ってしまい(^_^;)、以来、我が家では<strong>「ヒトデＡちゃん」</strong>(2人いたので・・、Ｂは現宙組の光海さんです(^_^;))と呼ばれて親しまれていました。</p>
            <p>はじめて意識して声を聞いたのが<strong>「仮面のロマネスク」新公のロベール</strong>。執事役だったのですが、すごーく爽やかで、台詞もしっかりしていて、<strong>「見た目だけじゃなく、イケるかも！！」</strong>と、期待を持ちました(^_^;)。これ以降、ちょっとづつ役が付くようになってきましたね。</p>
            <p>で、今回の<strong>「ラ・ヴィール」ロケットボーイ</strong>の大躍進です(^_^;)。正直、注目していましたが、実績が実績なので、<strong>今更ここまで、彼女がスターダムにのし上がってくるとは、思っていませんでした</strong>(^_^;)。</p>
            <p>彼女の良い点は、何と言っても最近のアイドル系男役には珍しく、<strong>歌と台詞の声が良い所</strong>(雪組のホープはそういう人が多いけれど)。<strong>「浅茅が宿」新公の曾次郎</strong>も、本役たーたん(香寿たつき)が歌う多くのナンバーを、まずまず良く歌い切ったのには感動しました(^_^;)。ただし、ロケットボーイでご覧の通り、ダンスはまだちょっとバタバタしていますね(^_^;)。</p>
            <p>キレイだけど、歌や台詞に難ありのホープが本当に多い昨今(^_^;)、遅咲きではありますが、<strong>彼女にはとっても期待しております</strong>(^_^;)。後は、いつも爽やかなので(^_^;)、<strong>ちょっとニヒルにキザッた所も見たいですね、そろそろ</strong>(^_^;)。</p>
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
