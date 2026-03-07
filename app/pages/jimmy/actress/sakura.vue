<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            桜　一花
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/04/30 up
            </p>

            <p>
              <strong>桜一花ちゃん</strong>、いきま～す!
            </p>

            <p>
              初舞台公演の2つ目、<strong>月組編「ノバ・ボサ・ノバ」</strong>で、運良く最前列に座った時、銀橋<strong>目の前で</strong>水色のダルマでバリバリ元気にロケットを踊ってくれたのが桜一花ちゃんでした。初舞台から成績上位で、何となく覚えやすい顔と名前だったせいでしょうか、初めから認識していました。<strong>笑顔がとっても可愛かった</strong>のが、印象に残っています。
            </p>

            <p>
              後、印象に残るのが「琥珀色の雨にぬれて」新人公演。生の舞台を観ていないのでやや気が引けるのですが、フランソワーズ役だった彼女、<strong>結構芝居心がありそうだな</strong>、と思いました。<br>
              以来、そういうお芝居の面でも、結構期待して見るようになりましたね。
            </p>

            <p>
              好きなのは何と言っても<strong>「La Esperanza」のイネス</strong>。みずさん(水夏希)の相手役で、とても良く似合っていると思いましたし、本人も可愛く、カラリと上手で、しっかりものの役が似合っていると思いました。<br>
              将来みずさんの相手役っていうのも、私は良いと思うんですけれどね～。どうでしょうね～?
            </p>

            <p>
              今回の公演でも、芝居、ショーとも良く使われていて、歌にダンスに芝居にマルチな実力を発揮してくれています。<br>
              <strong>ちっちゃいけれど、シャキっと気持ちの良い舞台を見せる</strong>、毎回見るのが楽しみな娘役さんの一人です。
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
