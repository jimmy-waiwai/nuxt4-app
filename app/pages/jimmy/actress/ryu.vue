<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'tuki',
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
            龍　真咲
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/12/06 up
            </p>
            <p>
              どこから仕入れたのか忘れましたが、モデルのようにキレイな子だと聞いていた<strong>真咲ちゃん</strong>。初認識は<strong>「ガイズ＆ドールズ」の新人公演</strong>で、<strong>クバーナの男S</strong>としてダンス場面で目立っていた位置を与えられており、確かに頭が小さくて、キレイな子だな・・注目の子なんだろうな・・と思った覚えがあります。
            </p><p>その後<strong>「SLAPSTICK」</strong>でも良い役をしていましたね。これも頭が小さくてキレイだけれど・・まだまだ魅力は感じないな～、と思いました。</p>
            <p>先日<strong>ゆうひ君(大空祐飛)のディナーショー</strong>で彼女が出演しているのをCSで観ましたが、何故か<strong>勘違いお嬢キャラ</strong>に徹していた真咲ちゃん・・。あのキャラは石田先生が作り上げたものなのか、やはり<strong>何か所以のある</strong>キャラクターなのか・・？！</p>
            <p> 何かこれから面白い所が出てくるのでしょうか？　注目しています。 </p>
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
