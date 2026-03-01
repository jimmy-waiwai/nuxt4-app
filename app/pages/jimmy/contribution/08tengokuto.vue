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
            宝塚大劇場新人公演「天国と地獄」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              和央ようか主演、雪組新人公演を見る。雪組は中堅以上のスターが充実しており、若手でスターとして名が通っている男役は、他の組と比べてかなり少ない。しかしさすが芝居好きの雪組と言われているだけあって、各々非常に工夫した役作りをしていて、本公演とは又違った楽しい舞台を作り上げていた。
            </p>
            <p>
              和央はやはり、本役一路真輝が歌う数々のナンバーを、どれだけ歌うことが出来るかという所に最も興味があったが、難曲と思われる第十四場の銀橋での歌だけは、音程の危うい所があったものの、プロローグから初主役とは思えないほど堂々と歌っており、安心して見ていられた。高倉京も前半は緊張しているようだったが、思ったよりもしっかり歌っており、又、一希星の本役とは全く違ったオカマ風の脚本家がやりすぎの感はあるものの印象に残った。高倉、一希、宝樹彩、安蘭けいなど、雪組若手はなぜか小柄なかわいらしい感じの人が多く活躍している。返って今までそういう印象を与えがちだった有未れおが上級生らしくしっかりと落ち着いて見えた。しかし今の所、新人公演で一路の役が出来るのは和央以外には考えられない。
            </p>
            <p>
              男役の弱さに比べて、充実していたのは娘役で、純名里沙、渚あき、朱未知留と本役に負けない程堂々とナンバーを歌いこなしており、特に渚の歌がマイクに入らなかったにもかかわらずしっかりと客席まで聞こえてきたのには驚いた。しかし今回抜擢された野乃みるては、緊張の為か声が全く出ていなくてかわいそうな位だった。
            </p>
            <p>
              脇役で印象に残ったのは葛城七穂で、プロデューサー役を本役よりもキザに味付けして余裕たっぷりに演じていて良かった。また森央かずみの振付家役も本役とは違った役作りで笑わせた。
            </p>
            <p>
              とにかく下級生に至るまで、何かやってやろうという意欲が見え、本役とは全く違ったキャラクターの人が続出、楽しい舞台となっていた。最後の挨拶の後カンカンも付いており、舞台、客席共に大いに盛り上がり、終演後とても爽やかな気分になった新人公演だった。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              スタッフの面々が、活気があって、本公演よりずっと面白かったのを覚えています。
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
