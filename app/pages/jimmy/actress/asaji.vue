<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'hosi',
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
            麻路 さき
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/19 up
            </p>
            <p>何ともいえない包容力、すっきりとした立ち姿、どんな衣装も着こなしてしまう<strong>マリコさん(麻路さき)</strong>は、正に<strong>宝塚の男役をするために生まれてきた</strong>よう(^_^;)。</p>
            <p>「歌」が致命的に弱かったから、万人に愛されるタイプには成り得ませんでしたが、私はマリコさんの男役、大好きでした。</p>
            <p>結構下級生から活躍しているので、本当に沢山の舞台、役柄を見てきた気がします。</p>
            <p>印象に残る役は、<strong>「戦争と平和」のアナトリー、「恋人達の肖像」のヴィクトール、バウ「ハロー・ジョージ」</strong>・・太田作品が多いなぁ(^_^;)。</p>
            <p>あの存在感で、大芝居的な舞台に迫力が出るから、向いているのでしょうね。</p>
            <p>そして、何と言ってもベストは<strong>「ダルレークの恋」のラッチマン!! </strong>もうマリコさんにピッタリの、<strong>立ち役的カッコ良さに満ちあふれていました</strong>よね(^_^;)。</p>
            <p>長い手足を生かした、ダンスシーンもとってもステキ(^_^;)。</p>
            <p>そんなに難しいステップとかなくても、<strong>ぱっと決めたポーズが誰よりも美しく決まる</strong>のが、良いですよねー。</p>
            <p>特に、腰の位置がびっくりする程高い、<strong>ブラウス姿が最高</strong>ですね(^_^;)。<strong>「ナルシス・ノアール」のナルシス・ダンサーとか「うたかたの恋」の自殺シーンとか「パッション・ブルー」の夢魔とか</strong>・・(^_^;)。</p>
            <p />
            <p>マリコさんの退団は、私にとって、完全に<strong>一時代の終わり</strong>です。</p>
            <p>マリコさんまでは、宝塚を見始めた頃からスターだった、いわばイチロさんたちと同じ時代の人。</p>
            <p>愛華みれ、真琴つばさ、轟悠、稔幸以降は、もう初舞台から見ているし、そういう個人的理由を除いても、これからの5組時代の中心人物のような気がしますよね。</p>
            <p>何か、そういう<strong>歴史的流れ</strong>をも、マリコさんの退団からは感じさせられるんです。</p>
            <p>ＪＩＭＭＹは歌える人、声の通る人が好きなので、ここまで歌えないスターは、正直これっきりにして欲しいのですが(^_^;)、マリコさんだけは、その減点を補って余りある魅力がありました。</p>
            <p>新時代の男役の皆様も、<strong>マリコさん位に「男役」になりきって、バシッとカッコ良く見せる良さ</strong>を、忘れないで欲しいなぁ。</p>
            <p>と、そんな事を思わせる<strong>「カッコ良い男役像」を極めた人</strong>でしたね。</p>
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
