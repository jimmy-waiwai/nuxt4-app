<script setup>
definePageMeta({
  title: '12月のアクセス',
  layout: 'jimmy',
  team: 'topics',
});

// レイアウトから提供された 'pageTheme' を受け取る
const themeRaw = inject('jimmyColor', null);

// 2. computed を使って安全に中身を取り出す
// .value が存在しない場合（default）のフォールバックを用意する
const themeConfig = computed(() => {
  return themeRaw?.value || {
    bgimg: 'bg-[url(/images/jimmy/review/sonota.gif)]',
    bgcolor: 'bg-slate-200',
    bar: 'bg-slate-400',
    map: 'bg-slate-500',
    barborder: 'border-slate-500',
    texttitle: 'text-slate-600',
    textlink: 'text-slate-500',
  };
});
</script>

<template>
  <div>
    <div class="flex justify-center pl-4 lg:pl-8 pr-4 lg:pr-8 pt-20">
      <div class="w-48 flex-none pb-16 hidden lg:block">
        <JimmyMenu />
      </div>
      <div class="flex-1 pl-2 md:pl-8 xl:pl-16 pr-2 md:pr-8 xl:pr-16 pb-16">
        <div class="pt-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl klee-one font-[400] mb-8"
            :class="themeConfig.texttitle"
          >
            12月のアクセス
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/10 up)
            </p>
            <p>プロバイダーより送られてくる各ページのアクセス数報告書より、ご紹介しますね。()内は12月のアクセス数です。</p>
            <p>●「まずは公演」</p>
            <p>１．エリザベート／宙組(330)２．レビュースペシャル'98(193)３．シンデレラ・ロック(153)</p>
            <p>先月に引き続き、ずんちゃん(姿月)トートに思い入れたっぷりの<strong>「エリザ」がダントツ人気</strong>ですね（^_^;）。ありがとうございます！！</p>
            <p>●「気になるこの人をチェック」</p>
            <p>１．和央ようか(97)２．湖月わたる(85)３．姿月あさと(75)</p>
            <p>おお、宙組トップ３が並んでおりますね～（^_^;）。和央＆湖月は最近のアップですが・・、相変わらず<strong>ずんちゃん強し</strong>（^_^;）！！最近また追加が滞っていますが・・がんばりますね（^_^;）。</p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyTopicsList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyTopicsList />
    </div>
  </div>
</template>

<style scoped></style>
