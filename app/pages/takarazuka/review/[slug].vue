<script setup lang="ts">
import { computed } from 'vue';

import takarazukaReviewJson from '~/assets/json/takarazuka-review.json';

definePageMeta({
  layout: 'takarazuka',
});

const route = useRoute();

// slugの変化に合わせて自動的にデータを再検索する
const pageData = computed(() => {
  const slug = route.params.slug;
  return takarazukaReviewJson.data.find(item => item.slug === slug) || {};
});

// デバッグ用（computedの中身を監視）
watchEffect(() => {
  console.log('Current pageData:', pageData.value);
});
</script>

<template>
  <div>
    <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
      <div class="w-48 flex-none pb-16 hidden lg:block">
        <TakarazukaMenu />
      </div>
      <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
        <div
          v-if="pageData.subject"
          class="pt-8"
        >
          <h2
            class="text-pink-900 text-2xl sm:text-3xl md:text-4xl klee-one mb-2"
            v-text="pageData.subject"
          />
          <p
            class="text-slate-500 text-sm md:text-base mb-4 text-right"
            v-html="pageData.ymd"
          />
          <div
            class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4"
            v-html="pageData.contents"
          />
        </div>
        <!-- データが見つからない場合のハンドリング -->
        <div
          v-else
          class="pt-8 text-center"
        >
          <p>データが見つかりませんでした。</p>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <TakarazukaReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <TakarazukaReviewList />
    </div>
  </div>
</template>
