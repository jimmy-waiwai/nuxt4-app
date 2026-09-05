<script setup>
const hamburger = ref('close');
function barOpen(toggle) {
  hamburger.value = toggle;
}
</script>

<template>
  <div class="relative min-h-screen">
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <BackAni />
    </div>

    <div
      v-if="hamburger === 'close'"
      class="fixed z-50 text-5xl top-0 right-0 px-4 py-2 sm:px-8 sm:py-6 bg-lime-400 text-white"
    >
      <Icon
        name="fa6-solid:bars"
        @click="barOpen('open')"
      />
    </div>

    <div
      v-if="hamburger === 'open'"
      class="fixed z-50 max-w-[300px] top-0 right-0 px-8 py-4 bg-lime-400 text-white flex flex-wrap justify-end"
    >
      <Icon
        name="fa6-solid:xmark"
        class="text-5xl my-2 cursor-pointer"
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
          >
            <NuxtLink
              to="#top"
              @click="barOpen('close')"
            >
              <span class="text-2xl block">Top</span><span class="block text-sm">トップ</span>
            </NuxtLink>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
          >
            <NuxtLink
              to="#takarazuka"
              @click="barOpen('close')"
            >
              <span class="text-2xl block">Takarazuka</span><span class="block text-sm">昔の趣味のページ</span>
            </NuxtLink>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
          >
            <NuxtLink
              to="#archive"
              @click="barOpen('close')"
            >
              <span class="text-2xl block">Archive</span><span class="block text-sm">過去のページ</span>
            </NuxtLink>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
          >
            <NuxtLink
              to="#map"
              @click="barOpen('close')"
            >
              <span class="text-2xl block">Map</span><span class="block text-sm">地図</span>
            </NuxtLink>
          </li>
          <li
            class="w-full block border border-white my-4 py-4 text-center cursor-pointer hover:bg-lime-500"
          >
            <NuxtLink
              to="#sitemap"
              @click="barOpen('close')"
            >
              <span class="text-2xl block">Site Map</span><span class="block text-sm">サイトマップ</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div
      class="relative z-10 w-[90%] bg-white/70 mx-auto px-4 sm:px-16"
    >
      <div
        id="top"
        class="w-full text-center py-24"
      >
        <h1 class="text-3xl sm:text-5xl mb-8">
          JIMMY's WEB SITE
        </h1>
        <p class="mb-8">
          waiwai.ciao.jp より移転しました。<br
            class="inline sm:hidden"
          >JIMMYのホームページです。
        </p>
        <nav class="w-full">
          <ul class="flex flex-wrap justify-center w-full gap-3">
            <li
              class="border border-black py-4 cursor-pointer hover:bg-slate-100 w-[220px] text-center px-4"
            >
              <NuxtLink
                to="#top"
                @click="barOpen('close')"
              >
                <span class="text-2xl block">Top</span><span class="block text-sm">トップ</span>
              </NuxtLink>
            </li>
            <li
              class="border border-black py-4 cursor-pointer hover:bg-slate-100 w-[220px] text-center px-4"
            >
              <NuxtLink
                to="#takarazuka"
                @click="barOpen('close')"
              >
                <span class="text-2xl block">Takarazuka</span><span class="block text-sm">昔の趣味のページ</span>
              </NuxtLink>
            </li>
            <li
              class="border border-black py-4 cursor-pointer hover:bg-slate-100 w-[220px] text-center px-4"
            >
              <NuxtLink
                to="#archive"
                @click="barOpen('close')"
              >
                <span class="text-2xl block">Archive</span><span class="block text-sm">過去のページ</span>
              </NuxtLink>
            </li>
            <li
              class="border border-black py-4 cursor-pointer hover:bg-slate-100 w-[220px] text-center px-4"
            >
              <NuxtLink
                to="#map"
                @click="barOpen('close')"
              >
                <span class="text-2xl block">Map</span><span class="block text-sm">地図</span>
              </NuxtLink>
            </li>
            <li
              class="border border-black py-4 cursor-pointer hover:bg-slate-100 w-[220px] text-center px-4"
            >
              <NuxtLink
                to="#sitemap"
                @click="barOpen('close')"
              >
                <span class="text-2xl block">Site Map</span><span class="block text-sm">サイトマップ</span>
              </NuxtLink>
            </li>
            <!-- <li><span>SNS</span><span class="block text-sm">投稿</span></li>
            <li><span>Schedule</span><span class="block text-sm">スケジュール</span></li>
            <li><span>Graph</span><span class="block text-sm">グラフ</span></li>
            <li><span>Weather</span><span class="block text-sm">天気</span></li> -->
          </ul>
        </nav>
      </div>

      <div
        id="takarazuka"
        class="w-full text-center py-24"
      >
        <h2 class="text-3xl sm:text-5xl mb-4 sm:mb-6">
          Takarazuka
        </h2>
        <p class="mb-8">
          過去の趣味のページです。
        </p>
        <div class="flex flex-wrap justify-center w-full gap-6">
          <div class="w-[360px] py-4 sm:py-6">
            <NuxtLink to="/takarazuka">
              <img
                src="/images/takaraimage.jpg"
                alt="WAIWAI TAKARAZUKA（ブログ）"
              >
              <h2 class="text-lg sm:text-xl">
                <img
                  src="/images/logota.png"
                  alt="WAIWAI TAKARAZUKA"
                  class="size-[30px] inline mr-2 mb-2"
                >WAIWAI TAKARAZUKA（ブログ）
              </h2>
              <p>掲示板を閉じてからの<br>JIMMYのブログです。</p>
            </NuxtLink>
          </div>
          <div class="w-[360px] py-4 sm:py-6">
            <NuxtLink to="/waiwai">
              <img
                src="/images/waiwai_image.jpg"
                alt="WAIWAI TAKARAZUKA（掲示板）"
              >
              <h2 class="text-lg sm:text-xl">
                <img
                  src="/images/logota.png"
                  alt="WAIWAI TAKARAZUKA（掲示板）"
                  class="size-[30px] inline mr-2 mb-2"
                >WAIWAI TAKARAZUKA
              </h2>
              <p>宝塚ファンによる会員制掲示板を<br>運営していました。</p>
            </NuxtLink>
          </div>
          <div class="w-[360px] py-4 sm:py-6">
            <NuxtLink to="/jimmy">
              <img
                src="/images/jimmy_image.jpg"
                alt="JIMMY&#39;s Homepage"
              >
              <h2 class="text-lg sm:text-xl">
                <img
                  src="/images/logota.png"
                  alt="WAIWAI TAKARAZUKA"
                  class="size-[30px] inline mr-2 mb-2"
                >JIMMY&#39;s Homepage
              </h2>
              <p>JIMMYの過去の公演評などの記事を<br>まとめました。</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        id="archive"
        class="w-full text-center py-24"
      >
        <h2 class="text-3xl sm:text-5xl mb-4 sm:mb-6">
          Archive
        </h2>
        <p class="mb-8">
          過去のページです。
        </p>
        <div class="flex flex-wrap justify-center w-full gap-6">
          <div class="w-[360px] py-4 sm:py-6">
            <NuxtLink to="https://jimmy-waiwai.github.io/waiwai-sub/design/">
              <img
                src="/images/designimage.jpg"
                alt="WAIWAI WEB &amp; DTP"
              >
              <h2 class="text-lg sm:text-xl">
                <img
                  src="/images/logode.png"
                  alt="WAIWAI WEB &amp; DTP"
                  class="size-[30px] inline mr-2 mb-2"
                >WAIWAI WEB &amp; DTP
              </h2>
              <p>WEB &amp; DTPデザイナーであるJIMMYの<br>お仕事ページです。</p>
            </NuxtLink>
          </div>
          <div class="w-[360px] py-4 sm:py-6">
            <NuxtLink to="https://jimmy-waiwai.github.io/waiwai-sub/everyday/">
              <img
                src="/images/everyimage.jpg"
                alt="WAIWAI EVERY DAY"
              >
              <h2 class="text-lg sm:text-xl">
                <img
                  src="/images/logoev.png"
                  alt="WAIWAI EVERY DAY"
                  class="size-[30px] inline mr-2 mb-2"
                >WAIWAI EVERY DAY
              </h2>
              <p>JIMMYの日常の様子を<br>アップしています。</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        id="map"
        class="w-full text-center py-24"
      >
        <h2 class="text-3xl sm:text-5xl mb-4 sm:mb-6">
          Map
        </h2>
        <p class="mb-8">
          GoogleMapのデモです。
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1127609065056!2d135.4934442117333!3d34.70233573301137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e68d95e3a70b%3A0x1baec822e859c84a!2z5aSn6Ziq6aeF!5e0!3m2!1sja!2sjp!4v1786797819004!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <SiteMap />

      <div
        id="footer"
        class="w-full text-center pb-24"
      >
        <p>Copyright © JIMMY. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
