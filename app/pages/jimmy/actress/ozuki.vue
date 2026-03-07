<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            緒月　遠麻
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/06/29 up
            </p>
            <p>
              初認識は、もちろん<strong>「猛き黄金の国」新公のメイド</strong>役。当時新公評に、<br>
              アドリブを入れやすい作品だとは思いますが、全ては挙げきれない位、役を工夫して変えている人が多くて、その点見ていて非常に楽しかったです。(略)　<strong>中でもピカ一はメイド役の緒月遠麻</strong>。(略)<br>
              すごい恐い顔で象二郎にせまり、蒼海がまたあの愛嬌ある顔で「助けてくれ～」って無言の演技をしているのが最高！<br>
              胸のパットを引き上げてみたり、金髪ロングの鬘を脱ぎ捨てたりして、もう釘付け。最後にはやってきた音月彌太郎の方へ行って、またはっしとにらみつけたまま、可愛い音月のほほをヒタヒタと手でさわっているのがもうたまらん、って感じでした。<br>
              <strong>面白かった場面として、私の記憶に長く残るでありましょう</strong>(^_^;)。<br>
              姿のせいで良くわからなかったけれど、<strong>多分なかなかの二枚目なのでは</strong>・・。とにかく名前は完璧に覚えましたよ！<br>
              ・・と長々と報告した位、かなりのインパクトがありました。<br>
              以来、<strong>その新公を観た私達の間では、遠麻君はすっかり人気者</strong>です。
            </p>
            <p>成績が良い訳ではないので、以来なかなか良い役(メイド役も良い役なのかどうかは？ですが^_^;)はつかないのですが、<strong>大柄ではっきりとした目立つ容姿</strong>で、舞台の端にいても、すぐに見つけられます。<strong>きりやん(霧矢大夢)や、れおん君(柚希礼音)に似ている</strong>、と良く思いますね。</p>
            <p>
              最近では<strong>「ホップスコッチ」の駅員</strong>役で、また彼女の<strong>芝居への意気込みの強さ</strong>を見ました(^_^;)。あの幻のメイド役が、偶然の産物でなかった事は明らかです。<br>
              <strong>本人は何を目指しているのかなぁ？　結構二枚目だと思うのですが、お笑い？役者系に育つのでしょうか？</strong>　私は何でもOK(^_^;)。ぜひこれからもがんばって頂いて、もっともっと色々な所を見てみたいですね。楽しみにしています。
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
