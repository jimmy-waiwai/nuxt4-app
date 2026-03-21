<script setup>
definePageMeta({
  title: 'スターの小部屋/9月第二回',
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
            スターの小部屋/9月第二回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/09/20 up)
            </p>
            <p>まずは<strong>「黒い瞳/ル・ボレロ・ルージュ」より、まみちゃん(真琴つばさ)、りかちゃん(紫吹淳)、がいち(初風緑)</strong>のトーク。まだ公演の方は見てないのですが、<strong>良さそうだわ～、月組公演！！</strong>見るのが楽しみです（^_^;）。新花組メンバー愛華みれ、匠ひびき、伊織直加とそれぞれペアで使われていた時代があったこの三人、本当、<strong>「花組Ｂ組」</strong>みたいだよね～、なんて言いながら見てました（^_^;）。まみちゃん(真琴)も、何だかすっかり<strong>王子様みたい</strong>になっちゃって・・（^_^;）。</p>
            <p>続いて、<strong>花組「SPEAKEASY」新公より、瀬奈じゅん、水夏希、沢樹くるみ</strong>のトーク。瀬奈って、見た目が結構男らしくて、本人も大人っぽい男役を目指しているような事をよく誌上などで言っていたし、「グラフ」の文章もシニカルだし（^_^;）、もっと落ち着いた大人っぽい人なのかな・・、と思っていたのですが、<strong>何だかほわ～んとして、かわいらしい人ですね</strong>（^_^;）。あの新公の舞台にも、かわいらしい所が出てましたけれど（^_^;）。でも、話している内容は、しっかり考えているな～、と、思いました。見た目良いでしょ？ＪＩＭＭＹ花組の中では、かなりお気に入りの方なんです（^_^;）。</p>
            <p>次は<strong>レビュー記念日</strong>。始めのケロちゃん(汐美真帆)やかしげちゃん(貴城けい)達の場面が、遠くからの映像しかなくてがっかり（^_^;）。でも、公演ビデオにこのレビュー記念日も入るらしいですよ（^_^;）。</p>
            <p>次は<strong>「バウ・ボヤージュ」より湖月わたる、夢輝のあ、朝比奈慶</strong>のトーク。あの～、ずんちゃん(姿月あさと)と花ちゃん(花總まり)は？と思わないでもなかったのですが（^_^;）。まぁ、良いか（^_^;）。今回湖月は大活躍でしたが、<strong>歌の上手い夢輝や朝比奈くらいは、1曲くらいのソロがあっても良かったのにな～</strong>、と思います。又、文句言っちゃった（^_^;）。</p>
            <p>組替え情報、ないだろうな～、とは思ってましたが、やっぱりなかったですね（^_^;）。</p>
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
