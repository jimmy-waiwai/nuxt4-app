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
            雪組大劇場公演「雪之丞変化」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              最後にして、ようやく宝塚歌劇八十周年に相応しい佳作に巡り会えた。雪組「雪之丞変化」は、演出の柴田侑宏が「一路真輝が二番手の頃から温めていた」と述べていただけの事はあって、日本物の美しさと技術の確かさでは他の追随を許さない一路ならではの、魅力が存分に生かされた舞台だ。
            </p>
            <p>
              「えっ？ 女役の次は女形？」。男役一路のファンである私にとって、製作発表を聞いた時点ではそう思わないではなかった。しかし今回の雪之丞は、衣装や鬘、それに楚楚とした立ち居振る舞い等いつもの宝塚の二枚目像からは掛け離れているものの、水も滴る様な美しさと色気でむしろ今までの男役以上に客席を酔わせている。ふと十一月号で、スカーレットを経た後の名古屋「二人だけの戦場」で、一路が初演とは全く違った肩の力の抜けた演技をする様になったとの意見があった事を思い出した。今回の迷いのない舞台を見ていると、トップスターでありながらスカーレットという女役で一公演を通した事によって、一路自身に確かに心境の変化があったであろう事を感じる。これからが「一路真輝」の舞台の本番であろう。
            </p>
            <p>
              花總まりは事実上これがトップ娘役の披露公演となったが、日本物が初めてとは思えない危なげない出来で唸らせる。初日こそ化粧に不慣れを感じたものの日を追うごとに美しくなり、一路とのコンビも非常に透明感があり絵になる。これからが益々楽しみだ。
            </p>
            <p>
              高嶺ふぶきが粋で美しく、気っ風の良さが見ていて気持ち良い。轟悠も安定した出来で、掛け合いの歌でも息がピッタリ。香寿たつきの少年役が上手い。貫録ある役よりこのような役の方が爽やかで好きだ。和央ようかもしっかり芝居が出来ていて頼もしい。
            </p>
            <p>
              その他では、葛城七穂が敵役を堂々と演じて期待に応え、安蘭けいも儲け役を新人ながら楽々と演じている感じ。有未れお、宝樹彩、寿つかさ、風早優ら役者連中が各々役を膨らませているのが、ちょっとした見もの。
            </p>
            <p>
              ショー「サジタリウス」は短い時間ながら充実した構成。雪組のショーは必ず場面を一路、高嶺、轟と分けているのが良い。中でも「情熱の星」は一路、花總コンビの個性に良く合い、歌、踊り共に非常に盛り上がる場面になっていた。星奈優里の生き生きとしたダンスも目立つ。キングコングには驚いたが、一路、高嶺、轟の普段の仲の良さが伝わってくる様で楽しい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              トップになってからの一路さんの舞台が、どんどん良くなってき始めた頃の公演です。「役者連中」は、今見ると、確かに面白そうなメンバーですよね。ケロちゃん(汐美真帆)もいたはずなんだけど・・、あぁ、残念！
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
