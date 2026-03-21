<script setup>
definePageMeta({
  title: '風花舞退団',
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
            風花舞退団
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/05/26 up)
            </p>
            <p>新聞に出るまで、全く知りませんでした。本当に<strong>残念です</strong>。</p>
            <p>
              最近は大人しい役も難なくこなすようになってしまいましたが、特に<strong>「CAN CAN」のピスタッシュ</strong>とか、<strong>「グランドホテル」新公のフラムシェン</strong>とか、<strong>元気の良い役</strong>が大好きでした。今度もそんな役だと良いなー。もちろん、飛びぬけて素晴らしい<strong>ダンスもも大好き</strong>です！
              久々のショーでの活躍に、大いに期待したいところですね。
            </p>
            <p>次の相手役は誰かな？ 千紘れいかか西條三恵か、他の組から誰か来るのか？ 微妙ですね。ちょっと今は予想がつきません（^_^;）。←気がはやい・・。</p>
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
