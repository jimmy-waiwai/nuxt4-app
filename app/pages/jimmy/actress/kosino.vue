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
            越乃リュウ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/11/30 up
            </p>
            <p>
              我が家では、初舞台の<strong>「BROADWAY BOYS」</strong>のロケットから話題になっていました・・大きい・・いや、<strong>ゴツくて</strong>(すみません！^_^;)。<br>
              しかも、あの<strong>覚えやすい個性的な芸名</strong>。なぜかその後、花の道付近で良く遭遇してしまい、<strong>「今日、また越乃リュウを見てしまった・・。」</strong>などと、良く家で話題にしていました(^_^;)。
            </p>
            <p>
              その印象がガラリと変わったのが、<strong>「黒い瞳」新公</strong>。お父さん役の越リュウ君は、スラリとして、上品で、しかも温かい演技で非常に良かった！　<strong>「知らない間にえらくかっこ良くなっている～！」</strong>とびっくり。<br>
              その後の<strong>「シンデレラ・ロック」</strong>は最高でしたよね～。可笑しくて。
            </p>
            <p><strong>「LUNA」</strong>の<strong>ジュード役</strong>を<strong>博多</strong>で観たのも印象に残っています。ケロちゃん(汐美真帆)はかなり・・不審な人だったと思うのですが(^_^;)。越リュウ君のジュードは妖しくて、セミナーの歌も、ダンスもとても上手でしたが、な～んか色気があり過ぎると言うか・・いやらし過ぎると言うか・・。</p>
            <p>
              私は色気のある男役が大好きですが、この「ありすぎる」のラインが我ながら微妙なんですよね(^_^;)。同じ系統で、<strong>「長い春の果てに」</strong>のオープニングの客のダンスも、上手いし、かっこ良いし、抜群に目立つのですが、あの色気はクド過ぎるんですよ・・私には。<br>
              でも、あの<strong>ダンス力</strong>と、あれだけ目立てる<strong>積極的な実力</strong>は、かなり評価できます。
            </p>
            <p>
              <strong>「ガイズ＆ドールズ」</strong>の<strong>ハリー</strong>も、大役でしたが、文句なく上手かったですね。<br>
              あの岩男のようだった(ホンマすんません)越リュウ君が、今やすっかり垢抜けて、沢山のファンから<strong>「かっこ良い～(*^｡^*)」</strong>と言われるスターになるなんて・・すごい成長ですよね。<br>
              あの実力をちゃんと評価して、もっと良い役をつけて、活躍させてあげて欲しい人です。
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
