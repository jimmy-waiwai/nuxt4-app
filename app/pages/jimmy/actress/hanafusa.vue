<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            花總 まり
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>現在のみならず、今まで見たどの娘役よりも素晴らしいと思うのが花ちゃんです。</p>
            <p>初めて認識したのは、もちろん<strong>「白夜伝説」のミーミル</strong>。可愛いし、スタイル良いし、上手いし、最初から文句なかったですね。<strong>「うたかたの恋」新公のマリー</strong>も、このまま本公演でも演れそうなくらい、上手でした。</p>
            <p>イチロさんの相手役として雪組に組替え。ともちゃん(紫とも)のサヨナラ公演で、じゅんちゃん(純名里沙)を押しのけての臆面ない抜擢には、風当たりも強かったけど、私は元々彼女の実力を認めていたので、応援派でした。</p>
            <p>バウ<strong>「二人だけの戦場」のライラ</strong>も良かったですね。彼女のおかげで、イチロさん自身、包容力が出たように見えて、<strong>花ちゃんが相手役として現れてくれたイチロさんの強運</strong>に、感謝したものでした（^_^;）。</p>
            <p>そして、これまた大好きなずんちゃん(姿月あさと)との「有り得なかった」コンビ実現！ <strong>私がハマった二大トップスターと組んでしまう花ちゃん</strong>には、何か不思議な巡り合わせの様なものまで、感じてしまいます。</p>
            <p>次は思い出の<strong>「エリザベート」</strong>ですね。雪組初演に並々ならぬ思い入れがある私としては、いくらずんちゃん＆はなちゃんコンビとはいえ、ちょっと乗れないものがあるのですが、花ちゃんのエリザベートが再び見られるのは楽しみです。後は、<strong>このゴールデンコンビがなるべく長く続いてくれることを祈るばかり</strong>です（^_^;）。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★★)
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
