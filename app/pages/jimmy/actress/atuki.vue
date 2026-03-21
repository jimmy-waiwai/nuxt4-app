<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            麻月れんか
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/12/06 up
            </p>
            <p>
              彼女達が初舞台の時、HPでお気に入りさんに選んだのは後述の榎登也君でしたが、その他で気になる人に<strong>麻月れんか</strong>ちゃんの名を挙げていました。その時<strong>「背は低いですが、顔が岡田君(嶺恵斗)に似ていて可愛い（^_^;）。」</strong>と書いているんです。<br>
              そう、<strong>月組にプチ岡っちは二人いた</strong>のでした(そんなに増殖させて良いのか？)。実は書いた本人が忘れていたのですが・・。
            </p><p>私はどちらも良い線いっていると思うのですが、母は麻月ちゃんの方が似ていると言います。何にしても、<strong>なかなか可愛らしくて好みな容姿</strong>なのです（^_^;）。</p>
            <p>役で覚えていると言えば、<strong>「SLAPSTICK」</strong>で<strong>きりやん(霧矢大夢)のダミー</strong>をしていた事。「背格好が近いからかな～」と思いました（^_^;）。</p>
            <p>今回の<strong>「薔薇の封印」</strong>でもパレードで見かけましたが、何か<strong>さらにキレイになっているよう</strong>で、<strong>内心かなり気になりました</strong>よ（^_^;）。これからを楽しみにしています！</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
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
