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
            宝塚大劇場新人公演「若き日の唄は忘れじ」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「これだから新人公演はやめられない。」観劇後そんな嬉しさでいっぱいになった。スター揃いの七十三期生が新人公演を卒業し、正直あまり期待せずに星組新人公演を見たのだが、予想以上の素晴らしい舞台にすっかり満足してしまった。
            </p>
            <p>
              その原因はなんといっても初主役の湖月わたる。以前から期待の人として注目されていただけあって、登場からその長身と爽やかさが一際目立ち、目が離せない。しかも十六歳の頃の演技が絶品で、七夕祭りでのふくとのやり取りが可愛く、父との最後の対面では、文四郎がまだ力のない子供に見えた分、本公演よりも哀れをさそった。歌もいい声ではないが、しっかりと歌えている。とにかくキラキラ光る大きな目が随所で利いており、表情も豊かで、自然な演技に好感がもてた。
            </p>
            <p>
              星奈優里はバウホールなどでの活躍を考えると意外だが、これが新人公演での初ヒロインとなった。ダンサーとしてのイメージが強いので、こういう作品は苦手だろうと思ったが、予想以上の好演で着実に実力の付いている事を証明した。後半文四郎と再開してからが特に良く、最後の蓑浦の場面は、湖月と共に情感溢れる演技で舞台を感動的に締め括った。たださらに上を目指す為にも、歌に更に努力を望みたい。
            </p>
            <p>
              神田智は今回は地味な日本物の芝居とあって、セリフの聞き取りづらい所ばかりが目立ち今一歩。しかし与之助の祝言の場面での踊りはさすがに華やかで、堂々としていた。最後の新人公演となる次回は、是非主役でそのスター性を見てみたいと思うのだが。
            </p>
            <p>
              与之助の高央りおが本役よりも徹底した三枚目振りで、工夫しているのが良い。留伊の万理沙ひとみは声が美しく上手だが、少し幼く見える。山根の九城彬はキリッとしていて悪役が良く似合っていた。他に、石栗のじゅんあつきが本役が津軽三味線を弾く所で詩吟を披露し、それが意外に上手く客席の驚きと拍手をさらっていたのが印象的。朝宮真由、万波紫帆も歌が上手かった。
            </p>
            <p>
              全体的に歌、セリフ共しっかりした人が多く、安心して見ていられたが、化粧が下手な人が多かったのも気になった。そんな中、研二の司祐輝がすっきりと美しかったのも目に付いた。しかし今回はとにかく湖月の好演に、爽やかなスターの誕生を見られた事がなにより嬉しい。これからの活躍を期待したい。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              結構書いてますねぇ、湖月さんの新公評。あぁ、いいもの持ってると思うんだけどなあ。でもまあ、これから、ですよね。司祐輝の名を出しているのが、私らしい(^_^;)。ははは。
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
