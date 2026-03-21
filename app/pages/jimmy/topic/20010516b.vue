<script setup>
definePageMeta({
  title: '今年の初舞台生',
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
            今年の初舞台生
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2001/05/16 up)
            </p>
            <p>HP恒例(?)、初舞台生、第一印象でのお気に入り君チェック！！という事で（^_^;）、<strong>真汐薪、真木薫、十輝いりす、凰稀かなめ</strong>・・と<strong>毎年初舞台生の中から、気になる人を一人ずつ覚えておく事にしている</strong>んですよ（^_^;）。</p>
            <p>今年の初舞台公演は観劇回数たったの二回！と今までになく少なく、はっきり言って、見足りませんが、<strong>無理矢理</strong>選びました（^_^;）！</p>
            <p>今年は<strong>榎登也</strong>にします！派手なお顔と、ラインダンスの時、すっごく張り切って踊っていたのが目についたので決めました（^_^;）。多分、上手から5,6番目にいたと思います(違ったらフォローして下さい・・ちょっと自信ない・・)。</p>
            <p>後は、容姿が抜群にキレイだけれど、成績が最下位の<strong>音海ゆうま</strong>。男役版檀れいちゃんになれるかな～、という気がします。それから<strong>麻月れんか</strong>。背は低いですが、顔が岡田君(嶺恵斗)に似ていて可愛い（^_^;）。迷った候補という事で、一応書いておきました（^_^;）。</p>
            <p>どんな感じの男役さんになってくれるか・・五年後を楽しみにしていましょう（^_^;）。</p>
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
