<script setup>
// Nuxt 4 では ref, useHead などは自動インポートされます

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

// NOTE: LayoutでuseAttrsを使うのは本来推奨されませんが、現状に合わせています。
const teamProps = useAttrs();
// propsが存在しない場合のフォールバックを考慮
const currentTeam = computed(() => teamProps.team || 'default');

// カラーテーマの動的定義（computedを使用）
const themeConfig = computed(() => {
  const themes = {
    flower: {
      bg: 'bg-[url(/images/jimmy/review/hana.gif)]',
      color: 'bg-pink-100',
      bar: 'bg-pink-500',
      map: 'bg-pink-600',
      border: 'border-pink-600',
      text: 'text-pink-700',
      link: 'text-pink-600',
    },
    moon: {
      bg: 'bg-[url(/images/jimmy/review/tuki.gif)]',
      color: 'bg-yellow-100',
      bar: 'bg-yellow-500',
      map: 'bg-yellow-600',
      border: 'border-yellow-600',
      text: 'text-yellow-700',
      link: 'text-yellow-600',
    },
    snow: {
      bg: 'bg-[url(/images/jimmy/review/yuki.gif)]',
      color: 'bg-green-100',
      bar: 'bg-green-500',
      map: 'bg-green-600',
      border: 'border-green-600',
      text: 'text-green-700',
      link: 'text-green-600',
    },
    star: {
      bg: 'bg-[url(/images/jimmy/review/hosi.gif)]',
      color: 'bg-sky-100',
      bar: 'bg-sky-500',
      map: 'bg-sky-600',
      border: 'border-sky-600',
      text: 'text-sky-700',
      link: 'text-sky-600',
    },
    cosmos: {
      bg: 'bg-[url(/images/jimmy/review/sora.gif)]',
      color: 'bg-purple-100',
      bar: 'bg-purple-500',
      map: 'bg-purple-600',
      border: 'border-purple-600',
      text: 'text-purple-700',
      link: 'text-purple-600',
    },
    introduction: {
      bg: 'bg-[url(/images/jimmy/introduction.gif)]',
      color: 'bg-rose-100',
      bar: 'bg-rose-400',
      map: 'bg-rose-600',
      border: 'border-rose-500',
      text: 'text-rose-700',
      link: 'text-rose-600',
    },
    contribution: {
      bg: 'bg-[url(/images/jimmy/contribution.gif)]',
      color: 'bg-fuchsia-100',
      bar: 'bg-fuchsia-400',
      map: 'bg-fuchsia-600',
      border: 'border-fuchsia-500',
      text: 'text-fuchsia-700',
      link: 'text-fuchsia-600',
    },
    default: {
      bg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
      color: 'bg-slate-200',
      bar: 'bg-slate-400',
      map: 'bg-slate-500',
      border: 'border-slate-500',
      text: 'text-slate-600',
      link: 'text-slate-500',
    },
  };
  return themes[currentTeam.value] || themes.default;
});
</script>

<template>
  <div
    class="noto-sans font-[300] min-h-screen"
    :class="{ 'overflow-hidden': hamburger === 'open' }"
  >
    <div
      :class="themeConfig.bg"
      class="min-h-screen bg-cover bg-fixed"
    >
      <div
        :class="themeConfig.color"
        class="min-h-screen bg-opacity-80"
      >
        <header
          class="w-full flex justify-between p-2 fixed top-0 left-0 z-50"
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
              v-for="item in ['INTRODUCTION', 'REVIEW', 'CONTRIBUTION', 'TOPICS', 'ACTRESS', 'GALLERY']"
              :key="item"
              :to="`/jimmy/${item.toLowerCase() === 'topics' || item.toLowerCase() === 'actress' || item.toLowerCase() === 'gallery' ? '' : item.toLowerCase()}`"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="themeConfig.border"
            >
              {{ item }}
            </NuxtLink>
          </nav>

          <button
            class="lg:hidden"
            @click="barOpen('open')"
          >
            <Icon
              name="fa6-solid:bars"
              class="text-white font-bold text-3xl lg:text-4xl"
            />
          </button>
        </header>

        <main class="pt-20">
          <slot />
        </main>

        <footer
          class="p-8 mt-10 bg-opacity-20"
          :class="themeConfig.map"
        >
          <div class="mb-4">
            <h5
              class="font-bold block mb-4"
              :class="themeConfig.text"
            >
              Sitemap
            </h5>
            <nav>
              <NuxtLink
                v-for="item in ['INTRODUCTION', 'REVIEW', 'CONTRIBUTION', 'TOPICS', 'ACTRESS', 'GALLERY']"
                :key="item"
                :to="`/jimmy/${item.toLowerCase() === 'topics' || item.toLowerCase() === 'actress' || item.toLowerCase() === 'gallery' ? '' : item.toLowerCase()}`"
                class="block mb-2 hover:underline"
                :class="themeConfig.link"
              >
                {{ item }}
              </NuxtLink>
            </nav>
          </div>
        </footer>

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
        class="w-72 h-screen p-2 pl-4 pr-4 lg:hidden fixed top-0 right-0 bg-white overflow-auto z-50"
      >
        <div class="text-right">
          <button @click="barOpen('close')">
            <Icon
              name="fa6-solid:xmark"
              class="opacity-70 font-bold text-3xl"
              :class="themeConfig.text"
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
