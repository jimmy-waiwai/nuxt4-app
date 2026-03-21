<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'sonota',
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
            汐風&emsp;幸
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/09/16 up
            </p>
            <p>片岡仁左衛門の娘、という事で、初舞台前から話題になっていたこうちゃん(汐風)。どこから見ても大抜擢されるようなタイプではなかったのに(ゴメン)、いきなり研2で<strong>新公オスカル</strong>役等をしていた頃は、いかにも「親の七光り」状態で、何だか可哀相でした。</p>
            <p>しかし、バウ初主役<strong>「ボンジュール・シャックスパー」</strong>では、研4での初主役はないんじゃないの？&emsp;とも思いましたが、しっかりした芝居を見せてくれて、<strong>やっぱり役者の血って、あるのかしら・・</strong>、と思いましたね（^_^;）。</p>
            <p>この<strong>新人時代の大騒ぎ（^_^;）に潰される事なく</strong>、我が道を見極め、<strong>今では玄人筋（^_^;）を唸らせる立派な役者として高い評価を得るようになった</strong>のは、素晴らしい事です。</p>
            <p>この前の<strong>バウ「心中・恋の大和路」の忠兵衛</strong>は、こうちゃんらしい二枚目の形を、しっかり見せられていましたね。芝居ではこれがベスト。後、<strong>「銀ちゃんの恋」のヤス、「バロンの末裔」のヘンリー、「春櫻賦」の喜楽坊遊三</strong>などが印象に残っています。</p>
            <p>ただし、ショーになると全く目立たなくなってしまうのが辛い所（^_^;）。この辺りを克服できるかが、スターになれるかどうかの瀬戸際だと思うのですが・・。</p>
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
