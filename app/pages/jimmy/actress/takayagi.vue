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
            貴柳 みどり
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2005/02/27 up
            </p>
            <p>星組にいた頃、割と早くから顔は知っていたと思います。ちょっと個性的で、舞台でも見分けのつきやすい顔なんですよね。私は結構好きな顔で(^_^;)、群舞でも良く見ていた気がします。<br><br>名前を意識したのが、何の番組だったか忘れたのですが、テレビのインタビューに一人で答えておられた時。その頃は何となく知っている娘役さん、程度の認識だったのですが、その番組に出られていた時の私服のかっこ良さ(確かスカーフが特に素敵だったような・・)。最近はどうか知りませんが、舞台の髪飾りに本物の宝石を一公演一つ入れるのがこだわり、とおっしゃっていたり、受け答えもしっかりしていて、頭良さそう～な感じもしたんですね。<br>「かっこ良いね～、これから注目してみよう。」と母と話したのを覚えています。<br><br>以降、花組から宙組へと、どんどん重要なポジションで、活躍されるようになりましたね。<br>「SPEAKEASY」のシーリアとか、「里見八犬伝」の玉梓とか、怪演系も見た目からすごく作っていて面白かったですし、何と言ってもベストは「白昼の稲妻」のギャランティーヌではないでしょうか。良い役でしたが、ぽっぽさん(貴柳)自身も、美しい貴婦人で、知性も色気もあって、文句なしでした。<br><br>もちろんダンス場面での美しさも忘れがたいです。技術もさることながら、髪型や衣装の着こなしを含め、見た目全体がかっこ良いんですよね。<br>「琥珀色の雨にぬれて」のたまおちゃん(楓沙樹)とのデュエット。宙組では各公演でのすっしー君(寿つかさ)とのデュエットが、宙組ショーでの大きな楽しみの一つでした。<br>副組長までなられての、この早めの退団は残念ですが、ある意味彼女の美学なのでしょうか。彼女らしい気もします。CSでのインタビューでもおっしゃっていましたが、何かの形で、そのこだわりの技を(^_^;)、これからも下級生に伝えて頂けるような事があれば良いですね。</p>
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
