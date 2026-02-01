<script setup>
  const bar = ref("bar-close")
  function barOpen(toggle) {
    bar.value = toggle
  }
</script>

<template>

  <!-- <h2 class="text-3xl">JIMMY's WEB SITE</h2>
  <h2 class="text-3xl noto-sans">JIMMY's WEB SITE</h2>
  <h2 class="text-3xl noto-serif">JIMMY's WEB SITE</h2>
  <h2 class="text-3xl klee-one">人権の無視及び軽侮が</h2>
  <Icon name="fa6-solid:house" />
  <Icon name="fa6-brands:github" /> -->

  <div class="relative">
    <BackAni />
    <div class="absolute top-0 left-0 overflow-scroll">
      <div class="flex flex-wrap items-center justify-center w-full h-screen text-center relative">
        <div class="w-full pt-[25vh]" id="top">
          <div id="header" class="mb-[8vh] sm:mb-[10vh]">
            <h1 class="w-full text-3xl sm:text-5xl font-normal">JIMMY's WEB SITE</h1>
            <p class="w-full mt-6">waiwai.ciao.jp より移転しました。<br class="inline sm:hidden">JIMMYのホームページです。</p>
          </div>
          <nav id="menu">
            <ul class="flex flex-wrap justify-center w-full">
              <li class="p-4 border border-black m-2 w-2xs sm:w-1/5"><a href="#top"><span class="text-2xl block font-semibold">Top</span><span class="block text-sm">トップ</span></a></li>
              <li class="p-4 border border-black m-2 w-2xs sm:w-1/5"><a href="#archive"><span class="text-2xl block font-semibold">Archive</span><span class="block text-sm">過去のページ</span></a></li>
              <!-- <li class="p-4 border m-2 w-2xs sm:w-1/5"><span class="text-2xl block font-semibold">SNS</span><span class="block text-sm">投稿</span></li>
              <li class="p-4 border m-2 w-2xs sm:w-1/5"><span class="text-2xl block font-semibold">Map</span><span class="block text-sm">地図</span></li>
              <li class="p-4 border m-2 w-2xs sm:w-1/5"><span class="text-2xl block font-semibold">Schedule</span><span class="block text-sm">スケジュール</span></li>
              <li class="p-4 border m-2 w-2xs sm:w-1/5"><span class="text-2xl block font-semibold">Graph</span><span class="block text-sm">グラフ</span></li>
              <li class="p-4 border m-2 w-2xs sm:w-1/5"><span class="text-2xl block font-semibold">Weather</span><span class="block text-sm">天気</span></li> -->
            </ul>
          </nav>
        </div>

        <div id="footer" class="w-full pt-[12vh] sm:pt-[35vh]">
          <p>Copyright © JIMMY. All Rights Reserved.</p>
        </div>

        <div id="archive" class="w-full sm:pt-[12vh] pt-[25vh]">
          <h2 class="text-4xl mb-4 font-medium">Archive</h2>
          <p>過去の JIMMY の WEB SITE を保存しています。</p>
          <div class="flex justify-center flex-wrap px-4 sm:px-16 py-4 sm:px-16 w-full">
            <div class="w-full sm:w-1/3 p-6">
              <a href="" class="">
                <img src="/images/takaraimage.jpg" alt="WAIWAI TAKARAZUKA">
                <h2 class="text-xl font-semibold"><img src="/images/logota.png" alt="WAIWAI TAKARAZUKA" class="size-[30px] inline m-2">WAIWAI TAKARAZUKA</h2>
                <p>掲示板を閉じてからのJIMMYのブログです。</p>
              </a>
            </div>
            <div class="w-full sm:w-1/3 p-6">
              <a href="" class="">
                <img src="/images/waiwai_image.jpg" alt="WAIWAI TAKARAZUKA">
                <h2 class="text-xl font-semibold"><img src="/images/logota.png" alt="WAIWAI TAKARAZUKA" class="size-[30px] inline m-2">WAIWAI TAKARAZUKA</h2>
                <p>宝塚ファンによる会員制掲示板を運営していました。</p>
              </a>
            </div>
            <div class="w-full sm:w-1/3 p-6">
              <a href="" class="">
                <img src="/images/jimmy_image.jpg" alt="JIMMY&#39;s Homepage">
                <h2 class="text-xl font-semibold"><img src="/images/logota.png" alt="WAIWAI TAKARAZUKA" class="size-[30px] inline m-2">JIMMY&#39;s Homepage</h2>
                <p>JIMMYの過去の公演評などの記事をまとめました。</p>
              </a>
            </div>
            <div class="w-full sm:w-1/3 p-6">
              <a href="" class="">
                <img src="/images/designimage.jpg" alt="WAIWAI WEB &amp; DTP">
                <h2 class="text-xl font-semibold"><img src="/images/logode.png" alt="WAIWAI WEB &amp; DTP" class="size-[30px] inline m-2">WAIWAI WEB &amp; DTP</h2>
                <p>WEB &amp; DTPデザイナーであるJIMMYのお仕事ページです。</p>
              </a>
            </div>
            <div class="w-full sm:w-1/3 p-6">
              <a href="" class="">
                <img src="/images/everyimage.jpg" alt="WAIWAI EVERY DAY">
                <h2 class="text-xl font-semibold"><img src="/images/logoev.png" alt="WAIWAI EVERY DAY" class="size-[30px] inline m-2">WAIWAI EVERY DAY</h2>
                <p>JIMMYの日常の様子をアップしています。</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-full">
      <div class="relative max-w-[1200px] m-auto">
        <div class="absolute text-5xl top-4 right-4">
          <Icon name="fa6-solid:bars" :class="[{ ['!hidden']: bar === 'bar-open' },{ ['block']: bar === 'bar-close' }]" @click="barOpen('bar-open')" />
          <Icon name="fa6-solid:xmark" :class="[{ ['block']: bar === 'bar-open' },{ ['!hidden']: bar === 'bar-close' }]" @click="barOpen('bar-close')" />
        </div>
        <div class="absolute" :class="[{ ['bg-[rgb(255,255,200,1.0)] w-xs p-8 z-10 rounded-xl shadow-md']: bar === 'bar-open' },{ ['hidden']: bar === 'bar-close' }]">
          <div id="header mb-[2vh]">
            <h1 class="w-full text-2xl font-semibold">JIMMY's WEB SITE</h1>
          </div>
          <nav id="menu">
            <ul class="flex flex-wrap justify-center w-full">
              <li class="p-4 border border-black m-2 w-full"><a href="#top"><span class="text-2xl block font-semibold">Top</span><span class="block text-sm">トップ</span></a></li>
              <li class="p-4 border border-black m-2 w-full"><a href="#archive"><span class="text-2xl block font-semibold">Archive</span><span class="block text-sm">過去のページ</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>


</style>