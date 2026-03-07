<script setup>
definePageMeta({
  title: '「日本の唄」見ました',
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
            「日本の唄」見ました
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              (1998/12/07 up)
            </p>
            <p>いしちゃん(轟悠)始め雪組生２３名が出演したＢＳ２「日本の唄」見ました。</p>
            <p>演歌歌手の皆様の濃～い舞台がひたすら続き、予想通り<strong>一時間以上待って</strong>ようやくやってきた宝塚の出番(^_^;)。宝塚が特別出演する番組って、視聴率が上がるから、<strong>絶対出番は後の方になる</strong>のよね～。</p>
            <p>羽を持った白ドレスの女役さん達が華麗に舞った後、ズラッと出てくる黒エンビの男役達・・、そして中央にパーンと出て来たのは黒スパンのエンビのいしちゃん！！</p>
            <p><strong>「きゃ～、めっちゃタカラヅカっぽい～(*^｡^*)」</strong></p>
            <p>歌うは「すみれの花咲く頃」。しかも<strong>ボレロ調</strong>(「ザッツ・レビュー」風)だっ！！</p>
            <p>いしちゃん始め、皆様<strong>ひたすら大真面目</strong>に(^_^;)<strong>キザキザモード</strong>でショーは続き、<strong>最後のポーズもバッチリ</strong>！満場の拍手(^_^;)！！・・一曲であっという間に終わってしまいました(^_^;)。</p>
            <p>「では続いて◯◯さんに、９曲たっぷりと歌って頂きましょう～」・・おいおい(^_^;)。</p>
            <p>大阪城ホールに7000名集まったらしいお客様の中には、<strong>これ目当ての人も多かっただろう・・、お疲れさまです</strong>(^_^;)。</p>
            <p>バックダンサーでは<strong>毬丘智美、檀れい、夕貴真緒</strong>等が見えましたよ。でも、いしちゃん、薄目の化粧でしたが、<strong>見事に男前</strong>でしたわ～(*^｡^*)。だんちゃん(檀れい)の絵と文(「歌劇」誌)に書いてあるエピソードもごもっとも、ですねっ(^_^;)！！</p>
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
