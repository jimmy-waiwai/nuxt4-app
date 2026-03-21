<script setup>
definePageMeta({
  title: '23日ずんちゃん(姿月あさと)サヨナラ公演中間報告',
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
            23日ずんちゃん(姿月あさと)サヨナラ公演中間報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/01/24 up)
            </p>
            <p>23日再び宙組立見してきました！</p>
            <p>盛り上がってきていて、ずんちゃんもかなり<strong>伸び伸びと、表情が軟らかくなっていて</strong>ステキでした～。あの<strong>「フッ」って、「くっ」ってする感じ</strong>が好きなんですよ。分からないですよね（^_^;）。<strong>キメの時にちょっと気を抜く</strong>というか・・<strong>ふっと客席の空気をつかむ</strong>というか・・上手く書けないけど、舞台を観たら分かってもらえるかも・・。あぁ～、かっこ良い～。</p>
            <p>実は・・あんな公演評書いた位ですから、ちょっと気持ちが沈んでいて、観るまでは「あと1回観るし・・さばこうかなぁ～。」なーんて、考えていたんですよ、ホント、ずんちゃんごめんなさいって気分でした（^_^;）。</p>
            <p>そういえば物語の<strong>わたさん(湖月わたる)</strong>と<strong>あいりちゃん(華宮あいり)</strong>の銀橋でのデュエットの前、手を差し出したわたさんの元へ駆け寄っていく所で、あいりちゃんがすっ転んでしまったんですよ（^_^;）。客席は爆笑でしたが、<strong>「ったくお前はしゃーないやっちゃな～」</strong>みたいな(関西弁ですみません)わたさんの困った笑いと、<strong>「どうしよう～」って感じで救いを求めるようにわたさんを観ているあいりちゃん</strong>が可愛くって、その後大拍手になりました（^_^;）。銀橋デュエットの後、<strong>「よしよし」って感じであいりちゃんの肩を抱くわたさん</strong>がステキでね～、もぅ、惚れそうでしたわ・・（^_^;）。</p>
            <p><strong>まやちゃん(久遠麻耶)</strong>は新公終わって自信がついたせいか、私が新公観て印象が変わったせいか（^_^;）、随分男役らしく見えてきました。笑うと可愛らしくて男役形なしになってしまうので、ついつい<strong>「笑うなぁ～！」</strong>と心の中でつっこみを入れるのがくせになりつつある私です（^_^;）。ま、それも可愛くて良いんだけどね。</p>
            <p>ラスト観劇は2/6です。又、報告しますのでお楽しみに～。</p>
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
