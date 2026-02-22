<script setup>
definePageMeta({
  layout: "jimmy",
});
</script>

<template>
  <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
    <div class="w-48 flex-none pb-16 hidden lg:block">
      <JimmyMenu />
    </div>
    <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
      <div class="pt-8">
        <h2
          class="text-slate-600 text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
        >
          REVIEW
        </h2>
        <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
          <p>
            以前存在した「宝塚公式HP」の「お便りコーナー」や、「WAIWAI
            TAKARAZUKA」（会員制掲示板）にアップした公演評です。
          </p>
        </div>
      </div>
    </div>
    <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
      <JimmyReviewList />
    </div>
  </div>
  <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
    <JimmyReviewList />
  </div>
</template>

<style scoped></style>
