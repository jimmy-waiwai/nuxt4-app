<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sonota',
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
            小池 修一郎
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/04/01 up
            </p>
            <p>
              広く歌劇団内を見渡して、一番に書くべき先生はだれだろう？&emsp;と思うと、私の場合、やっぱり一番信頼しているのは小池先生かな、と思います。<br>
              バウホール処女作の「ヴァレンチノ」、そして「蒼いくちづけ」、素晴らしくて大好きでした。もちろん新人の演出家の作品だと知って観たので、何てすごい先生なんだ、と。続く「タイム・アダージオ」の頃には、小池先生の三作目だ、と思って、楽しみに観に行った覚えがあります。そういう演出家を意識して観るようになったのって、あの頃からだったかもしれないですね。
            </p>
            <p>
              大劇場では、処女作の「天使の微笑・悪魔の涙」も好きですが、イチロさん(一路真輝)絡みで「JFK」。そして「エリザベート」。サヨナラ直前のこの二作が大好きだから、私の小池先生への信頼はなかなか崩れないのだと思います（^_^;）。<br>
              ミュージカル作り、が基本の先生で、「エリザベート」はミュージカルそのものですが、オリジナルの「JFK」も、歌い踊る政治家たちの辺りがとてもミュージカルっぽくて、面白いんですよ。
            </p>
            <p>
              最近はもう一つ？&emsp;と思う事もあるのですが、それでも大ハズレはないですね。基本的に宝塚の演出家の中では、地力のある先生だと思います。(別に今更私が書かなくても良いと思いますが。)<br>
              「エリザベート」は色んな配役で再演されちゃいましたしね・・。座付演出家だけに、前向きな事しかおっしゃらないですが、本当の所はどう思っておられるんだろう・・。私の思っている通りであろう、そうであって欲しい、という感じです（^_^;）。<br>
              外部の舞台でも活躍されていて、今やとてもメジャーな先生ですが、宝塚ファンとしては、宝塚を見捨ててどこかへ行かないでね～、と思っています。
            </p>
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
