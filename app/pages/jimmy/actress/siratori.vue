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
            白鳥かすが
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              2003/12/06 up
            </p>
            <p>
              今、愛称を「おとめ」で調べて、初めて知りました。へぇ～、<strong>ちあきちゃん</strong>っていうんだ・・覚えとこ(^_^;)。<br>
              そう、今までは・・。もうこの生徒評を最後に封印しようかな(^_^;)・・<strong>プチ岡っち</strong>って、一人で呼んでいました。<br>
              きっかけは、確か「春ふたたび」を観ていて、<strong>岡っち(嶺恵斗)</strong>に良く似ている男役さんを発見！　<strong>似ている～、好きな顔だ～</strong>、と思って(^_^;)、以後そう呼んでいたんだと思います。
            </p><p>初認識はもっと早くて、バウ<strong>「血と砂」</strong>に最下級生で入っていたので、その時に名前は覚えていました。同じく最下の<strong>綾月せり</strong>と共に、チンピラ(借金取り？)の役をしていましたが、さすがに同期の中でも成績の良い二人だけあって、ちゃんと演っていましたよ。</p>
            <p>今は同期の男役で成績一番なんですね。その為か最近良い役がつくようになってきて、一番大きいのが<strong>「シニョール ドン・ファン」のフィリッポ</strong>。上手かったですが、可愛いかったですが・・<strong>本当にダサかった</strong>・・(死語^_^;)。役の通りで、似合っているといえば、良く似合っていたんですけれどね。</p>
            <p>
              そして、今期は<strong>CSのスカイ・フェアリーズ</strong>までやっちゃっているんですよね～。<br>
              TVで観ていても、正直・・まだまだ垢抜けていない感じはしますが、出ている事自体は結構嬉しい(^_^;)。
            </p>
            <p>
              今回<strong>「薔薇の封印」</strong>では、彩那音ちゃんと二人で、紫色の(・・昔花組公演でおさちゃん(春野寿美礼)達が着ていたような・・)<strong>ダルマの衣装で、銀橋渡り</strong>しています。<br>
              それも、<strong>良いんでしょうか、こんな役ついちゃって・・</strong>って感じですが(すまないm(__)m)、新旧スカイ・フェアリーズって事で、ついたんでしょうね。
            </p>
            <p>
              ロケットでは、<strong>振り向きざまにキザってウィンク</strong>しているのを偶然観てしまい、ビックリ。<br>
              結構がんばってます(^_^;)。<br>
              あれを見る限りでは、<strong>男っぽい役の方が似合いそう</strong>。
            </p>
            <p>
              とりあえずは、<strong>化粧がイマイチ</strong>だと思うんですよね～。<br>
              役がついているだけに、早めにもう少し改善しないと、観客に怒られそうで心配です(^_^;)。<br>
              でも、これからどんな風に成長していくのか、<strong>長～い目で、楽しみにしています！</strong>
            </p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★★<span class="text-gray-400">★</span>)
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
