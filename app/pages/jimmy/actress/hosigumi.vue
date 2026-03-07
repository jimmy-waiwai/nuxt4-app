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
            星　　組
          </h2>
          <div class="text-gray-800 text-base md:text-lg leading-8 [&>p]:mb-4">
            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/11/04 up
            </p>
            <p>2月大劇場「WEST SIDE STORY」で始動する新生星組。トップは<strong>稔幸</strong>、二番手は<strong>絵麻緒ゆう</strong>、トップ娘役は<strong>星奈優里</strong>。圧倒的に存在感のあった<strong>麻路さき</strong>が抜けて、ただでさえ予想のつかない状態の今、このメンバーで「ＷＳＳ」はないだろう？　ってな感じで、ちょっと前途多難な気はするのですが・・(^_^;)、話題作だから、観客は良く入るかも。<strong>本来なら、スタイル抜群で、大人のムード満点の、濃い～カップルですから(^_^;)、情熱的なラブロマンスが見たいですね～。それから素晴らしいダンサーの二人ですもの、ショーは外せないでしょう、どう考えても。ぶんちゃん(絵麻緒)</strong>はベルナルドにチャムガ(我が愛は山の彼方に)、バウ主演と来年は大役続きで挑戦の年となりそう。どんな成果を挙げられるか・・、注目したいですね。</p>
            <p>続いて<strong>彩輝直</strong>。年末にはニ度目のバウ主演も決まっていて、期待の高さが伺えます。最近ブレイクしている妖しい役以外で魅力を発揮できるか・・？　まだまだ不安です。<strong>音羽椋</strong>も個性の強いタイプで、もっと力をつけて彩輝と張り合ってくれると、面白くなると思います。</p>
            <p>続く若手の注目株は<strong>朝澄けい</strong>。キレイでそこそこ上手くて文句ないタイプですね(^_^;)。続く<strong>真飛聖</strong>もキレイで元気(^_^;)。<strong>椿火呂花</strong>もすごーくキレイで注目してます。この辺りの若手陣に華やかな人が増えてきたのが嬉しい。これからの星組を見る上でのお楽しみとなりそうです(^_^;)。娘役では<strong>羽純るい、秋園美緒</strong>が、かなり歌える実力派。それからやはり<strong>妃里梨江</strong>の美しさが目を引きます。<strong>美椰エリカ</strong>も良いですね。</p>
            <p>他では<strong>司祐輝</strong>が人気の脇役になってくれそうで一押し(^_^;)、<strong>是非二枚目やって欲しい！！</strong>　それから<strong>久城彬</strong>が美しいだけでなく、なかなか頼もしいですよ。<strong>大洋あゆ夢、にしき愛</strong>も良いですね。もちろん<strong>夏美よう</strong>も毎回楽しみにしています。<strong>朝宮真由</strong>もようやく華やかになってきて嬉しい(^_^;)。<strong>万里柚美、朋舞花</strong>のかっこ良さもウリですよね。後はなかなか実力のありそうな<strong>涼紫央</strong>、初舞台時に目についた<strong>真汐薪</strong>に注目しています。</p>
            <p :class="themeConfig.texttitle">
              (お気に入り度★★★<span class="text-gray-400">★★</span>)
            </p>

            <p
              class="text-right"
              :class="themeConfig.texttitle"
            >
              98/06/15 up
            </p>
            <p><strong>華やかで大人っぽくて、ちょっと妖しい</strong>(^_^;)星組の舞台。<strong>マリコさん(麻路さき)</strong>の歌がかなり苦しい事もあり、初心者にはお勧めしたくないけど、その<strong>濃さ</strong>が私は結構好きです。自然派がもてはやされている現在、星組はいつも変わらず<strong>宝塚っぽい舞台</strong>を見せてくれているような気がしませんか。</p>
            <p>それも三番手くらいの頃から、ずーっと星組には変わらずマリコさんが君臨しているからかも(^_^;)。大劇場向きの圧倒的な存在感は、他に類を見ません。相手役になったばかりの星奈優里も、大柄で動きが美しいので、次回の大劇場公演は、植田紳爾の歴史ロマンでもあり、久し振りにゴージャスで壮大な舞台が期待できそうです。</p>
            <p>そのマリコさんも次回公演で退団。稔幸、絵麻緒ゆうへと続きます。稔はスタイル抜群で動きが美しく、絵麻緒は学年の割には可愛らしい所が魅力。しかし、マリコさんの存在があまりにも大きかったので、「マリコさんのいない星組って？」という感じで、これからどうなるか想像がつきません。かなり皆が飛躍してくれないと、苦しくなるでしょうね。</p>
            <p>若手は一時壊滅状態でしたが、彩輝直、音羽椋の組替でいくらか華やかになってきました。続く朝澄けい、真飛聖も正統派で台頭してきているので、期待できそうです。</p>
            <p>若手娘役は<strong>羽純るい、秋園美緒、美椰エリカ</strong>と実力派揃い。その他<strong>妃里梨江</strong>が美人で、これからが期待できそうです。</p>
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
