<script setup>
definePageMeta({
  title: 'スターの小部屋/10月第1回',
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
            スターの小部屋/10月第1回
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/10/13 up)
            </p>
            <p>まずは<strong>「黒い瞳/ル・ボレロ・ルージュ」よりゆうこちゃん(風花舞)とじゅりさん(樹里咲穂)のトーク</strong>。嬉しい組み合わせだなぁ（^_^;）。同期とあって、なかなかおいしい話満載でした（^_^;）。ゆうこちゃんが言っていたように、<strong>男役での当り役をこれからいくつもいくつも出して欲しいですね</strong>、じゅりさん！！</p>
            <p>次は一人芝居<strong>「The Fiction」よりいしちゃん(轟悠)のトーク</strong>。前代未聞の一人芝居に取り組む、いしちゃんの<strong>真摯な姿勢</strong>が伺えます。舞台、お稽古風景もたっぷり見せてくれて、嬉しかった（^_^;）。</p>
            <p>次は<strong>東京「SPEAKEASY/スナイパー」の千秋楽風景とほさっちゃん(千ほさち)のトーク</strong>。毎度、貴重な映像をありがとうございます、WOWOW様（^_^;）。ほさっちゃんも結構本音っぽく語ってくれて、面白かったです。<strong>大変だったとは思いますが、もっとがんばって、良い女役を目指して欲しかった・・。本当に残念です。</strong>もう二人とも退団しちゃっているんですね、信じられない・・。</p>
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
