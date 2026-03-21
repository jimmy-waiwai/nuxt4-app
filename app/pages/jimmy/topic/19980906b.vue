<script setup>
definePageMeta({
  title: 'スターの小部屋/9月第一回',
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
            スターの小部屋/9月第一回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/09/06 up)
            </p>
            <p>まず<strong>「浅茅が宿/ラ・ヴィール」より、たーたん(香寿たつき)、こうちゃん(汐風幸)、とうこちゃん(安蘭けい)のトーク</strong>。何か、今回役不足の3人だけに、とりたてて面白い話もなく・・、終わってしまいましたね（^_^;）。敢えて言えば、ラ・ヴィールで「若手が活躍している」っていう辺りが、私も公演評に書いていた事なので、「そーそー」と思ったくらいかな・・。</p>
            <p>次に<strong>「イコンの誘惑」より、マリコさん(麻路さき)、のるさん(稔幸)のトーク</strong>。いやー、毎度、サービスたっぷりのトークをありがとうございます（^_^;）～。ミハイル(マリコさんの役)の若い時代の所で、<strong>おじさんが入ってしまう</strong>（^_^;）、とか、<strong>ゆりちゃん(星奈優里)はマダムになる</strong>（^_^;）とか。のるさんがスパイ、という話で、「二人だけが悪」に話が入りかけて、<strong>「ダメダメ・・お笑い入っちゃうから・・」</strong>とか（^_^;）・・。作品を見て、<strong>ファンも思わずムズムズきてしまう所</strong>（^_^;）が、分ってらっしゃるんでしょうね～、二人とも（^_^;）。</p>
            <p>次は<strong>いしちゃん(轟悠)の一人芝居の制作発表</strong>。「また、何でこんな急に?」という疑問はさておき、だんだん楽しみになってきました～、私（^_^;）。久しぶりに凝った太田作品が観られそうだしね。</p>
            <p>次は・・<strong>宙組「エリザベート」の制作発表</strong>・・。いやだ～、と言いつつ、<strong>「ずんちゃん(姿月あさと)ステキ～(*^｡^*)」</strong>とか言ってしまう私って一体（^_^;）・・。この混乱状態、もう、ほっといてください・・。自分でも整理できません（^_^;）。</p>
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
