<script setup>
const hamburger = ref('close');
function barOpen(toggle) {
  hamburger.value = toggle;
}

const menu = ref('top');
function menuOpen(toggle) {
  menu.value = toggle;
  hamburger.value = 'close';
}
</script>

<template>
  <div class="relative">
    <BackAni />
    <div
      v-if="hamburger === 'close'"
      class="absolute text-5xl top-0 right-0 px-4 py-2 sm:px-8 sm:py-6 bg-lime-400 text-white z-[100]"
    >
      <Icon
        name="fa6-solid:bars"
        @click="barOpen('open')"
      />
    </div>
    <div
      v-if="hamburger === 'open'"
      class="absolute max-w-[300px] top-0 right-0 px-8 py-4 bg-lime-400 text-white z-[100] flex flex-wrap justify-end"
    >
      <Icon
        name="fa6-solid:xmark"
        class="text-5xl my-2"
        @click="barOpen('close')"
      />
      <div class="w-full text-center">
        <h1 class="text-2xl">
          JIMMY's WEB SITE
        </h1>
      </div>
      <nav class="w-full">
        <ul class="w-full">
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
            @click="menuOpen('top')"
          >
            <span class="text-2xl block">Top</span><span class="block text-sm">トップ</span>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
            @click="menuOpen('takarazuka')"
          >
            <span class="text-2xl block">Takarazuka</span><span class="block text-sm">昔の趣味のページ</span>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
            @click="menuOpen('archive')"
          >
            <span class="text-2xl block">Archive</span><span class="block text-sm">過去のページ</span>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
            @click="menuOpen('map')"
          >
            <span class="text-2xl block">Map</span><span class="block text-sm">地図</span>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
          >
            <NuxtLink to="/sitemap">
              <span class="text-2xl block">Site Map</span><span class="block text-sm">サイトマップ</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div
      v-if="menu === 'top'"
      id="top"
      class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
    >
      <div class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70">
        <div class="relative sm:absolute sm:top-[10%] lg:top-[25%] w-full text-center mt-8 sm:mt-0">
          <h1 class="text-3xl sm:text-5xl mb-4">
            JIMMY's WEB SITE
          </h1>
          <p class="mt-6 mb-4">
            waiwai.ciao.jp より移転しました。<br
              class="inline sm:hidden"
            >JIMMYのホームページです。
          </p>
        </div>
        <nav class="relative sm:absolute sm:top-[32%] lg:top-[45%] w-full text-center mb-4">
          <ul class="flex flex-wrap justify-center w-full">
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
              @click="menuOpen('top')"
            >
              <span class="text-2xl block">Top</span><span class="block text-sm">トップ</span>
            </li>
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
              @click="menuOpen('takarazuka')"
            >
              <span class="text-2xl block">Takarazuka</span><span class="block text-sm">昔の趣味のページ</span>
            </li>
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
              @click="menuOpen('archive')"
            >
              <span class="text-2xl block">Archive</span><span class="block text-sm">過去のページ</span>
            </li>
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
              @click="menuOpen('map')"
            >
              <span class="text-2xl block">Map</span><span class="block text-sm">地図</span>
            </li>
            <li
              class="border border-black m-2 py-4 w-[270px] cursor-pointer hover:bg-slate-100"
            >
              <NuxtLink to="/sitemap">
                <span class="text-2xl block">Site Map</span><span class="block text-sm">サイトマップ</span>
              </NuxtLink>
            </li>
            <!-- <li><span>SNS</span><span class="block text-sm">投稿</span></li>
            <li><span>Schedule</span><span class="block text-sm">スケジュール</span></li>
            <li><span>Graph</span><span class="block text-sm">グラフ</span></li>
            <li><span>Weather</span><span class="block text-sm">天気</span></li> -->
          </ul>
        </nav>
        <div
          id="footer"
          class="relative sm:absolute sm:bottom-12 w-full text-center"
        >
          <p>Copyright © JIMMY. All Rights Reserved.</p>
        </div>
      </div>
    </div>

    <div
      v-if="menu === 'takarazuka'"
      id="takarazuka"
      class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
    >
      <div class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70 flex items-center">
        <div class="w-full h-[90vh] text-center overflow-scroll">
          <h2 class="text-3xl sm:text-5xl">
            Takarazuka
          </h2>
          <p class="mt-6">
            過去の趣味のページです。
          </p>
          <div class="flex justify-center flex-wrap sm:mt-[20px] px-4 py-4 sm:px-16">
            <div class="w-[400px] py-4 sm:p-6">
              <NuxtLink to="/takarazuka">
                <img
                  src="/images/takaraimage.jpg"
                  alt="WAIWAI TAKARAZUKA"
                >
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logota.png"
                    alt="WAIWAI TAKARAZUKA"
                    class="size-[30px] inline m-2"
                  >WAIWAI TAKARAZUKA
                </h2>
                <p>掲示板を閉じてからの<br>JIMMYのブログです。</p>
              </NuxtLink>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <NuxtLink to="/waiwai">
                <img
                  src="/images/waiwai_image.jpg"
                  alt="WAIWAI TAKARAZUKA"
                >
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logota.png"
                    alt="WAIWAI TAKARAZUKA"
                    class="size-[30px] inline m-2"
                  >WAIWAI TAKARAZUKA
                </h2>
                <p>宝塚ファンによる会員制掲示板を<br>運営していました。</p>
              </NuxtLink>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <NuxtLink to="/jimmy">
                <img
                  src="/images/jimmy_image.jpg"
                  alt="JIMMY&#39;s Homepage"
                >
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logota.png"
                    alt="WAIWAI TAKARAZUKA"
                    class="size-[30px] inline m-2"
                  >JIMMY&#39;s Homepage
                </h2>
                <p>JIMMYの過去の公演評などの記事を<br>まとめました。</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="menu === 'archive'"
      id="archive"
      class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
    >
      <div class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70 flex items-center">
        <div class="w-full h-[90vh] text-center overflow-scroll">
          <h2 class="text-3xl sm:text-5xl">
            Archive
          </h2>
          <p class="mt-6">
            過去のページです。
          </p>
          <div class="flex justify-center flex-wrap sm:mt-[20px] px-4 py-4 sm:px-16">
            <div class="w-[400px] py-4 sm:p-6">
              <NuxtLink to="https://jimmy-waiwai.github.io/waiwai-sub/design/">
                <img
                  src="/images/designimage.jpg"
                  alt="WAIWAI WEB &amp; DTP"
                >
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logode.png"
                    alt="WAIWAI WEB &amp; DTP"
                    class="size-[30px] inline m-2"
                  >WAIWAI WEB &amp; DTP
                </h2>
                <p>WEB &amp; DTPデザイナーであるJIMMYの<br>お仕事ページです。</p>
              </NuxtLink>
            </div>
            <div class="w-[400px] py-4 sm:p-6">
              <NuxtLink to="https://jimmy-waiwai.github.io/waiwai-sub/everyday/">
                <img
                  src="/images/everyimage.jpg"
                  alt="WAIWAI EVERY DAY"
                >
                <h2 class="text-lg sm:text-xl">
                  <img
                    src="/images/logoev.png"
                    alt="WAIWAI EVERY DAY"
                    class="size-[30px] inline m-2"
                  >WAIWAI EVERY DAY
                </h2>
                <p>JIMMYの日常の様子を<br>アップしています。</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="menu === 'map'"
      id="archive"
      class="absolute top-0 left-0 w-full h-screen flex justify-center items-center"
    >
      <div class="relative w-[90%] sm:min-w-[600px] h-[90vh] bg-white/70 flex items-center">
        <div class="w-full h-[90vh] text-center overflow-scroll">
          <h2 class="text-3xl sm:text-5xl">
            Map
          </h2>
          <p class="mt-6">
            GoogleMapのデモです。
          </p>
          <div class="flex justify-center flex-wrap sm:mt-[20px] px-4 py-4 sm:px-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.256865410841!2d135.02423831170907!3d34.622948587267274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000824134f53bcd%3A0xaeaac1c733d78c3f!2z5piO55-z5rW35bOh5aSn5qmL!5e0!3m2!1sja!2sjp!4v1781793231146!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
