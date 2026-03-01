<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            宝塚バウホール公演「アナジ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              初主演より四年余り、ようやく巡って来た轟悠バウホール主演二作目「アナジ」。轟の圧倒的な存在感と、役者揃いの雪組の纏まりが心地よく、大満足の公演であった。
            </p>
            <p>
              前述の圧倒的な存在感で船乗り達を心酔させる一方、涼やかな目元に時折優しい眼差しを除かせる轟悠のアナジは、全く惚れ惚れする程良い男。どこを取っても危なげない出来で、他の出演者との実力の差は歴然。
            </p>
            <p>
              薩摩に恨みを持つ琉球人クロバエを演じた安蘭けいは、これまた実力派若手の呼び声通りの安定した出来。黒っぽいメイクが映え、棒の扱いも見事で、静かな中にも男の大きさを出した。アナジと行動を共にする船乗り達も総じて皆公演で、中でも風早優の台詞回しが絶妙。汐美真帆は子を思う父親としての暖かさと、船乗り達の纏め役としての包容力が魅力的。貴城けいの甘い二枚目振りが一際目を引き、歌声も良い。新生雪組においてこの四人の成長は著しく、これからの注目株だ。
            </p>
            <p>
              今回ヒロインに大抜擢された紺野まひるは美しい声が魅力的だが、まだまだ台詞を言うのに精一杯という感じ。メイクや衣装なども元の美しさを生かしているとは言い難く、これからの成長を待ちたい。対して星奈優里のきりりとした美しさが際立ったが、ただ憎むばかりでヒロインとしての色は薄く、役不足で気の毒であった。
            </p>
            <p>
              憎まれ役を徹底して演じた汝鳥伶を始め、立ともみ、小乙女幸、美々杏里、灯奈美が安定した演技で舞台を支え、感動を呼ぶ。その他、最下級生まで活躍の場があったのも嬉しく、研一の蒼海拓が彩吹真央休演の代役として実力のある所を見せ、華宮あいりは台詞はまだまだながら綺麗な男役でこれからが楽しみ。しかし、アナジの男気がベースの作品ではあるが、娘役に全体に覇気がなかったのが唯一残念だ。
            </p>
            <p>
              ＮＨＫ－ＢＳ２で懐かしい作品の数々が放映されていたが、そのインタビューの中で、麻実れいが「芝居の雪組」と言われる雪組の特色として、男同士の絆を中心とした話が多かったと述べておられた。「アナジ」は正にその流れを汲む雪組ならではの作品。そして轟は正にそんな雪組ならではの役者と言えるだろう。これからの宝塚の中で、確かな実力と存在感を見せる轟に期待が高まる。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              いしちゃん(轟悠)のかっこ良さと、雪組自慢の実力派若手達の頼もしさに大満足の舞台でした。今から思えば、谷先生お得意の「皆殺し」にはちょっと疑問ありでしたが。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
    
  </div>
</template>

<style scoped></style>
