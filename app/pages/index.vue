<script setup>
const hamburger = ref("close");
function barOpen(toggle) {
  hamburger.value = toggle;
}

const menu = ref("top");
function menuOpen(toggle) {
  menu.value = toggle;
  hamburger.value = "close";
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
    <div
      class="absolute top-0 left-0 w-full h-screen bg-[url(/images/back-left.png)] bg-no-repeat bg-left bg-fixed bg-contain"
    ></div>
    <div
      class="absolute top-0 right-0 w-full h-screen bg-[url(/images/back-right.png)] bg-no-repeat bg-right bg-fixed bg-contain"
    ></div>
    <div
      class="absolute text-5xl top-0 right-0 px-4 py-2 sm:px-8 sm:py-6 bg-lime-400 text-white z-[100]"
      v-if="hamburger === 'close'"
    >
      <Icon name="fa6-solid:bars" @click="barOpen('open')" />
    </div>
    <div
      class="absolute max-w-[300px] top-0 right-0 px-8 py-4 bg-lime-400 text-white z-[100] flex flex-wrap justify-end"
      v-if="hamburger === 'open'"
    >
      <Icon
        name="fa6-solid:xmark"
        @click="barOpen('close')"
        class="text-5xl my-2"
      />
      <div class="w-full text-center">
        <h1 class="text-2xl">JIMMY's WEB SITE</h1>
      </div>
      <nav class="w-full">
        <ul class="w-full">
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
            @click="menuOpen('top')"
          >
            <span class="text-2xl block">Top</span
            ><span class="block text-sm">トップ</span>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
            @click="menuOpen('archive')"
          >
            <span class="text-2xl block">Archive</span
            ><span class="block text-sm">過去のページ</span>
          </li>
        </ul>
      </nav>
    </div>

    <div
      id="top"
      class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
      v-if="menu === 'top'"
    >
      <div class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70">
        <div class="absolute top-[25%] w-full text-center">
          <h1 class="text-3xl sm:text-5xl">JIMMY's WEB SITE</h1>
          <p class="mt-6">
            waiwai.ciao.jp より移転しました。<br
              class="inline sm:hidden"
            />JIMMYのホームページです。
          </p>
        </div>
        <nav class="absolute top-[45%] w-full text-center">
          <ul class="flex flex-wrap justify-center w-full">
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
              @click="menuOpen('top')"
            >
              <span class="text-2xl block">Top</span
              ><span class="block text-sm">トップ</span>
            </li>
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
              @click="menuOpen('archive')"
            >
              <span class="text-2xl block">Archive</span
              ><span class="block text-sm">過去のページ</span>
            </li>
            <!-- <li><span>SNS</span><span class="block text-sm">投稿</span></li>
            <li><span>Map</span><span class="block text-sm">地図</span></li>
            <li><span>Schedule</span><span class="block text-sm">スケジュール</span></li>
            <li><span>Graph</span><span class="block text-sm">グラフ</span></li>
            <li><span>Weather</span><span class="block text-sm">天気</span></li> -->
          </ul>
        </nav>
        <div id="footer" class="absolute bottom-12 w-full text-center">
          <p>Copyright © JIMMY. All Rights Reserved.</p>
        </div>
      </div>
    </div>

    <div
      id="archive"
      class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
      v-if="menu === 'archive'"
    >
      <div
        class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70 flex items-center"
      >
        <div class="w-full h-[90vh] text-center overflow-scroll">
          <h2 class="text-3xl sm:text-5xl">Archive</h2>
          <p class="mt-6">
            過去の JIMMY の WEB SITE を<br
              class="block sm:hidden"
            />保存しています。
          </p>
          <div
            class="flex justify-center flex-wrap sm:mt-[20px] px-4 py-4 sm:px-16"
          >
            <div class="w-[400px] py-4 sm:p-6">
              <NuxtLink to="/takarazuka">
                <img src="/images/takaraimage.jpg" alt="WAIWAI TAKARAZUKA" />
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logota.png"
                    alt="WAIWAI TAKARAZUKA"
                    class="size-[30px] inline m-2"
                  />WAIWAI TAKARAZUKA
                </h2>
                <p>掲示板を閉じてからの<br />JIMMYのブログです。</p>
              </NuxtLink>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <a href="" class="">
                <img src="/images/waiwai_image.jpg" alt="WAIWAI TAKARAZUKA" />
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logota.png"
                    alt="WAIWAI TAKARAZUKA"
                    class="size-[30px] inline m-2"
                  />WAIWAI TAKARAZUKA
                </h2>
                <p>宝塚ファンによる会員制掲示板を<br />運営していました。</p>
              </a>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <a href="" class="">
                <img src="/images/jimmy_image.jpg" alt="JIMMY&#39;s Homepage" />
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logota.png"
                    alt="WAIWAI TAKARAZUKA"
                    class="size-[30px] inline m-2"
                  />JIMMY&#39;s Homepage
                </h2>
                <p>JIMMYの過去の公演評などの記事を<br />まとめました。</p>
              </a>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <a href="" class="">
                <img src="/images/designimage.jpg" alt="WAIWAI WEB &amp; DTP" />
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logode.png"
                    alt="WAIWAI WEB &amp; DTP"
                    class="size-[30px] inline m-2"
                  />WAIWAI WEB &amp; DTP
                </h2>
                <p>
                  WEB &amp; DTPデザイナーであるJIMMYの<br />お仕事ページです。
                </p>
              </a>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <a href="" class="">
                <img src="/images/everyimage.jpg" alt="WAIWAI EVERY DAY" />
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logoev.png"
                    alt="WAIWAI EVERY DAY"
                    class="size-[30px] inline m-2"
                  />WAIWAI EVERY DAY
                </h2>
                <p>JIMMYの日常の様子を<br />アップしています。</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
