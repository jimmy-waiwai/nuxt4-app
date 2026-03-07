<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sora',
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
            和央 ようか
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/11/28 up
            </p>
            <p>たかちゃん(和央)は<strong>初舞台のラインダンス</strong>で、ソロで花道で先導役(?)みたいな事をしていたので(^_^;)、<strong>初めから「期待の人なんだな～」と思っていました。</strong></p>
            <p>その後<strong>「ベルサイユのばら」の小公子</strong>なんてしていましたよね(^_^;)。三人の中で一番下級生だったけれど、センターでフランス国旗の「白」の衣装を着ていてとても目立っていたし、<strong>大きいけれどとても可愛くて(^_^;)、歌も上手くて良いな～</strong>、と思ったのを覚えています。</p>
            <p><strong>「この恋は雲の涯まで」のトンギャマ</strong>とか、<strong>「忠臣蔵」の読売り</strong>とか、当時雪組にひしめいていたいしちゃん(轟悠)やたーたん(香寿たつき)達より、目立つ役でしたよね(^_^;)。でも、<strong>華やかだし、ちゃんと出来ていたし、良いではないの、と思ってました</strong>(^_^;)。特に<strong>「天国と地獄」のナポレオン</strong>が、とっても華やかで好きでした(^_^;)。<strong>キメ台詞の「面白いではないか～」なんて、とっても上手</strong>でしたよね～(^_^;)。</p>
            <p>ショーでは<strong>「バロック千一夜」の金の像の場の歌手</strong>と、<strong>「マ・ベル・エトワール」コットンクラブのパンサーガイ</strong>が特に好き(^_^;)。<strong>「ラ・ジュネス」のミラクルファイブも</strong>・・ファンの人は複雑かもしれないけれど(^_^;)、<strong>ちょっと他人には真似できないかっこ良さ</strong>でしたよね(^_^;)。</p>
            <p>実は最近ちょっと私の中では停滞気味で(^_^;)・・、なぜだろう？　以前程の華やかさが感じられないんです。最近流行の薄目の化粧が合わない気がするのですが・・。<strong>もともと化粧の似合うお顔立で、カツラも似合うし、スタイルが良いからコスチュームなんて良いだろうなぁ、と思うのです</strong>。「エクスカリバー」でも、クリストファーのような黒の役ではなく、<strong>本来ジェームズのような華やかな衣装の方が似合う人だと思う</strong>んですよ。</p>
            <p>新公ではイチロさん(一路真輝)の役を良く演じていたたかちゃん。「グラフ」誌でも、とても影響を受けているというような事を、今でも言ってくれているし(^_^;)、<strong>恵まれた容姿と実力の持ち主ですから、是非、私の中でもバーンとブレイクして頂きたいですね</strong>(^_^;)。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
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
