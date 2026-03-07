<script setup>
definePageMeta({
  title: '真琴つばさビデオシアター観ました',
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
            真琴つばさビデオシアター観ました
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/04/02 up)
            </p>
            <p>ビデオシアター観てきました。毎回笑える題名なのですが・・今回、覚えておくように意識するのを忘れていたので、書けなくてすみません(^_^;)。確かに笑える題名だったのですが(^_^;)。</p>
            <p>いつもと違って、今回の公演を稽古中の<strong>まみさん(真琴)</strong>が、以前行われたアンケート用紙に書かれていたファンからの質問に答える、というトークがかなり入っていて、楽しい内容でした。秘かに<strong>稽古中のケロちゃん</strong>がいっぱい映っていたのですが(^_^;)、その<strong>お稽古着姿がとっても可愛かった</strong>です～。もっと早くに観て、ファンの方にお知らせするのだった～と思いました(^_^;)。</p>
            <p>映像の方は<strong>「ディーン」、「ル・グラン・モーヌ」、「夢の10セント銀貨」</strong>からの貴重映像がありました。どれも若くて・・顔が今と違いますね(^_^;)。「ル・グラン～」は<strong>二幕の詩乃優花とのラブシーン</strong>が嬉しかったです。あのシーンの前に<strong>タバコを吸う</strong>演技があったのですが、それがすごくかっこ良くて、サマになっていたのを思い出しました。「夢の～」からは虫を食べたエピソードをバラされる場面もあったのですが、確かその後<strong>「カスターは虫を食べる～」</strong>っていう歌を皆で歌うシーンがあって(^_^;)、かなり強烈だったので、今でもその部分だけメロディまで覚えているんですよ(^_^;)。</p>
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
