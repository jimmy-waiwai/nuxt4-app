<script setup>
definePageMeta({
  title: 'バウ公演、今年後半のラインナップ',
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
            バウ公演、今年後半のラインナップ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/07/02 up)
            </p>
            <p>２つ下に書いた噂の通りでしたね。楽しみです。</p>
            <p><strong>相手役</strong>も発表されていて、<strong>香寿＆月影瞳、伊織＆大鳥れい、大和＆西條三恵</strong>だそうです。</p>
            <p><strong>タータン(香寿)</strong>の相手役が<strong>ぐんちゃん(月影)</strong>なのには驚きましたが、変な邪念は持たず（^_^;）、<strong>荻田先生</strong>だし、楽しみに待ちたいですね。</p>
            <p>
              冠が<strong>「バウ・インドロマン」</strong>となっている<strong>児玉先生</strong>。「ダル・レイク」の影響かしら？
              どんな舞台でしょうねぇ（^_^;）。
            </p>
            <p>ＪＩＭＭＹ大のお気に入りの「Ｉｃａｒｕｓ」を作り出してくれた<strong>植田景子先生</strong>は、こんどはコメディらしく、面白そうです！！</p>
            <p>
              又、これらの公演の前に、<strong>マリコさん(麻路さき)＆ユリちゃん(星奈優里)</strong>の<strong>小池作品</strong>と、<strong>ずんちゃん(姿月あさと)＆花ちゃん(花總まり)</strong>の<strong>バウホール主題歌コンサート</strong>もあるらしいですよ！！
              行きた～い！！ チケット取れるかなぁ・・（^_^;）。
            </p>
            <p>どの公演も、おいしいものばかりで（^_^;）、楽しみです～。</p>
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
