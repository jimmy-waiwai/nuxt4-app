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
            出雲&emsp;綾
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2004/03/06 up
            </p>
            <p>
              言わずと知れた<strong>宝塚屈指の歌手</strong>の一人ですが・・<strong>最近あまり沢山歌っておられない</strong>ような気がしますね。組長だからでしょうか?<br>
              何曲も一人で歌うような配役は好きではないですが、ここ一番の良い歌は、そろそろ欲しい気がします。そういえば、エンカレッジ・コンサートにも出て欲しかったなぁ。美々杏里や美穂圭子は出ていたのですから・・。
            </p>
            <p>印象に残る歌として、今ぱっと思い浮かんだのは、星組時代のショーで<strong>「シャンパン戦争」</strong>という場面のソロ(どの作品だったのか思い出せないのですが・・)。<strong>男役の声と女役を声を切り替えながら、セリの上でバリバリ歌っていて</strong>、かなりインパクトがありました（^_^;）。</p>
            <p>お芝居でも最近は<strong>母親系統の役</strong>が多く、<strong>控えめにお芝居を締める</strong>のに徹しておられる気がしますが、どれも安心して見ていられます。しかし、<strong>バーンと明るいコメディ</strong>も好きです。これも最近あまり見ない気がしますが。</p>
            <p>人柄もとってもしっかりされてそう～。任せて安心(何を？)な感じの組長さんです。</p>
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
