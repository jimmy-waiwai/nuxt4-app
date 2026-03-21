<script setup>
definePageMeta({
  title: 'ケロちゃんのサイン当たりました！！',
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
            ケロちゃんのサイン当たりました！！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/09/04 up)
            </p>
            <p>ちょっと聞いて下さいな～。先日報告した「ビバ・タカラジェンヌ」のプレゼントだった<strong>ケロちゃんのサイン色紙</strong>、当たっちゃいました(*^｡^*)～。</p>
            <p>かなり、狙って書いたもんな～、ハガキ（^_^;）。</p>
            <p>今週の6日、「ビバ」の放送時に、ラスト「先々週のプレゼント、当選者の発表です」と、ノコさんがプレゼント当たった人のハガキを読んでくれると思うのですが、私の、読んでくれないかなぁ・・（^_^;）。</p>
            <p>5人当選しているはずなので、確率1/5です（^_^;）。</p>
            <p>「ファン歴15年の私が、今最も注目しているのが汐美真帆さん。「心中」には私もとても感激したので、ノコさんがその話をしてくださったのが嬉しかったです。バウ出演も決まって、地元ファンは嬉しいです。サイン下さったら家宝にします（^_^;）。」</p>
            <p>みたいなことをハガキに書きました（^_^;）。そんな内容のものをノコさんが読んで下さっていたら、それは私です（^_^;）。</p>
            <p>今、私の部屋には、<strong>麻実れい様、一路真輝様、のサインに並んで、ケロちゃんのサインがさんぜんと輝いております</strong>（^_^;）！！私の部屋には<strong>タカラヅカの上下関係</strong>は通用しません（^_^;）。はははっ。</p>
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
