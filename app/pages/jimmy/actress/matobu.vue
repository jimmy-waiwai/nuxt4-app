<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            真飛&emsp;聖
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/07/31 up
            </p>
            <p>初めて認識したのは<strong>「二人だけが悪」新公のキチョ</strong>役。観劇中に母が<strong>「あの子は注目の新人らしい」</strong>と私に耳打ちしたのですが（^_^;）、<strong>「あっ、元気いいな」</strong>と思ったのを覚えています。今思うと、これってすごく的を得た印象。</p>
            <p><strong>「皇帝」新公のブッスル</strong>役では、登場から一発目の歌が、伴奏を無視してどんどん走っちゃったのにびっくりしたのですが、<strong>歌自体は悪くなかった</strong>のでそんなにマイナスだとは思いませんでした。</p>
            <p>新公初主演の<strong>「我が愛は山の彼方に」</strong>では、まだまだ不器用な所があったものの、<strong>「万姫～！」</strong>等の第一声が<strong>元気一杯</strong>で、畏縮していないように見えるのが良いな、と。</p>
            <p>
              しかし<strong>「エピファニー」</strong>で気づいてしまいました。まとぶん(真飛)は、時々パワー余って暴走してしまう事を（^_^;）。<br>
              <strong>新五郎</strong>さんは、今ビデオで見ても・・辛い事が忘れられる位楽しいです（^_^;）。<br>
              <strong>「Love Insurance」のジェフ</strong>も、真面目に演じているのだろうけれど、つっぱしり具合がなーんか可笑しくて、そう公演評に書きました。
            </p>
            <p>その頃から私は、まとぶんに<strong>必要以上に弱い</strong>のです。<strong>「ま・と・ぶ・ん」</strong>と耳もとでささやかれたら絶対笑顔になります（^_^;）。「実は好きなんでしょ」と母は言います。</p>
            <p><strong>「花の業平」新公</strong>で確信しました。そんなまとぶんだから、<strong>大芝居に強い</strong>のだと。新公主演が「我が愛」「業平」「ベルばら」だったのは、運が良いです。</p>
            <p>
              その<strong>「ベルばら」新公のオスカル</strong>が私にはベスト。ジェローデルの<strong>「なぜそんなに君は肩を張っているんだ」</strong>の台詞が、まず私の中の「まとぶん」像にジャストフィット（^_^;）！<br>
              つっぱしり感が男社会の中でがんばって生きているオスカルに妙にハマり、姿は凛々しく、でも、肩を張っているのが可愛らしくもあり、妙に気に入ってしまいました。
            </p>
            <p>
              実際、本役でアランを演じているせいか、声が枯れていて調子が良いとは言えなかったし、まとぶん本人はそれ程独自の役作りを意識はしていなかったかもしれません。<br>
              でも、ここまで<strong>オスカルに共感しながら観られた「ベルばら」は初めて</strong>でした。すごく等身大の、まとぶんのオスカルになっていたと思うんです。言い過ぎかもしれませんが、私は今まで観た「ベルばら」の中で、この<strong>星組新公バージョンが一番好き</strong>です。
            </p>
            <p>
              まだ私には<strong>「ツボ」キャラ</strong>なまとぶんですが、どちらかというと、「かよまと」なら今は元気ある分(?!)まとぶん派かな。<br>
              バウ主演が楽しみです。齋藤先生だし、<strong>最高にハリきった</strong>作品になりそう（^_^;）。
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
