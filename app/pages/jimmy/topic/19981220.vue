<script setup>
definePageMeta({
  title: '星組「WEST SIDE STORY」配役出てましたね。',
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
            星組「WEST SIDE STORY」配役出てましたね。
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/20 up)
            </p>
            <p>宝塚ＨＰに載っていたものですので、確証はないですが、今回は信憑性がありそうなので、先走ってみますね。</p>
            <p>噂と全然違いましたね～。<strong>星奈優里がマリア、羽純るいがアニタ</strong>、と順当に当ててきましたか・・。苦しいなぁ～。更に、<strong>ベルナルドが彩輝直、リフが絵麻緒ゆう</strong>ですか？！月組編を見る限り、リフがすごく活躍しているし、絵麻緒の持ち味を考えると無難だと思いますが・・。彩輝もベルナルドっぽくないでしょう(^_^;)？！期待されてますね～、さえちゃん(彩輝)。博多ではチャムガ(我が愛は山の彼方に)も演るんでしょう？多分・・。まぁ、どうなるか、<strong>彩輝や羽純はちょっと楽しみ</strong>ではありますが・・。</p>
            <p>あ～あ、ホントのるさん(稔幸)ファンには悪いけど、<strong>キツイ</strong>わ、この公演は(^_^;)。のるさんもゆりちゃん(星奈)もぶんちゃん(絵麻緒)も、可哀相～！！</p>
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
