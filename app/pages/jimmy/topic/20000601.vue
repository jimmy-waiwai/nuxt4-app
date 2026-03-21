<script setup>
definePageMeta({
  title: '新しい専科制度の導入と組替えについて',
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
            新しい専科制度の導入と組替えについて
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (2000/06/01 up)
            </p>
            <p>発表されましたね～。ずんちゃん(姿月あさと)退団発表の時点で、組替えはあるという話でしたが、次トップがたかちゃん(和央ようか)に決定して、もう落ち着いたものだと思っていました（^_^;）。まさか、こんな大変革を計画していたとは・・。</p>
            <p>移動後の体制を、軽～く表にしてみました。</p>
            <table>
              <tbody>
                <tr>
                  <td>組長</td>
                  <td>副組長</td>
                  <td>トップ</td>
                  <td>以下男役</td>
                  <td>組替え</td>
                  <td>専科へ</td>
                </tr>
                <tr>
                  <td>花</td>
                  <td>夏美よう</td>
                  <td>梨花ますみ</td>
                  <td>愛華みれ</td>
                  <td>
                    楓沙樹<br>
                    春野寿美礼<br>
                    瀬奈じゅん<br>
                    彩吹真央
                  </td>
                  <td>
                    高翔みず希<br>
                    達つかさ
                  </td>
                  <td>
                    磯野千尋<br>
                    一原けい<br>
                    匠ひびき<br>
                    伊織直加
                  </td>
                </tr>
                <tr>
                  <td>月</td>
                  <td>立ともみ</td>
                  <td>夏河ゆら</td>
                  <td>真琴つばさ</td>
                  <td>
                    汐美真帆<br>
                    大空祐飛<br>
                    霧矢大夢<br>
                    大和悠河
                  </td>
                  <td>美々杏里</td>
                  <td>
                    紫吹淳<br>
                    初風緑
                  </td>
                </tr>
                <tr>
                  <td>雪</td>
                  <td>飛鳥裕</td>
                  <td>灯奈美</td>
                  <td>轟悠</td>
                  <td>
                    成瀬こうき<br>
                    朝海ひかる<br>
                    貴城けい<br>
                    未来優希<br>
                    立樹遥
                  </td>
                  <td>
                    香寿たつき<br>
                    汐風幸
                  </td>
                </tr>
                <tr>
                  <td>星</td>
                  <td>英真なおき</td>
                  <td>万里柚美</td>
                  <td>稔幸</td>
                  <td>
                    朝澄けい<br>
                    真飛聖
                  </td>
                  <td>
                    毬丘智美<br>
                    安蘭けい<br>
                    夢輝のあ<br>
                    鳴海じゅん
                  </td>
                  <td>
                    絵麻緒ゆう<br>
                    彩輝直
                  </td>
                </tr>
                <tr>
                  <td>宙</td>
                  <td>大峯真友</td>
                  <td>出雲彩</td>
                  <td>和央ようか</td>
                  <td>久遠麻耶</td>
                  <td>
                    水夏希<br>
                    朝宮真由
                  </td>
                  <td>
                    湖月わたる<br>
                    樹里咲穂
                  </td>
                </tr>
              </tbody>
            </table>
            <p>特に専科入りする二、三番手の人には沢山のファンがいることを思うと、<strong>よく強引に決定できたな</strong>、と思いますね。でも、個人的には、悪くないな～、と思うんですよ。そりゃ、大変な事ですし、当事者の熱烈ファンではないからだ、と言われれば、確かにそうだろうと思うのですが（^_^;）。</p>
            <p>詳しい事は分からないにしても、ずっと昔に発表されたまま凍結していた<strong>フリーレース</strong>の話が実現するという事だと思います。結局、今回のような<strong>専科として別にする</strong>という方法でしか、一線に並べて競わせる・・というのは不可能だったという事でしょう。私は、このまま路線に乗ってさえいれば、<strong>待ったもの勝ち</strong>という現状は良くないと思うし、今までの体制にとらわれず、活躍できる人が活躍して、トップになる、という考えは、良いのではないかと思いました。</p>
            <p>問題は、<strong>誰が決めるのか？どうやって決めるのか？納得いく人が選ばれるのか？</strong>・・ですね。これからの様子を見てみないと分からないし、全ての人を納得させられる結果には絶対ならないと思いますが、<strong>どうにもならない現状よりは良いと思うな～</strong>、というのが、正直な所です。</p>
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
