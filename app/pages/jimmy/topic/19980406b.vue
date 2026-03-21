<script setup>
definePageMeta({
  title: '宙組公演初舞台生',
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
            宙組公演初舞台生
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/04/06 up)
            </p>
            <p>宙組公演で８４期初舞台生がラインナップしていますね。ここ数年ざっと眺めただけの直感を頼りに、<strong>今年のお気に入り</strong>を決定しておく事にしているのですが（^_^;）、今年は<strong>真木薫</strong>。口上の時、上手から２番目にいる人だと思うのですが(違ってたら教えて下さい（^_^;）)、口元が樹里咲穂に似ていて、さらに華やかな男役らしい顔をしていますよ。長身だしね。</p>
            <p>ちなみに、昨年は<strong>真汐薪</strong>です（^_^;）。星組に配属されました。</p>
            <p>まだ得体が知れませんが（^_^;）、五年後を楽しみにしましょう。</p>
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
