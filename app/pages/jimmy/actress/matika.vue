<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'yuki',
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
            麻愛めぐる
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2002/06/30 up
            </p>
            <p>麻愛を初めて認識したのは、バウ<strong>「心中・恋の大和路」</strong>。若手中心のメンバー皆が好演で、ケロちゃん(汐美真帆)の八右衛門が良かった事を除いても、とても好きな公演だったのですが、そんな雪組若手軍団の中の一人、<strong>丁稚の三太君</strong>をコミカルに演じていたのが麻愛でした。</p>
            <p><strong>「面白いし、上手い子だな。」</strong>とそれ以来、雪組公演では注目している一人ですが、公演毎に確実に成長し、経験を詰み、活躍の場も増え、頼もしくなっていると思います。愛嬌のある可愛い顔をしていますが、<strong>「凱旋門」のビンダー</strong>、<strong>「殉情」の番頭</strong>役も、彼女らしい温かい包容力が見えてなかなか。今回の<strong>「追憶のバルセロナ」の酒場のおやじ</strong>(?)も、キレながら世話を焼く演技が上手くて拍手ものでした。</p>
            <p>成績も良いようで、新公長の学年の時には、<strong>代表で挨拶</strong>をしていましたね。これが、回ってくる渋い役の扮装を裏切る可愛い声の挨拶で、面白かったですよ。長の挨拶をする人って、芝居の貫録と挨拶の若々しさのギャップが面白い、って事が良くありますね。</p>
            <p>挨拶の内容も良かったですし、主演の子を「おとづき～！」とか、「えりた～ん！」と皆で呼んでいたのは、彼女の案かな？　とても好きでした。</p>
            <p>歌が得意なのか、ダンスが得意なのか、芝居が得意なのか？　どれでも活躍しているので良く分からないのですが、やはり芝居が好きなのかな？　<strong>とにかく、今後ますます雪組で活躍して欲しい</strong>男役さんです。</p>
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
