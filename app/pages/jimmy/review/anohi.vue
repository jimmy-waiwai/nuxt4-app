<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'snow',
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
            あの日みた夢に
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              雪組シアター・ドラマシティ9/4～16
            </p>
            <p>
              雪組ドラマシティ公演<strong>「あの日みた夢に」</strong>、9/12の2公演、観てきました！
            </p>
            <p>
              昨年末の「永遠の祈り」に引き続き、<strong>中村暁先生</strong>の作品。今回も良くまとまった佳作でした。最近になって、ちょっと、私の中で信頼感回復中です。<br>
              本物のギャングが見たら怒りそうな、甘～い、かっこ良いギャング達でしたが、宝塚ですし、本物のギャングが観る事もないでしょうし(^_^;)、良いのではないでしょうか。
            </p>
            <p>
              マイケルの<strong>朝海ひかる</strong>。余裕が出て、安心して観ていられました。<br>エリーの<strong>舞風りら</strong>も健気さが良く出ていて、彼女らしいです。<br>
              安定感の出てきた二人の下で、若手が伸び伸びとがんばっているのが感じられました。
            </p>
            <p>
              スティーブの<strong>壮一帆</strong>は、白衣が似合いますね～。無理してかっこつけていない所が、誠実で良かったです。あまり今まで褒めた事がない人なのですが(^_^;)、2度目のプロポーズの時の心細げな所も好きでした。優しい役の時の方が良いですね。
            </p>
            <p>
              ロッキーの<strong>凰稀かなめ</strong>。キレイでした～。あんなギャングがいたら・・お姉さん心配(笑)。<br>
              ギャングのボスの予定が、いつの間にか息子になっていましたが、その方が無理がないですね。怒ったり暴れたりなんて、ガラじゃなさそうな事を(^_^;)がんばってるな～、という気がしましたが、良く演っていたと思います。ラストの朝海との立ち回りも、迫力があってなかなか。
            </p>
            <p>
              ハンキーの<strong>緒月遠麻</strong>。相変わらず気持ちの良い好演。中日好演のディミトリと似たようなキャラクターなので、得意な分野なんだろうな、と思います。<br>
              感心するのは、台詞に気持ちの流れが乗っている所。笑いを取りながらも、ラストはシリアスで・・よく考えられていると思いますね。
            </p>
            <p>
              スージーの<strong>天勢いづる</strong>。めちゃめちゃ可愛かったけれど・・「ナイスバディ」だけはないですよね(^_^;)。ボーイッシュな役なので、この公演限定の娘役と言われても、分からないような感じです。<br>
              フィナーレのドレス姿も違和感なく、背丈も他の娘役たちと変わらないので、逆に「よくこれまで男役でがんばってこられたな～。」と思った位です。<br>シーヴィーの<strong>貴船尚</strong>も彼女らしいなごみキャラが得難い。
            </p>
            <p>
              フラニーの<strong>舞咲りん</strong>は、そこまで嫌味に作っちゃって良いの？&emsp;と思う程でしたが、気持ちの良い上手さ。エルザの<strong>涼花リサ</strong>も、色気はないけれどバカっぽい性格付けが可愛い。<br>
              成長期(?)の若手に惜しみなく活躍の場を与えてくれた、全体に観ていてとても楽しい公演でした。
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★★<span class="text-gray-400">★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyReviewList />
    </div>
    
  </div>
</template>

<style scoped></style>
