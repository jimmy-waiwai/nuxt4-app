<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            安城　志紀
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/06/29 up
            </p>
            <p><strong>しきこちゃん(安城志紀)</strong>の初認識は、<strong>雪組「エンカレッジ・コンサート」</strong>。一部は<strong>「万朶の桜」</strong>を重厚に、そして二部では<strong>「Time to say goodbye」</strong>を<strong>女声</strong>で歌っていました。<strong>「今すぐドレスを着せて本公演で歌わせてあげたい」</strong>と書いたのを覚えています。しかしその時の印象は、<strong>歌の上手い、ごっつい若手男役さん</strong>でした(^_^;)。</p>
            <p>
              次に浮かぶのはショーの<strong>「ON THE 5th」</strong>。プロローグの<strong>ウェルカムダンサー</strong>の中で、<strong>唯一顔と名前が一致しなかったのが安城志紀</strong>。消去法で名前を覚えました(^_^;)。<br>
              <strong>「ゆうかちゃん(椿火呂花)のように綺麗な人だな～。」</strong>と。<strong>思ったより小柄で線が細く</strong>、「エンカレッジ」の時とは随分印象が違いましたね。
            </p>
            <p>
              続いてヒットしたのが<strong>全国ツアーの「再会」</strong>。風早優が演っていた<strong>カメラ小僧(?)の観光客</strong>の役を、<strong>長髪オタク系青年</strong>として思い切り良く演っていて、しかもその長髪姿が<strong>なかなかの美形だった</strong>のがポイント高(^_^;)。<br>
              以来、「Joyful!」でもバックで踊っている<strong>秘かに美形なしきこちゃん</strong>を、良く目で追っていました。
            </p>
            <p>
              <strong>もう一度、歌を聞いてみたいなぁ・・できれば本公演で</strong>。<br>
              秘かにポイント高いしきこちゃんの、これからの活躍に期待しています。
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
