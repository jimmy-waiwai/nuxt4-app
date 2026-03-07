<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            榎　登也
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/12/06 up
            </p>
            <p>
              2001年の<strong>初舞台時にお気に入りさん</strong>に選んだのが<strong>とーやん(榎)</strong>です。
            </p><p>初舞台公演は二回しか観劇せず、良く見分けがつかないままに無理矢理選んだような感じで、当時「<strong>派手なお顔と、ラインダンスの時、すっごく張り切って踊っていたのが目についたので決めました</strong>(^_^;)。多分、上手から5,6番目にいたと思います(違ったらフォローして下さい・・ちょっと自信ない・・)。」と書いたのですが、<strong>今読むと彼女で間違いない</strong>と思います。</p>
            <p><strong>なぜなら今でも、すっごく張り切ってロケットしているから！</strong></p>
            <p>キレイな顔をしているのに、<strong>そんなにくしゃくしゃに大きな口を開けて笑わなくても</strong>・・と毎回思うのですが、それがなくなると寂しい気もします・・(^_^;)。</p>
            <p>
              初舞台後、研一で<strong>「ガイズ＆ドールズ」</strong>新公、<strong>クバーナの歌手</strong>に抜擢されていたのがピカイチ。<br>
              見た目で選んでいたので、<strong>「歌が得意だったの？」</strong>というのも知らなかったですし、実際ちゃんと落ち着いて歌えていて、しかも可愛いかった！　嬉しくてかなり舞い上がりました(^_^;)。
            </p>
            <p>
              しかし<strong>以降全然出てきません</strong>ね～。その後成績が麻月れんかちゃんより落ちてしまっているのがショックでしたが(まぁ、麻月ちゃんも好きなので、どっちでも良いと言えば、どっちでも良いのですが～。)、そうなると仕方ないかな？　とも思います。<br>
              でも、もうちょっと活躍して欲しいなぁ。あれほど若手大活躍だった<strong>「なみだ橋 えがお橋」</strong>でも、<strong>台詞がない数少ない出演者の一人だった</strong>のが悲しかったです・・(^_^;)。
            </p>
            <p>
              <strong>歌が得意なのかどうかも、今は謎</strong>・・。もう一度聞いてみたいです。<br>
              もう一つ気になるのが、「おとめ」の演じてみたい役に<strong>「大江山花伝」の茨木童子</strong>とか、<strong>「微笑みの国」のスー・ホン王子</strong>とか、毎年<strong>JIMMY的には直球ストライクな役</strong>を書いている事(^_^;)。年齢的にも・・ひょっとして<strong>お母様がファン？</strong>　という気もするけれど、何にしてもその作品を知って、名前を挙げてくれる事自体が嬉しい。<br>
              <strong>その志向は悪くない、がんばっておくれ～♪</strong>　とますます楽しみにしております(*^｡^*)。
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
