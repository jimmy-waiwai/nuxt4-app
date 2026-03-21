<script setup>
definePageMeta({
  title: 'スターの小部屋/10月第一回',
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
            スターの小部屋/10月第一回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/10/23 up)
            </p>
            <p>まずは<strong>「凍てついた明日」より、たーたん(香寿たつき)とぐんちゃん(月影瞳)</strong>のトーク。物語が深いだけあって、話している内容も深い（^_^;）。<strong>ぐんちゃんを始め、小数精鋭の今回のメンバーだから、安心していろいろ言える、というたーたんのお言葉に納得</strong>でした。ＪＩＭＭＹの大好きな、<strong>ケロちゃん(汐美真帆)のソファーの場面</strong>も放映してくれて、嬉しかった（^_^;）。</p>
            <p>次は久しぶりの<strong>TALK&TALK。寿＆達つかさ姉妹</strong>でした（^_^;）。嬉しいな～。<strong>しっかりものの姉と、大人しそうな妹</strong>、といった感じで、<strong>見た目のイメージ通り</strong>でしたね（^_^;）。正直、すっしー君(寿)が雪組から組替えになってしまった時は、とても残念だったのですが、宙組で姉妹仲良くはりきっていらっしゃるようで、<strong>これからもますます応援したくなりました</strong>（^_^;）。それにしても、背格好は別として（^_^;）、顔は全然似ていませんよね（^_^;）。どちらが父or母似かしら、とか、下らないことを言いながら見てました（^_^;）。</p>
            <p>次は<strong>宝塚舞踊会</strong>。貴重な映像をありがとうございました！！やはりメインは<strong>ぬいぐるみを背負うたーたん(香寿たつき)、チャーリー(匠ひびき)、こうちゃん(汐風幸)ですか</strong>（^_^;）？可愛いわ～（^_^;）。毎年フィナーレは笑いが入るんですよね～（^_^;）。それにしても、<strong>忙しい中、皆様立派</strong>ですわ（^_^;）。</p>
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
