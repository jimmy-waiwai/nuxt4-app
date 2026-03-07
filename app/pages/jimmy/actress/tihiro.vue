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
            千紘 れいか
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              99/05/05 up
            </p>
            <p>初めは男役でしたが、阪急電鉄の正月モデルがとても可愛かったので、娘役に転向したのは無理ないと思いました。舞台では<strong>「ベイシティ・ブルース」</strong>で、娘役に転向したばかりのあっちゃん(千紘)が<strong>見事な男役声でのカゲソロ</strong>を聞かせてくれたのが(^_^;)、強烈な思い出として残っています。</p>
            <p><strong>バウ「サラン・愛」</strong>は、変な作品でしたが(^_^;)、初ヒロインのあっちゃんは、声がとてもキレイで、上手かったですね。後はやはり<strong>「エデンの東」のセルマ</strong>。キレイで色気や迫力もあり、白城あやかに重なるような持ち味を感じて大好きでした。</p>
            <p>このままがんばっていたら、絶対誰かの相手役になっていたと思うのですが、大柄なので、なかなか難しいですね。<strong>「黒い瞳」のエカテリーナ</strong>もすごーく良かったですし、前向きにちょっと自分を磨いて頂いて(^_^;)、是非<strong>将来は、りかちゃん(紫吹淳)との大人の魅力たっぷりの濃～いコンビを期待したい</strong>のですが、如何でしょう？　絶対良いと思いますよ！！　歌劇団もそのつもりでいてくれると嬉しいのですが。</p>
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
