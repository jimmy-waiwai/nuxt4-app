<script setup>
definePageMeta({
  title: 'スターの小部屋/7月第1回',
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
            スターの小部屋/7月第1回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/07/06 up)
            </p>
            <p><strong>マリコさん(麻路さき)、ノルさん(稔幸)、ぶんちゃん(絵麻緒ゆう)</strong>のトーク。マリコさんのお人柄が出て、和気あいあいとした雰囲気が良いですね～(^_^;)。<strong>上っ面だけでなく</strong>、「四文字熟語が多い」とか、「男の時代がすごい」とか、「名物のリフト」とか、「(ブリッジがあることに関して)体が堅いのにね～」とか(^_^;)、面白いことを一杯話してくれる<strong>サービス精神</strong>が嬉しいです(^_^;)。</p>
            <p><strong>千秋慎と万理沙ひとみ</strong>のトークでは、しっかり考えを伝えて下さる千秋さんが、<strong>知的でかっこ良いなー</strong>と思いました。</p>
            <p>そして！<strong>ミキちゃん(真矢みき)のサヨナラショー</strong>も一部放映してくれて、いつもながら感謝、感謝！！</p>
            <p><strong>話題の千秋楽のアドリブ</strong>も少し見られたし、<strong>懐かしい歌</strong>の数々も聞けたし、嬉しかったです～(^_^;)。</p>
            <p>楽屋入りのワゴン(荷台？)は、イチロさん(一路真輝)のサヨナラを思い出しました(^_^;)。でも、<strong>何故あそこで皆は「ビューティフル・サンデー」を歌ったんだろう?</strong>誰かご存じの方、教えて下さい(^_^;)。</p>
            <p>全てが感動的でしたが、中でも<strong>終演後の記者会見</strong>。</p>
            <p><strong>「早くトップになるのが良いことだと言われるが、私の場合、長くできて良かった」</strong>等、決して平淡な道のりでのトップ就任ではなかったミキちゃんの、現実を冷静にズバズバ語ってくれた内容が、<strong>すごーく、重かった。</strong></p>
            <p>待たされて、待たされて、結局18年も舞台を勤めたミキちゃん。中卒で若かったとはいえ、<strong>最後まで衰えることなく、上昇しつづけた事、ここまで独自の男役像を極められた事</strong>、本当に立派だったと思います。</p>
            <p>特別ファンではありませんでしたが、ミキちゃんのサヨナラは、<strong>簡単にトップになった人のものよりも、ずーっと、感動的でした・・。</strong></p>
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
