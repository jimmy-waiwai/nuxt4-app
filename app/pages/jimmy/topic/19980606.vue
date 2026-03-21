<script setup>
definePageMeta({
  title: 'スターの小部屋／６月第１回',
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
            スターの小部屋／６月第１回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/06/06 up)
            </p>
            <p><strong>詩乃優花</strong>と<strong>千ほさち</strong>のトーク。前回みきちゃん(真矢みき)たちのトークで、<strong>「娘役は変わったよねー」</strong>というお言葉がありましたが、その<strong>先頭を走る</strong>ほさっちゃん。キレイだし、そのハジケ方も結構好きだけど、そろそろ上手くなってくれないと、<strong>面白さだけで通すのはそろそろ限界です</strong>よ。←トーク内容からハズレてますね・・。</p>
            <p>さて、今回の目玉は何と言っても<strong>タータン(香寿たつき)のブリブリ白のスカート姿</strong>でしょう（^_^;）。<strong>その気合には涙</strong>です（^_^;）。タータンがスカーレットを演ると聞いた時には、「又、話題先行か・・」とかなり冷め冷めだったのですが、本人も「話の種に(だったっけ？)見に来て下さい」みたいな言い方をしていて、なかなか楽しそうにお稽古されている様で、好感が持てました（^_^;）。いしちゃん(轟悠)のバトラーは確実に良いだろうし、ちょっと興味が湧いてきましたね。と言っても、<strong>ぐんちゃん(月影瞳)がスカーレットでも良いじゃないかー</strong>とは今でも思いますが。負けずにがんばってね、ぐんちゃん。応援してます。</p>
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
