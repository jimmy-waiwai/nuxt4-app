<script setup>
import takarazukaReviewJson from '~/assets/json/takarazuka-review.json';
</script>

<template>
  <h4 class="font-bold text-pink-900 block p-1 border-t-4 border-t-pink-900 mb-1">
    REVIEWの記事一覧
  </h4>
  <nav class="mb-16">
    <template
      v-for="data in takarazukaReviewJson.data"
      :key="data.slug"
    >
      <NuxtLink
        :to="`/takarazuka/review/${data.slug}`"
        class="block mb-1 hover:underline border-b border-b-gray-400 p-2"
      >
        <span
          class="text-pink-800"
          v-text="data.subject"
        />
        <span
          class="text-sm block text-slate-500"
          v-text="data.ymd"
        />
      </NuxtLink>
    </template>
  </nav>
</template>
