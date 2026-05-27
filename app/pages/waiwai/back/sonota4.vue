<script setup>
import logs from '@/assets/json/waiwai-sonota4.json';

useHead({
  title: '過去ログ｜WAIWAI TAKARAZUKA -宝塚歌劇公演評サイト-',
});
definePageMeta({
  layout: 'waiwai',
});

const themes = {
  bgcolor: 'bg-[#FFF0F5]',
  textcolor: 'text-[#996666]',
  textlink: 'text-[#CC9999]',
  textvlink: 'text-[#663333]',
  textalink: 'text-[#FF99FF]',
};
</script>

<template>
  <div
    :class="[themes.bgcolor, themes.textcolor]"
    class="h-full py-2 px-4"
  >
    <NuxtLink to="/waiwai">
      <span class="text-[#CC6699]">▲</span>
      <span
        class="underline hover:no-underline font-bold"
        :class="themes.textlink"
      >HomePage</span>
    </NuxtLink>
    <div
      class="text-[#CC9999] text-center w-full mb-4"
    >
      <h1 class="text-2xl font-bold">
        その他の公演
      </h1>
      <h2>&emsp;その他の公演、ディナーショー等のイベント、宝塚以外の公演、ビデオ、CDの感想などもOK!</h2>
    </div>
    <hr>
    <template
      v-for="log in logs"
      :key="log.id"
    >
      <h3 class="bg-[#FFC0CB] block w-full mt-4 px-4">
        <span class="text-[#CC6699] mr-2">■</span>
        <span class="text-[#FFFFFF] font-bold">{{ log.author }}</span>
      </h3>
      <p class="mx-4">
        {{ log.date }}
      </p>
      <p
        class="mx-8 mt-4 mb-12"
        v-html="log.content"
      />
      <hr>
    </template>
  </div>
</template>
