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
            綾月&emsp;せり
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/12/06 up
            </p>
            <p>
              <strong>綾月せり</strong>ちゃんの初認識は、ちあきちゃん(白鳥かすが)と同じ、バウ<strong>「血と砂」</strong>。ちあきちゃんの件で語りましたが、最下級生で入っていた綾月せりちゃん。<br>
              <strong>トロ(牛)のダンス</strong>をしている所は、同じく出演されていた<strong>嘉月絵理</strong>ちゃんだと・・ずっと勘違いしていました。<strong>バウ公演中勘違いし続けていた</strong>かも（^_^;）。<br>
              今も思いますが、<strong>似ている</strong>んですよ～。
            </p><p>
              その後は<strong>「長い春の果てに」</strong>で、<strong>ケロちゃん(汐美真帆)</strong>演じるジャンと台詞を交わす<strong>ウエイター役</strong>をしていました。これもしっかり演っていて、さすがに成績の良い子なんだな、と。<br>
              そして、<strong>「なみだ橋 えがお橋」</strong>の<strong>「結果的美原志帆さんの相手役」</strong>ですよね（^_^;）！&emsp;演りがいのある良い役で、これもますます上手かった～。<br>
              これからも活躍してくれそう・・かな？&emsp;楽しみにしています！
            </p>
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
