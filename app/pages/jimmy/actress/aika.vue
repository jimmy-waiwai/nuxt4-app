<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hana',
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
            愛華 みれ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/19 up
            </p>
            <p>元々新人時代、<strong>マミさん(真琴つばさ)とペアで使われていた頃</strong>は、どちらかというと、<strong>キレイなタモさん(愛華みれ)派</strong>でした(^_^;)。<strong>「スパルタカス」のシーザー</strong>とか、<strong>「けれど夢の中でめざめた時に」のマサキ</strong>とか、結構喜んで見ていた覚えがあります。が、いつまでたっても上手くならないもどかしさから、だんだんと冷めていってました。</p>
            <p>と、思い切って書いてしまうのも(^_^;)、<strong>今回大飛躍して、すっかり見直してしまった</strong>から(^_^;)。</p>
            <p><strong>「SPEAKEASY」</strong>でのタモさんの役、<strong>ジョナサン・ピーチャム</strong>は美しいタモさんにピッタリの正統派二枚目では決してないけれど、私にとっては<strong>今までになく、頼もしさと、カッコ良さ</strong>を感じました。</p>
            <p>歌も驚くほど声が出るようになって感激。今まで注目されながら、ずーっと歌が上手くならなかったのに(^_^;)、<strong>この変貌はどうしたことでしょう？！</strong> キツネに包まれたような気さえしています(^_^;)。<strong>この土壇場に来て</strong>、完全に一皮むけていますよね。これは俄然トップ披露公演が楽しみになってきました。</p>
            <p>次の公演でも、今の頼もしさを感じることが出来たら<strong>本物</strong>でしょう(^_^;)。その時には喜んで<strong>「参りましたタモさん！」宣言</strong>をしたいと思います(^_^;)。</p>
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
