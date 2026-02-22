<script setup>
useHead({
  title: "JIMMY's Homepage",
  meta: [
    {
      name: "description",
      content:
        "「歌劇」誌「高声低声」や、以前存在した「宝塚公式HP」の「お便りコーナー」、「WAIWAI TAKARAZUKA」にアップした公演評をまとめました。",
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/img/takarazuka/apple-touch-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/img/takarazuka/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/img/takarazuka/favicon-96x96.png",
    },
  ],
});

const hamburger = ref("close");
function barOpen(toggle) {
  hamburger.value = toggle;
}

const teamProps = useAttrs();
const bgImg = ref("bg-[url(/images/jimmy/review/sonota.gif)]");
const bgColor = ref("bg-slate-200");
const barColor = ref("bg-slate-400");
const mapBack = ref("bg-slate-500");
const barBorder = ref("border-slate-500");
const textTitle = ref("text-slate-600");
const textLink = ref("text-slate-500");
if (teamProps.team === "flower") {
  bgImg.value = "bg-[url(/images/jimmy/review/hana.gif)]";
  bgColor.value = "bg-pink-100";
  barColor.value = "bg-pink-500";
  mapBack.value = "bg-pink-600";
  barBorder.value = "border-pink-600";
  textTitle.value = "text-pink-700";
  textLink.value = "text-pink-600";
}
if (teamProps.team === "moon") {
  bgImg.value = "bg-[url(/images/jimmy/review/tuki.gif)]";
  bgColor.value = "bg-yellow-100";
  barColor.value = "bg-yellow-500";
  mapBack.value = "bg-yellow-600";
  barBorder.value = "border-yellow-600";
  textTitle.value = "text-yellow-700";
  textLink.value = "text-yellow-600";
}
if (teamProps.team === "snow") {
  bgImg.value = "bg-[url(/images/jimmy/review/yuki.gif)]";
  bgColor.value = "bg-green-100";
  barColor.value = "bg-green-500";
  mapBack.value = "bg-green-600";
  barBorder.value = "border-green-600";
  textTitle.value = "text-green-700";
  textLink.value = "text-green-600";
}
if (teamProps.team === "star") {
  bgImg.value = "bg-[url(/images/jimmy/review/hosi.gif)]";
  bgColor.value = "bg-sky-100";
  barColor.value = "bg-sky-500";
  mapBack.value = "bg-sky-600";
  barBorder.value = "border-sky-600";
  textTitle.value = "text-sky-700";
  textLink.value = "text-sky-600";
}
if (teamProps.team === "cosmos") {
  bgImg.value = "bg-[url(/images/jimmy/review/sora.gif)]";
  bgColor.value = "bg-purple-100";
  barColor.value = "bg-purple-500";
  mapBack.value = "bg-purple-600";
  barBorder.value = "border-purple-600";
  textTitle.value = "text-purple-700";
  textLink.value = "text-purple-600";
}
</script>

<template>
  <div
    class="noto-sans font-[300]"
    :class="{ 'overflow-hidden': hamburger === 'open' }"
  >
    <div :class="bgImg">
      <div>
        <div class="w-full flex justify-between p-2 fixed" :class="barColor">
          <h1 class="pl-4 lg:pl-8 text-2xl sm:text-2xl lg:text-3xl poiret-one">
            <NuxtLink to="/jimmy/" class="text-white"
              >JIMMY's Homepage</NuxtLink
            >
          </h1>
          <p v-text="team"></p>
          <nav class="pr-4 pt-1 hidden lg:block">
            <NuxtLink
              to="/jimmy/introduction"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="barBorder"
              >INTRODUCTION</NuxtLink
            >
            <NuxtLink
              to="/jimmy/review"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="barBorder"
              >REVIEW</NuxtLink
            >
            <NuxtLink
              to="/jimmy/contribution"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="barBorder"
              >CONTRIBUTION</NuxtLink
            >
            <NuxtLink
              to="/jimmy/topic"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="barBorder"
              >TOPICS</NuxtLink
            >
            <NuxtLink
              to="/jimmy/actress"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="barBorder"
              >ACTRESS</NuxtLink
            >
            <NuxtLink
              to="/jimmy/gallery"
              class="text-white px-4 py-2 mr-4 border-b-2 border-r-2"
              :class="barBorder"
              >GALLERY</NuxtLink
            >
          </nav>
          <button class="lg:hidden">
            <Icon
              name="fa6-solid:bars"
              @click="barOpen('open')"
              class="text-white font-bold text-3xl lg:text-4xl"
            />
          </button>
        </div>
        <div>
          <slot />
        </div>
        <div class="p-8 bg-opacity-20" :class="mapBack">
          <div class="mb-4">
            <h5 class="font-bold block mb-4" :class="textTitle">Sitemap</h5>
            <nav>
              <NuxtLink
                to="/jimmy/introduction"
                class="block mb-2 hover:underline"
                :class="textLink"
                >INTRODUCTION</NuxtLink
              >
              <NuxtLink
                to="/jimmy/review"
                class="block mb-2 hover:underline"
                :class="textLink"
                >REVIEW</NuxtLink
              >
              <NuxtLink
                to="/jimmy/contribution"
                class="block mb-2 hover:underline"
                :class="textLink"
                >CONTRIBUTION</NuxtLink
              >
              <NuxtLink
                to="/jimmy/topic"
                class="block mb-2 hover:underline"
                :class="textLink"
                >TOPICS</NuxtLink
              >
              <NuxtLink
                to="/jimmy/actress"
                class="block mb-2 hover:underline"
                :class="textLink"
                >ACTRESS</NuxtLink
              >
              <NuxtLink
                to="/jimmy/gallery"
                class="block mb-2 hover:underline"
                :class="textLink"
                >GALLERY</NuxtLink
              >
            </nav>
          </div>
        </div>
        <div class="w-full p-4 text-center" :class="barColor">
          <p class="text-white">
            このＨＰで書かれた文章の無断転載を禁じます。 Copyright &copy;
            1994-2004 JIMMY. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
    <Transition name="hum">
      <div
        class="w-72 h-screen p-2 pl-4 pr-4 lg:hidden fixed top-0 right-0 bg-white overflow-auto"
        v-if="hamburger === 'open'"
      >
        <div class="text-right">
          <button>
            <Icon
              name="fa6-solid:xmark"
              @click="barOpen('close')"
              class="opacity-70 font-bold text-3xl lg:text-4xl"
              :class="textTitle"
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
