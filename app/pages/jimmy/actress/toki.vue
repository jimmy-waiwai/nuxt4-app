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
            十輝いりす
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2004/03/06 up
            </p>
            <p>個人HPで毎年初舞台時点で気に入った人を発表しているのですが(・・との説明も、もういらないような気もしてきているのですが)、1999年に選んだのが<strong>いりす君(十輝)</strong>でした。</p>
            <p>背が高く、ラインダンスの時もセンター。それであの整ったお顔だちですから、本当にひねりがない・・というか、<strong>目立つ人を素直～に選んじゃった</strong>感じですね。当時HPに<strong>「男らしくていい感じ」</strong>と書きましたが、それは今でも。<strong>文句なく見た目の良い男役さん</strong>だと思います。</p>
            <p>以来宙組公演の時はずっと注目して見ていますが、群舞の最後列端にいる頃からも、<strong>ず～っとスリムなまま、最初からすっきりと出来上がった容姿</strong>なのが珍しく、<strong>「ちょっと日本人離れしすぎかな～？」</strong>という気もしていました。</p>
            <p>
              成績があまり良くなかったので、それほど期待はしていなかったのですが（^_^;）、<strong>「エイジ・オブ・イノセンス」</strong>では群衆の中でもモテモテの男の子の役柄が振られていて、「やっぱりこんな役が振られちゃうのね～」と。<br>
              そんな感じだったので、<strong>「傭兵ピエール」新公</strong>で<strong>ロペール</strong>がついた時には驚いたのですが、そんなに頭を抱える程でもなく（^_^;）、これから良い役がついてくるのかも～？&emsp;と思いました。その後もちゃんと良い線いっていますよね。
            </p>
            <p>
              <strong>ダンス</strong>が好きらしく、昔ファンの方からメールでそんな事を教えて頂いた事があります。<strong>「エイジ～」</strong>でも<strong>フィナーレ</strong>にいきなり<strong>ダンスで3人口</strong>に出てきましたし(大きいから？&emsp;という気もしないでもないメンバーだったけれど)、<strong>アキコ・カンダのレッスン発表会</strong>にも出ていましたね。<br>
              コツコツがんばっているようですし、確かに歌にも芝居にも努力の跡が見えるのが好もしく、これからが楽しみです。
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
