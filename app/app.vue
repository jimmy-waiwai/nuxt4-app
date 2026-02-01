<script setup>
</script>

<template>
  <div>
    <!-- NuxtRouteAnnouncer スクリーンリーダーなどの支援技術(assistive technologies)を利用しているユーザにページタイトルの通知を行うことでアクセシビリティを向上させることを目的としたコンポーネント -->
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  .noto-sans {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 300;
  }
  .noto-serif {
    font-family: "Noto Serif JP", serif;
    font-weight: 400;
  }
  .klee-one {
    font-family: "Klee One", cursive;
    font-weight: 400;
  }
</style>
