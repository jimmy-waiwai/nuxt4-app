<script setup>
definePageMeta({
  title: '９８年度総轄',
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
            ９８年度総轄
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/02 up)
            </p>
            <p>普通、その年の総轄は年内にするものですが・・(^_^;)。<strong>９８年度ＪＩＭＭＹのお気に入り作品</strong>を発表しましょう！！←想像できる(^_^;)？</p>
            <p>
              <strong>＜大劇場公演＞</strong><br>
              「春櫻賦／Let's JAZZ」「WEST SIDE STORY」「エクスカリバー／シトラスの風」「SPEAKEASY／スナイパー」「皇帝／ヘミングウェイ・レビュー」「浅茅が宿／ラ・ヴィール」「黒い瞳／ル・ボレロ・ルージュ」「エリザベート」
            </p>
            <p><strong>お気に入り作品は「黒い瞳」次点は「エクスカリバー」</strong></p>
            <p><strong>「黒い瞳」</strong>は良く出来てましたね～。<strong>謝先生</strong>とのコンビの成功は、<strong>柴田作品</strong>ファンにとって嬉しい出来事でした。これからも柴田作品が見られるかもしれない、との希望がもてますから(^_^;)。次点は<strong>「エクスカリバー」</strong>。楽しい話で・・、良かったじゃないですか(^_^;)。<strong>後は・・ちょっとね～</strong>(^_^;)。</p>
            <p><strong>お気に入りショーは「Let's JAZZ」次点は「ヘミングウェイ・レビュー」</strong></p>
            <p><strong>草野先生</strong>大当たりの年でしたね(^_^;)。ノリノリショーシリーズ(と、今ＪＩＭＭＹが名付けました)、これからも期待したいです。</p>
            <p>
              <strong>＜バウ・ドラマシティ公演＞</strong><br>
              「夜明けの天使たち」「Icarus」「ヴェロニック」「ディーン」「心中・恋の大和路」「ブエノスアイレスの風」「イコンの誘惑」「バウ・ボヤージュ！」「The
              Fiction」「凍てついた明日」「Endress Love」「シンデレラ・ロック」「聖夜物語」(見られなかった作品は除きました)
            </p>
            <p><strong>お気に入りは「Icarus」次点は「夜明けの天使たち」「心中・恋の大和路」「ブエノスアイレスの風」「イコンの誘惑」「凍てついた明日」「シンデレラ・ロック」</strong></p>
            <p><strong>「Icarus」</strong>大好きでした～(^_^;)。心に深～く訴えてくる作品で・・ハマりましたね～。次点は・・多くてすみません(^_^;)。でも、こうして見ても、大劇場公演に比べて(^_^;)、<strong>バウは充実した良い一年でした</strong>ね～。<strong>植田景子先生、荻田先生</strong>という素晴らしい新人がデビューし、<strong>一時壊滅状態だった演出家陣に新しい光明が見えてきた</strong>素晴らしい年でした。<strong>「ヴェロニック」「ディーン」</strong>も良かったですよ。</p>
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
