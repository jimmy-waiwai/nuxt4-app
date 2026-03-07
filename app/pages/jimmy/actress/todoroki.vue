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
            轟　　悠
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/04/15 up
            </p>
            <p>私は、愛華みれ、真琴つばさ、轟悠、稔幸の同期カルテットの中では、彼女を一番買っております(^_^;)。というか、他の３人よりも、抜群に出てくるのが早かったし、<strong>美しいし、上手いし</strong>、なるべくして、トップになった、という気がするんです。イチロさん(一路真輝)時代も、私はユキちゃん(高嶺ふぶき)よりも、轟派でした(^_^;)。</p>
            <p>ベストは何といっても、<strong>「エリザベート」のルキーニ</strong>。もう誰が何と言おうと最高の当たり役でした。迫力ある歌唱、色気、人を食ったような傲慢ささえも素晴らしかったですね。後は、<strong>「ＪＦＫ」のキング牧師</strong>、<strong>バウ「二人だけの戦場」のクリフォード</strong>が良かった。キャラクター的には<strong>アナジ</strong>も良かったですね(物語はイマイチだったけど)。</p>
            <p>
              トップになってから、<strong>役柄に恵まれていない</strong>のが悔しいです。ちょっと守備範囲の狭い所はありますが、<strong>当たれば、ちょっと他の人にはマネできないくらい、すごい公演</strong>ができる人だと思うんですよ。雪組ファンとしても、一刻も早く当たり役を！
              と、半ば悲壮感を漂わせながら、祈っております(^_^;)。<strong>正塚先生のめちゃくちゃ凝った、難しーい作品</strong>(^_^;)なんか、お願いしたいです。今の雪組ならできると思うので。
            </p>
            <p>ショーはトップになってからのものも、結構良いですよね。ベストは<strong>「レ・シェルバン」のジゴロ</strong>かな。<strong>「コート・ダジュール」の造船所</strong>の場面も良かったですよね。</p>
            <p>並外れた容姿と実力を持っている人だけに、<strong>舞台での大ブレイクがこれからきっとある</strong>と信じています。</p>
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
