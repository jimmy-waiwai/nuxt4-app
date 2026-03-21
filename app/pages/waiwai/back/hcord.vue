<script setup>
useHead({
  title: 'ヘイズ・コード｜WAIWAI TAKARAZUKA -宝塚歌劇公演評サイト-',
});
definePageMeta({
  layout: 'waiwai',
});

const themes = {
  bgcolor: 'bg-[#000000]',
  textcolor: 'text-[#FFFFFF]',
  textlink: 'text-[#FFFFCC]',
  textvlink: 'text-[#FFFF99]',
  textalink: 'text-[#FFFFFF]',
};
</script>

<template>
  <div
    :class="[themes.bgcolor, themes.textcolor]"
    class="h-full py-2 px-4"
  >
    <NuxtLink to="/waiwai">
      <span class="text-[#66CCFF]">▲</span>
      <span
        class="underline hover:no-underline font-bold"
        :class="themes.textlink"
      >HomePage</span>
    </NuxtLink>
    <div
      class="text-[<font color=#66CCFF] text-center w-full mb-4"
    >
      <h1 class="text-2xl font-bold">
        ヘイズ・コード
      </h1>
      <h2>星組／ドラマシティ2006年12/15～27・日本青年館2007年1/4～11</h2>
    </div> <hr>
    <h3 class="bg-[#FFCCFF] block w-full mt-4 px-4">
      <span class="text-[#66CCFF] mr-2">■</span>
      <span class="text-[#000000] font-bold">JIMMY</span>
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
