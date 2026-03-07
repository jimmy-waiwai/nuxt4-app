<script setup>
definePageMeta({
  title: 'スターの小部屋/12月第一回',
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
            スターの小部屋/12月第一回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/05 up)
            </p>
            <p>今回は無料放送中にあったそうで、常にスターの小部屋や宝塚、組や生徒などの解説がテロップで流れ続けていて、気が散って弱りました(^_^;)。そのせいか、あまり印象的なトーク内容はなかったのですが・・。とりあえず、ご報告しますね。</p>
            <p>
              <strong>●「エリザベート」よりたかちゃん(和央ようか)、わたる君(湖月わたる)、コムちゃん(朝海ひかる)のトーク</strong><br>
              難しい歌の数々に懸命に取り組んでいる様子が伝わってきましたよね(^_^;)。舞台の様子も少し映してくれて、嬉しかったです。
            </p>
            <p>
              <strong>●「シンデレラ・ロック」よりたにちゃん(大和悠河)、みえちゃん(西條三恵)のトーク</strong><br>
              同年代の二人、という事で、みえちゃんも前のりかちゃん(紫吹淳)とのトークの時よりはずっとリラックスしているのが面白いですよね(^_^;)。関西弁も出てたし(^_^;)。たにちゃんも等身大の作品に当たって、のびのびとがんばっている様子が微笑ましかったです。
            </p>
            <p>
              <strong>●「Endless Love」よりなおちゃん(伊織直加)、みどりちゃん(大鳥れい)のトーク</strong><br>
              舞台の様子を見ると、いまだに頬がムズムズしてきてしまうＪＩＭＭＹですが(^_^;)。二人揃って「少し変わった感性の持ち主」と称される児玉先生。今度はどんな作品を作って下さるのか、まだまだ楽しみにしています！！
            </p>
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
