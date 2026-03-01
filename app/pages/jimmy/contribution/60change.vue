<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            組替え(檀、汐美など)
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>マスコミによる噂が飛び交う中、ついに組替えが発表された。</p>
            <p>
              まず、檀れいの月組トップ娘役就任は、嬉しい驚きだ。音楽学校卒業時には最下位の成績ながら、持ち前の美貌と度胸の良い演技で徐々に周囲の注目を集め、研７最後の新人公演でようやくヒロインを射止めた。落雷による停電というハプニングを、動揺を見せることなく対処したのは記憶に新しい。実力的にはまだまだ成長途中の娘役だが、古巣の月組で大輪の花を咲かせて欲しい。
            </p>
            <p>
              そして花組トップ娘役には大鳥れい。こちらも華やかな美貌の持ち主で、次々と役が与えられたが、序盤は苦戦。それだけに「ヴェロニック」での、生まれ変わったように美しく、堂々としたアガートは鮮烈だった。この時期のトップ就任は妥当だろう。
            </p>
            <p>
              他のメンバーでは、汐美真帆の月組への移動に注目したい。雪組では安蘭けいと貴城けいに挟まれ、ついに新人公演での主役が廻ってこなかった汐美だが、それからの本公演、バウホール公演での飛躍は目覚ましかった。このまま人気の脇役で終わってしまうのは惜しいと思っていた矢先のこの人事は、正に我が意を得たり。樹里咲穂、成瀬こうきが抜ける新月組においては、ますます重用されるに違いない。今後が楽しみだ。
            </p>
            <p>
              そして樹里咲穂の宙組への移動。彼女もついに新人公演主役が廻ってこなかった口だが、「ＷＥＳＴ ＳＩＤＥ ＳＴＯＲＹ」のアニタでの怪演を始め、それからの活躍には無視できないものがあった。湖月わたるに続く男役として、更なるステップアップを期待したい。
            </p>
            <p>
              興味深いのは、雪組に固まることになった安蘭けい、成瀬こうき、朝海ひかるの同期トリオ。一学年下には貴城けいも控えており、激戦区となりそうだ。本人達は大変だろうが、ファンにとっては、雪組公演を見る楽しみが増えるというもの。互いに切磋琢磨し合う姿を楽しみに待ちたい。
            </p>
            <p>
              その他にも楓沙樹、彩吹真央、花央レミはダンスの花組を大きく支えるだろうし、この３人の抜けた雪組では、蘭香レアのダンス力は目立つだろう。ベテランの夏河ゆら、美郷真也も活躍が楽しみだ。
            </p>
            <p>
              発表までの不安とは裏腹に、今は来年からの新体制での公演が待ち遠しい。今回の組替えメンバーの新天地での活躍に注目したい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              「高声低声」に関しては半引退気分だったのですが、久し振りに投稿しちゃいました(^_^;)。ずっとケロちゃん(汐美)を応援していた私としては「今書いておかないで、いつ書く？」という事態ですもの！！
              でも、まさか載せて頂けるとはね(^_^;)～。歌劇団は、この見方がまんざら見当はずれとは思っていないのかも・・、と、期待してしまいます(^_^;)。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
    
  </div>
</template>

<style scoped></style>
