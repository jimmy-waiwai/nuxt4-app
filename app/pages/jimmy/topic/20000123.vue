<script setup>
definePageMeta({
  title: '宝塚ビデオシアター「姿月あさと・ラストソングは時をこえて」',
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
            宝塚ビデオシアター「姿月あさと・ラストソングは時をこえて」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/01/23 up)
            </p>
            <p><strong>これはずんちゃん(姿月)ファンでなくても超お勧めです！！</strong>私が大好きだった若手の頃の貴重な公演の映像、しかも「ラストソング」というタイトル通り、とてもステキな歌の場面ばかりを編集していて、とても嬉しかったです。あのままビデオで欲しい位。是非、退団記念ビデオには、あれらの場面を盛り込んで下さる様、期待しています！</p>
            <p>中でも特に嬉しかった貴重映像は、</p>
            <p><strong>「心の旅路」新公</strong>(「100万分の1の愛～」っていう歌。初の大役です。包容力があって、とてもステキでした！)。</p>
            <p><strong>「ミリオン・ドリームズ」新公</strong>(「気になる～」のずんちゃんの欄に書いている通り、ずんちゃんの大躍進が始まったメモリアルな新公でした。ダークドールの場面の主題歌が放映されていましたが、キレイで、上手くて、客席でシビれましたよ（^_^;）。)</p>
            <p><strong>バウ「たけくらべ」</strong>(バウ初主演です。初々しかった（^_^;）。「誰も自分を分かってくれない～」っていう一幕の一番良い歌を放映してくれました。)</p>
            <p><strong>バウ「結末のかなた」</strong>(「失われたものは～」っていう主題歌です。一幕のスーツ姿でした。この明智君は、すばらしくかっこ良くって、今でもお気に入りの三本の指には入ります（^_^;）。ビデオになっていないのが惜しい！ぜひ見てみて下さいね。)</p>
            <p>でした。後も、バウホール等、一般には映像に残っていないものが中心で嬉しかったです。是非、ご覧下さいね。懐かしい関西ＴＶの「フラッシュ・タカラヅカ」からの映像をつなぎ合わせたものなどもあり、初々しいレポーターの<strong>水夏希</strong>と<strong>穂高ゆう</strong>も登場しましたよ（^_^;）。</p>
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
