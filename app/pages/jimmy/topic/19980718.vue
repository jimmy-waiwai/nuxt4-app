<script setup>
definePageMeta({
  title: 'スターの小部屋/7月第二週',
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
            スターの小部屋/7月第二週
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/07/18 up)
            </p>
            <p>まず、<strong>星奈優里と秋園美緒のトーク</strong>、変わった組み合わせだなぁ・・(それだけ（^_^;）?)。</p>
            <p>こうなると、<strong>東京公演時の新公メンバーのトーク</strong>は<strong>音羽椋、羽純るい</strong>の同期対談になるのではないかと、密かに期待を持ちました(<strong>司祐輝</strong>も入れてくれないかなぁ（^_^;）)。</p>
            <p>次に、<strong>姿月あさと</strong>と退団する<strong>希佳</strong>のトーク。同期トークって、何だか素顔が見えるようで、楽しいですよね。個人的にとっても嬉しい組み合わせでした。<strong>舞台や稽古場風景はずんちゃん(姿月あさと)のお姿に、ひたすらうっとり</strong>・・（^_^;）。希のお稽古着での、<strong>ゴールデンディアの軽やかな動き</strong>にも釘付けでした。</p>
            <p>そして<strong>「パリ祭」から伊織直加のトーク</strong>。いやー、なおちゃん(伊織直加)、<strong>華やかになってきましたよねー</strong>（^_^;）。パリ祭といい、バウ主演といい、大劇場の役も良かったし、5組制になって目の前が開けてきた人の、1人じゃないでしょうか。トークを聞いていても、やる気が感じられて、嬉しいです。<strong>がんばってねー（^_^;）って、思いました。</strong></p>
            <p><strong>「パリ祭」</strong>の方も、チラッと見られましたが、<strong>良さそう</strong>（^_^;）。<strong>メンバーもおいしいし</strong>（^_^;）。新生花組公演では、がラッと雰囲気を変えて、<strong>こんなオーソドックスなショーも見たいなぁ</strong>、とか、思ってしまいました（^_^;）。←気が早いって・・。</p>
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
