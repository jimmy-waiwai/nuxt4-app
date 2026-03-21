<script setup>
definePageMeta({
  title: '見たゾ（^_^;）、竹の塚歌劇団！！',
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
            見たゾ（^_^;）、竹の塚歌劇団！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/09/07 up)
            </p>
            <p>噂の「SMAP×SMAP」のパロディーの一つ<strong>「竹の塚歌劇団」</strong>。前回見のがしたのですが、話題になっていたので気になっていたんです（^_^;）。2回目があった、ってことは、結構好評だったんでしょうかね～？</p>
            <p>あーっはっはっは！！いやー、笑わせて頂きました（^_^;）～。</p>
            <p>他の人は何か変だけど、<strong>キムタク、似合い過ぎてます～</strong>（^_^;）。何か、キザり具合がサマになってて、<strong>そのまま宝塚に混じったら、人気出そう</strong>（^_^;）。</p>
            <p>「宝塚をバカにしている！！」という意見、出て当然だと思うけど、そんなに目くじら立てる程、毒のない内容だし、結構宣伝にもなるかもよ（^_^;）。</p>
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
