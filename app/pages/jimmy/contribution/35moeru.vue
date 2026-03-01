<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            星組バウホール公演「燃える愛の翼」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              私にとっては初登場となった「サタディナイト・ロマンス」公演評(？)がこの高声低声欄に載ってから一年半余、早くも稔幸二度目のバウホール主演を見ることができた。
            </p>
            <p>
              「燃える愛の翼」は、主役マリオとミリアムの恋、昔の恋人アンジェラとその恋人ラファエル、そして実の両親の秘密にギャングの縄張り争い、そしてそれら人間の世界を見下ろす天使の存在と、盛り沢山の内容で見ごたえ十分。一幕からどんどん作品の世界に引き込まれるが、結末が驚く程平淡に収まってしまったのだけが残念。
            </p>
            <p>
              「稔幸がこんなにステキな人だったとは！」とその時こんな書き始め方をしたのだが、今回又、そう思いなおす事になってしまった。あれ以来星組には稔以下、真織由季、絵麻緒ゆう、神田智と一学年づつ多くのスターがひしめいているが、失礼ながらパッと目立つ人がいないな、という印象を持っていたのだ。しかし、流れるような身のこなしはもちろん、多くの歌も良く聞かせる文句ない出来に加え、前回よりも堂々とした風格のようなものまで感じ、その安定感に再び舌を巻いた始末。あの時三番手の位置についたばかりだった彼女も、紫苑ゆう退団後、今や二番手になろうとしているが、今の所、麻路さきに続くのは稔以外には考えられない。
            </p>
            <p>
              八十周年記念ＣＤのメンバーに入っていたのを知っていた位で、後は全くの未知数だった羽純るいも、純粋な娘を初々しさで見せ、歌は流石に上手く抜擢に良く答えた。これからが楽しみ。絵麻緒は今まで見たこともなかったような黒っぽい役で、どうしても幼く見えてしまうが、ダンスは上手い。神田智はぎこちなさはあるものの、美しさと人の良さを出して面白い役所を好演。九城彬も常に稔に付いている役で良く目立ち、力のある所を見せた。朋舞花がかっこ良く、気持ち良く踊れるダンスは見ていて楽しい。万理沙ひとみ、陵あきのはどちらも姿、声共に美しく、役不足だと感じた位。脇役では千秋慎が抜群に上手い。真中ひかる、秋園美緒の歌も良かった。
            </p>
            <p>
              稔幸の活躍に、これからの星組への希望の光が見えたように思われた公演だった。来年の新生星組公演を楽しみに待ちたい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              のるさん(稔幸)に対しては、「ちょっと良くないよなぁ」と思った途端に、バウで見直してしまう、というパターンを繰り返しております(^_^;)。この前の「Elegy
              哀歌」もよかったしね。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
    
  </div>
</template>

<style scoped></style>
