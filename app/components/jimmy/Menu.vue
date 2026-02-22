<script setup lang="ts">
// Propsを受け取る定義
const teamProps = defineProps({
  team: String,
});

const btnBack = ref("bg-slate-500");
const textTitle = ref("text-slate-600");
const textLink = ref("text-slate-500");
if (teamProps.team === "flower") {
  btnBack.value = "bg-pink-600";
  textTitle.value = "text-pink-700";
  textLink.value = "text-pink-600";
}
if (teamProps.team === "moon") {
  btnBack.value = "bg-yellow-600";
  textTitle.value = "text-yellow-700";
  textLink.value = "text-yellow-600";
}
if (teamProps.team === "snow") {
  btnBack.value = "bg-green-600";
  textTitle.value = "text-green-700";
  textLink.value = "text-green-600";
}
if (teamProps.team === "star") {
  btnBack.value = "bg-sky-600";
  textTitle.value = "text-sky-700";
  textLink.value = "text-sky-600";
}
if (teamProps.team === "cosmos") {
  btnBack.value = "bg-purple-600";
  textTitle.value = "text-purple-700";
  textLink.value = "text-purple-600";
}
</script>
<template>
  <div class="p-4">
    <h3 class="font-bold block mb-4" :class="textTitle">
      JIMMYの過去の公演評などをまとめました
    </h3>
    <nav class="mb-12">
      <NuxtLink
        to="/jimmy/"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">TOP</span></NuxtLink
      >
      <NuxtLink
        to="/jimmy/introduction"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">INTRODUCTION</span></NuxtLink
      >
      <NuxtLink
        to="/jimmy/review"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">REVIEW</span></NuxtLink
      >
      <NuxtLink
        to="/jimmy/contribution"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">CONTRIBUTION</span></NuxtLink
      >
      <NuxtLink
        to="/jimmy/topic"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">TOPICS</span></NuxtLink
      >
      <NuxtLink
        to="/jimmy/actress"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">ACTRESS</span></NuxtLink
      >
      <NuxtLink
        to="/jimmy/gallery"
        class="bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        :class="btnBack"
        ><span class="text-white">GALLERY</span></NuxtLink
      >
    </nav>
    <h3 class="font-bold block mb-4" :class="textTitle">JIMMYのページ</h3>
    <nav class="mb-12">
      <NuxtLink to="/" class="block mb-4 hover:underline" :class="textLink"
        >WAIWAI TAKARAZUKA（会員制掲示板）</NuxtLink
      >
      <NuxtLink to="/" class="block mb-4 hover:underline" :class="textLink"
        >JIMMY's Homepage</NuxtLink
      >
      <NuxtLink to="/" class="block mb-4 hover:underline" :class="textLink"
        >WAIWAI WEB PAGE</NuxtLink
      >
    </nav>
  </div>
</template>
