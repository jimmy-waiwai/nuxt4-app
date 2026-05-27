<script setup>
import logs from '@/assets/json/waiwai-voice12.json';

useHead({
  title: '過去ログ｜WAIWAI TAKARAZUKA -宝塚歌劇公演評サイト-',
});
definePageMeta({
  layout: 'waiwai',
});

const themes = {
  bgcolor: 'bg-[#FFFFCC]',
  textcolor: 'text-[#996600]',
  textlink: 'text-[#CC9900]',
  textvlink: 'text-[#996600]',
  textalink: 'text-[#FFFF00]',
};
</script>

<template>
  <div
    :class="[themes.bgcolor, themes.textcolor]"
    class="h-full py-2 px-4"
  >
    <NuxtLink to="/waiwai">
      <span class="text-[#FF9900]">▲</span>
      <span
        class="underline hover:no-underline font-bold"
        :class="themes.textlink"
      >HomePage</span>
    </NuxtLink>
    <div
      class="text-[#CC9900] text-center w-full mb-4"
    >
      <h1 class="text-2xl font-bold">
        雑談用掲示板
      </h1>
      <h2>～投稿者同士の交流のページです～</h2>
    </div>
    <hr>
    <template
      v-for="log in logs"
      :key="log.id"
    >
      <h3 class="bg-[#FFCC66] block w-full mt-4 px-4">
        <span class="text-[#FF9900] mr-2">■</span>
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
