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
            大鳥 れい
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>初舞台の写真を見た時点で美人だな～、と思っていましたが、あるテレビ番組で、初舞台生のインタビュー時に<strong>「大阪人パワーでがんばります！！」</strong>みたいな事を言っていて（^_^;）、意外とパワフルで面白そうだと思ったのが第一印象。</p>
            <p>新公のヒロインは全部見逃しているんです。<strong>バウ「ブルー・スワン」</strong>や<strong>「君に恋してラビリンス」</strong>は、評判は良かったけど、見た目が雑なのが目について、私的にはイマイチ。</p>
            <p><strong>「ヴェロニック」のアガート</strong>は良かったです。華やかで、歌も良くて、とにかく目立ってました。正直、無理にヒロインに振らず、こういう大人っぽい女役の路線でいった方が良いかも、と思ったものです。</p>
            <p>そんな中でのトップ就任でしたが、<strong>「夜明けの序曲」の貞</strong>は上手かったですね。芝居の面では、すでにタモさん(愛華みれ)を引っ張っているようにも見えました。そういう意味では、花組にとって良い相手役なのかもしれませんね。</p>
            <p>あとはどれだけ美しく出られるか、ですね。特にこれからも<strong>ショーに人気の出そうな花組</strong>ですから、トップ娘役としては、ショーでの魅力開花を期待したいです。<strong>元が美人だけに、もっとキレイに出られると思う</strong>のですが・・。これからに期待しています。</p>
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
