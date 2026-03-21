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
            月影&emsp;瞳
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/26 up
            </p>
            <p>初めて認識したのは、<strong>バウ「ドニエプルの赤いけし」のヨアンナ</strong>。それまで全然知らなかっただけに、<strong>すごーくキレイで、上手くて、堂々としたヒロイン振り</strong>に驚きました。</p>
            <p>同期の純名里沙が歌手として、風花舞がダンサーとして早くから注目される中、<strong>全体的な安定感にあの美貌で、有望度では一番だったのではないでしょうか？</strong></p>
            その後も数々のヒロインを経験。しかし、初めからあまりにも出来過ぎていて、気も強そうで（^_^;）、「良いやん、上手いやん」と私は思っていたのに、<strong>どうも風当たりが強い</strong>（^_^;）。
            <p>星組へ移動になったのは、純名、星奈共々、今思えば明らかにミス。<strong>まぁ、こうでもしなければ、どうしようもない状況</strong>でしたが・・。</p>
            <p>スケールの大きいあやちゃん(白城あやか)の下で、大柄な星組男役たちに囲まれているのは、お人形の様なぐんちゃんにはどうも柄に合わず、<strong>自信満々でキラキラ輝いていた</strong>ぐんちゃん(月影瞳)も、いろいろ頭を打つこともあったようで、<strong>だんだん畏縮して大人しくなっていく</strong>様子に、ハラハラしてました。</p>
            <p>まりこさん(麻路さき)とのコンビも、どう考えても「星奈さんの方が合ったんじゃないの？」って感じで、可哀相。</p>
            <p>そんな中での雪組への組替えでした。<strong>数々の苦労で、今ではすっかり、しっとりとした娘役へと成長</strong>。大人しいイメージになってしまいましたが、娘役が活躍できる雪組ですもの、<strong>そんな過去の殼は取り去って、元気にハジケて欲しいです！！</strong></p>
            <p>ぐんちゃんのベストは前述のヨアンナと、<strong>バウ「殉情」の春琴</strong>。気の強そうな所がピッタリでした（^_^;）。</p>
            <p>ショーでは<strong>「パッション・ブルー」ナルシスの場のエコー</strong>なんか、結構可愛くて好きなんだけど。</p>
            <p>いずれにしても、ブレイクはこれからですよね、ぐんちゃん（^_^;）。</p>
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
