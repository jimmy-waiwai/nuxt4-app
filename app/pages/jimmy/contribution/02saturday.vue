<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'contribution',
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
            宝塚バウホール公演「サタディナイト・ロマンス」
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p>
              「稔幸がこんなにステキな人だったとは！」多くの人がそう思ったのではないだろうか。「サタディナイト・ロマンス」は単なるコメディに終始しない、すばらしい作品だった。幕開きの後ろ姿からパッと振り返った時の稔のかっこ良さには驚きだ。ポスターで見た時よりも、舞台で見るほうがずっとスッキリしていて、長い足にスーツが良く似合っていた。しかもエディという役を、稔は初主役とは思えないほど余裕たっぷりに演じており、エディがサムとジュリアの結婚を見送るシーンでは、大いに客席の涙を誘っていた。何といっても役の心情をダイレクトに伝える豊かな表情がこの人の魅力だ。また苦手と思われていた歌もなかなか聞かせ、ダンスでは正に本領発揮、こんなに実力のある人だとは思わなかった。
            </p>
            <p>
              絵麻緒ゆうも舞台姿が美しく、安心して見ていられた。歌える人なのにソロがなかったのは残念。
            </p>
            <p>
              星奈優里はジュリアの役も良かったけれどフィナーレの赤いドレスでのダンスが、稔と共に特に心に残った。ヒロインも大人の役もできそう、今後が楽しみ。
            </p>
            <p>
              脇役では千秋慎が夫人役を大真面目に演じていたのが笑わせ、英真なおき、希波千愛のダンスが舞台を引き締めた。彼らを始め、上級生が多く出演していたのも、この作品の成功の大きな力になっていたのでは。
            </p>
            <p>
              こけら落とし公演を見たときは、三番手としての位置に定着した稔を見て、少々不安を感じたが、この作品を見て十分麻路さきに続く男役としてやっていけるだけの力を持っていると確信した。星組のスター不足を指摘される方もいたが、星組には稔以下絵麻緒、神田、湖月と続いておりけっして少なくはないと思う。後は各々がもっと力を付けて舞台をもり上げていってほしい。
            </p>
            <p>
              とにかく歌ありダンスあり、笑いあり涙ありの「サタディナイト・ロマンス」に大満足だった。まだ初日から２日目で少し席が余っているようだったが、満席になるのも時間の問題だろう。
            </p>
            <p />
            <p :class="themeConfig.texttitle">
              思い出の初掲載作品です(^_^;)。ここだけの話、一番前のセンターの席で、ぼーっとノルさん(稔幸)に見とれていた私に向かって、アンコールの幕が降りる瞬間、ノルさんが投げキッスをしてくれて(^_^;)、ファンの人たちにニラまれた経験があります(^_^;)。若かったから、許して(^_^;)。
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyContributionList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyContributionList />
    </div>
  </div>
</template>

<style scoped></style>
