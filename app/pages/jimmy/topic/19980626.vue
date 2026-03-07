<script setup>
definePageMeta({
  title: 'バウ公演、今年後半のラインナップに関する噂(^_^;)',
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
            バウ公演、今年後半のラインナップに関する噂(^_^;)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/06/26 up)
            </p>
            <p>・児玉明子先生演出、伊織直加主演のバウ。</p>
            <p>・植田景子先生演出、大和悠河主演のバウ。</p>
            <p>・荻田浩一先生演出、香寿たつき主演のバウがあるらしい。</p>
            <p>こーんな情報をインターネット上でキャッチ(^_^;)。</p>
            <p>いずれも本当かどうか、この目では確かめていないので断言できませんが、名作の再演に始まった<strong>バウ２０周年記念</strong>の後半を飾るのは、<strong>これからの宝塚を担う超若手演出家の共演</strong>・・という趣向ならば、なかなか気がきいていると思いませんか？</p>
            <p>今度の「歌劇」あたりに情報が載るかしら？楽しみだわ～(^_^;)。</p>
            <p>バウは実験劇場ですもの、冒険大歓迎です！！</p>
            <p>最近のオリジナルは冴えないものが多いし、がんばってね、若手の皆様。楽しみにしてま～す(^_^;)。</p>
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
