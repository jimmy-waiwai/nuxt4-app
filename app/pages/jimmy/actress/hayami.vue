<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            速水 リキ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/08/24 up
            </p>
            <p>
              今となっては知る人ぞ知る（^_^;）、82期同期生ユニット<strong>「TAP」</strong>の一人。<br>
              TAPとしてTVに出たりしているのを観た時には、容姿とダンス力で華宮あいりが良いと思っていました。<br>
              その後、舞台を観てみると、宝塚の男役としては、良い容姿に恵まれている月丘七央が良いのではないかと・・。<br>
              その後、<strong>「望郷は海を越えて」新公のアレクセイ</strong>、<strong>「ベルばら2001」新公のアンドレ</strong>辺りから、リキちゃんが良いと思うようになりました。<br>
              (ごめんよ・・一番スターのさららん(月船さらら)。)
            </p>
            <p>
              歌が良かったのは<strong>TAP時代</strong>から。そう言えば、<strong>ソロで一番に歌っていた</strong>のは、リキちゃんだったんですよね。<br>
              加えて<strong>男役らしい包容力</strong>、「ベルばら」なら完全にオスカルよりも、アンドレやフェルゼン役者です。そこが好き。
            </p>
            <p><strong>「ザ・ショー・ストッパー」</strong>でも、まやちゃん(久遠麻耶)が出ていない炎の男の場面など、みずさん(水夏希)の後ろで踊っているリキちゃんの雰囲気を、良いな～、と思って観ていました。</p>
            <p>役では<strong>「エイジ・オブ・イノセンス」</strong>の<strong>リヴィエール</strong>が良かったですね。小柄だけれど、<strong>温かい包容力を感じさせてくれる所が、私好み</strong>なのです（^_^;）。</p>
            <p><strong>今、宙組若手の中では、一番観ていて嬉しい男役さん</strong>です。その濃い顔を生かして、がんばれ～、<strong>バッショネイト・速水！</strong></p>
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
