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
            夏美 よう
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/04/30 up
            </p>
            <p>
              花組でついつい観てしまう人と言えば、私は<strong>はっちさん(夏美よう)</strong>かも～。<br>
              という訳で（^_^;）、はっちさん、いかせて頂きます！
            </p>
            <p>
              専科、組長級のベテランの中では抜群に好き。だって、<strong>今でもかっこ良いんだもん</strong>（^_^;）。<br>
              はっちさんで印象的な役と言えば、ご本人も良く出されていますが、<strong>「シチリアの風」のジュリアーノ</strong>。はっきり覚えているとは言えないのですが（^_^;）、ちょっと精神的に病んだ感じの役で、すごく良かったのを覚えています。
            </p>
            <p>
              私が宝塚を観始めた頃から、星組の多彩な脇役陣の一人として活躍し、<strong>星組組長</strong>就任。<br>
              その後、耽美な星組のイメージそのもののはっちさんが、<strong>花組組長</strong>に。星組を離れてしまう！&emsp;というニュースには驚きましたが、上級生の芝居力がかなり低い花組に、はっちさんが加入してくれると、<strong>花組を観る楽しみが増えるというもの</strong>（^_^;）。とても嬉しかったです。
            </p>
            <p>花組加入第一作の<strong>「ルートヴィヒ2世」のビスマルク</strong>が近年ではベスト。この公演、男役の芝居で満足させてくれた人は少なく、中でははっちさんが、ムードでは圧倒的だったと思うんですよね。</p>
            <p>
              インタビューや舞台挨拶等の組長のお仕事でも、<strong>何とも知的な雰囲気を漂わせてくれる</strong>のがまた素敵（^_^;）。<br>
              <strong>クールなイメージ</strong>があるだけに、先日の前楽公演(「Cocktail」ﾌ挨拶で、満場の割れんばかりの拍手に、感極まって声をつまらせていたのが意外で、とても嬉しかったです。かdの挨拶で、満場の割れんばかりの拍手に、感極まって声をつまらせていたのが意外で、とても嬉しかったです。
            </p>
            <p>
              花組歴は短いけれど、<strong>チャーリーズ・バー</strong>でのチャーリーへのアドリブも、<strong>サヨナラショー</strong>の進行も、良い雰囲気で。<strong>はっちさんが組長で良かった</strong>と思いました。<br>
              これからも、私の<strong>花組の舞台のお楽しみ</strong>でいて下さいね、はっちさん(*^｡^*)。
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
