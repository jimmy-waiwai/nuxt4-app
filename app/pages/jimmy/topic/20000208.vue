<script setup>
definePageMeta({
  title: 'ずんちゃん(姿月あさと)見納め報告',
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
            ずんちゃん(姿月あさと)見納め報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/02/08 up)
            </p>
            <p>遅くなりましたが、2/6、超満員の中、宙組公演、観納めてきました。</p>
            <p><strong>あ～あ、終わっちゃったな・・</strong>って感じでしょうか。「今日がずんちゃんの見納めだ」と思って、気合い入れて観ましたが・・、呆気なかったですね。別に怒っている訳でもないのですが・・、はぁ～。何度観ても、これで終わりだなんて、残念です。</p>
            <p>のびのびと舞台に立つ余裕。男らしい包容力。まだまだ未完成でしたが、それでも、<strong>これだけのスケールの大きさを見せられるスターは当分出ないだろう</strong>と思います。寂しいです～。</p>
            <p>サヨナラのムードはあまりない公演でしたが、ラストの大階段の歌の前、白い衣裳で歌う<strong>花ちゃん(花總まり)</strong>が、唯一寂しいファンの心境を反映してくれたような良い表情を見せてくれました。もともとどちらかと言うと泣き顔の花ちゃんだし（^_^;）、そう見せてくれるのは花ちゃんの上手さだと思いますが、ファン心理としては<strong>少し救われた気がしました</strong>ね。</p>
            <p>新組のメンバーにようやく慣れてきたのか、最近になって、ずんちゃん以外にも面白味が出てきた事ですし（^_^;）、ずんちゃんが残した新組、宙組。これからが大変だと思いますが、うまくいくと良いな～。これからも見守って行こう、なんて、つい親心入ってしまった、2/6の観劇でした（^_^;）。</p>
            <p>・・となかなか言葉にできない心境の所を、今日やっとここまで書いたのですが（^_^;）、今日の<strong>宙組千秋楽のずんちゃん</strong>、涙、涙だったそうですね。TVニュースを見た母が言っていました。</p>
            <p>少し驚きましたが、ずんちゃんなら、そうなるかな、とも思ったり。それにしても・・もう、<strong>今更泣かないでよ～(;_;)</strong>。泣きたいのはこっちよ～！！って、どうしようもない気分になります。</p>
            <p>何というか・・何度言っても、どうしようもないのですが・・、<strong>残念です</strong>。その言葉しか出ませんね。</p>
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
