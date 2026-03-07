<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            安蘭 けい
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/09/16 up
            </p>
            <p>とうこちゃん(安蘭)は<strong>初舞台当時成績一番、しかもあの整った顔立ち</strong> (^_^;)でしたから、もちろんその頃からチェックしてました(^_^;)。舞台で始めて認識したのは、<strong>「忠臣蔵」新公の堀部安兵衛</strong> かな。上手かったですね、最初から(^_^;)。後、<strong>「天国と地獄」新公のルイ・ナポレオン</strong>とか、<strong>バウ「二人だけの戦場」の女役のダンス</strong> とか、印象に残っています。</p>
            <p>新公の主役は、すばらしい出来だったという評判は聞いてますが、ちょうど仕事が忙しかった時期で、全部見のがしているんですよ～、残念！！</p>
            <p>
              芝居でのベストは、<strong>バウ「アナジ」のクロバエ</strong> 。かっこ良かったです(^_^;)。ショーでは、<strong>「Let's
                JAZZ」のミンストレル・シンガー</strong> なんて、可愛くて好きだったなぁ(^_^;)。
            </p>
            <p>もう<strong>新人らしからぬ、出来上がったタイプの男役</strong> だけど、<strong>見た目が少年っぽい所が、救い</strong> (^_^;)というか、面白いですよね(^_^;)。<strong>キラキラした瞳と覇気のある舞台姿</strong> には、やはり目を引き付けられます。舞台挨拶や文章からも、サバサバしていて、舞台にまっすぐに努力している姿が想像できるじゃないですか。そういう<strong>姿勢がすごく好感持てます</strong> (^_^;)。がんばって欲しいですね。</p>
            <p>他の組を見回してみるとまだまだ中堅になったばかりくらいの学年ですが、すでにかなり完成してしまっている感があるので、<strong>トップにするなら早い方が良いと思うんですが</strong> ・・。このままでは苦労しそうだぞ～、とうこちゃん・・。</p>
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
