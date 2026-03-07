<script setup>
definePageMeta({
  title: '元旦大劇場生中継報告',
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
            元旦大劇場生中継報告
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1999/01/02 up)
            </p>
            <p><strong>おーい、フィナーレは～？！</strong>と、全国の宝塚ファンが叫んだ事でしょう(^_^;)。いや～、驚きました～(^_^;)。作品内容としては・・、<strong>何度も通うにはつらい作品だな</strong>・・、というのが、正直な所ですが・・。フィナーレがどんなものか、わからないですものね！！生で見るのを楽しみにしています。</p>
            <p><strong>たもさん(愛華みれ)</strong>、<strong>嬉しそう</strong>で、良かったですよね～(^_^;)。<strong>みどりちゃん(大鳥れい)</strong>が本当に<strong>立派</strong>で・・、素晴らしかったです！！そして<strong>チャーリー(匠ひびき)</strong>、我が家では<strong>「銀橋ソロだよ～」「アカペラだよ～」</strong>と大騒ぎでした(すみません^_^;)。何か<strong>「二番手」</strong>って、実感沸きますね～(^_^;)。全体の感想は、生で見てから書きますね。</p>
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
