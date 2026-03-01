<script setup>
useHead({
  title: 'JIMMY\'s Homepage',
  meta: [
    {
      name: 'description',
      content:
        '「歌劇」誌「高声低声」や、以前存在した「宝塚公式HP」の「お便りコーナー」、「WAIWAI TAKARAZUKA」にアップした公演評をまとめました。',
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

const route = useRoute();

// 1. ページから 'team' メタデータを取得（設定がない場合は 'default'）
const currentTeam = computed(() => route.meta.team || 'default');

// 2. チーム名に基づいたスタイル設定
const themeConfig = computed(() => {
  const themes = {
    flower: {
      bgimg: 'bg-[url(/images/jimmy/review/hana.gif)]',
      bgcolor: 'bg-pink-100',
      bar: 'bg-pink-500',
      map: 'bg-pink-600',
      barborder: 'border-pink-600',
      texttitle: 'text-pink-700',
      textlink: 'text-pink-600',
    },
    moon: {
      bgimg: 'bg-[url(/images/jimmy/review/tuki.gif)]',
      bgcolor: 'bg-yellow-100',
      bar: 'bg-yellow-500',
      map: 'bg-yellow-600',
      barborder: 'border-yellow-600',
      texttitle: 'text-yellow-700',
      textlink: 'text-yellow-600',
    },
    snow: {
      bgimg: 'bg-[url(/images/jimmy/review/yuki.gif)]',
      bgcolor: 'bg-green-100',
      bar: 'bg-green-500',
      map: 'bg-green-600',
      barborder: 'border-green-600',
      texttitle: 'text-green-700',
      textlink: 'text-green-600',
    },
    star: {
      bgimg: 'bg-[url(/images/jimmy/review/hosi.gif)]',
      bgcolor: 'bg-sky-100',
      bar: 'bg-sky-500',
      map: 'bg-sky-600',
      barborder: 'border-sky-600',
      texttitle: 'text-sky-700',
      textlink: 'text-sky-600',
    },
    cosmos: {
      bgimg: 'bg-[url(/images/jimmy/review/sora.gif)]',
      bgcolor: 'bg-purple-100',
      bar: 'bg-purple-500',
      map: 'bg-purple-600',
      barborder: 'border-purple-600',
      texttitle: 'text-purple-700',
      textlink: 'text-purple-600',
    },
    introduction: {
      bgimg: 'bg-[url(/images/jimmy/introduction.gif)]',
      bgcolor: 'bg-rose-100',
      bar: 'bg-rose-400',
      map: 'bg-rose-600',
      barborder: 'border-rose-500',
      texttitle: 'text-rose-700',
      textlink: 'text-rose-600',
    },
    contribution: {
      bgimg: 'bg-[url(/images/jimmy/contribution.gif)]',
      bgcolor: 'bg-fuchsia-100',
      bar: 'bg-fuchsia-400',
      map: 'bg-fuchsia-600',
      barborder: 'border-fuchsia-500',
      texttitle: 'text-fuchsia-700',
      textlink: 'text-fuchsia-600',
    },
    topics: {
      bgimg: 'bg-[url(/images/jimmy/topics.gif)]',
      bgcolor: 'bg-orange-100',
      bar: 'bg-orange-400',
      map: 'bg-orange-600',
      barborder: 'border-orange-500',
      texttitle: 'text-orange-700',
      textlink: 'text-orange-600',
    },
    default: {
      bgimg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
      bgcolor: 'bg-slate-200',
      bar: 'bg-slate-400',
      map: 'bg-slate-500',
      barborder: 'border-slate-500',
      texttitle: 'text-slate-600',
      textlink: 'text-slate-500',
    },
  };
  return themes[currentTeam.value] || themes.default;
});

// 子要素（ページ）で 'pageTheme' という名前で使えるように公開する
provide('jimmyColor', themeConfig);
</script>

<template>
  <div
    class="noto-sans font-[300]"
    :class="{ 'overflow-hidden': hamburger === 'open' }"
  >
    <div :class="themeConfig.bgimg">
      <div>
        <div
          class="w-full flex justify-between p-2 fixed"
          :class="themeConfig.bar"
        >
          <h1 class="pl-4 lg:pl-8 text-2xl sm:text-2xl lg:text-3xl poiret-one">
            <NuxtLink
              to="/jimmy/"
              class="text-white"
            > JIMMY's Homepage </NuxtLink>
          </h1>
          <nav class="pr-4 pt-1 hidden lg:block">
            <NuxtLink
              to="/jimmy/introduction"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.barborder"
            >
              INTRODUCTION
            </NuxtLink>
            <NuxtLink
              to="/jimmy/review"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.barborder"
            >
              REVIEW
            </NuxtLink>
            <NuxtLink
              to="/jimmy/contribution"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.barborder"
            >
              CONTRIBUTION
            </NuxtLink>
            <NuxtLink
              to="/jimmy/"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.barborder"
            >
              TOPICS
            </NuxtLink>
            <NuxtLink
              to="/jimmy/"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.barborder"
            >
              ACTRESS
            </NuxtLink>
            <NuxtLink
              to="/jimmy/"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.barborder"
            >
              GALLERY
            </NuxtLink>
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
        <div
          class="p-8 bg-opacity-20"
          :class="themeConfig.map"
        >
          <div class="mb-4">
            <h5
              class="font-bold block mb-4"
              :class="themeConfig.texttitle"
            >
              Sitemap
            </h5>
            <nav>
              <NuxtLink
                to="/jimmy/introduction"
                class="block mb-2 hover:underline"
                :class="themeConfig.textlink"
              >
                INTRODUCTION
              </NuxtLink>
              <NuxtLink
                to="/jimmy/review"
                class="block mb-2 hover:underline"
                :class="themeConfig.textlink"
              >
                REVIEW
              </NuxtLink>
              <NuxtLink
                to="/jimmy/contribution"
                class="block mb-2 hover:underline"
                :class="themeConfig.textlink"
              >
                CONTRIBUTION
              </NuxtLink>
              <NuxtLink
                to="/jimmy/"
                class="block mb-2 hover:underline"
                :class="themeConfig.textlink"
              >
                TOPICS
              </NuxtLink>
              <NuxtLink
                to="/jimmy/"
                class="block mb-2 hover:underline"
                :class="themeConfig.textlink"
              >
                ACTRESS
              </NuxtLink>
              <NuxtLink
                to="/jimmy/"
                class="block mb-2 hover:underline"
                :class="themeConfig.textlink"
              >
                GALLERY
              </NuxtLink>
            </nav>
          </div>
        </div>
        <div
          class="w-full p-4 text-center"
          :class="themeConfig.bar"
        >
          <p class="text-white">
            このＨＰで書かれた文章の無断転載を禁じます。 Copyright &copy; 1994-2004 JIMMY. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
    <Transition name="hum">
      <div
        v-if="hamburger === 'open'"
        class="w-72 h-screen p-2 pl-4 pr-4 lg:hidden fixed top-0 right-0 bg-white overflow-auto"
      >
        <div class="text-right">
          <button>
            <Icon
              name="fa6-solid:xmark"
              class="opacity-70 font-bold text-3xl lg:text-4xl"
              :class="themeConfig.texttitle"
              @click="barOpen('close')"
            />
          </button>
        </div>
        <JimmyMenu />
      </div>
    </Transition>
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
