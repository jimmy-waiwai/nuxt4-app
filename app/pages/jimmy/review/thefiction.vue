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
            The Fiction
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              雪組バウホール公演・９／２３～９／２７
            </p>
            <p>
              宝塚初の一人芝居ということで、私自身、今まで一人芝居を観たことがなかったので、<strong>どんな舞台になるのか想像もつかない</strong>状態での観劇でした。
            </p>
            <p>
              いつもの客席に加え、舞台上の上手下手部分にも客席を配置し、中央の丸い台の様な舞台に立つ<strong>いしちゃん(轟悠)</strong>を囲むような形になっています。轟は、まず序詞役として登場、「轟悠の一人芝居へようこそ」との挨拶から始まり、序詞役の男がジャコモ・カサノヴァの生涯を語る様な形で舞台は進行します。
            </p>
            <p>
              一人芝居だから当然ですが、始めは、いつもの公演とは違う、着替え等の為の暗転や音楽などでつなぐ<strong>間(ま)の長さ</strong>に戸惑いました。でも、芝居が進むにつれ、どんどん話の世界に引き込まれていき、次はどんな姿を見せてくれるのかと、ワクワクしながらその間を待つ、<strong>すっかり「一人芝居」のペースにハマっている自分</strong>がいました(^_^;)。
            </p>
            <p>
              いしちゃんは元々、色の濃い役で爆発的なパワーを見せるタイプで、色々な役を変化自在に演じわけるのが得意だとは思えないのですが(^_^;)、それでも、多様な人々をほぼその声一つでしっかりと表現していて、<strong>だてに実力派トップの名で呼ばれていないよな～</strong>、と今更ながら思いました(^_^;)。ここ数年の辛抱役が良かったのかも(^_^;)。
            </p>
            <p>
              そして、一人芝居を成立させる為の<strong>太田先生の数々の工夫</strong>、人形等の小道具が上手く使われていました。でも、いつもの太田作品のように、物語自身に凝った所はなく(^_^;)、ちょっと太田ファンとしては、内容に物足りない所はありました。<strong>いつもの太田作品なら死んだところでショッキングな音楽を残したまま、暗～く終わってしまいそう</strong>だけれど(^_^;)、<strong>今回は宝塚らしく、白い衣装でフィナーレ</strong>(?)まで付いていたしね(^_^;)。まぁ、キレイで良かったけれど(^_^;)。
            </p>
            <p>
              宝塚の舞台において、<strong>色々な人が集団で次々と出てくること</strong>、それだけでどれだけ魅力になっていることか・・、<strong>たった一人の芝居がどれだけ難しく危険か</strong>、ということを強く感じました。何度も繰り替えされたアンコールには、きっとそんな観客皆の<strong>「よくやったね！！」</strong>という思いが込められていたのではないかと思います。<strong>バウホールにふさわしい、すごい冒険だった</strong>と思います。健闘に拍手です。でも、今回のように、余程できる役者、作者がそろわない限り、<strong>安易な再挑戦は避けるべき</strong>だと思います。一人芝居は、かなり危険です。
            </p>
            <p>
              私のような、よそ見の多いファンは(^_^;)、普段の公演だと、いくらトップスターでもいしちゃんばかり見ることはないんですよね。でも、今回は当たり前だけど、<strong>いしちゃんオンリーにどっぷりハマらせて頂きました</strong>(^_^;)。衣装もキレイだったし、<strong>本当にうっとりする美しさ</strong>です！！&emsp;後半、落ちていく所なんて、迫力があってすごーくかっこ良かったですよ(^_^;)。
            </p>
            <p>
              そして、唯一の女役、<strong>恋人アンリエット役</strong>も美しかったです～。正直、声だけの時はちょっと男役が入っていて恐かった(^_^;)のですが、その<strong>お姿</strong>を見てしまうと、声も不自然に感じなくなってしまうんですよ(^_^;)。真面目(?)な女役も又、見てみたいな～、と思いました(^_^;)。
            </p>
            <p>
              何にしても、いしちゃんでは、<strong>ルキーニ以来のかっこ良い所</strong>を見られたような気がします。
            </p>
            <p>
              <strong>早く大劇場で、こんな良い役見たいですよね～、皆さん！！</strong>
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
