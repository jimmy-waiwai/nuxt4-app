<script setup>
definePageMeta({
  title: 'ずんちゃんトートに殺されました(^_^;)',
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
            ずんちゃんトートに殺されました(^_^;)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/11/15 up)
            </p>
            <p><strong>恐いっ、これじゃまるで悪役だよ！！</strong>と、ずっと思いながら見ていました。でも、</p>
            <p><strong>「そんな貴方にfall in love。私を黄泉の世界へ連れていって(*^｡^*)～」</strong>って、気分です、今(^_^;)。←毎度、バカで、すみませんね～(^_^;)。</p>
            <p><strong>「めちゃくちゃかっこ良い悪役」</strong>これが、私が感じたずんちゃんトートです。これも一つの答えではないでしょうか？</p>
            <p>初演雪組エリザがチラついて、苦しくなることも、殆どありませんでした。あまりにも違いすぎたので・・。</p>
            <p>宙組エリザをご覧になった方、一度、雪組のビデオを見て頂きたいですね。どちらが好きかはお好み次第ですが(^_^;)、<strong>トートが全然違う</strong>、というのは分かって頂けると思いますよ。</p>
            <p>ＪＩＭＭＹがどちらが好きか・・、聞きたいですか(^_^;)？</p>
            <p><strong>やっぱりトートは、イチロさんですよ</strong>(^_^;)。特別なんです、どうしても(^_^;)。</p>
            <p>でも、<strong>ずんちゃん本当に良くやったよ！！ やっぱり貴方はすごい人だわ！！</strong></p>
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
