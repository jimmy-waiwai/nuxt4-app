<script setup>
definePageMeta({
  title: '一路真輝＝エリザベート！！',
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
            一路真輝＝エリザベート！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/04/07 up)
            </p>
            <p>直接宝塚には関係ありませんが、一路さんが来年６月～８月(大阪など全国公演は2001年予定)、<strong>帝国劇場にてエリザベート」の三ヶ月ロングラン公演</strong>をするそうです。もちろん<strong>エリザベート役</strong>で（^_^;）。帝国劇場で三ヶ月間主演するなんて、素晴らしいですよね～。<strong>一路さんと「エリザ」</strong>の巡り合わせが、どれ程幸運だったか・・、ファンとして、本当に嬉しい事です。共演者もそうそうたるメンバーが候補に挙がっていて、すごい公演になりそうですね。<strong>演出は小池先生</strong>との事で、その点からも安心できます（^_^;）。</p>
            <p>そして、とにかく<strong>これから二年間は宝塚での再演はない</strong>、という事実に、ホッと胸を撫で下ろした私です（^_^;）。</p>
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
