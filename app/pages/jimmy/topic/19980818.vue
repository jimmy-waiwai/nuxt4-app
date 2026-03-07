<script setup>
definePageMeta({
  title: '宝塚大変？！',
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
            宝塚大変？！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/08/18 up)
            </p>
            <p>我が家で講読している<strong>産経新聞8/18の朝刊</strong>にこーんな見出しの記事がありました(^_^;)。</p>
            <p><strong>「トップスター退団ラッシュ」「真矢みき、麻路さき、千ほさち・・」「今秋から来年迫られるメンバー再編」</strong></p>
            <p>こんな活字が踊ってます・・。</p>
            <p><strong>「年末の大劇場宙組公演では娘役トップの実力派、花總まりが退団するとみられ、トップコンビは雪組を除いて総入れ替えの異常事態になる。」</strong></p>
            <p>おいおい、本当か～(^_^;)。もう決まっているのか～？</p>
            <p><strong>「・・バランスのとれた人事の検討はすでに進められているが、今回の千の突然の退団は「予想外のことで、一からやり直すことになる」と、劇団側はあわてている。」</strong></p>
            <p><strong>「「・・トップクラスや脇主役を張れる芸達者がゴッソリと抜けそうな雲行きで、今秋にも組み替え(移動)をして、早急に来年をにらんだ布陣を整える」と話している。」</strong></p>
            <p>スポーツ紙じゃないんです。産経新聞なんですよ。ここにここまで載るくらいだから、ほぼ間違いない話なのでしょう。</p>
            <p><strong>組替え、確実にありそうです。</strong></p>
            <p>どうなるんだ～？頼むぞ～、歌劇団(T_T)。</p>
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
