<script setup>
useHead({
  title: 'WAIWAI TAKARAZUKA',
  meta: [
    {
      name: 'description',
      content: 'waiwai.ciao.jp より移転しました。宝塚歌劇団の舞台の感想や話題を雑談。',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/img/takarazuka/apple-touch-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/img/takarazuka/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/img/takarazuka/favicon-96x96.png',
    },
  ],
});

const hamburger = ref('close');
function barOpen(toggle) {
  hamburger.value = toggle;
}
</script>

<template>
  <div>
    <Body class="bg-[#ffcccc] relative noto-sans font-[300]">
      <div class="relative">
        <div
          class="bg-[url(/images/takarazuka/back.jpg)] bg-cover absolute top-0 left-0 w-full h-[800px]"
        />
        <div class="absolute top-0 left-0 w-full">
          <div class="w-full bg-pink-700 flex justify-between p-2 fixed">
            <h1 class="pl-4 lg:pl-8 text-2xl sm:text-2xl lg:text-3xl poiret-one">
              <NuxtLink
                to="/takarazuka/"
                class="text-white"
              >WAIWAI TAKARAZUKA
                <span class="font-normal text-base lg:text-xl hidden min-[400px]:inline">（ブログ）</span>
              </NuxtLink>
            </h1>
            <nav class="pr-4 pt-1 hidden lg:block">
              <NuxtLink
                to="/takarazuka/blog/index"
                class="text-white pr-4"
              >BLOG</NuxtLink>
              <NuxtLink
                to="/takarazuka/review/index"
                class="text-white pr-4"
              >REVIEW</NuxtLink>
              <NuxtLink
                to="/takarazuka/actress/index"
                class="text-white pr-4"
              >ACTRESS</NuxtLink>
            </nav>
            <button class="lg:hidden">
              <Icon
                name="fa6-solid:bars"
                class="text-white font-bold text-3xl lg:text-4xl"
                @click="barOpen('open')"
              />
            </button>
          </div>
          <div>
            <slot />
          </div>
          <div class="p-8 bg-pink-600 bg-opacity-20">
            <div class="mb-4">
              <h5 class="font-bold text-pink-900 block mb-4">
                Sitemap
              </h5>
              <nav>
                <NuxtLink
                  to="/takarazuka/"
                  class="text-pink-800 block mb-2 hover:underline"
                >TOP</NuxtLink>
                <NuxtLink
                  to="/takarazuka/blog/index"
                  class="text-pink-800 block mb-2 hover:underline"
                >BLOG</NuxtLink>
                <NuxtLink
                  to="/takarazuka/review/index"
                  class="text-pink-800 block mb-2 hover:underline"
                >REVIEW</NuxtLink>
                <NuxtLink
                  to="/takarazuka/actress/index"
                  class="text-pink-800 block mb-2 hover:underline"
                >ACTRESS</NuxtLink>
              </nav>
            </div>
          </div>
          <div class="w-full bg-pink-700 p-4 text-center">
            <p class="text-white">
              このＨＰで書かれた文章の無断転載を禁じます。 Copyright &copy; 2005-2018 JIMMY. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <Transition name="hum">
        <div
          v-if="hamburger === 'open'"
          class="w-72 p-2 pl-4 pr-4 lg:hidden fixed top-0 right-0 bg-white"
        >
          <div class="text-right">
            <button>
              <Icon
                name="fa6-solid:xmark"
                class="text-pink-900 opacity-70 font-bold text-3xl lg:text-4xl"
                @click="barOpen('close')"
              />
            </button>
          </div>
          <TakarazukaMenu />
        </div>
      </Transition>
    </Body>
  </div>
</template>

<style scoped>
.hum-enter-active,
.hum-leave-active {
  transition: all 0.3s ease-out;
}
.hum-enter-from,
.hum-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
