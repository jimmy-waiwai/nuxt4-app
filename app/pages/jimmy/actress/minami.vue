<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            南海 まり
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/01/30 up
            </p>
            <P>
              <strong>みなみちゃん(南海まり)</strong>を初めて認識したのは、おそらくバウ公演<strong>「イーハトーヴ・夢」</strong>。<br>
              主役の宮澤賢治に色目を使う女中さんの役を、下級生ながら結構ノって可笑しく演じていて（^_^;）、「面白い子だな～」と思いました。
            </p>
            <P>
              そして<strong>「ヴィンターガルテン」</strong>の<strong>カテリーナ</strong>。スタイルが良く、見た目や動きがキレイなのはその前の<strong>「LUCKY
                STAR!」</strong>の頃から気に入っていたのですが、歌も良かったのにますます感心。<br>この後すぐの頃だったと思うのですが、花組のおさちゃん(春野寿美礼)の相手役が決まった！&emsp;という公式HPのニュースを先に知っていた母が、帰宅した私に「誰になったと思う？」と聞いた時、<strong>「南海まりちゃん？」</strong>と一番に答えたんですよ（^_^;）。全然接点ないですし、良く考えたらありえないんですけれど。それ位、良いと思っていたんですね。(ちなみに今の相手役さんの名前が挙がったのは、13番目でした。^_^;)
            </p>
            <P>以来、毎公演楽しみに観ています。<strong>「花のいそぎ」</strong>の<strong>清姫</strong>も良かったですね。最近の新公は観ていないものが多いのですが、良い評判が多いのは嬉しいし、「そうだろうな～」と思っています。怪演系の評判も嬉しく聞いています。やるときゃやる、思い切りの良い人は大好きです（^_^;）。</P>
            <P>
              そんな感じだったので、ケロちゃん(汐美真帆)の組替えが決まった時から、<strong>「組んで踊ったりしてくれないかな～」</strong>と思っていました。だから<strong>「ロマンチカ宝塚'04」</strong>やディナーショー<strong>「Good
                Bye,Good Guy,Good Fellow」</strong>と、サヨナラに思いがけず沢山デュエットが観られたのは、本当に嬉しかったです。「バビロン」からみなみちゃんを抜擢してくれていた、荻田先生が演出だったからかもしれないですね。<br>みなみちゃん視点で言えば、どれも期待通りに良かったですが、特に<strong>「エリザベート」</strong>の<strong>「夜のボート」</strong>を正統に聞かせてくれたのには、ますます感心しました。本当に<strong>ケロちゃんのサヨナラを彩ってくれてありがとう</strong>、という気持ちです、私的には（^_^;）。
            </p>
            <P>最近の舞台を観ていると、<strong>「彼女がトップにならないなんてあり得ない」</strong>というのが<strong>JIMMY内判定</strong>なのですが、まぁ、分からないのが今の宝塚なんですよね～。<br>しかし、突然抜擢される事も娘役は良くある事ですから、私はまだまだ大きな期待をもって、彼女を見ています。<br>しかし、まぁ、これからどうなっても、とりあえずは勿体ないし寂しいので、あっさり退めないで欲しいですね・・（^_^;）。</p>
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
