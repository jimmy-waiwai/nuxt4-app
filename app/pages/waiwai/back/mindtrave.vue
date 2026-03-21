<script setup>
useHead({
  title: 'MIND TRAVELLER｜WAIWAI TAKARAZUKA -宝塚歌劇公演評サイト-',
});
definePageMeta({
  layout: 'waiwai',
});

const themes = {
  bgcolor: 'bg-[#333333]',
  textcolor: 'text-[#FFFFFF]',
  textlink: 'text-[#CCCCCC]',
  textvlink: 'text-[#999999]',
  textalink: 'text-[#FF0000]',
};
</script>

<template>
  <div
    :class="[themes.bgcolor, themes.textcolor]"
    class="h-full py-2 px-4"
  >
    <NuxtLink to="/waiwai">
      <span class="text-[#66FFFF]">▲</span>
      <span
        class="underline hover:no-underline font-bold"
        :class="themes.textlink"
      >HomePage</span>
    </NuxtLink>
    <div
      class="text-[#66FFFF] text-center w-full mb-4"
    >
      <h1 class="text-2xl font-bold">
        MIND TRAVELLER
      </h1>
      <h2>花組／ドラマシティ2006年11/10～22・日本青年館2006年11/30～12/6</h2>
    </div> <hr>
    <h3 class="bg-[#000000] block w-full mt-4 px-4">
      <span class="text-[#66FFFF] mr-2">■</span>
      <span class="text-[#FFFFFF] font-bold">JIMMY</span>
    </h3>
    <p class="mx-4">
      Date: 2006-11-03 (Fri)
    </p>
    <p class="mx-8 mt-4 mb-12">
      掲示板を設置しました。<br>皆様の書き込み、お待ちしております！
    </p>
    <hr>
  </div>
</template>
