<script setup>
definePageMeta({
  title: 'スターの小部屋/8月第1回',
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
            スターの小部屋/8月第1回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/08/01 up)
            </p>
            <p>まず、<strong>バウ「永遠物語」</strong>より<strong>榛名由梨、初風緑、風花舞</strong>のトーク。</p>
            <p>あまり興味がないので苦しいのですが・・(^_^;)、風花ちゃんは、又、良い芝居をしているみたいで・・、良いですね～(^_^;)。</p>
            <p>次は<strong>「エクスカリバー」新公</strong>より、<strong>夢輝のあ、南城ひかり、久遠摩耶</strong>のトーク。</p>
            <p><strong>「ぜんぜんできないんです～」と恐縮しまくる久遠</strong>を慰める、<strong>しっかりもののお姉さん2人</strong>、という構図が、結構笑えます(^_^;)。確かに、今まで中心の役はまわってこなかった3人ですが、<strong>すっごく上手かったですよ～</strong>(^_^;)。良かったですよね、チャンスが廻ってきて(^_^;)。画面を見ていて、レベルの高かった、あの舞台を思い出しました(^_^;)。ねったん(夢輝)は上手いです！！<strong>もう、ルドルフでも、新公トートでも、何でもして下さ～い</strong>(←ヤケ？！)。</p>
            <p>次はお楽しみの<strong>「ミキIN 武道館」</strong>。こうやって見ると、すごい人ですよね～(^_^;)。私も、<strong>前の方で、うちわ持って暴れてみたい</strong>衝動に駆られました(^_^;)。もう、乗れないとどうしようもないものだと思うので、ミキちゃんくらいエンターテイメント性がある人が出現しない限り、<strong>当分他の人では実現不可能</strong>でしょうね。「ずんこ(姿月あさと)もがんばって！！」とミキちゃんが言ったらしい・・という話も載ってましたが、<strong>ずんちゃんが「イエーイ！！」なんて客席に向かって言っている姿は、想像できないもの</strong>・・(^_^;)。</p>
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
