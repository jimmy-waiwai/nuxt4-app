<script setup>
definePageMeta({
  title: 'チケットがお求めやすくなりました～？！',
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
            チケットがお求めやすくなりました～？！
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/02/18 up)
            </p>
            <p>もう、<strong>個人的には大大大事件</strong>ですっ！！私達親戚一同は（^_^;）、ここ十数年の間、ずーっと、毎公演、梅田のプレイガイドを利用していたんですよ。それが、そのプレイガイドの持ち席が激減。もう宝塚まで並びに行くしかなくなってしまいました。私はここ数年、抽選してから、会社へ行ったり、学校へ行ったりしていたんですよね～。でも、<strong>平日の朝、宝塚までは絶対無理</strong>。<strong>ここ十数年、延々と続けていた習慣</strong>を、バッサリ切って捨てられた気分です・・。このプレイガイドは常連さんが多かったのよ。<strong>この客数減の今、私達上得意様を（^_^;）、バッサリ切るかな～、普通！！</strong></p>
            <p>宝塚での並びはＦＣが多いんですよ。あの大人数の中に入って、三日に渡ってチケットを購入するなんて、大変だわ～。まぁ、東京ではとっくに実施されているんだから、勝手な文句を言うな、と言われてしまいそうですが・・。あ～、気が重い・・。<strong>ど～なるんでしょうねぇ、雪組前売</strong>・・。</p>
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
