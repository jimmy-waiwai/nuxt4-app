<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            一色 瑠加
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/11/30 up
            </p>
            <p><strong>「シンデレラ・ロック」</strong>で、たにちゃん(大和悠河)の仲間の一人の役だったのも何となく覚えている気がするのですが、初めて印象に残るのは何といっても<strong>ケロちゃん(汐美真帆)のディナー・ショー「Platinum」ちゃん</strong>の一人だった事(ケロちゃんはバックメンバーの事を「Platinumちゃんたち～」と呼んでいました^_^;)。</p>
            <p>
              花瀬みずか、京樹真那と3人同期生で最下級生だったのですが、<strong>中でも一番幼くて</strong>(^_^;)、マイクを落としちゃったか、忘れちゃったかして、アンコールの挨拶で「ごめんなさい～(;_;)」と涙していたのが、とっても可愛かったのを覚えています(今頃バラしてごめんなさい^_^;)。<br>
              でも、全体には歌も上手だし、女装もOKでキレイだったし(^_^;)、とても良かったです。
            </p>
            <p>
              そうして名前を覚えた<strong>一色瑠加ちゃん</strong>(なぜフルネーム?)。続く<strong>「ゼンダ城の虜」新公</strong>ではがいちさん(初風緑)の役をしていたのですが、<strong>落ち着いた大人っぽい二枚目さん</strong>で、「Platinum」ちゃんとは随分印象が違っていて素敵でした。これで、きっと大人の役の方が似合う人なんだろうと思いましたね。<br>
              だから、続く<strong>「愛のソナタ」新公</strong>も、お父さん役とはいえ、ダンディでかなり満足(^_^;)。当時の公演評でもすごく褒めていますね。
            </p>
            <p>
              <strong>「血と砂」</strong>ではファンの後援者というまた渋い役でしたが、とても素敵で、この配役が嬉しかったです。<strong>「SLAPSTICK」</strong>ではコミカルなギャング役(だっけ?)で、これも色々工夫していて良かった。<br>
              フィナーレでは4人組で最初にソロを歌っていたりしたので、目についた方も多いのでは？
            </p>
            <p>
              その公演評にも書きましたが、最近ますます<strong>古代みず希さん</strong>に似てきているような気もします(^_^;)。あんな素敵な男役さんになって欲しいなぁ・・。<br>
              ちなみに、<strong>ガチャピン</strong>には本当に似ているような気がします(^_^;)。誰が言い出したんでしょうね～。言い当てているわ・・。
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
