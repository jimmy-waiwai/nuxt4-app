<script setup>
// ページごとのタイトルを設定します
useHead({
  title: 'テストページ2 ｜ WAIWAI TAKARAZUKA',
});
</script>

<template>
  <div class="p-8 bg-[#FFF0F5] text-[#996666] min-h-screen">
    <h1 class="text-2xl font-bold text-[#CC6699]">
      ▲ WAIWAI TAKARAZUKA テスト画面
    </h1>
    <p class="mt-4 text-sm leading-relaxed">
      URL「/waiwai-test2/」への接続に成功しました！<br>
      IPC通信も切断されず、正常にページが表示されています。
    </p>
    <div class="mt-6">
      <NuxtLink
        to="/"
        class="text-[#CC9999] underline hover:no-underline"
      >
        トップページへ戻る
      </NuxtLink>
    </div>
  </div>
</template>
