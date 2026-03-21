<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            朝海 ひかる
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>下級生時代は花組で、<strong>良く千波ゆう等と、数々のダルマっぽい衣装で、スタイルの良さを披露していましたよね</strong>（^_^;）。お人形のようにキレイな人だな～、というのが第一印象です。</p>
            <p>初めて男役らしい役を見たのが<strong>「失われた楽園」新公</strong>だったと思うのですが、ちゃんと男役らしい声も出ているし、歌もまあまあ出来ていて、<strong>男役スターとしてもイケそうだ</strong>と、かなり印象が変わりました（^_^;）。</p>
            <p>と言っても、<strong>「エリザベート」でルドルフ</strong>役がまわってきたのには、心配しました。でも実際は、歌もそこそこ歌えていたし、何よりも<strong>儚気な姿がルドルフにピッタリで、コムちゃん(朝海)で良かったと思いました</strong>。東上できなかったのは、本当に残念だったと思いますね。</p>
            <p>そのまま宙組だったら良かったのですが、雪組ですもの。かなりの激戦地です。<strong>コムちゃんの前途は多難だと思いますが、今の歌劇団は何が起こるか分かりません</strong>（^_^;）。女役姿が非常にキレイなので、女役を、との声もあるみたいですが、本人にその気はないみたいだし、声が低いので、男役で良いと思いますよ。これからどうなっていくか、楽しみですね。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyActressList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyActressList />
    </div>
  </div>
</template>

<style scoped></style>
