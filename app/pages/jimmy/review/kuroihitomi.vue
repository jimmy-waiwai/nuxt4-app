<script setup>
definePageMeta({
  layout: 'jimmy',
  team: 'moon',
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
            黒い瞳／ル・ボレロ・ルージュ
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              月組大劇場公演・９／１８～１０／２６
            </p>
            <p>
              月組大劇場観てきました。事前に絶賛の声を聞かなかったせいか(^_^;)、あまり期待していなかったのですが、良かったですよ(^_^;)。十分満足でした(^_^;)。
            </p>
            <p><strong>「黒い瞳」</strong></p>
            <p>
              私は今回はショーよりもこちらの方が気に入りました(^_^;)。面白かったです。<strong>ニコライ(真琴つばさ)とマーシャ(風花舞)のからみ</strong>なんて、<strong>すごーく宝塚っぽくて</strong>、良い感じです(^_^;)。さらに<strong>馬車の場面</strong>等に代表される、<strong>ニコライとプガチョフ(紫吹淳)の男同士の火花散る問答</strong>に、ぐっと来ました(^_^;)。
            </p>
            <p>
              注目の<strong>謝珠栄先生の演出</strong>では、<strong>体を使った動きで何かを表現する</strong>所が多くて、さすが振り付けの先生だな、と感心しました。目新しかったです。<strong>勇気、愛、祈りのトリオを狂言回し的に登場させる所等も含めてちょっと太田先生の世界を彷佛させますね</strong>(^_^;)。良かったと思います。又、是非演出して頂きたいです。
            </p>
            <p><strong>「ル・ボレロ・ルージュ」</strong></p>
            <p>
              予想通りの、いや、予想以上の<strong>大人っぽいシックなショー</strong>でしたね。幕開きから刻まれる<strong>ボレロのリズム！！</strong>&emsp;弱いです、これに(^_^;)。そんな中、まみさん(真琴)、ゆうこちゃん(風花)、りかちゃん(紫吹)の大人っぽいトリオに踊って頂けるだけで、<strong>十分この作品の成果は達成されたようなもの</strong>だと思いますが(^_^;)、大勢出てきてわいわい騒ぐ様な、<strong>盛り上がる場面があまりなかった</strong>のがちょっと物足りないかな。<strong>全体的に暗い雰囲気のまま、静かに終わってしまった</strong>のが残念でしたね。
            </p>
            <p>&emsp;</p>
            <p>
              <strong>まみさん</strong>は、またまたまた！！&emsp;<strong>純白</strong>の役で(^_^;)、<strong>キレイでした～。本当にすっきりと美しくなりましたよね～</strong>。見とれてしまいます(^_^;)。もっと大人っぽいニヒルな役が見たいのですが(^_^;)、こう続くと、純白の二枚目系がすっかり<strong>持ち味</strong>になってしまいそうですよね(^_^;)。ショーでもキザにアピールする場面や悪魔っぽい場面などありましたが、ひたすらキレイで、<strong>屈折した部分がなくなってきたな～</strong>、と感じました。
            </p>
            <p>
              ゆうこちゃんは、役柄自体では最後はもっと大人っぽい役柄で見たかったのですが、<strong>純粋なヒロインも良くお似合いで</strong>(^_^;)、期待通りに良く踊ってくれていて、<strong>動きがキレイ</strong>で、こちらもひたすら見とれてしまいました(^_^;)。ショーでは持ち前のかっこ良い所を存分に見せてくれていて、<strong>レディ・ブルースなんて、ちょっと普通の娘役さんには真似できない魅力がありましたね。</strong>
            </p>
            <p>
              <strong>りかちゃんには今回驚かされました。</strong>あのプガチョフです！！&emsp;始め浮浪者の格好で出てきた時には<strong>「ニ番手スターがあんな姿で出てくるか～？！」</strong>と、かなり面喰らったのですが、汗のにおいがしてきそうな(^_^;)、荒々しい男らしさ、<strong>抜群の存在感に圧倒されました。</strong>宝塚のいわゆる二枚目像からはあまりにもかけ離れているのが気にはなりますが、<strong>私はプガチョフ、すごーく良かったと思います。</strong>今までのりかちゃんの芝居の中では、一番感心しました(^_^;)。
            </p>
            <p>
              今の所、月組ではこの三人の力が圧倒的ですね。<strong>作品の構成の為もありますが、殆どこの三人で公演が成り立っているような印象</strong>を受けました。
            </p>
            <p>&emsp;</p>
            <p>
              他ではエカテリーナ二世の<strong>千紘れいか</strong>を楽しみにしていたのですが、期待通り、とても立派で美しかったです。<strong>初風緑</strong>も歌が良いですね。<strong>樹里咲穂、西條三恵</strong>のコンビも上手かったです。
            </p>
            <p>
              あっ、忘れてはなりません、<strong>未沙のえる！！</strong>&emsp;まやさん(未沙)らしい良い役で、<strong>台詞の間の良さ</strong>は抜群です(^_^;)。
            </p>
            <p>
              若手では、<strong>成瀬こうき、大空祐飛、霧矢大夢</strong>等良い人たちは沢山いますが、やはり目立つのは<strong>大和悠河</strong>。華やかな容姿は抜群に目立ちますが、それほど急いで抜擢しなければならないほどの<strong>輝き</strong>はまだないぞ、と、<strong>応援している私でも</strong>思います(^_^;)。良いトップスターになって欲しいと思っているだけに、大切に育てて頂きたいですね。
            </p>
            <p :class="themeConfig.texttitle">
              (満足度&emsp;★★★★<span class="text-gray-400">★</span>)
            </p>
          </div>
        </div>
      </div>
      <div class="w-80 flex-none pt-8 pb-16 hidden lg:block">
        <JimmyReviewList />
      </div>
    </div>
    <div class="w-full flex-none pt-8 pb-16 lg:hidden pl-8 pr-8">
      <JimmyReviewList />
    </div>
    
  </div>
</template>

<style scoped></style>
