<script setup>
definePageMeta({
  title: '宝塚ビデオシアター「愛華みれ・華の宴」&amp;amp; Salon de Takarazuka 報告',
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
            宝塚ビデオシアター「愛華みれ・華の宴」&amp; Salon de Takarazuka 報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/05/14 up)
            </p>
            <p>
              遅くなりましたが、<strong>たもさん(愛華みれ)のビデオシアター</strong>と、オープンしてからずっと気になっていた<strong>宝塚プチミュージアム「Salon
                de Takarazuka」</strong>に行ってきました！
            </p>
            <p>ビデオシアターの方の今回の貴重映像は、<strong>「ロマノフの宝石」「ヴェネチアの紋章」新公、バウ「ドニエプルの赤い罌粟」「ワンタッチ・オブ・ヴィーナス」「HURRICANE」</strong>等。特に「ワンタッチ～」は、すごく良かった思い出のある<strong>みはるちゃん(森奈みはる)</strong>のヴィーナスや、何か変だったけど（^_^;）コスチューム姿がめちゃステキだった<strong>チャーリー(匠ひびき)</strong>のズベトリーも見られて嬉しかったです。たもさんのセイボリーさんも可愛い（^_^;）。</p>
            <p><strong>Salon de Takarazuka</strong>の方は時間をずらして行ったせいか、誰もいなくて、すごくゆっくり楽しむ事ができました。公演中の花組がメインという事で、たもさんの<strong>過去に上演されたビデオシアター</strong>とか、前回の「タンゴ～」の<strong>衣装</strong>、<strong>装置のラフ</strong>、ぺーさん(高汐巴)時代からの花組公演の<strong>ポスター</strong>や、主題歌集からの<strong>歌が聞けるコーナー</strong>、今回の公演の<strong>お稽古風景のビデオ</strong>等が放映されていたりと、狭いながらも<strong>宝塚好きな人なら時間を忘れて楽しめる</strong>資料いっぱいのミュージアムでした。特に、公演中の組のファン、今ならたもさんファンにはたまらない空間だと思います（^_^;）。是非、お気に入りの組を狙って、一度行ってみて下さいませ。</p>
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
