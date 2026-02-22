<template>
  <div class="p-4">
    <h3 class="font-bold text-pink-900 block mb-4">
      宝塚歌劇団の舞台の感想や話題を雑談。
    </h3>
    <nav class="mb-12">
      <NuxtLink
        to="/takarazuka/"
        class="bg-pink-600 bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        ><span class="text-white">TOP</span></NuxtLink
      >
      <NuxtLink
        to="/takarazuka/blog/index"
        class="bg-pink-600 bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        ><span class="text-white">BLOG</span></NuxtLink
      >
      <NuxtLink
        to="/takarazuka/review/index"
        class="bg-pink-600 bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        ><span class="text-white">REVIEW</span></NuxtLink
      >
      <NuxtLink
        to="/takarazuka/actress/index"
        class="bg-pink-600 bg-opacity-50 w-full p-4 block mb-4 hover:opacity-60"
        ><span class="text-white">ACTRESS</span></NuxtLink
      >
    </nav>
    <h3 class="font-bold text-pink-900 block mb-4">JIMMYのページ</h3>
    <nav class="mb-12">
      <NuxtLink to="/" class="text-pink-800 block mb-4 hover:underline"
        >WAIWAI TAKARAZUKA（会員制掲示板）</NuxtLink
      >
      <NuxtLink to="/" class="text-pink-800 block mb-4 hover:underline"
        >JIMMY's Homepage</NuxtLink
      >
      <NuxtLink to="/" class="text-pink-800 block mb-4 hover:underline"
        >WAIWAI WEB PAGE</NuxtLink
      >
    </nav>
  </div>
</template>
